

function getElm(attr) {
  const elmList = Array.prototype.slice.call(document.querySelectorAll(attr), 0)
  if (elmList.length === 1) {
    return elmList[0]
  } else {
    return elmList
  }
}

function getCloneNode(elm) {
  return elm.cloneNode(true);
}

function nullCheck(val) {
  if (typeof val == "string") val = val.trim();
  return (val != "undefined" && (val != null && val.length > 0)) ? true : false;
}

function elt(name, attributes) {
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


function equal(dist, dest) {
  return (dist === dest) ? true : false;
}

function doArrayClassControl(arr, action, className, all) {
  arr.forEach((elmName, idx) => {
    let elements = document.querySelectorAll(`${elmName}`);
    for (let i = 0; i < elements.length; i++) {
      elements[i].classList[`${action}`](className)
    }
  })
  return
}

function removeElement(target) {
  var targetElm = document.querySelector(target); //제거하고자 하는 엘리먼트
  targetElm.parentNode.removeChild(targetElm);
}
// 


function getExistElmInForm(elm) { // NOTE: 이건됬음.
  const form = document.querySelector(elm);
  const checkArr = ['checkbox', 'radio'];
  const valueArr = ['text', 'search'];
  const elmArr = [];
  const formChildren = Array.from(form.elements);
  const formId = form.id;

  function setAttr(target) {
    return target.setAttribute('data-merge-target-form', formId)
  }

  formChildren.map(childList => {
    let childNodeName = childList.nodeName;
    if (equal(childNodeName, "INPUT")) {

      if (checkArr.includes(childList.type) && childList.checked) {
        setAttr(childList);
        elmArr.push(childList);
      }

      if (childList.hasAttribute('hidden') && valueArr.includes(childList.type)) { //FIXME:
        setAttr(childList)
      }

      if (valueArr.includes(childList.type) && nullCheck(childList.value)) {
        setAttr(childList);
        elmArr.push(childList);
      }

    } else if (equal(childNodeName, "SELECT")) {
      setAttr(childList);
      elmArr.push(childList);

    } else if (equal(childNodeName, "BUTTON")) {
      setAttr(childList);
    }
  })

  return (nullCheck(elmArr)) ? elmArr : null;
}


function setPageNation(config) {
  if(config.ajax){

  }else{

    const pageForm = document.getElementById(config.formId);
    const tempElm = elt("div", {id: 'tempElm'});
    const hiddenInput = elt("input",{type:"text",name:"pageHiddenInput",value:config.curPage})
    pageForm.setAttribute('method', config.method);
    pageForm.after(tempElm);
    pageForm.appendChild(hiddenInput);
  
    for (let i = config.startPage; i < config.startPage + config.pageLimit; i++) {
      let postBtnElm = elt("button", {
        type: "button",
        class: (config.btnClass) ? config.btnClass : ''
      }, String(i));
  
      if (equal(i, config.curPage)) postBtnElm.setAttribute('value', 'click'); // init value setting
  
      postBtnElm.addEventListener('click', function (e) {
        let clickBtn = this;
        setForm(clickBtn)
        clickBtn.setAttribute('value', 'click'); // click setting
  
      })
      tempElm.appendChild(postBtnElm);
    }
  
    function setForm(clickButton) {
      getElm(`#${tempElm.id} button`).forEach(list =>
        list.removeAttribute('value')); // init
  
      hiddenInput.setAttribute('value', clickButton.textContent);
      pageForm.setAttribute('action', `${config.action}/${clickButton.textContent}`);
  
      let includeForm = config.includesForm;
  
      let properties = (nullCheck(includeForm)) ? includeForm : 0;
      if (properties.length) { // exist includesForm.
  
        properties.map(formList => {
          pageForm.innerHTML = `<input type="text" value="${clickButton.textContent}"   name="pageHiddenInput">`;
  
          if (nullCheck(getExistElmInForm(formList))) {
            getExistElmInForm(formList).forEach(elmList => {
              let tempElm = getCloneNode(elmList)
              // tempElm.setAttribute('hidden', true);
              // mergeForm 활성화시 막아야함.
              pageForm.appendChild(tempElm);
            })
          }
  
        })
      }
  
      let submitBtn = elt("button", {
        type: 'submit',
        hidden: true
      });
      pageForm.appendChild(submitBtn);
      submitBtn.click();
      // pageForm.submitBtn.click();
    }
  
    pageForm.addEventListener('submit', function (e) {
      // e.preventDefault();
      let defaultWasPrevented = e.defaultPrevented;
      if (!defaultWasPrevented) { //  막혀있지 않으면.
        // removeElement(`#${tempElm.id}`)
        // removeElement(`#${pageForm.id}`)
      }
    })
  }
 
}


function mergeForm(config) {
  let allForm = Array.from(document.querySelectorAll('[data-merge-form="true"]'));

  // all form prevent
  allForm.map(formList => {
    formList.addEventListener('submit', function (e) {
      e.preventDefault();
      console.log(this);
    })
  })
  // create mergeform
  let mergeForm = elt("form", {
    id: 'mergeForm',
    method: config.method,
    action: config.action
    // ,hidden:true
  })
  document.body.appendChild(mergeForm);


  // allForm.map(list=>{

  //   list.addEventListener('submit',function(e){
  //     e.preventDefault();
  //     // console.log('check');
  //     mergeForm.innerHTML = "";
  //     allForm.map(formList=>{
  //       // console.log('exec');
  //       if(nullCheck(getExistElmInForm(`#${formList.id}`))){
  //         getExistElmInForm(`#${formList.id}`).map(elm=>{
  //         let cloneNode = getCloneNode(elm);
  //         mergeForm.appendChild(cloneNode);
  //         // console.log(cloneNode);
  //       })
  //       }
  //     })


  //   })
  // })
  console.log(mergeForm);
}