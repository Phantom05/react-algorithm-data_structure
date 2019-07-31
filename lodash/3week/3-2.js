// console.log(`hello world`);
// _.attempt(func, [args])
// func를 호출하고 결과 또는 catch 된 오류 객체를 반환합니다. func이 호출 될 때 추가 인수가 제공됩니다.

// var elements = _.attempt(function(selector){
//   console.log(selector);
//   return document.querySelectorAll(selector)
// },'>_>');

// console.log(elements);
// if(_.isError(elements)){
//   elements = []
// }
// console.log(elements);


// _.bindAll(object, methodNames)

// 기존 메서드를 덮어 쓰면서 개체의 메서드를 개체 자체에 바인딩합니다.

// 참고 :이 메서드는 바운드 함수의 "길이"속성을 설정하지 않습니다.

var view = {
  'label': 'docs',
  'click': function () {
    console.log(`clicked ${this.label}`);
  }
}

_.bindAll(view, ['click']);
// 

$('#btn').on('click', view.click)


function dropDown(timer = 200,controlClass = 'on',fn=()=>{}) {
  const $get_slide_boxs = $('[data-slide]');

  const $slideLists = $('[data-slide-list]');
  $slideLists.find(`li`).slideUp(0);

  if ($get_slide_boxs) {
    $get_slide_boxs.each(function (val, item) {
      const $menu_title_box = $(item).find('[data-slide-title]');
      if ($menu_title_box) {
        $menu_title_box.on('click', find_li_and_slideToggle)
        function find_li_and_slideToggle() {
          let $ul = $menu_title_box.next('[data-slide-list]');
          $ul.toggleClass(controlClass).find('li').slideToggle(timer)
          // $ul.toggleClass('on').slideToggle(timer)
          fn()
        }
      }
    })
  }
}


// _.cond(pairs)
// 쌍에 대해 반복하고 첫 번째 술어의 해당 함수를 호출하여 진실을 반환하는 함수를 만듭니다. 술부 - 함수 쌍은이 바인딩과 작성된 함수의 인수로 호출됩니다.

var func= _.cond([
  [_.matches({'a'  : 1}),          _.constant('matches A')],
  [_.conforms({'b' : _.isNumber}), _.constant('matches B')],
  [_.stubTrue,                     _.constant('no match')]
])

console.log(
  func({'a':1,'b':2})
);
// => 'matches A'

console.log(
  func({ 'a': 0, 'b': 1 })
);
// => 'matches B'
 
console.log(
  func({ 'a': '1', 'b': '2' })
);
// => 'no match'

// _.conforms(source)
// 주어진 개체의 해당 속성 값을 사용하여 source의 predicate 속성을 호출하는 함수를 만듭니다. 모든 조건자가 truthy를 반환하면 true를 반환하고 그렇지 않으면 false를 반환합니다.

// 참고 : 생성 된 함수는 소스가 부분적으로 적용된 _.conformsTo와 같습니다.

var objects = [
  {'a':2,'b':1},
  {'a':1,'b':2}
];

var con = _.filter(objects, _.conforms({'b': function(n){ 
  console.log(n);
  // 객체 이름에 해당하는 값이 들어오게됨.객체로 들어왔는데 b의 값이 1이상인것을 찾으라함.
  // n 으론 1,2가 들어오게됨.
  return n >1; 
}}));

// _.constant(value)
// 값을 반환하는 함수를 만듭니다.
// _.constant({'a':1}) =>  function(){return {'a':1}}
// times => iteratee를 n 번 호출하여 각 호출의 결과 배열을 반환합니다. iteratee는 하나의 인수로 호출됩니다. (색인).

var objects = _.times(2, _.constant({'a':1}));
console.log(objects);
console.log(
  _.constant({'a':1})
);

// _.defaultTo(value, defaultValue)
// 값을 검사하여 기본값을 해당 위치에 반환해야하는지 여부를 결정합니다. value가 NaN, null 또는 미정 도리의 경우는 defaultValue가 돌려 주어집니다.
// 첫번째 value가 있으면 value, 없으면 defaultValue인자가 반환됨.
_.defaultTo(1, 10);
// => 1
 
_.defaultTo(undefined, 10);
// => 10


console.clear()

// _.flow([funcs])

// 생성 된 함수의이 바인딩을 사용하여 주어진 함수를 호출 한 결과를 리턴하는 함수를 작성합니다. 여기서 각 호출에는 이전 함수의 리턴 값이 제공됩니다.
function square(n){
  return n * n;
}

var addSquare = _.flow([function(a,b){
  // a, b => 1, 2 
  return a+b
}, 
function(b){
  // 첫번째 인자에서 반환된 값이 두번째 인자로 들어오게됨.
  return b * b
},
function(b){
  // 그 값이 3번째 인자로 이루어지진 않음 2개만 가능.
  console.log(b);
}]);
console.log(
  addSquare(1,2)
);


// _.flowRight([funcs])
// 이 메소드는 오른쪽에서 왼쪽으로 주어진 함수를 호출하는 함수를 작성한다는 점을 제외하면 _.flow와 유사합니다.
function square(n) {
  return n * n;
}
 
var addSquare = _.flowRight([square, _.add]);
addSquare(1, 2);
// => 9

// _.identity(value)
// 이 메소드는받은 첫 번째 인수를 리턴합니다.
var object = {'a': 1};
console.log(_.identity(object) === object);
console.log(
  _.identity(object)
);

// _.iteratee([func=_.identity])
// 생성 된 함수의 인수를 사용하여 func을 호출하는 함수를 만듭니다. func이 속성 이름 인 경우 생성 된 함수는 지정된 요소의 속성 값을 반환합니다. func가 배열 또는 객체 인 경우 생성 된 함수는 동등한 소스 속성이 포함 된 요소에 대해 true를 반환하고, 그렇지 않으면 false를 반환합니다.

var users = [
  {'user':'barney','age':36,'active':true},
  {'user':'fred','age':40,'active':false}
]


console.log(
  _.filter(users, _.iteratee({'user':'barney','active':true}))
);
console.log(
  _.filter(users,_.iteratee(['user','fred']))
);
_.map(users,_.iteratee(function(e){
  console.log(e);
}))

// _.iteratee([func=_.identity])

var mary = {
  name: 'mary',
  gender: 'female',
  age: 25,
  job: {
      title: 'teacher',
      salary: 10000
  }
}

var dave = {
  name: 'dave',
  gender: 'male',
  age: 27
}

var oswald = {
  name: 'oswald',
  gender: 'male',
  age: 25
}

var people = [mary, dave, oswald];
// iteratee 가 문자열로 호출 되면 , 제공된 문자열의 키를 가진 객체의 속성을 반환하는 함수를 반환합니다.
var getAge = _.iteratee('age');
// var jobtitle = _.iteratee('job.title');
// 이것도 가능
function getAge(object){
  return object['age'];
}
var marysage = getAge(mary);
var davesage = getAge(dave);
console.log(davesage);

// 일치 속성
var is25 = _.iteratee({age: 25});
var isMary25 = is25(mary);
// true
var isDave25 = is25(dave);
//  false


// _.matches(source)
// 지정된 객체와 소스를 부분적으로 비교해, 지정된 객체가 등가의 프로퍼티 치를 가지고있는 경우는 true를 돌려 주어, 그렇지 않은 경우는 false를 작성하는 함수를 작성합니다.

// 참고 : 생성 된 함수는 부분적으로 소스가 적용된 _.isMatch와 같습니다.

// 부분 비교는 빈 배열 및 빈 객체 소스 값을 배열 또는 객체 값과 각각 일치시킵니다. 지원되는 값 비교 목록은 _.isEqual을 참조하십시오.

var objects = [
  {'a':1,'b':2,'c':3},
  {'a':4,'b':5,'c':6}
];

console.log(
  _.filter(objects, _.matches({'a':4,'c':6}))
);


// _.matchesProperty(path, srcValue)

// 주어진 객체의 경로에있는 값과 srcValue를 부분적으로 비교하여 객체 값이 동일하면 true를 반환하고 그렇지 않으면 false를 반환하는 함수를 만듭니다.

// 참고 : 부분 비교는 빈 배열과 빈 객체 srcValue 값을 각각 임의의 배열 또는 객체 값과 비교합니다. 지원되는 값 비교 목록은 _.isEqual을 참조하십시오.

var objects = [
  {'a':1,'b':2,'c':3},
  {'a':4,'b':5,'c':6}
];
console.log(
  _.find(objects, _.matchesProperty('a',4))
);

console.clear();
// _.method(path, [args])
// 지정된 객체의 경로에있는 메서드를 호출하는 함수를 만듭니다. 추가 인수가 호출 된 메소드에 제공됩니다.
// 경로에 있는 메서드를 호출
var objects = [
  {'a':{'b': _.constant(2)}},
  {'a':{'b': _.constant(1)}}
];
console.log(
  _.map(objects, _.method('a.b'))
);

// _.methodOf(object, [args])
// _.method의 반대; 이 메소드는 객체의 지정된 경로에서 메소드를 호출하는 함수를 작성합니다. 추가 인수가 호출 된 메소드에 제공됩니다.

var array = _.times(3, _.constant);
console.log(array[2]());
var object = {'a':array,b:array,'c':array};
console.log(
  _.map(['a[2]','c[0]'], _.methodOf(object))
);
//a안에있는 함수에 2를 넣어 실행
//c안에있는 함수에 0을 넣어 실행

// _.mixin([object=lodash], source, [options={}])
// 원본 개체의 모든 열거 가능한 문자열 키 기능 속성을 대상 개체에 추가합니다. object가 함수이면 메서드가 프로토 타입에도 추가됩니다.

// 주 : _.runInContext를 사용하여 원본을 수정하여 충돌이 발생하지 않도록 원시 lodash 함수를 작성하십시오.

function vowels(string){
  return _.filter(string, function(v){
    return /[aeiou]/i.test(v);
  })
}
_.mixin({'vowels':vowels})
// 로대쉬에 함수를 추가함. 제이쿼리의 fn 같은 기능.
// vowels함수를 커링시켜놈.
console.log(
  _.vowels('fred')
);


// _.noConflict()
// _ 변수를 이전 값으로 되돌리고 lodash 함수에 대한 참조를 반환합니다.

// _.noop()

// 이 메소드는 undefined를 리턴합니다.
console.log(
  _.times(2, _.noop)
);
// => [undefined, undefined]


// _.nthArg([n=0])
// 인덱스 n에서 인수를 가져 오는 함수를 만듭니다. n가 음수이면 끝에있는 n 번째 인수가 반환됩니다.
// 고정적 인덱스의 인수를 가져오고 싶을때 사용.
var func = _.nthArg(1);
console.log(
  func('a','b','c','d')
);

// _.over([iteratees=[_.identity]])
// 수신 한 인수로 iteratees를 호출하고 결과를 리턴하는 함수를 작성합니다.
var func = _.over([Math.max, Math.min]);
 
func(1, 2, 3, 4);
// => [4, 1]
func(5,100, 3, 4);
// => [100, 3]
console.log(
  func(5,100, 3, 4)
);


// _.overEvery([predicates=[_.identity]])
// 수신 한 인수로 호출 될 때 모든 술어가 진실을 리턴하는지 점검하는 함수를 작성합니다.

var func = _.overEvery([Boolean, isFinite]);
 
func('1');
// => true
 
func(null);
// => false
 
func(NaN);
// => false


// _.property(path)
// 지정된 객체의 경로에있는 값을 반환하는 함수를 만듭니다.
var objects = [
  { 'a': { 'b': 2 } },
  { 'a': { 'b': 1 } }
];
 
_.map(objects, _.property('a.b'));
// => [2, 1]
 
_.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
// => [1, 2]

// _.propertyOf(object)

// _.property의 반대; 이 메서드는 object의 지정된 경로에서 값을 반환하는 함수를 만듭니다.

var array = [0,1,2];
var object = {'a':array,'b':array,'c':array};
console.log(
  _.map(['a[2]','c[0]'], _.propertyOf(object))
);

// _.range([start=0], end, [step=1])
// 시작부터 끝까지 포함하는 숫자 배열 (양수 또는 음수)을 만듭니다. 음의 시작이 끝이나 단계없이 지정되면 -1 단계가 사용됩니다. end가 지정되지 않으면 start로 시작하도록 설정되고 0으로 설정됩니다.

// 참고 : JavaScript는 예기치 않은 결과를 생성 할 수있는 부동 소수점 값을 해결하기 위해 IEEE-754 표준을 따릅니다.

console.log(
  _.range(0,1,0.1)
);
// =>  [0, 0.1, 0.2, 0.30000000000000004, 0.4, 0.5, 0.6, 0.7, 0.7999999999999999, 0.8999999999999999]

_.range(4);
// => [0, 1, 2, 3]
 
_.range(-4);
// => [0, -1, -2, -3]
 
_.range(1, 5);
// => [1, 2, 3, 4]
 
_.range(0, 20, 5);
// => [0, 5, 10, 15]
 
_.range(0, -4, -1);
// => [0, -1, -2, -3]
 
_.range(1, 4, 0);
// => [1, 1, 1]
 
_.range(0);
// => []


// _.rangeRight([start=0], end, [step=1])
// 이 메소드는 값이 내림차순으로 채워지는 것을 제외하고는 _range와 유사합니다.
// 거꾸로 내려옴.

console.log(
  _.rangeRight(4,2)
);

_.rangeRight(4);
// => [3, 2, 1, 0]
 
_.rangeRight(-4);
// => [-3, -2, -1, 0]
 
_.rangeRight(1, 5);
// => [4, 3, 2, 1]
 
_.rangeRight(0, 20, 5);
// => [15, 10, 5, 0]
 
_.rangeRight(0, -4, -1);
// => [-3, -2, -1, 0]
 
_.rangeRight(1, 4, 0);
// => [1, 1, 1]
 
_.rangeRight(0);
// => []


console.clear()
// _.runInContext([context=root])
// 컨텍스트 오브젝트를 사용하여 새로운 pristine lodash 함수를 작성하십시오.


console.log(
  _.mixin({ 'foo': _.constant('foo') })
);


var lodash = _.runInContext();
lodash.mixin({ 'bar': lodash.constant('bar') });
 
_.isFunction(_.foo);
// => true
_.isFunction(_.bar);
// => false
 
lodash.isFunction(lodash.foo);
// => false
lodash.isFunction(lodash.bar);
// => true
 
// Create a suped-up `defer` in Node.js.
// var defer = _.runInContext({ 'setTimeout': setImmediate }).defer;


_.stubArray()
// 이 메소드는 새로운 빈 배열을 리턴합니다.

_.stubFalse()
// 이 메소드는 false 리턴합니다.

_.stubObject()
// 이 메소드는 {} 리턴합니다.


_.stubString()
// 이 메소드는 ''를 반환합니다.

_.stubTrue()
// 이 메소드는 true를 반환합니다.

// _.times(n, [iteratee=_.identity])
// iteratee를 n 번 호출하여 각 호출의 결과 배열을 반환합니다. iteratee는 하나의 인수로 호출됩니다. (색인).
console.log(
  _.times(4,String)
);

// _.toPath(value)
// 값을 속성 경로 배열로 변환합니다.


// _.uniqueId([prefix=''])
// 고유 한 ID를 생성합니다. prefix가 주어지면 ID가 추가됩니다.
console.log(
  _.uniqueId('contact_')
);
console.log(
  _.uniqueId()
);

const hello = (name) => ()=> `${name} world`;
hello('zzz')()

function what(){
  return function(){
  }
}