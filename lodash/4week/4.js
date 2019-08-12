console.log('4');

var array = [1,2,3];
var obj_arr = [
  {'user':'barney', 'active':false},
  {'user':'fred', 'active':false},
  {'user':"pebbles", 'active':true}
]
console.log(
  _.findIndex(obj_arr,['user','fred'])
);
console.log(
  _.flatten(['a',1,2,3,['g']])
);
console.log(
  _.fromPairs([['a',1],['b',2]])
);
console.log(
  _.initial([1,2,3,4,5])
);


// 동일한놈만 뽑아옴.
console.log(
  _.intersection([2,1],[2,4,1])
);
// 가장 처음으로 동일한놈 1개만 뽑아옴.
console.log(
  _.intersectionBy([2.1,1.2,2.4],[2.3,3.4,2.4], Math.floor)
);
console.log(
  _.intersectionWith([2.1,1.2,2.4],[2.3,3.4,2.4], Math.floor)
);


console.log(
  _.join(['a','b','c'], '~')
);
console.log(
  _.last([1,2,3])
);
console.log(
  _.nth(array,1)
);

var array = ['a','b','c','a','b','c'];
// 첫번쨰 배열에서 뒤로 추가된 배열을 제거하고 모두 가져옴.
console.log(
  _.pull(array,'a','c')
);
console.log(
  _.pull([1,2,3,4,5,1,2,3,4],1,2,3,4)
);

console.log(
  _.pullAll([1,2,3,4,5],[1,2,3])
);

var array = [1,2,3,4];
console.log(
  _.remove(array,function(o){ 
    return o % 2 == 0
  }),'g'
);
console.log(array);

var array = [1,2,3];
console.log(
  _.reverse(array)
);


var arr = [1,2,3,4];
console.log(
  _.slice(arr,1,2)
);

console.log(
  _.tail(arr)
);

console.log(
  _.take([1,2,3],3)
);
