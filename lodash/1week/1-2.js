console.log('hello lodash');

console.log(
  _.countBy([6.1,4.2,6.3],Math.floor)
);
console.log(
  _.countBy(['one','two','three'],'length')
);

var users = [
  { 'user': 'barney', 'age': 36, 'active': false },
  { 'user': 'fred',   'age': 40, 'active': false }
];
console.log(
  _.every([true,false],Boolean)
);
console.log(
  _.every(users, { 'user':  "barney","action":false})
);
console.log(
  _.every(users,['active',false])
);
console.log(
  _.every(users,'user')
);

console.clear() 
var users = [
  { 'user': 'barney', 'age': 36, 'active': true },
  { 'user': 'fred',   'age': 40, 'active': false }
];

console.log(
  _.filter(users,function(o){ return o.active})
);
console.log(
  _.filter(users,{'age':36})
);
console.log(
  _.filter(users,['active',false])
);
console.log(
  _.filter(users,'active')
);
console.clear();


var users = [
  { 'user': 'barney',  'age': 36, 'active': true },
  { 'user': 'fred',    'age': 40, 'active': false },
  { 'user': 'pebbles', 'age': 1,  'active': true }
];

console.log(
  _.find(users,function(o){ 
    return o.age < 40
  ;})
);

console.log(
    _.findLast([1,2,3,4],function(n){ return n %2 ==1})
);

console.clear()
function duplicate(n){
  return [n,n]
}
console.log(
  _.flatMap([1,2,1,[2],[[3]]])
);
// => [1,2,1,2,[3]]
console.log(
  _.flatMap([1,2],duplicate)
);

console.clear()
_.forEach([1,2],function(val){
  console.log(val);
})

_.forEach({'a':1,'b':2}, function(val,key){
  console.log(val,key);
})



console.log(
  _.groupBy([1,2,3,5.5,4,5.2], Math.floor)
);


console.log(
  _.invokeMap([[5,1,7],[3,2,1]],'sort')
);
console.log(
  _.invokeMap([123,456],String.prototype.split,'')
);

console.clear()
var array = [
  { 'dir': 'left', 'code': 97 },
  { 'dir': 'right', 'code': 100 }
];

console.log(
  _.keyBy(array, function(o){
    return String.fromCharCode(o.code)
  })
);

console.log(
  _.keyBy(array, 'dir')
);

// _.map(collection, [iteratee=_.identity])


function square(n){
  return n*n;
}
console.log(
  _.map([4,8],square)
);

var users = [
  {'user':'barney'},
  {'user':'fred'}
];

console.log(
  _.map(users,'user')
);

_.map([1,2,3],function(e){
  console.log(e);
})

console.clear();

var users = [
  { 'user': 'aaa',   'age': 48 },
  { 'user': 'fred',   'age': 48 },
  { 'user': 'barney', 'age': 34 },
  { 'user': 'fred',   'age': 40 },
  { 'user': 'barney', 'age': 36 }
];

console.log(
  _.orderBy(users,['user','age'],['asc','desc'])
);

var users = [
  { 'user': 'barney',  'age': 36, 'active': false },
  { 'user': 'fred',    'age': 40, 'active': true },
  { 'user': 'pebbles', 'age': 1,  'active': false }
];

console.log(
  _.partition(users,function(o){ return o.active})
);


console.log(
  _.partition(users,{'age':1,'active':true})
);

console.clear()
// _.reduce(collection, [iteratee=_.identity], [accumulator])

console.log(
  _.reduce([1,2], function(sum,n){
    console.log(sum,n);
    return sum + n
  })
);
console.log(
  _.reduce(['a','b','c'], function(res,val,key){
    res.push(val);
    return res;
  },[])
  // => abc
);

console.log(
  _.reduce({'a':1,'b':2,'c':1}, function(res,val,key){
    console.log(res,val,key);
    (res[val] || (res[val] = [])).push(key);
    return res
  },{})
);

console.clear()
var array = [[0, 1], [2, 3], [4, 5]];
 
console.log(
  _.reduceRight(array, function(flattened, other) {
    console.log(flattened,other);
    return flattened.concat(other);
  }, [])
);
// => [4, 5, 2, 3, 0, 1]

console.clear()

// _.reject(collection, [predicate=_.identity])
// _.filter의 반대; 이 메소드는 술어가 사실대로 리턴하지 않는] 렉션의 요소를 리턴합니다.
var users = [
  { 'user': 'barney', 'age': 36, 'active': false },
  { 'user': 'fred',   'age': 40, 'active': true }
];

console.log(
  _.reject(users,function(o) { return o.active})
);




console.clear();
// _.sample(collection)
// 컬렉션에서 임의의 요소를 가져옵니다.
console.log(
  _.sample([1, 2, 3, 4])
);


// _.sampleSize(collection, [n=1])
// 컬렉션의 고유 키에서 n 개의 임의 요소를 컬렉션의 크기까지 가져옵니다.


// _.shuffle(collection)
// Fisher-Yates 셔플 버전을 사용하여 셔플 된 값의 배열을 만듭니다.



// _.size(collection)


// _.some(collection, [predicate=_.identity])

// _.sortBy(collection, [iteratees=[_.identity]])

var users = [
  { 'user': 'afred',   'age': 50 },
  { 'user': 'fred',   'age': 48 },
  { 'user': 'barney', 'age': 36 },
  { 'user': 'fred',   'age': 40 },
  { 'user': 'barney', 'age': 34 }
];
 
_.sortBy(users, [function(o) { return o.user; }]);
// => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
 
_.sortBy(users, ['user', 'age']);
// => objects for [['barney', 34], ['barney', 36], ['fred', 40], ['fred', 48]]



console.log(
  _.sortBy(users,['user','age'])
);

console.log(
  _.now() // (number): Returns the timestamp.
);

console.clear();

// _.now()
// Unix 에포크 (1970 년 1 월 1 일 00:00:00 UTC)로부터 경과 한 밀리 세컨드 수의 타임 스탬프를 가져옵니다.
console.log(
  _.now()
);

// _.after(n, func)
// _ 이전과 반대; 이 메서드는 n 번 이상 호출되면 func을 호출하는 함수를 만듭니다.

var saves = ['profile', 'settings'];
var done = _.after(saves.length, function() {
  return 'done saving!'
});

console.log(
  done(),done()
);
// _.forEach(saves, function(type) {
//   asyncSave({ 'type': type, 'complete': done });
// });

// _.ary(func, [n=func.length])
// 추가 인수를 무시하고 n 개 인수까지 func을 호출하는 함수를 만듭니다.

console.log(
  _.map(['6', '8', '10'], _.ary(parseInt, 2))
);
// => [6, 8, 10]

// _.before(n, func)
// 이 바인딩과 생성 된 함수의 인수를 사용하여 func을 호출하는 함수를 만듭니다.이 함수는 n보다 작 으면서 호출됩니다. 생성 된 함수에 대한 후속 호출은 마지막 func 호출의 결과를 반환합니다.


$('#btn').on('click', _.before(5, function(){
  console.log('helo');
}));
// => Allows adding up to 4 contacts to the list.


// _.bind(func, thisArg, [partials])
// 모 놀리 식 빌드에서 기본적으로 _ 인 _.bind.placeholder 값은 부분적으로 적용된 인수의 자리 표시 자로 사용될 수 있습니다.

// 참고 : 기본 Function # bind와 달리이 메서드는 바인딩 된 함수의 "length"속성을 설정하지 않습니다.

function greet(greeting,pubctuation){
  console.log(greeting,pubctuation);
  return greeting+' '+ this.user+pubctuation;
}
var object = {'user':'fred'};

var bound = _.bind(greet, object,'hi');
console.log(
  bound('!')
);


var objx = {
  x:0,
  y:0,
  dx:5,
  dy:7
};

var step = function(){
  this.x += this.dx;
  this.y += this.dy;
};

objx.step = _.bind(step,objx);
objx.step()
objx.x;
// => 5


var objy ={s:10}
function hello(){
  return this.s;
}

var he = _.bind(hello,objy);
he()
// => 10
console.log(
  he()
);

function basicBind(){
  return this.x;
}
var xx = {x:20};
var xy = basicBind.bind(xx);
console.log(xy());

var obj = {
  0:'hello',
  1:'how',
  2:'exist',
  3:'you',
  4:"play",
  5:"today",
  length:6
}

obj.slice = _.bind(Array.prototype.slice,obj);
obj.pslice = Array.prototype.slice.bind(obj);
console.log(
  obj.slice(1,4)
);
console.log(
  obj.pslice(1,4)
);





var object = {
  'user': 'fred',
  'greet': function(greeting, punctuation) {
    return greeting + ' ' + this.user + punctuation;
  }
};
 
var bound = _.bindKey(object, 'greet', 'hi');
// object에서 greet키의 값을 object로 바인딩 해주고 hi를 넣어서 실행한다.
bound('!');
// => 'hi fred!'
 
object.greet = function(greeting, punctuation) {
  return greeting + 'ya ' + this.user + punctuation;
};
 
bound('!');
// => 'hiya fred!'
 
// Bound with placeholders.
var bound = _.bindKey(object, 'greet', _, '!');
bound('hi');
// => 'hiya fred!


// _.curry(func, [arity=func.length])

// func의 인수를 받아들이고 인수의 개수가 제공된 경우 결과를 반환하는 func을 호출하거나 나머지 func 인수를 받아들이는 함수를 반환하는 등의 함수를 만듭니다. func.length가 충분하지 않으면 func의 값을 지정할 수 있습니다.

// 모 놀리 식 빌드에서 기본적으로 _ 인 _.curry.placeholder 값은 제공된 인수의 자리 표시 자로 사용할 수 있습니다.

// 참고 :이 메서드는 카레 함수의 "길이"속성을 설정하지 않습니다.


var abc = function(a, b, c) {
  return [a, b, c];
};
 
var curried = _.curry(abc);
 
curried(1)(2)(3)
// => [1, 2, 3]
 
curried(1, 2)(3);
// => [1, 2, 3]
 
curried(1, 2, 3);
// => [1, 2, 3]
 
// Curried with placeholders.
curried(1)(_, 3)(2);
// => [1, 2, 3]

var aAsync  = curried(1)
var bAsync = aAsync(2)
var cAsync = bAsync(3)
console.log(cAsync);



