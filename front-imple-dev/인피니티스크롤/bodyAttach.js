// define(['increment'], function (dep1, dep2) {

//   //Define the module value by returning a value.
//   return function () {};
// });




function doClickBody(e, elm, clickOutSideCbFn, clickElmFn = () => {}) {
  let container = $(`${elm}`);
  let elements = document.querySelector(`${elm}`);
  if (!container.is(e.target) && container.has(e.target).length === 0) {
    if (elements) clickOutSideCbFn(elements); // 타겟 외 클릭 시
  } else {
    clickElmFn(e) // 타겟 클릭 시
  }
}


// TODO: 포커스 이용하여 만들어보기

// TODO: 이벤트 바인딩



let a = [1, 2, 3];
console.log(a);
let b = a.slice(); // 가짜복사
b.push(6);
console.log(a, b);





$(document).ready(function () {
  var win = $(window);
  var $posts = $('#posts');

  $posts.scrollTop($posts.prop('scrollHeight'))
  // Each time the user scrolls
  $posts.on('scroll', function () {
    // console.log($posts.height() ,$posts.prop('scrollHeight')-$posts.scrollTop(),$posts.scrollTop());

    if ($posts.scrollTop() == 0) {
      console.log('load!');
      // console.log($posts.prop('scrollHeight'));
      const originScrollHeight = $posts.prop('scrollHeight');
      $('#loading').show();

      // Uncomment this AJAX call to test it

      // $.ajax({
      // 	url: 'get-post.php',
      // 	dataType: 'html',
      // 	success: function(html) {
      //     $posts.prepend(randomPost());
      //     const currentScrollHeight =$posts.prop('scrollHeight');
      //     $posts.scrollTop(currentScrollHeight - originScrollHeight)
      //     $('#loading').hide();
      // 	}
      // });
      $posts.prepend(randomPost());
      const currentScrollHeight = $posts.prop('scrollHeight');
      $posts.scrollTop(currentScrollHeight - originScrollHeight)
      $('#loading').hide();




    }

    // if (posts.height() == posts.prop('scrollHeight')-posts.scrollTop()) {
    //   console.log(posts.height);
    // 	$('#loading').show();
    // 	// Uncomment this AJAX call to test it
    // 	/*
    // 	$.ajax({
    // 		url: 'get-post.php',
    // 		dataType: 'html',
    // 		success: function(html) {
    // 			$('#posts').append(html);
    // 			$('#loading').hide();
    // 		}
    // 	});
    // 	*/
    // 	$('#posts').append(randomPost());
    // 	$('#loading').hide();
    // }
  });

})


// Generate a random post
function randomPost() {
  // Paragraphs that will appear in the post
  var paragraphs = [
    '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae suscipit arcu. Praesent pretium orci neque, non egestas massa suscipit non. In urna ligula, pretium ac magna in, consectetur venenatis dui. Etiam id commodo neque, vel semper nunc. Vivamus porttitor condimentum pulvinar. Quisque et consequat mi. Suspendisse luctus, quam in dapibus venenatis, velit erat malesuada lacus, dapibus tincidunt neque ex vitae leo. Suspendisse fermentum sit amet urna eu dignissim. Curabitur vel nibh quis justo volutpat porttitor et tempus sem.</p>',
    '<p>In a luctus purus, in tempus mi. Integer vulputate tincidunt arcu quis aliquet. Maecenas sollicitudin nec nisi sit amet dictum. Curabitur sagittis nulla id sem vulputate, eget blandit nibh ullamcorper. Nam feugiat elementum pharetra. Vestibulum a purus eget mi mattis tincidunt a sed felis. Sed pretium dignissim elementum. Cras est arcu, posuere et justo in, vehicula rutrum elit. Phasellus dictum risus libero, non cursus neque faucibus a. Nunc dignissim at purus vitae condimentum. Curabitur in libero mi.</p>',
    '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at tristique nibh, sed congue ligula. Curabitur eu porttitor tellus. Aliquam eu mollis tortor. Donec tortor sapien, molestie eu turpis vel, ultrices pulvinar orci. Aenean sagittis sem sit amet viverra maximus. Morbi id enim ipsum. Curabitur luctus placerat erat ut volutpat. In quis eros mattis, rutrum neque ut, malesuada neque.</p>',
    '<p>Integer erat eros, vestibulum at tortor vitae, sollicitudin finibus est. Aliquam ornare, elit nec gravida sagittis, sapien nibh elementum felis, eu eleifend eros lectus non mi. Nulla vel nisl scelerisque, consectetur nibh vel, malesuada lacus. Nam lobortis accumsan nisl consequat dictum. Praesent eget lobortis lorem. Ut sed ultrices enim. Nam nec ultricies felis.</p>',
    '<p>Donec hendrerit dolor id auctor ullamcorper. Curabitur ut mauris dolor. Quisque vitae cursus eros, ac rutrum sem. Aenean in turpis turpis. Fusce sit amet libero id massa dictum fermentum at eget arcu. Vestibulum eget blandit urna. In eu tristique augue. Phasellus augue risus, porttitor vel arcu nec, tincidunt laoreet tellus. Nam ornare leo dapibus ipsum dictum interdum.</p>',
    '<p>Nulla molestie porttitor justo vitae pharetra. Proin non convallis lacus, eget malesuada metus. Duis aliquam eu massa molestie rhoncus. Vestibulum a malesuada nulla. Morbi at libero tempus, hendrerit quam vitae, auctor eros. Vivamus tincidunt enim a est tincidunt, sed fringilla erat placerat. Nulla cursus, eros sed posuere sagittis, dui est lobortis tellus, id dapibus dui sem eget enim. Vestibulum eleifend lacus velit, ut suscipit nisi bibendum at. Nulla facilisi. Aenean luctus tellus eget nisi vestibulum, eget interdum lectus efficitur.</p>',
    '<p>Quisque facilisis aliquet dui, ut blandit odio vulputate et. Ut ac nisl turpis. Pellentesque scelerisque massa sit amet ipsum commodo cursus. Aenean eget ante et neque gravida tempor. Phasellus aliquam, purus quis malesuada vestibulum, sem mi cursus justo, a convallis purus dolor non lorem. Nunc dapibus vehicula nisi, eget egestas tellus lacinia vel. Nullam nisl ipsum, vehicula dignissim feugiat eu, semper nec arcu. Duis porttitor ut ex eget commodo. Curabitur accumsan diam ac euismod tincidunt. Cras dui urna, volutpat quis vehicula vitae, rhoncus a lacus. Curabitur ut purus aliquet, venenatis felis in, laoreet massa. Nullam lobortis sollicitudin aliquam. Quisque nec nisl eu sem vulputate venenatis. Proin sagittis erat sit amet sem vestibulum vehicula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>'
  ];

  // Shuffle the paragraphs
  for (var i = paragraphs.length - 1; !!i; --i) {
    var j = Math.floor(Math.random() * i);
    var p = paragraphs[i];
    paragraphs[i] = paragraphs[j];
    paragraphs[j] = p;
  }

  // Generate the post
  var post = '<li>';
  post += '<article>';
  post += '<header><h1>Random Article!</h1></header>';
  post += paragraphs.join('');
  post += '</article>';
  post += '</li>';


  let li = document.createElement('li');
  li.innerHTML = "Nulla molestie porttitor justo vitae pharetra. Proin non convallis lacus, eget malesuada metus. Duis aliquam eu massa molestie rhoncus. Vestibulum a malesuada nulla. Morbi at libero tempus, hendrerit quam vitae, auctor eros. Vivamus tincidunt enim a est tincidunt, sed fringilla erat placerat. Nulla cursus, eros sed posuere sagittis, dui est lobortis tellus, id dapibus dui ";

  return post;
}


function parentRecursion(element, className) {
  while (element = element.parentElement) {
    if (element.className == className) {
      return element
    }
  };
}




// console.log(
//   findParent(
//     document.getElementById('menu'), {
//       id: "menu"
//     }
//   )
// );



// const $testBtn = $('#testBtn');
// const $rmBtn = $('#rmBtn');
// const $bindBtn = $('#bindBtn');

// $testBtn.on('click',function(e){
//   console.log('click');
// })

// $bindBtn.on('click', function(e){
//   $body.bind('click',hello);
// })

// $rmBtn.on('click',function(e){
//   $body.unbind('click',hello);
// })



// $('#button').on('click',function(e){
//   document.getElementById('menu').classList.add('on');
//   console.log('btn');
//   $body.bind('click',hello());
// })


// $body.on('click',function(){
//   hello()
// });

// document.body.addEventListener('click', function (e) {
//   const menu = findParent(e.target, {id:'menu'});
//   console.log(e.target,'body');
//   if(menu){
//     console.log('menu');
//     document.getElementById('menu').classList.remove('on')
//   }
//   // if()
// })



function findParent(elm, attributes) {
  const resArr = [],
    tmp = elm;
  if (attributes && typeof attributes !== "string") {
    for (var attr in attributes) {
      elm = tmp;
      if (attributes.hasOwnProperty(attr)) {
        if (elm.getAttribute(attr) === attributes[attr]) {
          resArr.push(elm);
        } else {
          while (elm = elm.parentElement) {
            if (elm.getAttribute(attr) == attributes[attr]) {
              resArr.push(elm);
              break;
            }
          };
        }
      }
    }
  }
  return (resArr.every(x => x === resArr[0]) && resArr.length === Object.keys(attributes).length) ? resArr[0] : null;
}

function toggleDimControl(attr, fn) {
  return function (e) {
    const menu = findParent(e.target, attr);
    if (!menu) fn(e);
    else {
      console.log('o');
    }
  }
}
// data-dof="toggle-data='menu'"
(function () {


  // Array.from(document.querySelectorAll('[data-toggle-target]')).map(list => {
  //   list.addEventListener('click', function (e) {
  //     e.stopPropagation();
  //     document.querySelector(list.getAttribute('data-toggle-target')).classList.add('on');
  //   })
  // })


  // document.getElementById('button').addEventListener('click',function(e){
  //   e.stopPropagation();
  //   document.getElementById('menu').classList.add('on');
  // });

  // document.body.addEventListener('click',
  // toggleDimControl({id:"menu"},function(){
  //   document.getElementById('menu').classList.remove('on');
  // }))

  // document.body.addEventListener('click',
  // toggleDimControl({id:"modal"},function(){
  //   document.getElementById('modal').classList.remove('on');
  // }))

  // document.body.addEventListener('click',function(e){
  //   console.log('f');
  // })

  // document.body.addEventListener('click', function (e) {

  //   toggleDimControl({
  //     id: "modal"
  //   }, function () {
  //     document.getElementById('modal').classList.remove('on');
  //   })(e)

  //   toggleDimControl({
  //     id: "menu"
  //   }, function () {
  //     document.getElementById('menu').classList.remove('on');
  //   })(e)


  // })


})()

class toggleDim {
  constructor(config) {
    this.config = config;
    this.setting(config)
  }
  setting(config) {
    const configElmList = Array.from(document.querySelectorAll(`[${config.attr}]`));
    if (configElmList.length) {
      configElmList.map(list => {
        list.addEventListener('click', function (e) {
          e.stopPropagation();
          document.querySelector(list.getAttribute(`${config.attr}`)).classList.add(config.control.class);
        })
      })

      this.bodySetting(configElmList, config);
    }
  }
  bodySetting(list, config) {
    const main = this;
    document.body.addEventListener('click', function (e) {
      list.map(in_list => {
        const targetId = in_list.getAttribute(config.attr).substr(1);
        main.toggleDimControl({
          id: targetId
        }, function () {
          document.getElementById(`${targetId}`).classList.remove(config.control.class);
        })(e)

      })
    })
  }
  findParent(elm, attributes) {
    const resArr = [],
      tmp = elm;
    if (attributes && typeof attributes !== "string") {
      for (var attr in attributes) {
        elm = tmp;
        if (attributes.hasOwnProperty(attr)) {
          if (elm.getAttribute(attr) === attributes[attr]) {
            resArr.push(elm);
          } else {
            while (elm = elm.parentElement) {
              if (elm.getAttribute(attr) == attributes[attr]) {
                resArr.push(elm);
                break;
              }
            };
          }
        }
      }
    }
    return (resArr.every(x => x === resArr[0]) && resArr.length === Object.keys(attributes).length) ? resArr[0] : null;
  }

  toggleDimControl(attr, fn) {
    return function (e) {
      const menu = findParent(e.target, attr);
      if (!menu) fn(e);
      else {
        console.log('o');
      }
    }
  }


}

new toggleDim({
  attr: "data-toggle-target",
  control: {
    class: "on"
  }
})