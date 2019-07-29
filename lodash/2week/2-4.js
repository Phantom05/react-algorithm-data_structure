console.log('2-4');

var object = {"a":[{"b":{"c1":3,"c2":_.constant(4)}}]};
// _.result(object, path, [defaultValue])
// 이 메소드는 _.get과 유사하지만, 해결 된 값이 상위 오브젝트로 호출 된 함수이며 그 결과가 리턴된다는 점이 다릅니다.


console.log(
  _.get(object,'a[0].b.c2')
);
// 함수를 가져오지 못함 스트링이 들어가면 스트링을 가져올 텐대. 함수가 들어가면 함수를 실행하지 못하고 함수 자체를 가져옴
console.log(
  _.result(object,'a[0].b.c2')
);
// 함수를 실행하여 함수를 가져옴. 스트링을 넣어도 스트링을 가져오고 함수를 넣게되면 함수를 실행함.

// _.set(object, path, value)
// 객체의 경로에 값을 설정합니다. 경로의 일부가 존재하지 않으면 생성됩니다. 다른 모든 누락 된 특성에 대해 오브젝트가 작성되는 동안 누락 된 색인 특성에 대해 배열이 작성됩니다. _.setWith를 사용하여 경로 생성을 사용자 정의하십시오.


var object = {"a":[{"b":{"c":3}}]};

console.log(
  _.set(object,'a[0].b.c',4)
);
console.log(
  _.get(object,'a[0].b.c')
);


// _.setWith(object, path, value, [customizer])

// 이 메소드는 path 객체를 생성하기 위해 호출되는 커 스터 마이저를 허용한다는 점을 제외하고는 _.set과 유사합니다. 커 스터 마이저가 반환하는 경우 정의되지 않은 경로 생성이 대신 메서드에서 처리됩니다. 커스터마이져는 (nsValue, key, nsObject) 세 개의 인자로 호출된다.

// 참고 :이 메서드는 객체를 변형합니다.
var object = {};
console.log(
  _.setWith(object,'[0][1]','a',Object)
);

console.log(
  object
);


// _.toParis()
// _.toPairs(object)

// _.fromPairs에서 사용할 수있는 객체에 대한 자체 열거 형 문자열 키 - 값 쌍의 배열을 만듭니다. object가 맵 또는 세트 인 경우, 그 엔트리가 돌려 주어집니다.

function Foo(){
  this.a = 1;
  this.b = 2;
}
Foo.prototype.c = 3;
console.log(
  _.toPairs(new Foo)
);

// _.transform(object, [iteratee=_.identity], [accumulator])

// _.reduce의 대안; 이 메소드는 오브젝트를 새로운 누적 기 오브젝트로 변환합니다. 누적 기 오브젝트는 iteration iteration을 통해 자체적으로 열거 가능한 문자열 키 특성을 실행 한 결과입니다. 누적기를 제공하지 않으면 [Prototype]과 동일한 새 객체가 사용됩니다. iteratee는 (accumulator, value, key, object) 네 개의 인수로 호출됩니다. Iteratee 함수는 명시 적으로 false를 반환하여 일찍 반복을 종료 할 수 있습니다.

_.transform([2,3,4], function(result,n){
  result.push(n *= n);
  return n % 2 == 0;
}, [])
// => [4,9]
// return으로 false를 떨구면 종료됨.

_.transform({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
  console.log(result,value,key);
  (result[value] || (result[value] = [])).push(key);
}, {});
// => { '1': ['a', 'c'], '2': ['b'] }
// 객체도 키와 벨류, 배열도 키와 벨류가 뽀인트임.


// _.unset(object, path)

// object의 패스에있는 property를 삭제합니다.
// 참고 :이 메서드는 객체를 변형합니다.

var object = {"a":[{"b":{"c":7}}]};
console.log(
  _.unset(object,'a[0].b.c')
);
console.log(object);


// _.update(object, path, updater)
// 이 메소드는, 설정하는 값을 생성하는 업 데이터를받는 것을 제외하면, _.set와 같습니다. _.updateWith를 사용하여 경로 생성을 사용자 정의하십시오. 업데이트 프로그램은 (value) 하나의 인수로 호출됩니다.

// 참고 :이 메서드는 객체를 변형합니다.
// 매개변수로 해당 변경하는 프로퍼티의 값이 들어와서 그것을 이용해서 바꿀 수 도 있음.


var object = {"a":[{"b":{"c":3}}]};
_.update(object,'a[0].b.c', function(n){
  console.log(n);
  return 9
})
console.log(object);


// _.updateWith(object, path, updater, [customizer])

// 이 메소드는 경로의 객체를 생성하기 위해 호출되는 커 스터 마이저를 허용한다는 점을 제외하고는 _update와 비슷합니다. 커 스터 마이저가 반환하는 경우 정의되지 않은 경로 생성이 대신 메서드에서 처리됩니다. 커스터마이져는 (nsValue, key, nsObject) 세 개의 인자로 호출된다.

// 참고 :이 메서드는 객체를 변형합니다.

var object = {};
console.log(
  _.updateWith(object,'[0][1]', _.constant('a'), Object)
);

// _.values(object)

// object의 열거 가능한 문자열 keyed 속성 값의 배열을 만듭니다.
// 주 : 비 오브젝트 값은 오브젝트로 강제 변환됩니다.

function Foo(){
  this.a = 1;
  this.b = 2;
}
Foo.prototype.c = 3;
console.log(
  _.values(new Foo)
);


// _.valuesIn(object)
// object의 상속 가능한 열거 가능한 문자열 키 특성 값의 배열을 만듭니다.

// 주 : 비 오브젝트 값은 오브젝트로 강제 변환됩니다.

function Foo(){
  this.a = 1;
  this.b = 2;
}
Foo.prototype.c = 3;

console.log(
  _.valuesIn(new Foo)
);



// 암시 적 메서드 체인 시퀀스를 사용할 수 있도록 값을 래핑하는 lodash 객체를 만듭니다. 배열, 콜렉션 및 함수에서 작동하고 리턴하는 메소드는 함께 연결될 수 있습니다. 단일의 값을 취득하거나 원시적 인 값을 돌려주는 메소드는, 체인 순서를 자동적으로 종료 해, 랩 해제 된 값을 돌려줍니다. 그렇지 않으면 _ # 값으로 값을 래핑 해제해야합니다.

// _ # 값으로 래핑되지 않아야하는 명시 적 체인 시퀀스는 _.chain을 사용하여 활성화 할 수 있습니다.

// 체인 메소드의 실행은 지연적입니다. 즉, # 값이 암시 적 또는 명시 적으로 호출 될 때까지 지연됩니다.

// 게으른 평가를 통해 여러 가지 방법으로 바로 가기 융합을 지원할 수 있습니다. 바로 가기 융합은 iteratee 호출을 병합하는 최적화입니다. 이것은 중간 배열의 생성을 피하고 iteratee 실행의 수를 크게 줄일 수 있습니다. 체인 시퀀스의 섹션은 섹션이 배열에 적용되고 iteratees가 하나의 인수 만 받아들이는 경우 바로 가기 융합의 대상이됩니다. 섹션이 바로 가기 융합에 적합한 지 여부에 대한 경험적 방법은 변경 될 수 있습니다.

console.log(
  _([1,2,3])
);

// _.chain(value)

// 명시 적 메서드 체인 시퀀스가 ​​활성화 된 값을 래핑하는 lodash 래퍼 인스턴스를 만듭니다. 그러한 시퀀스의 결과는 _ # 값으로 풀어야합니다.

console.clear()
var users = [
  {'user':'barney','age':36},
  {'user':'fred','age':40},
  {'user':'pebbles','age':1}
];

var youngest = _
.chain(users)
.sortBy('age')
.map(function(o){
  return o.user + ' is ' + o.age
})
.head()
.value()


// _.tap(value, interceptor)
// 이 메서드는 인터셉터를 호출하고 값을 반환합니다. 인터셉터는 하나의 인수로 호출됩니다. (값). 이 메소드의 목적은 중간 결과를 수정하기 위해 메소드 체인 순서를 "탭"하는 것입니다.
// return이 없어도 됨.
var s = _([1,2,3])
.tap(function(array){
  array.pop();
})
.reverse()
.value()
console.log(s);



// _.thru(value, interceptor)
//이 메소드는 인터셉터의 결과를 리턴한다는 점을 제외하면 _tap과 같습니다. 이 메소드의 목적은 메소드 체인 순서에서 중간 결과를 대체하는 값을 "통과"하는 것입니다.
// return 을 꼭해줘야함.
console.log(
  _([1,2,3])
  .chain()
  // .trim()
  .thru(function (value) {
    // console.log(value);
    value.pop()
    // return [value]
  })
  .value()
);



function square(n) {
  return n * n;
}
 var wrapped = _([1,2,3]);
console.log(
  wrapped.reduce(_.add)
);
var squares = wrapped.map(square);
console.log(squares.value());

// _.prototype[Symbol.iterator]()
// 래퍼를 반복 가능하게합니다.


var wrapped = _([1, 2]);
 
wrapped[Symbol.iterator]() === wrapped;
// => true
// => iterator가 가능하다는것을 보여줌.
 
Array.from(wrapped);
// => [1, 2]


// _.prototype.at([paths])
// 이 메소드는 _.at의 랩퍼 버전입니다.

var object = {'a':[{"b":{'c':3}},4]};
console.log(
  _(object).at(['a[0].b.c','a[1]']).value()
);

