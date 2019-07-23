console.log('hello world');
console.log(
  _.floor(4.0086)
);
console.log(
  _.floor(0.046,2)
);
// _.floor(number, [precision=0])

// _.max(array)


console.log(
  _.max([4,2,8,6,5])
);


// _.maxBy(array, [iteratee=_.identity])

var objects = [{'n':1},{'n':2},{'a':5}];
console.log(
  _.maxBy(objects,function(o){return o.a})
);



// _.mean(array)

console.log(
  _.mean([4, 2, 8, 6,7])
);

// => 5

var objects = [{'n':4},{'n':2},{"n":8},{'n':6}];
_.meanBy(objects,function(o){return o.n})


// _.clamp(number, [lower], upper)


_.clamp(-10, -5, 5);
// => -5
 
_.clamp(10, -5, 5);
// => 5


// _.inRange(number, [start=0], end)


console.log(
  _.inRange(5, 2, 4)
);;
// => true
 
_.inRange(4, 8);
// => true
 
_.inRange(4, 2);
// => false
 
_.inRange(2, 2);
// => false
 
_.inRange(1.2, 2);
// => true
 
_.inRange(5.2, 4);
// => false
 
_.inRange(-3, -2, -6);
// => true


