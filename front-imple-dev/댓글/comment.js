function findParent(elm, attributes) {
  const resArr = [],tmp = elm;
  if (attributes && typeof attributes !== "string") {
    for (var attr in attributes) {
      elm = tmp;
      if (attributes.hasOwnProperty(attr)) {
        if (elm.getAttribute(attr) === attributes[attr]) {
          resArr.push(elm);
        } else {
          while (elm = elm.parentElement) {
            const getClass = elm.getAttribute(attr);
            const classListArr = (getClass)? getClass.split(' '): null;
            if(classListArr && classListArr.length >= 2){
              if(inMap(classListArr,attributes[attr])) break;
            }else{
              if (elm.getAttribute(attr) === attributes[attr]) {resArr.push(elm);break;}
            }
          };
        }
      }
    }
  }else{
    if(typeof attributes === "string"){
      if(elm.getAttribute(attributes)){
        resArr.push(elm); 
      }else{
        while(elm = elm.parentElement){
          if(elm.getAttribute(attributes)) {
            resArr.push(elm); 
            break;
          }
        }
      }
    }
  }
  function inMap(arr,attr){
    for(let i = 0; i < arr.length; i++){
      if(arr[i] === attr){
        resArr.push(elm); 
        return true
      }
    }
    return false
  }
  if(typeof attributes === "string")  return resArr[0]
  return (resArr.every(x => x === resArr[0]) && resArr.length === Object.keys(attributes).length) ? resArr[0] : null;
}
function elm(attr){
  const elmList = Array.prototype.slice.call(document.querySelectorAll(attr),0);
  if(elmList.length ===1){
    return elmList[0]
  }else if(elmList.length >1){
    return elmList
  }else{
    return null
  }
}
function elt(name,attributes){
  var node = document.createElement(name);
  if(attributes && typeof attributes !== "string"){
    for(var attr in attributes){
      if(attributes.hasOwnProperty(attr)){
        node.setAttribute(attr, attributes[attr]);
      }
    }
  }
  for(var i =2; i< arguments.length; i++){
    var child = arguments[i];
    if(typeof child === "string"){
      child = document.createTextNode(child);
    }
    node.append(child);
  }
  return node;
}
function check_attr(elm,attributes){
  const resArr = [],tmp = elm;
  if (attributes && typeof attributes !== "string") {
    for (var attr in attributes) {
      elm = tmp;
      if (attributes.hasOwnProperty(attr)) {
        if (elm.getAttribute(attr) === attributes[attr]) {
          resArr.push(elm);
        }
      }
    }
  }
  return (resArr.every(x => x === resArr[0]) && resArr.length === Object.keys(attributes).length) ? resArr[0] : null;
}


class Comment{
  constructor(config){
    this.config = config; 
    this.setting(config)
  }

  setting(config){
    const main = this;
    const reply_btn = Array.from(document.querySelectorAll(config.reply_btn));
    reply_btn.map(list=>{
      list.addEventListener('click',reply_click)
      function reply_click(e){
          const card = findParent(this,main.config.seq);
          main.create_form_and_insert(card);
      }
    })
  }

  create_form_and_insert(card){
    const main = this;
    if(card.getAttribute('data-insert-state') === 'on') return;
    const configSubmit =main.config.form.submit;
    const submitConfig = (configSubmit)?configSubmit:{type:'submit'};
    const submitBtn = elt('input',submitConfig,'Reply');
    const submit_row = elt('div',{class:"comment__row submit"},submitBtn);
    const textarea = elt('textarea',main.config.form.textarea || null);
    const textarea_row = elt('div',{class:"comment__row textarea"},textarea);
    const form = elt('form',main.config.form.attr || null,textarea_row,submit_row);
   
    Array.from(card.getElementsByTagName("*")).find(list=>{
      const insert_elm = check_attr(list,main.config.insert);
      if(insert_elm){
        console.log(insert_elm);
        insert_elm.append(form);
      }
    })

    if(main.config.cb){
      main.config.cb(form)
    }

    card.setAttribute('data-insert-state','on');
  }
}





