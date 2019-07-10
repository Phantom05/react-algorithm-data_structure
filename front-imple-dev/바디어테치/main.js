// require([  
//   'define'
// ], function (foo) {
  
//   console.log(foo);

// });


// import {name,wow} from './cats.js';
// console.log(wow());




function doClickBody(e, elm, clickOutSideCbFn,clickElmFn=()=>{}) {
  let container = $(`${elm}`);
  let elements = document.querySelector(`${elm}`);
  if (!container.is(e.target) && container.has(e.target).length === 0) {
    if (elements)  clickOutSideCbFn(elements);  // 타겟 외 클릭 시
  }else{
    clickElmFn(e) // 타겟 클릭 시
  }
}

function doClickBodyArr(e,elmarr,tarelm, clickOutSideCbFn,clickElmFn=()=>{}) {
  let container = [];
  let elements = document.querySelector(`${tarelm}`);
  elmarr.forEach(list=>container.push($(`${list}`)));


  console.log(container[0]);



  // if (!container.is(e.target) && container.has(e.target).length === 0) {
  //   if (elements)  clickOutSideCbFn(elements);  // 타겟 외 클릭 시
  // }else{
  //   clickElmFn(e) // 타겟 클릭 시
  // }
}

document.body.addEventListener('click',function(e){
  console.log(
    e.target
  );
})

document.getElementById('button').addEventListener('click',function(e){
  console.log(e.target);
  document.getElementById('menu').classList.add('on');

  
  document.body.addEventListener('click',function(e){
    console.log('꺄');
  })
})


document.getElementById('remove').addEventListener('click',function(e){

})

console.dir(document.body);


var event = new Event('build');

elem.addEventListener('build',function(e){

})

elem.dispatchEvent(event);

select1.addEventListener('change',function(e){
  console.log(
    inner.children
  );
})

function bodyClickFn(){

  document.body.addEventListener('click',function(){

  })
  
}


