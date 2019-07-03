class FormComponent {
  constructor() {

  }
  changeClone(){
    // FIXME: 만들어야함
    // clone and origin spot change new Node
    var oldnode = document.getElementById("result"),
    clone = oldnode.cloneNode(true);
    oldnode.parentNode.replaceChild(clone, oldnode);
  }

  frag(){
    return document.createDocumentFragment();
  }

  flat(input) {
    const stack = [...input];
    const res = [];
    while (stack.length) {
      const next = stack.pop();
      if (Array.isArray(next))stack.push(...next);
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

  addEvent(elm, action, f) {
    elm.addEventListener(action, f)
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

  addClass(elm, action) {
    return elm.classList.add(action)
  }

  // 클론 노드이기 때문에 배열을 넣으면 안되고 엘리먼트 노드를 넣어야함
  getCloneNode(elm) {
    if(elm.nodeName == "SELECT") return elm.cloneNode(true);
    const arr = Array.from(elm).map(list =>list.cloneNode(true));
    return (arr.length >1)?arr:elm.cloneNode(true)

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
        setAttr: function (bool) {
          if (bool) setMergeAttr(childList);
          
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

  // 생성된 메서드 this. append할 form, includeForms
  getCommonFormData(main, pageForm, includeForms,type) {
   if(type === "common"){
    //  console.log(includeForms,'includeForms');
   }
    includeForms.map(formList => {
      const getElmList = main.getExistElmInForm(formList);
      if (main.nullCheck(getElmList)) {
        // console.log(getElmList);
        const frag = main.frag();
        getElmList.map(elmList => {
          const tempElm = main.getCloneNode(elmList);
          main.setAttr(tempElm, ['hidden', true]);
          frag.append(tempElm)
        })
        pageForm.append(frag)
      }
    })
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
        main.setAttr(tarForm, ['action', `${common.formInfo.action}/${main.getAttr(clickBtn,'value')}`]);
        const hiddenInput = main.elt('input', { // get input and pageForm append for includes form 
          type: "text",
          value: common.formInfo.page,
          name: main.pageHiddenName,
          [`data-form-name`]: common.formInfo.formId,
          hidden: true
        });

        if (clickBtn) {
          main.setAttr(hiddenInput, ['value', main.getAttr(clickBtn, "value")])
          main.setAttr(hiddenInput, ['data-form-name', main.getAttr(clickBtn, "data-form-name")])
        }
        commonForms(tarForm,getIncludeForms,realTimeType,hiddenInput, common.submitBtn); // exist includesForm.

      } else if (type == "change") {
        
        const hiddenInput = main.getCloneNode(tarForm[main.pageHiddenName]); // get input and pageForm append for includes form 
        const hiddenSubmitBtn = main.getCloneNode(tarForm.getElementsByTagName('button')[0]);
        main.setAttr(tarForm, ['action', `${common.formInfo.action}/${main.getAttr(hiddenInput,'value')}`]);
        commonForms(tarForm,getIncludeForms,realTimeType,hiddenInput,hiddenSubmitBtn);
      }
    }

    function commonForms(tarForm,getIncludeForms,realTimeType, hiddenInput,submitBtn) { // pageForm init and children elm insert
      if (main.isObject(realTimeType)) {
        main.setAttr(tarForm, ['action', `${realTimeType.action}/${main.getAttr(hiddenInput,'value')}`]);
      }
      tarForm.innerHTML = '';
      let commonForms = common.formInfo.commonForms;
      if (commonForms) main.getCommonFormData(main, tarForm, commonForms,'common');
      if (getIncludeForms) main.getCommonFormData(main, tarForm, getIncludeForms);
      tarForm.append(hiddenInput, submitBtn); // append hidden input
      submitBtn.click()

    }
  }

  realTime(config) {
    this.checkChangeForm(config)
  }

  checkChangeForm(config) {
    const [main, common] = [this, config]
    const formIncludeForms = common.main.modules[`#${config.pageForm.id}`];
    const changeEventCheckArr = ['checkbox', 'radio', 'select-one'];
    const commomForms = common.formInfo.commonForms;
    const getCommomForms = main.nullCheck(commomForms) && commomForms;

    controlChangeFn(formIncludeForms);
    if(getCommomForms) controlChangeFn(getCommomForms);
      
    function controlChangeFn(forms){
      forms.map(list=>{
        const form = main.getElm(list);
        console.log(list);
        checkChangeElementStateInForm(`#${form.id}`);
      })
    }
    // all form change event for checkbox radio selectbox elements
    function checkChangeElementStateInForm(formId) {
      const form = document.querySelector(formId);
      const allElm = Array.from(form.elements);
      
      form.addEventListener('submit',function(e){
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

  add(...config) {
    this.config = config;
    const main = this;
    

    for (let i = 0; i < config.length; i++) {
      const formInfo = config[i];
      const pageForm =main.getElm(formInfo.formId);
      const tempElm = main.elt("div", {id: `${formInfo.formId}Temp`});
      const submitBtn = main.elt("button", {type: 'submit',hidden: true}, '전송');
      const {prevArrowClass, nextArrowClass, includeForms, btnClass} = formInfo;
      const realTimeType = formInfo.realTime;
      const defaultHiddenInput = main.elt("input", {
        type: "text",
        name: main.pageHiddenName,
        value: formInfo.page,
        [`data-form-name`]: formInfo.formId,
        hidden:true
      })
      const commonInfo = {
        main: main,
        formInfo: formInfo,
        pageForm: pageForm,
        submitBtn: submitBtn,
        tempElm: tempElm
      }

      pageForm.setAttribute("action", formInfo.action)
      pageForm.setAttribute('method', formInfo.method);
      pageForm.after(tempElm);
      pageForm.append(defaultHiddenInput, submitBtn);

      if (includeForms && includeForms) main.modules[formInfo.formId] = includeForms;
      if (realTimeType && includeForms) main.realTime(commonInfo);

      // paging button 생성
      if (formInfo.page > formInfo.endPage) {
        makeBtnset(prevArrowClass && prevArrowClass, '<', formInfo.startPage - 1)
      }
      for (let j = formInfo.startPage; j < formInfo.startPage + formInfo.endPage; j++) {
        makeBtnset(btnClass && btnClass, String(j), j, 'arrow')
      }
      if (formInfo.pageSet !== formInfo.totalPageSet) {
        makeBtnset(nextArrowClass && nextArrowClass, '>', formInfo.endPage + 1);
      }

      function makeBtnset(condi, txt, val, type) {
        const btn = pageBtnElt(commonInfo, condi, txt, val)
        if (val === formInfo.page) main.addClass(btn, 'on');
        main.addEvent(btn, 'click', main.setForm(commonInfo, 'submit'))
        tempElm.append(btn);
      }
    }
    // function
    function pageBtnElt(commonInfo, condi, text, val) {
      return commonInfo.main.elt("button", {
        type: "button",
        class: condi,
        [`data-form-name`]: commonInfo.formInfo.formId,
        value: val
      }, text)
    }
  }

  prevent() {
    const main = this;
    Array.from(document.querySelectorAll('form')).map(list => {
      list.addEventListener('submit', main.preventDefault)
    })
  }




  // 배열로 반환 엘리먼트 리스트들을
  getAllElementFromIncludeForms(includeFormList){
    const main = this;
    const includeForms = main.nullCheck(includeFormList) && includeFormList;
    const getElmArr = includeForms.map(list=>{
      const elmArr = [];
      const form = main.getElm(list);
      const getElmemnts = main.getExistElmInForm(`#${form.id}`);
      if(getElmemnts) getElmemnts.map(list=>elmArr.push(main.getCloneNode(list)));
      return elmArr
    })
    return getElmArr
  }

  doInsertElm(formId,elm){
    const main = this;
    const form = main.getElm(formId);
    const frag = main.frag();
    main.flat(elm).map(list=> {
      frag.append(list)
    });
    form.append(frag);
  }

  mergeForm(config) {
   
    this.mergeIdx = 1;
    const main = this;
    const includeForms = main.nullCheck(config.includeForms) && config.includeForms;
    const realTime = config.realTime;
    
    const hiddenBtn = main.elt("input",{
      type:"submit",
      hidden:true
    })
    const mergeForm = main.elt("form", {
      id: config.formId.substr(1),
      method: config.method,
      action: config.action,
      hidden:true
    },hiddenBtn);


    document.body.appendChild(mergeForm); // form 생성

    // 처음에 인클루드 정보 모두 가져와서 넣어주기.
    const getElmArr = main.getAllElementFromIncludeForms(config.includeForms);
    main.doInsertElm(`${config.formId}`,getElmArr);

    if(includeForms){
      includeForms.map(list=>{
        main.addEvent(main.getElm(list), 'submit', ifSubmitForm)
      })
    }

    if(realTime){
      if (main.isObject(realTime)) {
        main.setAttr(mergeForm,['action',`${realTime.action}/`]); /// NOTE: 전송할곳 정해야함. 처음에 action을 지정하면 되지만 만약 수정하겠다면? 다른곳으로 보내겠따면? 버튼클릭했을때 페이지네이션을 골라줘야한다면?
        // main.setAttr(tarForm, ['action', `${realTime.action}/${main.getAttr(hiddenInput,'value')}`]);
      }

      if(includeForms){
        includeForms.map(list=>{
          main.addEvent(main.getElm(list), 'change', ifSubmitForm)
        })
      }
    }

    function ifSubmitForm(e){
      e.preventDefault()
      mergeForm.innerHTML="";
      const getElmArr = main.getAllElementFromIncludeForms(includeForms);
      main.doInsertElm(`${config.formId}`,getElmArr);
      mergeForm.submit();
    }
  }
}