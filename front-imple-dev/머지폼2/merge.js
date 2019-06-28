class FormComponent {
  constructor() {

  }
  rmAttr(target, attr) {
    var targetElm = document.querySelector(target);
    targetElm.removeAttribute(attr);
    return;
  }
  getElm(attr) {
    const elmList = Array.prototype.slice.call(document.querySelectorAll(attr), 0)
    if (elmList.length === 1) {
      return elmList[0]
    } else {
      return elmList
    }
  }

  elt(name, attributes) {
    var node = document.createElement(name);
    if (attributes && typeof attributes !== "string") {
      for (var attr in attributes) {
        if (attributes.hasOwnProperty(attr)) {
          node.setAttribute(attr, attributes[attr]);
        }
      }
    }
    for (var i = 2; i < arguments.length; i++) {
      var child = arguments[i];
      if (typeof child == "string") {
        child = document.createTextNode(child);
      }
      node.appendChild(child);
    }
    return node;
  }
  
   getAttr(elm, attr) {
    return elm.getAttribute(attr)
  }

   rmAttr(elm, attr) {
    return elm.removeAttribute(attr)
  }

   setAttr(elm, attr) {
    const [at, val] = attr;
    return elm.setAttribute(at, val)
  }

  
   addClass(elm,action){
    return elm.classList.add(action)
  }

  getCloneNode(elm) {
    return elm.cloneNode(true);
  }

  nullCheck(val) {
    if (typeof val == "string") val = val.trim();
    return (val != "undefined" && (val != null && val.length > 0)) ? true : false;
  }

  equal(dist, dest) {
    return (dist === dest) ? true : false;
  }

  doArrayClassControl(arr, action, className, all) {
    arr.forEach((elmName, idx) => {
      let elements = document.querySelectorAll(`${elmName}`);
      for (let i = 0; i < elements.length; i++) {
        elements[i].classList[`${action}`](className)
      }
    })
    return
  }

  rmElement(target) {
    var targetElm = document.querySelector(target); //제거하고자 하는 엘리먼트
    targetElm.parentNode.removeChild(targetElm);
  }
  setSelectBoxSelected(selecbox) {
    let opts = selecbox.options;
    for (let i = 0; i < opts.length; i++) {
      opts[i].removeAttribute('selected');
    }
    opts[selecbox.selectedIndex].setAttribute('selected', true);
  }

  getExistElmInForm(formAttr) { // NOTE: 이건됬음.
    const form = document.querySelector(formAttr);
    const checkArr = ['checkbox', 'radio'];
    const valueArr = ['text', 'search'];
    const elmArr = [];
    const formChildren = Array.from(form.elements);
    const formId = form.id;

    function setAttr(target) {
      return target.setAttribute('data-merge-target-form', formId)
    }

    formChildren.map(childList => {
      const childNodeName = childList.nodeName;
      const formObj = {
        setAttrPush: function (boolz) {
          if (boolz) {
            setAttr(childList);
            elmArr.push(childList);
          }
        },
        setAttr: function (bool) {
          if (bool) setAttr(childList);
        }
      }

      if (this.equal(childNodeName, "INPUT")) {
        formObj.setAttrPush(checkArr.includes(childList.type) && childList.checked);
        formObj.setAttrPush(valueArr.includes(childList.type) && this.nullCheck(childList.value));

        formObj.setAttr(childList.hasAttribute('hidden') && valueArr.includes(childList.type));

      } else if (this.equal(childNodeName, "SELECT")) {
        this.setSelectBoxSelected(childList);
        formObj.setAttrPush(1)
        // setAttr(childList);
        // elmArr.push(childList);

      } else if (this.equal(childNodeName, "BUTTON")) {
        formObj.setAttr(1)
        // setAttr(childList);
      }
    })
    return (this.nullCheck(elmArr)) ? elmArr : null;
  }
}




class FormConrtol extends FormComponent {
  constructor() {
    super();
    this.mergeIdx = 1;

  }

  setPageNation(config) {

    if (config.ajax) {

    } else {

      const pageForm = document.getElementById(config.formId);
      const tempElm = this.elt("div", {
        id: 'tempElm'
      });
      const hiddenInput = this.elt("input", {
        type: "text",
        name: "pageHiddenInput",
        value: config.curPage,
        hidden: true
      })
      // 전송버튼 만들어서 전송
      let submitBtn = this.elt("button", {
        type: 'submit',
        hidden: true
      });
      pageForm.appendChild(submitBtn);
      pageForm.setAttribute('method', config.method);
      pageForm.after(tempElm);
      pageForm.appendChild(hiddenInput);


      // paging button 생성
      if (config.curPage > config.endPage) {
        let prevBtn = this.elt("button", {
          type: "button",
          class: (config.prevArrowClass) ? config.nextArrowClass : ''
        }, "<");
        prevBtn.addEventListener('click', function (e) {
          let clickBtn = this;

          clickBtn.setAttribute('value', config.startPage - 1);
          setForm(clickBtn); // click setting
        })
        tempElm.prepend(prevBtn);
      }

      for (let i = config.startPage; i < config.startPage + config.endPage; i++) {
        let postBtnElm = this.elt("button", {
          type: "button",
          class: (config.btnClass) ? config.btnClass : ''
        }, String(i));

        if (i === config.curPage) postBtnElm.classList.add('on'); // 현재 페이지 클래스 add on 


        postBtnElm.addEventListener('click', function (e) {
          let clickBtn = this;
          clickBtn.setAttribute('value', this.textContent); // click setting
          setForm(clickBtn)
        })
        tempElm.appendChild(postBtnElm);
      }

      if (config.curPageSet !== config.totalPageSet) {
        let nextBtn = this.elt("button", {
          type: "button",
          class: (config.nextArrowClass) ? config.nextArrowClass : ''
        }, ">");
        nextBtn.addEventListener('click', function (e) {
          let clickBtn = this;
          clickBtn.setAttribute('value', config.endPage + 1);
          setForm(clickBtn); // click setting
        })
        tempElm.append(nextBtn);
      }

      // if(config.pageSet !== config.totalPageSet && )

      // 페이지네이션 안에 버튼 넣기.
      let setForm = (clickButton) => {
        console.log('set');


        hiddenInput.setAttribute('value', clickButton.getAttribute('value'));
        pageForm.setAttribute('action', `${config.action}/${clickButton.getAttribute('value')}`);

        this.getElm(`#${tempElm.id} button`).forEach(list => list.removeAttribute('value')); // init

        if (this.mergeIdx) { //안에 초기화하고  // 머지폼
          let includeForm = config.includesForm;
          let getIncludeForms = (this.nullCheck(includeForm)) ? includeForm : 0;
          if (getIncludeForms.length) { // exist includesForm.

            // 페이지네이션 폼 초기화 후 클릭한 버튼 넣어주기
            let crtHiddenInput = this.elt('input', {
              type: "text",
              value: clickButton.textContent,
              name: "pageHiddenInput",
              hidden: true
            });
            pageForm.innerHTML = '';
            pageForm.appendChild(crtHiddenInput);

            // 인클루드된 폼들 추려서 어팬드
            getIncludeForms.map(formList => {
              if (this.nullCheck(this.getExistElmInForm(formList))) {
                this.getExistElmInForm(formList).forEach(elmList => {
                  let tempElm = this.getCloneNode(elmList);
                  tempElm.setAttribute('hidden', true);
                  pageForm.appendChild(tempElm);
                })
              }
            })
          }
        }
        submitBtn.click();
      }

      pageForm.addEventListener('submit', function (e) {
        // e.preventDefault();
        let defaultWasPrevented = e.defaultPrevented;
        if (!defaultWasPrevented) { //  막혀있지 않으면.

        }
      })
    }
  }


  include(config) {
    this.includesForm = config;
  }

  add(...config) {
    this.config = config;
    const main = this;

    for (let i = 0; i < config.length; i++) {
      
      const formInfo = config[i];
      const pageForm = document.getElementById(formInfo.formId);
      const tempElm = this.elt("div", {id: 'tempElm'});
      const hiddenInput = this.elt("input", {
        type: "text",
        name: "pageHiddenInput",
        value: formInfo.page,
        // hidden: true
      })
      const btnClass = formInfo.btnClass ;
      const submitBtn = this.elt("button", {
        type: 'submit',
        // hidden: true
      });
      const prevArrowClass = formInfo.prevArrowClass;
      const nextArrowClass = formInfo.nextArrowClass;

      pageForm.appendChild(submitBtn);
      pageForm.setAttribute('method', formInfo.method);
      pageForm.after(tempElm);
      pageForm.appendChild(hiddenInput);

      // let commonParameter = [main,formInfo,hiddenInput,pageForm,submitBtn];
      let commonParameter = {
        main:main,formInfo:formInfo,hiddenInput:hiddenInput,pageForm:pageForm,submitBtn:submitBtn
      }
 
      // paging button 생성
      if (formInfo.page > formInfo.endPage) {
        let prevBtn = pageBtnElt(main,formInfo,prevArrowClass && prevArrowClass,'<')
        prevBtn.addEventListener('click', setBtnClickEvent(formInfo.startPage - 1,commonParameter))
        tempElm.prepend(prevBtn);
      }

      for (let j = formInfo.startPage; j < formInfo.startPage + formInfo.endPage; j++) {
        let postBtnElm  = pageBtnElt(main,formInfo,btnClass && btnClass,String(j))
        if (j === formInfo.page) main.addClass(postBtnElm,'on'); // 현재 페이지 클래스 add on 
        postBtnElm.addEventListener('click', setBtnClickEvent(postBtnElm.textContent, commonParameter))
        tempElm.append(postBtnElm);
      }


      if (formInfo.pageSet !== formInfo.totalPageSet) {
        let nextBtn = pageBtnElt(main,formInfo,nextArrowClass && nextArrowClass,'>')
        nextBtn.addEventListener('click', setBtnClickEvent(formInfo.endPage + 1,commonParameter))
        tempElm.append(nextBtn);
      }
      pageForm.addEventListener('submit', submitPageForm);



    }
    // function
    function submitPageForm(e) {
      e.preventDefault();
      let defaultWasPrevented = e.defaultPrevented;
      if (!defaultWasPrevented) { //  막혀있지 않으면.
      }
    }

    

    function pageBtnElt(main,config,condi,text){
      return main.elt("button",{
        type:"button",
        class: condi,
        [`data-form-name`]:config.formId
      },text)
    }

    // 클릭시 페이지네이션 안에 히든 벨류 바꾸기 넣기.
    function setForm(clickButton, common) {
      main.setAttr(common.hiddenInput, ['value', main.getAttr(clickButton, 'value')]);
      main.setAttr(common.pageForm, ['action', `${common.formInfo.action}/${main.getAttr(clickButton,'value')}`]);
      main.getElm(`#${tempElm.id} button`).forEach(list => main.rmAttr(list, 'value')); // init
      getInclufrsFormData(main.includesForm,clickButton,common.pageForm)
      common.submitBtn.click();
    }

    function getInclufrsFormData(includesForm,clickButton,pageForm) {
      if (main.mergeIdx) { //안에 초기화하고  // 머지폼
        let getIncludeForms = (main.nullCheck(includesForm)) ? includesForm : 0;
        if (getIncludeForms.length) { // exist includesForm.
          let crtHiddenInput = main.elt('input', {
            type: "text",
            value: clickButton.textContent,
            name: "pageHiddenInput",
            [`data-form-name`]:clickButton.getAttribute('data-form-name')
            // hidden: true
          });
          pageForm.innerHTML = '';// 페이지네이션 폼 초기화 후 클릭한 버튼 넣어주기
          pageForm.appendChild(crtHiddenInput);

          // 인클루드된 폼들 추려서 어팬드
          getIncludeForms.map(formList => {
            if (main.nullCheck(main.getExistElmInForm(formList))) {
              main.getExistElmInForm(formList).forEach(elmList => {
                let tempElm = main.getCloneNode(elmList);
                // setAttr(tempElm, ['hidden', true])
                pageForm.appendChild(tempElm);
              })
            }
          })
        }
      }
    }
    function setBtnClickEvent(data,commonParameter) {
      const setNum = data;
      const commonInfo = commonParameter;
      return function (e) {
        let clickBtn = this;
        console.log(commonInfo);
        clickBtn.setAttribute('value', setNum);
        setForm(clickBtn,commonInfo); // click setting
      }
    }


  }

  mergeForm() {

  }
}





/**
 * 머지할 폼에 아래처럼 써주고
 * data-merge-form="true"
 * 페이지네이션을 사용할거면
 * <form action="" id="pageForm" data-merge-form="true"></form>
 * 이걸 추가해주면된다.
 */
class FormModule extends FormComponent {
  constructor() {
    super();
    this.mergeIdx = 1;
  }

  /**
   * 
   * @param {*} config 
   */
  setPageNation(config) {

    if (config.ajax) {

    } else {

      const pageForm = document.getElementById(config.formId);
      const tempElm = this.elt("div", {
        id: 'tempElm'
      });
      const hiddenInput = this.elt("input", {
        type: "text",
        name: "pageHiddenInput",
        value: config.curPage,
        hidden: true
      })
      // 전송버튼 만들어서 전송
      let submitBtn = this.elt("button", {
        type: 'submit',
        hidden: true
      });
      pageForm.appendChild(submitBtn);
      pageForm.setAttribute('method', config.method);
      pageForm.after(tempElm);
      pageForm.appendChild(hiddenInput);


      // paging button 생성
      if (config.curPage > config.endPage) {
        let prevBtn = this.elt("button", {
          type: "button",
          class: (config.prevArrowClass) ? config.nextArrowClass : ''
        }, "<");
        prevBtn.addEventListener('click', function (e) {
          let clickBtn = this;

          clickBtn.setAttribute('value', config.startPage - 1);
          setForm(clickBtn); // click setting
        })
        tempElm.prepend(prevBtn);
      }

      for (let i = config.startPage; i < config.startPage + config.endPage; i++) {
        let postBtnElm = this.elt("button", {
          type: "button",
          class: (config.btnClass) ? config.btnClass : ''
        }, String(i));

        if (i === config.curPage) postBtnElm.classList.add('on'); // 현재 페이지 클래스 add on 


        postBtnElm.addEventListener('click', function (e) {
          let clickBtn = this;
          clickBtn.setAttribute('value', this.textContent); // click setting
          setForm(clickBtn)
        })
        tempElm.appendChild(postBtnElm);
      }

      if (config.curPageSet !== config.totalPageSet) {
        let nextBtn = this.elt("button", {
          type: "button",
          class: (config.nextArrowClass) ? config.nextArrowClass : ''
        }, ">");
        nextBtn.addEventListener('click', function (e) {
          let clickBtn = this;
          clickBtn.setAttribute('value', config.endPage + 1);
          setForm(clickBtn); // click setting
        })
        tempElm.append(nextBtn);
      }

      // if(config.pageSet !== config.totalPageSet && )

      // 페이지네이션 안에 버튼 넣기.
      let setForm = (clickButton) => {
        console.log('set');


        hiddenInput.setAttribute('value', clickButton.getAttribute('value'));
        pageForm.setAttribute('action', `${config.action}/${clickButton.getAttribute('value')}`);

        this.getElm(`#${tempElm.id} button`).forEach(list => list.removeAttribute('value')); // init

        if (this.mergeIdx) { //안에 초기화하고  // 머지폼
          let includeForm = config.includesForm;
          let getIncludeForms = (this.nullCheck(includeForm)) ? includeForm : 0;
          if (getIncludeForms.length) { // exist includesForm.

            // 페이지네이션 폼 초기화 후 클릭한 버튼 넣어주기
            let crtHiddenInput = this.elt('input', {
              type: "text",
              value: clickButton.textContent,
              name: "pageHiddenInput",
              hidden: true
            });
            pageForm.innerHTML = '';
            pageForm.appendChild(crtHiddenInput);

            // 인클루드된 폼들 추려서 어팬드
            getIncludeForms.map(formList => {
              if (this.nullCheck(this.getExistElmInForm(formList))) {
                this.getExistElmInForm(formList).forEach(elmList => {
                  let tempElm = this.getCloneNode(elmList);
                  tempElm.setAttribute('hidden', true);
                  pageForm.appendChild(tempElm);
                })
              }
            })
          }
        }
        submitBtn.click();
      }

      pageForm.addEventListener('submit', function (e) {
        // e.preventDefault();
        let defaultWasPrevented = e.defaultPrevented;
        if (!defaultWasPrevented) { //  막혀있지 않으면.

        }
      })
    }
  }

  /**
   * 
   * @param {*} config 
   * data-merge-form="true"
   */
  mergeForm(config) {
    this.mergeIdx = 0
    let allForm = Array.from(document.querySelectorAll('[data-merge-form="true"]'));


    // 머지폼 할때 어차피 data-merge-form으로 잡기때문에 머지폼 안할껀 그냥 폼에다가 넣지 않으면 됨.
    let main = this;

    // create mergeform
    let mergeForm = this.elt("form", {
      id: 'mergeForm',
      method: config.method,
      action: config.action,
      // hidden:true
    });
    document.body.appendChild(mergeForm); // form 생성

    // temp event prevent
    mergeForm.addEventListener('submit', function (e) {
      // e.preventDefault();
    })

    // all forms data push for mergeForm
    function getAllFormDataPush() {
      let mergeFormBtn = main.elt("input", {
        type: "submit",
        name: "mergeFormBtn"
      })
      mergeForm.innerHTML = '';
      allForm.map(mergeList => {
          let getElmListFromForm = main.getExistElmInForm(`#${mergeList.id}`);
          if (getElmListFromForm) {
            getElmListFromForm.map(elmList => {
              if (elmList.name == 'pageHiddenInput') mergeForm.action = `${config.action}/${elmList.getAttribute('value')}`

              let tempElm = main.getCloneNode(elmList)
              tempElm.setAttribute('hidden', true);
              mergeForm.appendChild(tempElm)
            })
          }
        }) /
        // 각폼들 전송시 머지폼 전송
        mergeForm.appendChild(mergeFormBtn);
      mergeFormBtn.click();
    }

    // all form change event for checkbox radio selectbox elements
    var checkChangeElementInForm = (formId) => {
      const form = document.querySelector(formId);
      const changeEventCheckArr = ['checkbox', 'radio', 'select-one'];
      try {
        const allElm = Array.from(form.elements);
        allElm.map(elmList => {
          if (changeEventCheckArr.includes(elmList.type)) {
            elmList.addEventListener('change', getAllFormDataPush)
          }
        })
      } catch (e) {
        console.log(e.message);
      }
      return form
    }

    // all form prevent
    allForm.map(formList => {
      formList.addEventListener('submit', function (e) { // event prevent
        e.preventDefault();
        console.log(this, '전송하려던 폼');
        getAllFormDataPush()
      })
      checkChangeElementInForm(`#${formList.id}`);
    })

  }
} // class
