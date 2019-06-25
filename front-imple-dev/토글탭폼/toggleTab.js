/** 
 * btlList.toggleTab();
  if(btnList =='ee'){
    btlList.toggleTab().fn(function(){
      return {data:3}
    })
  }

  btn1.toggleTab()
  btn1.toggleTab()
  btn1.toggleTab().mergeData(function(){

  })
  btn1.toggleTab()
*/

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


function getSortInfo(elm) {
  let data = {};
  // case2
  data[elm.name] = {};
  for (let i = 0; i < elm.elements.length; i++) {
    let elements = elm.elements[i];
    if (elements.type == 'search') {
      data[elm.name][elements.name] = elements.value.trim();
    } else if (elements.tagName == "SELECT") {
      data[elm.name][elements.name] = elements.value;
    } else if (elements.type == 'checkbox') {
      data[elm.name][elements.name] = elements.checked;
    } else if (elements.type == 'text') {
      data[elm.name][elements.name] = elements.value;
    } else if (elements.type == 'radio') {
      data[elm.name][elements.name] = data[elm.name][elements.name] || [];
      if (elements.checked) data[elm.name][elements.name].push({
        "key": elements.id,
        "value": elements.checked
      });
    }
  }
  return data
};

function isObject(item) {
  return (item && typeof item === 'object' && !Array.isArray(item));
}

mergeDeep = function (target, ...sources) {
  if (!sources.length) return target;
  const source = sources.shift();

  if (isObject(target) && isObject(source)) {
    for (const key in source) {
      if (isObject(source[key])) {
        if (!target[key]) Object.assign(target, {
          [key]: {}
        });
        mergeDeep(target[key], source[key]);
      } else {
        Object.assign(target, {
          [key]: source[key]
        });
      }
    }
  }
  return mergeDeep(target, ...sources);
}


function getSortObjectDataAndMerge(...target) {
  let obj = {};
  if (Array.isArray(target[0])) { //array면
    target[0].forEach(tar => {
      mergeDeep(obj, getSortInfo(tar))
    });
  } else { //array가 아니면
    target.forEach(tar => {
      mergeDeep(obj, getSortInfo(tar))
    });
  }
  return obj
  // return Object.assign({},

  //   );
}


function getManyAtrrControl(arr, action, className, all) {
  if (all == "all") {
    arr.forEach((x) => {
      Array.from(document.querySelectorAll(`${x}`)).forEach(elm => {
        elm.classList[`${action}`](className)
      })
    })
  } else {
    arr.forEach((x) => {
      document.querySelector(`${x}`).classList[`${action}`](className)
    })
  }
  return
};



/**
 * 
 * @param {*} config 
 * 
 * 
 let tabConfig = {
  tabId:"tabForm",
  form: false,
  formId: "tabForm",
  tab: "data-tab-title",
  contents: "data-tab-content",
}
getTabTemplate(tabConfig)

let tabConfig2 = {
  tabId:"tabForm2",
  form: true,
  method:"post",
  formId: "tabForm2",
  tab: "data-tab-title",
  contents: "data-tab-content",
  includeForm:['langForm',"menuForm"]
}
getTabTemplate(tabConfig2)
 */

// FIXME: 데이터 전송 부분 확장성 있게 만들어야함.

function getTabTemplate(config) {
  const form = document.getElementById(`${config.formId}`);
  const targetTab = `[data-tab-id="${config.tabId}"]`;
  const tabIdBoxElm = document.querySelector(`[data-tab-id=${config.tabId}]`);
  const tabArr = document.querySelectorAll(`${targetTab} [${config.tab}]`);
  const tabBoxList = document.querySelectorAll(`${targetTab}  [${config.contents}]`);
  tabBoxList[0].classList.add('on');

  let tabBtnArr = Array.from(document.querySelectorAll(`${targetTab} [name="tabName"]`));
  tabBtnArr.map(list => {
    list.addEventListener('click', function (e) {
      tabBtnArr.forEach(list => list.removeAttribute('data-tab-click'));
      this.setAttribute('data-tab-click', true);
    })
  })


 if (config.form) { // use form
    form.addEventListener('submit', function (e) {
      // e.preventDefault();
      form.setAttribute('method', config.method);
      let formTabBtn = Array.from(form.tabName);
      let clickBtn = formTabBtn.filter(list => list.getAttribute('data-tab-click'));
      let tabName = {tabName: clickBtn[0].getAttribute('value')};

      if (config.method && config.method.toLowerCase() == "post") { // form method post
        if (config.includeForm) {
          const includeFormArr = config.includeForm.map(name => {
            return document.querySelector(`[data-form="${name}"]`)
          });
          let dataArr = Object.assign(tabName, getSortObjectDataAndMerge(includeFormArr));
          console.log('전송', dataArr);
        }
        form.clickBtnInput.value = clickBtn[0].getAttribute('value').substr(1)
       
      } else { // form method get
        console.log('get');
        form.clickBtnInput.value = clickBtn[0].getAttribute('value').substr(1)
      }
      console.log(form);
      // form.submit();
    })


  } else { // not use form

    Array.from(tabArr).map(elm => {
      elm.addEventListener('click', function (e) {
        e.preventDefault();
        let targetText = e.currentTarget.getAttribute(`${config.tab}`);
        let attrArr = [
          `${targetTab} [${config.tab}]`,
          `${targetTab}  [${config.contents}]`
        ];
        getManyAtrrControl(attrArr, 'remove', 'on', 'all');
        this.classList.add('on');

        document.querySelector(`${targetTab} [${config.contents}="${targetText}"]`).classList.add('on');
      })
    })
  }

  return
};


let tabConfig = {
  tabId: "tabForm",
  form: false,
  formId: "tabForm",
  tab: "data-tab-title",
  contents: "data-tab-content",
}
getTabTemplate(tabConfig)

let tabConfig2 = {
  tabId: "tabForm2",
  form: true,
  method: "get",
  formId: "tabForm2",
  tab: "data-tab-title",
  contents: "data-tab-content",
  includeForm: ['langForm', "menuForm"]
}
getTabTemplate(tabConfig2)






/** 
 * $('#myTab a').click(function (e) {
  e.preventDefault()
  console.log(this);
  let testForm = document.getElementById('testForm');
  
  testForm.tabName.value = this.getAttribute('aria-controls')
  testForm.submit()
  // $(this).tab('show')
})
*/