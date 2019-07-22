// _.curryRight(func, [arity=func.length])


// 이 메소드는 인수가 _.partial 대신 _.partialRight의 func에 func에 적용된다는 점을 제외하고는 _curry와 같습니다.

// 단일체 빌드에서 기본적으로 _ 인 _.curryRight.placeholder 값은 제공된 인수의 자리 표시 자로 사용될 수 있습니다.

// 참고 :이 메서드는 카레 함수의 "길이"속성을 설정하지 않습니다.
var abc = function(a, b, c) {
  return [a, b, c];
};

var curried = _.curryRight(abc);
 
curried(3)(2)(1);
// => [1, 2, 3]
 
curried(2, 3)(1);
// => [1, 2, 3]
 
curried(1, 2, 3);
// => [1, 2, 3]
 
// Curried with placeholders.
curried(3)(1, _)(2);
// => [1, 2, 3]

console.log(
  curried(3,2,1)
);



// _.debounce(func, [wait=0], [options={}])
// 디 바운스 함수가 ​​호출 된 마지막 시간이 경과 한 후 대기 밀리 초가 될 때까지 func 호출을 지연시키는 디 바운스 함수를 작성합니다. 디 바운스 된 함수에는 지연된 func 호출을 취소하는 cancel 메소드와 즉시 func 호출을 플러시하는 메소드가 있습니다. func가 대기 시간 초과의 시작 및 / 또는 후행 가장자리에서 호출되어야하는지 여부를 나타내는 옵션을 제공하십시오. func는 debounced 함수에 제공되는 마지막 인자로 호출됩니다. 이후에 debounced 함수를 호출하면 마지막 func 호출의 결과가 반환됩니다.


var debounceCount = 0;
var notDebounceCount = 0;

var debounceFn = _.debounce(function(){
  $('#debounce').html(`Debounce : ${++debounceCount}`)
},10)
var notDebounceFn = function(){
  $('#notDebounce').html(`notDebounceCount : ${++notDebounceCount}`)
}
$(document).on('mousemove',function(){
  debounceFn()
  notDebounceFn()
})


// 최대 대기 밀리 초마다 func 만 호출하는 스로틀 기능을 만듭니다. throttled 함수에는 지연 func 호출을 취소하는 cancel 메소드와 즉시 func 호출을 호출하는 flush 메소드가 있습니다. func가 대기 시간 초과의 시작 및 / 또는 후행 가장자리에서 호출되어야하는지 여부를 나타내는 옵션을 제공하십시오. func은 throttled 함수에 제공된 마지막 인수로 호출됩니다. 이후 스로틀 링 된 함수를 호출하면 마지막 func 호출의 결과가 반환됩니다.

var noThrottledCount = 0;
var throttledCount = 0;

var noThrottledElem = document.getElementById('no-throttle');
var throttledElem = document.getElementById('throttle');

var noThrottledFunc = function() {
	noThrottledElem.innerHTML = noThrottledCount++;
};

var throttledFunc = _.throttle(function() {
	throttledElem.innerHTML = throttledCount++;
}, 100);


document.documentElement.onmousemove = function() {
	noThrottledFunc();
  throttledFunc();
};



// _.defer(func, [args])
// 현재 호출 스택이 지워질 때까지 func을 호출합니다. func이 호출 될 때 추가 인수가 제공됩니다.

var people = [
  {
    name:"이현섭",
    age:27
  },
  {
    name:"이승민",
    age:28,
  },
  {
    name:"오윤근",
    age:"26"
  }
];

var base = {home:'한강빌리지'};
// people = people.map((person) => _.extend(base,person));
console.log(people);
people = people.map((person) => _.extend(person,base));
console.log(people);


// extend _.extend(destination, *sources)


// “extend는 매개변수의 순서에 유의해서 사용해라”라는 말로 축약될 수 있는 이야기를 이렇게 늘어 놓을 필요가 있나 싶지만, 이 문제로 몇 시간 가량을 날려먹었기 때문에 이렇게 포스팅 기록을 남긴다. 역시 API 문서는 영어라고 읽기 싫다고 넘기지말고 주의 깊게 보아야겠다.

// _.defer(func, [args])
// // 현재 호출 스택이 지워질 때까지 func을 호출합니다. func이 호출 될 때 추가 인수가 제공됩니다.

// _.defer(function(text) {
//   console.log(text);
// }, 'deferrefd');

// console.log('wow');
// _.defer(function(text) {
//   console.log(text);
// }, 'deferred');


// document.addEventListener('click',function(){
//   console.log('f');
// })


// // _.delay(func, wait, [args])
// // 대기 밀리 초 후에 func을 호출합니다. func이 호출 될 때 추가 인수가 제공됩니다.

// _.delay(function(text) {
//   console.log(text);
// }, 1000, 'later');


// _.flip(func)
// 인수가 반전 된 func을 호출하는 함수를 만듭니다.
var flipped = _.flip(function() {
  return _.toArray(arguments);
});
 
flipped('a', 'b', 'c', 'd');
// => ['d', 'c', 'b', 'a']


// _.memoize(func, [resolver])

// func의 결과를 메모하는 함수를 만듭니다. resolver가 제공되면 memoized 함수에 제공된 인수를 기반으로 결과를 저장하기위한 캐시 키를 결정합니다. 기본적으로 memoized 함수에 제공된 첫 번째 인수는 맵 캐시 키로 사용됩니다. func는 memoized 함수의 바인딩과 함께 호출됩니다.

// 참고 : 캐시는 memoized 함수의 캐시 속성으로 표시됩니다. _memoize.Cache 생성자를 clear, delete, get, has 및 set의 Map 메소드 인터페이스를 구현하는 인스턴스로 대체하여 생성을 사용자 정의 할 수 있습니다.

var object = { 'a': 1, 'b': 2 };
var other = { 'c': 3, 'd': 4 };
 
var values = _.memoize(_.values);
values(object);
// => [1, 2]
 
values(other);
// => [3, 4]
 
object.a = 2;
values(object);
// => [1, 2]
 
// Modify the result cache.
values.cache.set(object, ['a', 'b']);
values(object);
// => ['a', 'b']
 
// Replace `_.memoize.Cache`.
_.memoize.Cache = WeakMap;

var test = _.memoize(function(val){
  return val
});
console.log(
  test(object)
);



// _.negate(predicate)
// 술어 func의 결과를 무효화하는 함수를 작성합니다. func 술어는이 바인딩과 작성된 함수의 인수로 호출됩니다.

function isEven(n){
  return n %2 == 0;
}
console.log(
  _.filter([1,2,3,4,5], _.negate(isEven))
);



// _.once(func)
// func을 한 번만 호출하도록 제한된 함수를 만듭니다. 함수를 반복하여 호출하면 첫 번째 호출의 값이 반환됩니다. func은이 바인딩과 생성 된 함수의 인수를 사용하여 호출됩니다.

function bem(){
  console.log('BEM!');
}
var initialize = _.once(bem);
initialize();
initialize();
initialize();
// => `createApplication` is invoked once


console.clear()
// _.overArgs(func, [transforms=[_.identity]])
// 인수가 변환 된 func을 호출하는 함수를 만듭니다.

function doubled(n) {
  return n * 2;
}
 
function square(n) {
  return n * n;
}
 
var func = _.overArgs(function(x, y) {
  return [x, y];
}, [square, doubled]);
 
func(9, 3);
// => [81, 6]
 
func(10, 5);
// => [100, 10]



var obj = {}
// _.partial(func, [partials])
function greet(greeting, name) {
  return greeting + ' ' + name;
}
 
var sayHelloTo = _.partial(greet, 'hello');
console.log(
  sayHelloTo('fred')
);;
// => 'hello fred'
 
// Partially applied with placeholders.
var greetFred = _.partial(greet, _, 'fred');
greetFred('hi');




// => 'hi fred'

function acc(f){
  let v = 0;
  return function(){
    v = f(v);
    return v;
  }
}

const partial = function(f,v1){
  return function(v2){
    return f(v1,v2)
  }
}
const add = function(v1,v2){
  return v1+v2
}

const add3 = partial(add, 3);
const acc3 = acc(add3);
console.log(acc3(),acc3(),acc3());

// _.partialRight(func, [partials])


// 이 메소드는 부분적으로 적용된 인수가 수신 한 인수에 추가된다는 점을 제외하면 _.partial과 유사합니다.

// 모 놀리 식 빌드에서 기본적으로 _ 인 _.partialRight.placeholder 값은 부분적으로 적용된 인수의 자리 표시 자로 사용될 수 있습니다.

// 참고 :이 메서드는 부분적으로 적용된 함수의 "length"속성을 설정하지 않습니다.

// _.rearg(func, indexes)
// 첫 번째 인덱스의 인수 값이 첫 번째 인수로 제공되고 두 번째 인덱스의 인수 값이 두 번째 인수로 제공되는 등 지정된 인덱스에 따라 정렬 된 인수로 func을 호출하는 함수를 만듭니다.

var rearged = _.rearg(function(a, b, c) {
  return [a, b, c];
}, [2, 0, 1]);
 
console.log(
  rearged('a','b','c')
);
["c", "a", "b"]
// => ['a', 'b', 'c']


// _.rest(func, [start=func.length-1])
// 생성 된 함수와 인수의이 바인딩을 사용하여 func을 호출하는 함수를 만듭니다.이 함수는 인수로 배열로 제공됩니다.
var say = _.rest(function(what) {
  console.log(what)
});
 
console.log(
  say('hello', 'fred', 'barney', 'pebbles')
);
// => 'hello fred, barney, & pebbles'

console.log('hello world');


// _.spread(func, [start=0])


// Create 함수의이 바인딩과 Function # apply와 같은 인수 배열을 사용하여 func을 호출하는 함수를 만듭니다.

var say = _.spread(function(who, what) {
  return who + ' says ' + what;
});
 
console.log(
  say(['fred', 'hello'])
);
// => 'fred says hello'
 
var numbers = Promise.all([
  Promise.resolve(40),
  Promise.resolve(36)
]);
 
console.log(
  numbers.then(_.spread(function(x, y) {
    return x + y;
  }))
);
// => a Promise of 76

// _.throttle(func, [wait=0], [options={}])
function hell(){
  console.log('hello');
}
var throttled = _.throttle(hell,300000, {'trailing':false});
$(document).on('ckick',throttled)


// _.unary(func)

// 추가 인수를 무시하고 최대 하나의 인수를 허용하는 함수를 만듭니다.


console.log(
  _.map(['6', '8', '10',[2,5],{d:1}], _.unary(function(x){return x}))
);
// => [6, 8, 10]

console.log(
  _.unary(function(x){return x})
);

// _.wrap(value, [wrapper=identity])
// 래퍼를 첫 번째 인수로 제공하는 함수를 만듭니다. 함수에 제공된 추가 인수는 랩퍼에 제공된 인수에 추가됩니다. 랩퍼는 작성된 함수의이 Y 인딩으로 호출됩니다.


// var p = _.wrap(_.escape, function(func, text) {
//   return '<p>' + func(text) + '</p>';
// });
 
var p = _.wrap(function(v){return v+' hehe'}, function(func, text) {
  return '<p>' + func(text) + '</p>';
});

console.log(
  p('fred, barney, & pebbles')
);
// => '<p>fred, barney, &amp; pebbles</p>'


// _.castArray(value)
// 값이 배열이 아닌 경우 값을 배열로 변환합니다.

console.log(
  _.castArray('1')
);
_.castArray(1);
// => [1]
 
_.castArray({ 'a': 1 });
// => [{ 'a': 1 }]
 
_.castArray('abc');
// => ['abc']
 
_.castArray(null);
// => [null]
 
_.castArray(undefined);
// => [undefined]
 
_.castArray();
// => []
 
var array = [1, 2, 3];
console.log(
  _.castArray(array) === array
)
// => true



// _.clone(value)
// 참고 :이 방법은 구조적 복제 알고리즘을 기반으로하며 복제 배열, 배열 버퍼, 부울, 날짜 개체,지도, 숫자, 개체 개체, 정규식, 집합, 문자열, 기호 및 형식이 지정된 배열을 지원합니다. arguments 객체의 자체 열거 가능 속성은 일반 객체로 복제됩니다. 오류 객체, 함수, DOM 노드 및 WeakMaps와 같은 복제 불가능한 값에 대해서는 빈 객체가 반환됩니다.

var objects = [{'a':1},{'b':2}];

var shallow = _.clone(object);
console.log(shallow[0] === objects[0]);
objects.a = 'wow';
objects[0].a = 5

console.log(object);
// 0: {a: 5}
// 1: {b: 2}
// a: "wow"
console.log(shallow);
// 0: {a: 5}
// 1: {b: 2}

// 클론했을때 현재 상황만 참조하고 그 뒤로 추가하는것들은 복사가 안됨.


// _.cloneDeep(value)
// 이 메소드는 재귀 적으로 값을 복제한다는 점을 제외하면 _.clone과 유사합니다.

var objects = [{ 'a': 1 }, { 'b': 2 }];
 
var deep = _.cloneDeep(objects);
console.log(deep[0] === objects[0]);
// => false

var arr = [1,2,3];
var arr2 =  _.clone(arr);
arr.push(3);
arr[0] = 5;
console.log(
 arr,arr2
);

function customizer(value){
  if(_.isElement(value)){
    return value.cloneNode(true);
  }
}
var el = _.cloneDeepWith(document.body,customizer);
console.log(el);
// _.cloneDeepWith(value, [customizer])
// 이 메소드는 재귀 적으로 값을 복제한다는 점을 제외하면 _.cloneWith와 같습니다.
// _.cloneWith(value, [customizer])


// 이 메서드는 _.clone과 비슷하지만 복제 된 값을 생성하기 위해 호출되는 사용자 지정자를 허용한다는 점만 다릅니다. 사용자 정의 프로그램이 undefined를 반환하면 복제가 대신 메소드에 의해 처리됩니다. 사용자 정의 프로그램은 최대 네 개의 인수로 호출됩니다. (값 [, 색인 | 키, 객체, 스택]).
console.clear();
function customizer(value) {
  if (_.isElement(value)) {
    return value.cloneNode(false);
  }
}
 
var el = _.cloneWith(document.body, customizer);
 
console.log(el === document.body);
// => false
console.log(el.nodeName);
// => 'BODY'
console.log(el.childNodes.length);
// => 0
console.log(el);

console.log(
  _.clone(document.body) === document.body
);


// _.conformsTo(object, source)
// 객체의 해당 속성 값을 사용하여 source의 predicate 속성을 호출하여 객체가 source를 준수하는지 확인합니다.

// 주 :이 메소드는 소스가 부분적으로 적용될 때 _.conforms와 동일합니다.
var object = { 'a': 1, 'b': 2 };
console.log(
  _.conformsTo(object,{'b':function(n){return n>1}})
);



// _.eq(value, other)

// 두 값 사이의 SameValueZero 비교를 수행하여 두 값이 같은지 확인합니다.

var object = { 'a': 1 };
var other = { 'a': 1 };
 
_.eq(object, object);
// => true
 
_.eq(object, other);
// => false
 
_.eq('a', 'a');
// => true
 
_.eq('a', Object('a'));
// => false
 
_.eq(NaN, NaN);
// => true

// _.gt(value, other)
// value값이 이 other 것보다 큰지 점검합니다.

_.gt(3, 1);
// => true
 
_.gt(3, 3);
// => false
 
_.gt(1, 3);
// => false



// _.gte(value, other)

// 값이 other보다 크거나 같은지 확인합니다.
_.gte(3, 1);
// => true
 
_.gte(3, 3);
// => true
 
_.gte(1, 3);
// => false


// _.isArguments(value)

// 값이 인수 객체 일 가능성이 있는지 확인합니다.
_.isArguments(function() { return arguments; }());
// => true
 
_.isArguments([1, 2, 3]);
// => false
console.clear()

// 값이 Array 객체로 분류되는지 확인합니다.

// _.isArray(value)

console.log(
  _.isArray(function(){return arguments})
);


// _.isArrayBuffer(value)
_.isArrayBuffer(new ArrayBuffer(2));
// => true
 
_.isArrayBuffer(new Array(2));
// => false



// _.isArrayLike(value)
_.isArrayLike([1, 2, 3]);
// => true
 
_.isArrayLike(document.body.children);
// => true
 
_.isArrayLike('abc');
// => true
 
_.isArrayLike(_.noop);
// => false


// _.isArrayLikeObject(value)



// _.isBoolean(value)


// _.isBuffer(value)

// _.isDate(value)


// _.isElement(value)
// 값이 DOM 요소인지 확인합니다.
// 값이 Date 객체로 분류되는지 확인합니다.



// 값이 배열 형인지 확인합니다. 값이 함수가 아니고 0보다 크고 같고 Number.MAX_SAFE_INTEGER보다 작거나 같은 정수인 value.length를 갖는 경우 값은 배열과 같은 것으로 간주됩니다.


// 이 메소드는 value가 객체인지 여부를 확인한다는 점을 제외하면 _.isArrayLike와 유사합니다.



// _.isEmpty(value)


// 값이 빈 객체, 컬렉션, 맵 또는 세트인지 확인합니다.

// 개체에 열거 가능한 문자열 키 특성이없는 경우 개체는 비어있는 것으로 간주됩니다.

// 인수 오브젝트, 배열, 버퍼, 문자열 또는 jQuery와 유사한 콜렉션과 같은 배열 형 값은 길이가 0이면 비어있는 것으로 간주됩니다. 마찬가지로 크기가 0 인 경우 맵 및 세트는 비어있는 것으로 간주됩니다.
_.isEmpty(null);
// => true
 
_.isEmpty(true);
// => true
 
_.isEmpty(1);
// => true
 
_.isEmpty([1, 2, 3]);
// => false
 
_.isEmpty({ 'a': 1 });
// => false


// _.isEqual(value, other)


// 두 값을 동일하게 비교할 수 있도록 두 값을 깊이 비교합니다.

// 참고 :이 메서드는 배열, 배열 버퍼, 부울 값, 날짜 개체, 오류 개체, 맵, 숫자, 개체 개체, 정규식, 집합, 문자열, 기호 및 입력 된 배열 비교를 지원합니다. 객체 객체는 상속 된 열거 가능 속성이 아닌 자체 객체에 의해 비교됩니다. 함수와 DOM 노드는 엄격한 동등성, 즉 ===로 비교됩니다.

var object = { 'a': 1 };
var other = { 'a': 1 };
 
_.isEqual(object, other);
// => true
 
// object === other;
// => false

function hello(){}
console.log(
  _.isEqual(hello, function(){})
);

console.log(
  _.isEqual(object,object)
);

console.clear();

// _.isEqualWith(value, other, [customizer])

// _.isError(value)
// 값이 Error, EvalError, RangeError, ReferenceError, SyntaxError, TypeError 또는 URIError 객체인지 확인합니다.

_.isError(new Error);
// => true
 
console.log(
  _.isError(Error)
);;
// => false
// => true


// _.isFinite(value)
// 값이 유한 프리미티브 숫자인지 확인합니다.

// _.isFunction(value)

// 값이 Function 개체로 분류되는지 확인합니다.

// _.isInteger(value)



// _.isLength(value)


// _.isMap(value)
// _.isMatch(object, source)


// _.isMatchWith(object, source, [customizer])


// 이 메서드는 _.isMatch와 비슷하지만 값을 비교하기 위해 호출되는 사용자 지정자를 허용한다는 점만 다릅니다. 사용자 정의 프로그램이 undefined를 반환하면 비교가 대신 메소드에 의해 처리됩니다. 커스터마이져는 (objValue, srcValue, index | key, object, source) 5 개의 인자로 호출된다.


// _.isNative(value)


// 참고 : core-js가 이러한 종류의 탐지를 우회하기 때문에이 방법은 core-js 패키지가있을 때 네이티브 기능을 안정적으로 감지 할 수 없습니다. 여러 요청에도 불구하고, core-js 관리자는 탐지를 수정하려는 모든 시도가 방해받을 것임을 분명히했습니다. 결과적으로, 우리는 선택의 여지가 있지만 오류를 던질 것입니다. 불행하게도 이것은 core-js에 의존하는 babel-polyfill 같은 패키지에도 영향을 미친다.




// _.isNumber(value)

// 값이 Number 프리미티브 또는 객체로 분류되는지 확인합니다.

// 참고 : 숫자로 분류 된 Infinity, -Infinity 및 NaN을 제외하려면 _.isFinite 메서드를 사용합니다.
_.isNumber(3);
// => true
 
_.isNumber(Number.MIN_VALUE);
// => true
 
_.isNumber(Infinity);
// => true
 
_.isNumber('3');
// => false




// _.isObject(value)
// value가 Object의 언어 유형인지 확인합니다. (예 : 배열, 함수, 객체, 정규식, 새 Number (0) 및 새 String ( '))

_.isObject({});
// => true
 
_.isObject([1, 2, 3]);
// => true
 
_.isObject(_.noop);
// => true
 
_.isObject(null);
// => false






// _.isObjectLike(value)
// 값이 객체와 같은지 검사합니다. null이 아니고 typeof result가 "object"인 경우 값은 객체와 유사합니다.
_.isObjectLike({});
// => true
 
_.isObjectLike([1, 2, 3]);
// => true
 
_.isObjectLike(_.noop);
// => false
 
_.isObjectLike(null);
// => false




// _.isPlainObject(value)

// 값이 일반 객체, 즉 Object 생성자 또는 [[Prototype]]이 null 인 객체인지 확인합니다.

function Foo() {
  this.a = 1;
}
 
_.isPlainObject(new Foo);
// => false
 
_.isPlainObject([1, 2, 3]);
// => false
 
_.isPlainObject({ 'x': 0, 'y': 0 });
// => true
 
_.isPlainObject(Object.create(null));
// => true



// _.isRegExp(value)

// _.isString(value)
_.isString('abc');
// => true
 
_.isString(1);
// => false



// _.isUndefined(value)


// _.lt(value, other)



console.log(
  _.lt(1, 3)
);;
// => true
 
_.lt(3, 3);
// => false
 
_.lt(3, 1);
// => false

// _.lte(value, other)



// _.toArray(value)
// 값을 배열로 변환합니다.

console.log(
  _.toArray('12')
);

// _.toInteger(value)


// _.toLength(value)

_.toLength(3.2);
// => 3
 
_.toLength(Number.MIN_VALUE);
// => 0
 
_.toLength(Infinity);
// => 4294967295
 
_.toLength('3.2');
// => 3


// _.toNumber(value)
// 값을 숫자로 변환합니다.
_.toNumber(3.2);
// => 3.2
 
_.toNumber(Number.MIN_VALUE);
// => 5e-324
 
_.toNumber(Infinity);
// => Infinity
 
_.toNumber('3.2');
// => 3.2

