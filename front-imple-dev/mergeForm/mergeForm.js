/**
 * 
 */


let test;
class FormComponent {
  constructor(config) {
    // this.multiple = (config.multiple)?config.multiple:false;// 나중에해보기
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



/**
 * 머지할 폼에 아래처럼 써주고
 * data-merge-form="true"
 * 페이지네이션을 사용할거면
 * <form action="" id="pageForm" data-merge-form="true"></form>
 * 이걸 추가해주면된다.
 */
class FormModule extends FormComponent {
  constructor(config) {
    super(config);
    this.multiple = (config.multiple)?(config.multiple === true)?true:false:false;
    this.mergeIdx = 1;
    this.status;

  }

  /**
   * 
   * @param {*} config 
   */
  setPageNation(config) {

    if (config.ajax) {

    } else {

      const pageForm = document.getElementById(config.formId);
      const tempElm = this.elt("div", {id: 'tempElm'});
      const hiddenInput = this.elt("input", {
        type: "text",
        name: "pageHiddenInput",
        value: config.page,
        // hidden: true
      })
      const submitBtn = this.elt("button", { hidden: true}, '전송');// 전송버튼 만들어서 전송ㅊ: 'submit',
      
      pageForm.appendChild(submitBtn);
      pageForm.setAttribute('method', config.method);
      pageForm.after(tempElm);
      pageForm.appendChild(hiddenInput);

      // paging prev button 생성
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

      // paging button 생성
      for (let i = config.startPage; i < config.startPage + config.endPage; i++) {
        let postBtnElm = this.elt("button", {
          type: "button",
          class: (config.btnClass) ? config.btnClass : '',
          form:config.formId
        }, String(i));

        if (i === config.curPage) postBtnElm.classList.add('on'); // 현재 페이지 클래스 add on 
        postBtnElm.addEventListener('click', function (e) { //이벤트 2개 걸려있어서 그런다?
          const clickBtn = this;
          clickBtn.setAttribute('value', this.textContent); // click setting
          setForm(clickBtn)
        })
        tempElm.append(postBtnElm);
      }

      // paging next button 생성
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
        hiddenInput.setAttribute('value', clickButton.getAttribute('value'));
        pageForm.setAttribute('action', `${config.action}/${clickButton.getAttribute('value')}`);

        this.getElm(`#${tempElm.id} button`).forEach(list => list.removeAttribute('value')); // init

        if (this.mergeIdx) { //안에 초기화하고  // 머지폼이 있으면 안들어옴
          
          let includeForm = config.includesForm;
          let getIncludeForms = (this.nullCheck(includeForm)) ? includeForm : 0;
          if (getIncludeForms.length) { // exist includesForm.
            // 페이지네이션 폼 초기화 후 클릭한 버튼 넣어주기
            let crtHiddenInput = this.elt('input', {
              type: "text",
              value: clickButton.textContent,
              name: "pageHiddenInput",
              // hidden: true
            });
            pageForm.innerHTML = '';
            pageForm.appendChild(crtHiddenInput);
            // 인클루드된 폼들 추려서 어팬드
            getIncludeForms.map(formList => {
              if (this.nullCheck(this.getExistElmInForm(formList))) {
                this.getExistElmInForm(formList).forEach(elmList => {
                  let tempElm = this.getCloneNode(elmList);
                  // tempElm.setAttribute('hidden', true);
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


setStatus(status){
  this.status = status;
}

  /**
   * 
   * @param {*} config 
   * data-merge-form="true"
   */
  mergeForm(config) {
    this.status = config.status
    this.mergeIdx = 0;

    const allForm = this.getElm(`[data-merge-form="true"]`);

    // 머지폼 할때 어차피 data-merge-form으로 잡기때문에 머지폼 안할껀 그냥 폼에다가 넣지 않으면 됨.
    const main = this;

    // create mergeform
    const mergeForm = this.elt("form", {
      id: (config.formId) ? config.formId : "mergeForm",
      method: config.method,
      action: config.action,
      // hidden:true
    });
    document.body.appendChild(mergeForm); // form 생성



    // all form prevent
    function getAllFormDataPush(formId) {
      const mergeFormBtn = main.elt("input", {type: "submit",name: "mergeFormBtn"});
      mergeForm.innerHTML = '';
      allForm.map(mergeList => {
          let getElmListFromForm = main.getExistElmInForm(`#${mergeList.id}`);
          if (getElmListFromForm) {
            getElmListFromForm.map(elmList => {
              if (elmList.name == 'pageHiddenInput') mergeForm.action = `${config.action}/${elmList.getAttribute('value')}`
              let tempElm = main.getCloneNode(elmList)
              // tempElm.setAttribute('hidden', true);
              mergeForm.appendChild(tempElm)
            })
          }
        }) / 
      mergeForm.appendChild(mergeFormBtn);
      mergeFormBtn.click(); // 각폼들 전송시 머지폼 전송
    }

    // all form change event for checkbox radio selectbox elements
    var checkChangeElementInForm= (formId)=>  {
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

    allForm.map(formList => {
      // console.log(formList);
      formList.addEventListener('submit', function (e) { // event prevent
        e.preventDefault();
        console.log(this, '전송하려던 폼'); 

        if(!config.status) return;
        if(main.multiple){
          try{
            
            getAllFormDataPush(config.formId)
          }catch(e){
            console.log(e.message);
          }
        }else{
          getAllFormDataPush()
        }
      })
      checkChangeElementInForm(`#${formList.id}`);
    })
    // temp event prevent
    mergeForm.addEventListener('submit', function (e) {
      e.preventDefault();

    })

  }


  

} // class
