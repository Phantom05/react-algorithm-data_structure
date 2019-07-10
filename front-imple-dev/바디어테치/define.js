/* js/foo.js */
// 모듈 정의의 기본 형태
define([ // 의존 모듈들을 나열한다. 모듈이 한 개라도 배열로 넘겨야 한다.  
  'cats',
], function (cats) { // 의존 모듈들은 순서대로 매개변수에 담긴다.
  console.log(cats);

  
  return {
    a:cats
  };
});

// define(function(){
//   var privateValue = 0;
//   return {
//       increment: function(){
//           privateValue++;
//       },

//       decrement: function(){
//           privateValue--;
//       },

//       getValue: function(){
//           return privateValue;
//       }
//   };
// });