class FormComponent {
  constructor() {

  }
  changeClone(id) {
    var oldnode = document.getElementById(id),
      clone = oldnode.cloneNode(true);
    oldnode.parentNode.replaceChild(clone, oldnode);
  }

  frag() {
    return document.createDocumentFragment();
  }

  flat(input) {
    const stack = [...input];
    const res = [];
    while (stack.length) {
      const next = stack.pop();
      if (Array.isArray(next)) stack.push(...next);
      else res.push(next);
    }
    return res.reverse();
  }

  isObject(obj) {
    return (typeof obj === "object" && obj !== null) && !Array.isArray(obj) || typeof obj === "function";
  }

  getConstructorName(obj) {
    return (obj.constructor && obj.constructor.name) ? obj.constructor.name : "";
  }
  rmAttr(target, attr) {
    var tarelm = document.querySelector(target);
    tarelm.removeAttribute(attr);
    return;
  }
  elm(attr) {
    const elmList = Array.prototype.slice.call(document.querySelectorAll(attr), 0)
    if (elmList.length === 1) {
      return elmList[0]
    } else {
      return elmList
    }
  }

  setAttr(elm,attributes){
    if (attributes && typeof attributes !== "string") {
      for (var attr in attributes) {
        if (attributes.hasOwnProperty(attr)) {
          elm.setAttribute(attr, attributes[attr]);
        }
      }
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
      node.append(child);
    }
    return node;
  }

  addEvent(elm, action, f) {
    elm.addEventListener(action, f)
  }

  getAttr(elm, attr) {
    return elm.getAttribute(attr)
  }

  rmAttr(elm, attr) {
    return elm.removeAttribute(attr)
  }

  addClass(elm, action) {
    return elm.classList.add(action)
  }

  // 클론 노드이기 때문에 배열을 넣으면 안되고 엘리먼트 노드를 넣어야함
  getCloneNode(elm) {
    if (elm.nodeName == "SELECT") return elm.cloneNode(true);
    const arr = Array.from(elm).map(list => list.cloneNode(true));
    return (arr.length > 1) ? arr : elm.cloneNode(true)
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
    var tarelm = document.querySelector(target); //제거하고자 하는 엘리먼트
    tarelm.parentNode.removeChild(tarelm);
  }
  setSelectBoxSelected(selecbox) {
    let opts = selecbox.options;
    for (let i = 0; i < opts.length; i++) {
      opts[i].removeAttribute('selected');
    }
    opts[selecbox.selectedIndex].setAttribute('selected', true);
  }
  preventDefault(e) {
    e.preventDefault();
    let defaultWasPrevented = e.defaultPrevented;
    if (!defaultWasPrevented) { //  막혀있지 않으면.
    }
  }

  // 가져올 폼 attr
  getExistElmInForm(formAttr) { // NOTE: 이건됬음.
    const form = document.querySelector(formAttr);
    const checkArr = ['checkbox', 'radio'];
    const valueArr = ['text', 'search'];
    const elmArr = [];
    const formChildren = Array.from(form.elements);
    const formId = form.id;

    function setMergeAttr(target) {
      return target.setAttribute('data-merge-target-form', formId)
    }
    formChildren.map(childList => {
      const childNodeName = childList.nodeName;
      const formObj = {
        setAttrPush: function (bool) {
          if (bool) {
            setMergeAttr(childList);
            elmArr.push(childList);
          }
        },
        setAttrMerformTarget: function (bool) {
          if (bool) setMergeAttr(childList);

        }
      }
      if (this.equal(childNodeName, "INPUT")) {
        formObj.setAttrPush(checkArr.includes(childList.type) && childList.checked);
        formObj.setAttrPush(valueArr.includes(childList.type) && this.nullCheck(childList.value));
        formObj.setAttrMerformTarget(childList.hasAttribute('hidden') && valueArr.includes(childList.type));

      } else if (this.equal(childNodeName, "SELECT")) {
        this.setSelectBoxSelected(childList);
        formObj.setAttrPush(1)
        // setAttrMerformTarget(childList);
        // elmArr.push(childList);

      } else if (this.equal(childNodeName, "BUTTON")) {
        formObj.setAttrMerformTarget(1)
        // setAttrMerformTarget(childList);
      }
    })
    return (this.nullCheck(elmArr)) ? elmArr : null;
  }

  // 생성된 메서드 this. append할 form, includeForms
  getCommonFormData(main, pageForm, includeForms, type) {
    if (type === "common") {

    }
    includeForms.map(formList => {
      const elmList = main.getExistElmInForm(formList);
      if (main.nullCheck(elmList)) {
        const frag = main.frag();
        elmList.map(elmList => {
          const tempElm = main.getCloneNode(elmList);
          // main.setAttr(tempElm, {hidden:true});
          frag.append(tempElm)
        })
        pageForm.append(frag)
      }
    })
  }

  prevent() {
    const main = this;
    Array.from(document.querySelectorAll('form')).map(list => {
      list.addEventListener('submit', main.preventDefault)
    })
  }

  // 배열로 반환 엘리먼트 리스트들을
  getAllElementFromIncludeForms(includeFormList) {
    const main = this;
    const includeForms = main.nullCheck(includeFormList) && includeFormList;
    const elmArr = includeForms.map(list => {
      const elmArr = [];
      const form = main.elm(list);
      const elmemnts = main.getExistElmInForm(`#${form.id}`);
      if (elmemnts) elmemnts.map(list => elmArr.push(main.getCloneNode(list)));
      return elmArr
    })
    return elmArr
  }

  doInsertElm(formId, elm) {
    const main = this;
    const form = main.elm(formId);
    const frag = main.frag();
    main.flat(elm).map(list => frag.append(list));
    form.append(frag);
  }

  setForm(common, type) { // all forms data push for mergeForm
    const main = this;
    return function (e) {

      const tarForm = common.pageForm;
      const includesForm = main.modules[`#${tarForm.id}`];
      const realTimeType = common.formInfo.realTime;
      const getIncludeForms = main.nullCheck(includesForm) && includesForm;

      if (!main.mergeIdx) {} //get in, if exist to includeForm. but if exist method mergeForm not in

      if (type == "submit") {
        const clickBtn = this;
        const hiddenInput = main.elt('input', { // get input and pageForm append for includes form 
          type: "text",
          value: common.formInfo.page,
          name: main.pageHiddenName,
          [`data-form-name`]: common.formInfo.formId,
          // hidden: true
        });
        main.setAttr(tarForm,{action:`${common.formInfo.action}/${main.getAttr(clickBtn,'value')}`});

        if (clickBtn) {
          main.setAttr(hiddenInput,{value:main.getAttr(clickBtn, "value"),'data-form-name': main.getAttr(clickBtn, "data-form-name")})
        }
        commonForms(tarForm, getIncludeForms, realTimeType, hiddenInput, common.submitBtn); // exist includesForm.

      } else if (type == "change") {

        // get input and pageForm append for includes form 
        const hiddenInput = main.getCloneNode(tarForm[main.pageHiddenName]); 
        const hiddenSubmitBtn = main.getCloneNode(tarForm.getElementsByTagName('button')[0]);
        main.setAttr(tarForm,{action:`${common.formInfo.action}/${main.getAttr(hiddenInput,'value')}`});
        commonForms(tarForm, getIncludeForms, realTimeType, hiddenInput, hiddenSubmitBtn);
      }
    }

    // pageForm init and children elm insert
    function commonForms(tarForm, getIncludeForms, realTimeType, hiddenInput, submitBtn) { 
      if (main.isObject(realTimeType)) {
        main.setAttr(tarForm,{action:`${realTimeType.action}/${main.getAttr(hiddenInput,'value')}`});
      }
      tarForm.innerHTML = '';
      const commonForms = common.formInfo.commonForms;
      if (commonForms) main.getCommonFormData(main, tarForm, commonForms, 'common');
      if (getIncludeForms) main.getCommonFormData(main, tarForm, getIncludeForms);
      tarForm.append(hiddenInput, submitBtn); // append hidden input
      submitBtn.click();
    }
  }
  // 실시간 기능
  realTime(config) {
    this.checkChangeForm(config)
  }

  // 폼이 change했을때 체크
  checkChangeForm(config) {
    const [main, common] = [this, config]
    const formIncludeForms = common.main.modules[`#${config.pageForm.id}`];
    const changeEventCheckArr = ['checkbox', 'radio', 'select-one'];
    const commomForms = common.formInfo.commonForms;
    const getCommomForms = main.nullCheck(commomForms) && commomForms;

    controlChangeFn(formIncludeForms);
    if (getCommomForms) controlChangeFn(getCommomForms);

    function controlChangeFn(forms) {
      forms.map(list => {
        const form = main.elm(list);
        checkChangeElementStateInForm(`#${form.id}`);
      })
    }
    // all form change event for checkbox radio selectbox elements
    function checkChangeElementStateInForm(formId) {
      const form = document.querySelector(formId);
      const allElm = Array.from(form.elements);
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        main.setForm(common, 'change')()
      })
      allElm.map(elmList => {
        if (changeEventCheckArr.includes(elmList.type)) {
          elmList.addEventListener('change', main.setForm(common, 'change'))
        }
      })
    }

  }
}

class FormModule extends FormComponent {
  constructor() {
    super();
    this.mergeIdx = 0;
    this.pageHiddenName = "page";
    this.modules = {};
    this.commonIdx = 0;
  }

  // add : 버튼생성, 버튼에 서밋, 체인지 이벤트 바인딩, 페이지 박스 폼 뒤로 생성후 버튼 넣기, 섬밋 버튼 생성
  add(...config) {
    this.config = config;
    const main = this;

    for (let i = 0; i < config.length; i++) {
      const formInfo = config[i];
      const pageForm = main.elm(formInfo.formId);
      const pageBox = main.elt("div", {id: `${formInfo.formId}Temp`});
      const submitBtn = main.elt("button", {type: 'submit',hidden: true}, '전송');
      const {prevArrowClass,nextArrowClass,includeForms,pageNumClass} = formInfo;
      const realTimeType = formInfo.realTime;
      const defaultHiddenInput = main.elt("input", {
        type: "text",
        name: main.pageHiddenName,
        value: formInfo.page,
        [`data-form-name`]: formInfo.formId,
        // hidden:true
      })
      const commonInfo = {
        main: main,
        formInfo: formInfo,
        pageForm: pageForm,
        submitBtn: submitBtn,
        pageBox: pageBox
      }

      main.setAttr(pageForm,{action:formInfo.action,method:formInfo.method});
      pageForm.after(pageBox);
      pageForm.append(defaultHiddenInput, submitBtn);

      if (includeForms) main.modules[formInfo.formId] = includeForms;
      if (realTimeType && includeForms) main.realTime(commonInfo);

      // paging button 생성후 이벤트 바인딩.
      if (formInfo.page > formInfo.endPage) {
        formInfo.btnClass = prevArrowClass
        makeBtnSetForm(formInfo, '<', formInfo.startPage - 1)
      }
      for (let j = formInfo.startPage; j < formInfo.startPage + formInfo.endPage; j++) {
        formInfo.btnClass = pageNumClass
        makeBtnSetForm(formInfo, String(j), j)
      }
      if (formInfo.pageSet !== formInfo.totalPageSet) {
        formInfo.btnClass = nextArrowClass
        makeBtnSetForm(formInfo, '>', formInfo.endPage + 1);
      }

      // set Form change, submit event and make submit btn
      function makeBtnSetForm(inFormInfo, txt, val) {
        const btn = main.elt("button", {
          type: "button",
          class: inFormInfo.btnClass,
          [`data-form-name`]: inFormInfo.formId,
          value: val
        }, txt);

        if (val === formInfo.page) main.addClass(btn, 'on');
        main.addEvent(btn, 'click', main.setForm(commonInfo, 'submit'))
        pageBox.append(btn);
      }
    }
  }

  mergeForm(config) {
    this.mergeIdx = 1;
    const main = this;
    const includeForms = main.nullCheck(config.includeForms) && config.includeForms;
    const realTime = config.realTime;
    const mergeForm = main.elt("form", {
      id: config.formId.substr(1),
      method: config.method,
      action: config.action,
      class: "mergeForm"
      // hidden:true
    });
    main.elm('body').append(mergeForm); // form 생성

    // 처음에 인클루드 정보 모두 가져와서 넣어주기.
    const elmArr = main.getAllElementFromIncludeForms(config.includeForms);
    main.doInsertElm(`${config.formId}`, elmArr);

    if (includeForms) {
      includeForms.map(list => { // 포함한 모든폼을 전송할때 머지폼으로 전송
        main.addEvent(main.elm(list), 'submit', ifSubmitForm)
      })
    }
    if (realTime) {
      if (main.isObject(realTime)) {
        main.setAttr(mergeForm,{action:`${realTime.action}/`});
        // NOTE: 전송할곳 정해야함. 처음에 action을 지정하면 되지만 만약 수정하겠다면? 다른곳으로 보내겠따면? 버튼클릭했을때 페이지네이션을 골라줘야한다면?
        // main.setAttr(tarForm, ['action', `${realTime.action}/${main.getAttr(hiddenInput,'value')}`]);
      }
      if (includeForms) {
        includeForms.map(list => {
          main.addEvent(main.elm(list), 'change', ifSubmitForm)
        })
      }
    }

    function ifSubmitForm(e) {
      e.preventDefault()
      mergeForm.innerHTML = "";
      const elmArr = main.getAllElementFromIncludeForms(includeForms);
      main.doInsertElm(`${config.formId}`, elmArr);
      if (config.prevent) {

      } else {
        mergeForm.submit();
      }

    }

  }
}
