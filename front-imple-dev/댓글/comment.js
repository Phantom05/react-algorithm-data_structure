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


/**
 * <div class="box" data-seq="1">
    <span class="btn">Reply</span>
        <div class="row" hidden>
      <div class="col-md-1">
        이미지
      </div>
      <div class="col-md-11">
          <div class="res"></div>
      </div>
    </div>
  </div>
  구조는 이러하다. 필수항목은 card쪽에 부모 속성을 넣어주고, seq 설정을 해준다.
  또한 가리고 있을 hidden속성을 필수로 잡아준다.
  res쪽으로 댓글 form이 생성되어 들어가게 되며, 들어가는 목록은 form, submit버튼, textarea다 나머지 커스텀할때는 html에 써주는게 속편하다.

  var comment = new Comment({
      card: {
        class: "box" // card 부분
      },
      insert: {
        class: "res" // 해당 form을 넣을 클래스
      },
      reply_btn: '.btn', // 기존에 있는 reply btn
      seq: 'data-seq', // card에 들어갈 속성이름
      form: { // form 관련속성
        attr: { // form의 속성
          action: "/test/",
          class: "test__class",
          method: "post",
        },
        submit: { // form의 submit버튼 속성
          class: "reply__submit",
          type: "submit",
          value: "Answer_Reply"
        },
        textarea: { // textarea의 속성
          class: "summernote"
        }
      },
      cb: function (form) { // form을 인서트하고 실행할 콜백 여기는 summernote를 사용해서 넣을때마다 실행해줬음,.
        $('.summernote').summernote({
          tabsize: 2,
          height: 100,
          toolbar: false,
          disableDragAndDrop: true,
          shortcuts: false,
          onPaste: function (e) {
            var bufferText = ((e.originalEvent || e).clipboardData || window.clipboardData).getData('Text');
            e.preventDefault();
            document.execCommand('insertText', false, bufferText);
          }
        })

        Array.from(findParent(form,'data-seq').getElementsByTagName('*')).find(list=>{
          return list.hasAttribute('hidden')
        }).removeAttribute('hidden')
        // hidden을 찾아 제거함. 이부분은 필수로 들어가야함..

      }
    })

 */
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
        insert_elm.append(form);
      }
    })

    if(main.config.cb){
      try{
        main.config.cb(form)
      }catch(e){
        console.log(e);
      }
    }else{
      main.removeHidden(form);
    }
    card.setAttribute('data-insert-state','on');
  }

  removeHidden(form){
    const main = this;
    Array.from(findParent(form,main.config.seq).getElementsByTagName('*')).find(list=>{
      return list.hasAttribute('hidden')
    }).removeAttribute('hidden')
  }
}






// let memeberTypeLabel = $('.signup_memberType > input[type="radio"] + label');

// memeberTypeLabel.each(function () {
//   var span = document.createElement('span');
//   span.classList.add('signup_check_circle');
//   $(this).siblings('input').addClass('signup_input_radio');
//   $(this).addClass('signup_label');
//   $(this).prepend(span)
// });

// function insertSpan (spanType){
//   let childLabel = $(this).parent().children('label');
//   var span = document.createElement('span');
  
//   if(spanType === 'circle'){
//       $(this).addClass('signup_input_radio')
//   } else if(spanType === 'square'){
//       $(this).addClass('signup_input_checkbox')
//   } else {
//       console.log('span type 확인해주세요', spanType)
//   }
//   span.classList.add('signup_check_'+ spanType);
//   childLabel.addClass('signup_label');
//   childLabel.prepend(span)
  
// }

// var memeberInput = $('.signup_memberType > input')
// memeberInput.each(function(){
//  insertSpan('circle')
// });



// function createSpan(className){
//   var span = document.createElement('span');
//   span.setAttribute('class',className)
//   return span
// }

// $item_row = $('.signup_memberType  input');
// $item_row.each((idx,item)=>{
//   const label = Array.from(item.parentElement.getElementsByTagName('*'))
//   .filter(list=> list.tagName === 'LABEL' );

//   const itemType = item.type;

//   label.map(label_list=>{
//     console.log(label_list);
//     label_list.classList.add('signup_label');

//     let spClassName = 'circle';
//     if(itemType === 'radio'){
//       spClassName = 'circle'
//     }else if(itemType === 'checkbox'){
//       spClassName = 'square'
//     }
//     label_list.prepend(createSpan(`signup_check_${spClassName}`));
//     // console.log(label_list);
//   })
//   item.setAttribute('class','signup_input')
// })



