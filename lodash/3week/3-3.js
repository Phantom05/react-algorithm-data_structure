console.log(
  _.chunk([1,4,2,3],2)
);

var hello = function (name){
  return function(){
    return name+'hello'
  }
}


console.log(
  _.chunk(Array.from(document.getElementsByTagName('li')),3)
);
console.log(
  _.compact([0,1,false,'',3,null,undefined,'g'])
);
console.log(
  _.concat([],2,[2],[[455],false])
);
console.log(
  _.difference([2,1,9],[2,4,5])
);
console.log(
  _.differenceBy([1.2,1.2,0.1],[2.3,3.4], _.filter(function(n){ return (n-1) > 1}) )
);



// 세번쨰 조건을 달대, 조건중 1개라도 undefined나 null이 나오게되면 성립이 안된다.



var li1 = document.getElementById('hello').getElementsByTagName('li')
var li2 = document.getElementById('world').getElementsByTagName('li')
var li3 = [li1[0]];

console.log(
  _.differenceBy(li1,li2, function(n){
    return n.getAttribute('class')
  })
);

console.log(
  _.difference(li1,li3)
);
console.log(
  _.difference([{a:1},{b:2}],[{a:1},{c:3}])
);
// 참조든 원시든 잘 비교한다.

console.log(
  _.concat(Array.from(li1),Array.from(li2))
);