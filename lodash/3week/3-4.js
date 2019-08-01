var arr = [1,2,3,4,5];
console.log(
  _.drop(arr,2)
);

console.log(
  _.dropRight(arr,2)
);

console.log(
  _.fill([5,5,5,5,5,5,5],3,1,2)
);

console.log(
  _.fill([5,5,5,5,5,5,5],3,1)
);

console.log(
  _.fill([5,5,5,5,5,5,5],3)
);

var users = [
  { 'user': 'barney',  'active': false },
  { 'user': 'fred',    'active': false },
  { 'user': 'pebbles', 'active': true }
];

console.log(
  _.findIndex(users,function(o){ return o.user == 'fred'})
);

console.log(
  _.findIndex(users,{'user':'pebbles'})
);

console.log(
  _.flatten([1,2,3,[5,[6]]])
);
console.log(
  _.flattenDeep([1,2,[3,4,[5,6,[7,8,9]]]])
);