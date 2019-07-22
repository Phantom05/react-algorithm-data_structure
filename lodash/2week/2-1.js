console.log(
_.toLength([1,2,3])
);


// _.toPlainObject(value)
// 값을 일반 객체의 속성을 소유하기 위해 상속받은 열거 가능한 문자열의 키 특성을 병합하는 일반 객체로 값을 변환합니다.
function Foo() {
  this.b = 2;
}
 
Foo.prototype.c = 3;
 
_.assign({ 'a': 1 }, new Foo);
// => { 'a': 1, 'b': 2 }
 
_.assign({ 'a': 1 }, _.toPlainObject(new Foo));
// => { 'a': 1, 'b': 2, 'c': 3 }

console.log(
  _.toPlainObject(new Foo)
);


console.log(
  _.assign({a:1},{c:4},new Foo)
);

// _.toSafeInteger(value)




_.toString(null);
// => ''
 
_.toString(-0);
// => '-0'
 
_.toString([1, 2, 3]);
// => '1,2,3'

console.clear()
console.log(
  _.add(6,4)
);
// _.add(augend, addend)


// _.ceil(number, [precision=0])
// 정밀도로 반올림 한 수를 계산합니다.

// _.divide(dividend, divisor)
// 두 숫자를 나눕니다.

console.log(
  _.divide(0.3,0.1)
);
console.log(
  _.add(0.1+0.2)
);

console.clear()
var x = new Decimal(0.1);
var y = new Decimal(0.2);

x = new Decimal(0.3)
x = x.minus(0.1);                 // '0.2'
var x = new Decimal(0.1);
console.log(
  x.add(0.2).valueOf()
);
console.log(x.add(0.2).toFixed(1) );