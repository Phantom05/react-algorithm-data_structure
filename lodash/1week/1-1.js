console.log('hello lodash');

console.log(
  _.chunk(['a','b','c'],2)
);
console.log(
  _.compact([0,1,false,2,'',3])
);
console.log(
  _.concat([1],[1,2,3])
);

console.log(
  _.difference([1,2],[2,3])
);

console.log(
  _.differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor)
);
console.log(
  _.drop([1,2,3],1)
);
console.log(
  _.dropRight([1,2,3,4,5],2)
);
var users = [
  { 'user': 'barney',  'active': true },
  { 'user': 'fred',    'active': false },
  { 'user': 'pebbles', 'active': false }
];

console.log(
  _.dropRightWhile(users,['active',false])
);

console.log(
  _.fill(Array(3),'2')
);
console.log(
  _.fill([4,6,8,10],'*',1,2)
);

var users = [
  { 'user': 'barney',  'active': true },
  { 'user': 'fred',    'active': false },
  { 'user': 'pebbles', 'active': false }
];

console.log(
  _.findIndex(users,function(o){
    return o.user == 'barney';
  })
);
console.log(
  _.findIndex(users,{ 'user': 'fred',    'active': false })
);
console.log(
  _.findIndex(users,['active',false])
);

console.log(
  _.flatten([1,2,[3,[4]],5])
);
console.log(
  _.flattenDeep([1, [2, [3, [4]], 5]])
);

console.log(
  _.fromPairs([['a', 1], ['b', 2]])
);
console.log(
  _.head([1,2,3])
);

console.log(
  _.indexOf([1,2,3],1)
);

console.log(
  _.indexOf([1, 2, 1, 2,2,2], 2, 6)
);

console.log(
  _.intersection([2, 1,3], [2, 3],[2])
);
console.log(
  _.intersectionBy
);
console.log(
  _.isEqual([1,2],[1,2],[1,1])
);
console.log(
  _.join(['a', 'b', 'c'], '~')
// => 'a~b~c'
);

console.log(
  _.pull([1,2,3,4,5,1,2,3,4],1,2,3,4)
);


var array = ['a', 'b', 'c', 'd'];
var pulled = _.pullAt(array, [1, 3]);
 
console.log(array);
// => ['a', 'c']
 
console.log(pulled);
// => ['b', 'd']


console.clear()
var array = [1, 2, 3, 4];
var evens = _.remove(array, function(n) {
  return n % 2 == 0;
});
 
console.log(array);
// => [1, 3]
 
console.log(evens);
// => [2, 4]
var arr = [1,2,3,3,4];

console.log(
  _.slice(arr,1,3)
);



console.log(
  _.sortedIndex([30, 50], 20)
);


console.log(
  _.take([1,2,3],3)
);


var users = [
  { 'user': 'barney',  'active': false },
  { 'user': 'fred',    'active': false },
  { 'user': 'pebbles', 'active': true }
];
 
console.log(
  
_.takeWhile(users, function(o) { return !o.active; })
);
// => objects for ['barney', 'fred']
 
// The `_.matches` iteratee shorthand.
console.log(
  
_.takeWhile(users, { 'user': 'barney', 'active': false })
);
// => objects for ['barney']
 
// The `_.matchesProperty` iteratee shorthand.
_.takeWhile(users, ['active', false]);
// => objects for ['barney', 'fred']
 
// The `_.property` iteratee shorthand.
_.takeWhile(users, 'active');
// => []



console.log(
  
_.union([2], [1, 2],[1,2,10])
);
// => [2, 1]

console.log(
  _.uniq([2, 1, 2,3])
);
// => [2, 1]

console.clear();

console.log(
  _.zip([1,2,'d'],[1,2])
);
console.log(
  _.zipObject(['a','b',3],[1,2,[3]])
);


console.clear()
var zipped = _.zip(['a', 'b'], [1, 2], [true, false]);
// => [['a', 1, true], ['b', 2, false]]
 
console.log(
  zipped
);

console.log(
  _.unzip(zipped)
);
// => [['a', 'b'], [1, 2], [true, false]]