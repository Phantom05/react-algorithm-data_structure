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
  _.every(users, { 'user': "barney","action":false})
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