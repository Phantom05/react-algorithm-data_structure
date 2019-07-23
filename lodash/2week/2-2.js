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

console.log(
  _.random(1.2,5.2)
);



function Foo(){
  this.a = 1;
}
function Bar(){
  this.c = 3;
}

Foo.prototype.b = 2;
Bar.prototype.d = 4;

console.log(
  _.assign({'a':0},new Foo, new Bar)
);
// 기존으 {a:0}은 new Foo로 덮어씌워짐. prototype의 인자들은 할당되지 않음.

// _.assignIn(object, [sources])

console.log(
  _.assignIn({'a':0},new Foo, new Bar)
);

// _.assignInWith(object, sources, [customizer])

function customizer(objValue,srcValue){
  console.log(objValue,'clamp',srcValue,'srcValue');
  return _.isUndefined(objValue)? srcValue : objValue;
}

var defaults = _.partialRight( _.assignInWith, customizer);

console.log(
  defaults({'a':1}, {'b':2},{'a':3})
);


_.clamp(-10, -5, 5);
// => -5
 
_.clamp(10, -5, 5);
// => 5

// 1, 10을 주면 해당 범위 바깥의 값을 눌러줘요.
// -1이 오면 1이고, 3이 오면 3이고 13이 오면 10이에요

console.log(
  _.clamp(-500, -100, 5)
);
console.log(
  _.clamp(9999, -100, 5)
);


// _.assignWith(object, sources, [customizer])


// _.at(object, [paths])

var object = {'a':[{'b':{'c':3}},4]};
console.log(
  _.at(object, ['a[0].b.c','a[1]','a[0].b'])
);


// _.create(prototype, [properties])
// prototype object로부터 상속 한 object를 작성합니다. 속성 개체가 제공되면 자체 열거 가능한 문자열 키 특성이 생성 된 개체에 할당됩니다.

function Shape(){
  this.x = 0;
  this.y = 0;
}

function Circle(){
  Shape.call(this);
}

Circle.prototype = _.create(Shape.prototype, {
  'constructor' : Circle
});

var circle = new Circle;
console.log(circle);

// function Hello(n){
//   console.log(n,this);
// }
// function World(n){
//   Hello.call(World,5)
// }
// World()

console.log(
  circle instanceof Circle
);
console.log(
  circle instanceof Shape
);
console.dir(Circle);

var methods = {
  move:function(x,y){
    this.x += x;
    this.y += y;
  }
};
var obj = _.create(methods, {x:5,y:15});

obj.move(5,5);
console.log(
  obj.x,obj.y
);