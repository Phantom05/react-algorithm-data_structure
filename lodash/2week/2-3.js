console.log('redis pang');



console.log(
  _.defaults({'a':{'b':5}},{'a':2})
);
console.log(
  _.defaultsDeep({ 'a': { 'b': 2 } }, { 'a': { 'b': 1, 'c': 3 } })
);


// _.defaultsDeep(object, [sources])


// _.toPairs(object)
// _.fromPairs에서 사용할 수있는 객체에 대한 자체 열거 형 문자열 키 - 값 쌍의 배열을 만듭니다. object가 맵 또는 세트 인 경우, 그 엔트리가 돌려 주어집니다.


function Foo(params) {
  this.a = 1;
  this.b = 2;
}
Foo.prototype.c = 3;
console.log(
  _.toPairs(new Foo)
);

// _.toPairsIn(object)
// _.fromPairs에서 사용할 수있는 객체에 대한 자체적이고 상속 가능한 열거 가능한 문자열 키 - 값 쌍의 배열을 만듭니다. object가 맵 또는 세트 인 경우, 그 엔트리가 돌려 주어집니다.

function Foo() {
  this.a = 1;
  this.b = 2;
}
 
Foo.prototype.c = 3;
 
_.toPairsIn(new Foo);
// => [['a', 1], ['b', 2], ['c', 3]] (iteration order is not guaranteed)



// _.transform(object, [iteratee=_.identity], [accumulator])

// _.reduce의 대안; 이 메소드는 오브젝트를 새로운 누적 기 오브젝트로 변환합니다. 누적 기 오브젝트는 iteration iteration을 통해 자체적으로 열거 가능한 문자열 키 특성의 각각을 실행 한 결과입니다. 누적기를 제공하지 않으면 [Prototype]과 동일한 새 객체가 사용됩니다. iteratee는 (accumulator, value, key, object) 네 개의 인수로 호출됩니다. Iteratee 함수는 명시 적으로 false를 반환하여 일찍 반복을 종료 할 수 있습니다.

// _.assignIn(object, [sources])

// 이 메소드는 _.assign과 유사하지만, 자신과 상속 된 소스 특성을 반복한다는 점만 다릅니다.

function Foo(){
  this.a = 1;
}
function Bar(){
  this.c = 3;
}
Foo.prototype.b = 2;
Bar.prototype.d = 4;


// _.findKey(object, [predicate=_.identity])
// 이 메소드는 첫 번째 요소 술어의 키를 리턴한다는 점을 제외하면 _.find와 유사합니다. 요소 자체 대신 진실을 리턴합니다.

var users = {
  'barney':  { 'age': 36, 'active': true },
  'fred':    { 'age': 40, 'active': false },
  'pebbles': { 'age': 1,  'active': true }
};
console.log(
  _.findKey(users,function(o){return o.age>2})
);


// _.findLastKey(object, [predicate=_.identity])
// 이 메소드는 컬렉션의 요소를 반대 순서로 반복한다는 점을 제외하면 _.findKey와 유사합니다.



// _.forIn(object, [iteratee=_.identity])
// 개체의 자체 및 상속 된 열거 가능한 문자열 키 특성을 반복하고 각 속성에 대해 iteratee를 호출합니다. iteratee는 (value, key, object) 세 개의 인수로 호출됩니다. Iteratee 함수는 명시 적으로 false를 반환하여 일찍 반복을 종료 할 수 있습니다.

function Foo(){
  this.a = 1;
  this.b = 2;
}
Foo.prototype.c = 3;
_.forIn(new Foo, function(value,key){
  console.log(key);
})

// _.forInRight(object, [iteratee=_.identity])

function Foo() {
  this.a = 1;
  this.b = 2;
}
 
Foo.prototype.c = 3;
 
_.forInRight(new Foo, function(value, key) {
  console.log(key);
});
// _.forInRight(object, [iteratee=_.identity])

// 이 메소드는 반대의 순서로 오브젝트의 특성을 반복한다는 점을 제외하면 _.forIn과 유사합니다.

// => Logs 'c', 'b', then 'a' assuming `_.forIn` logs 'a', 'b', then 'c'.


// _.forOwn(object, [iteratee=_.identity])
// 개체의 자체 열거 형 문자열 키 특성을 반복하고 각 속성에 대해 iteratee를 호출합니다. iteratee는 (value, key, object) 세 개의 인수로 호출됩니다. Iteratee 함수는 명시 적으로 false를 반환하여 일찍 반복을 종료 할 수 있습니다.

// _.forOwnRight(object, [iteratee=_.identity])
// 이 메소드는 _.forOwn과 닮아 있습니다 만, 반대의 순서로 object의 property를 반복 처리하는 점이 다릅니다.



// _.functions(object)
// object의 고유 한 열거 가능 속성에서 함수 속성 이름의 배열을 만듭니다.
function Foo() {
  this.a = _.constant('a');
  this.b = _.constant('b');
}
 
Foo.prototype.c = _.constant('c');
 
_.functions(new Foo);
// => ['a', 'b']

console.log(
  _.constant(2)
  )


// _.functionsIn(object)

// object의 상속 가능한 열거 가능 속성에서 상속받은 함수 속성 이름의 배열을 만듭니다.


// _.get(object, path, [defaultValue])
// object의 패스에있는 값을 가져옵니다. 해결 된 값이 미정 도리의 경우는, defaultValue가 그 자리에 돌려 주어집니다.

var object = {
  'a': [
    {
      'b': {"c": 3}
    }
  ]
}


console.log(
  _.get(object,'a[0].b.c')
);
console.log(
  _.get(object,['a','0','b','c'])
);
console.log(
  _.get(object,'a.b.c','defailt')
);
//default는 값이 없을때 넣어줄값

// _.has(object, path)
// 패스가 object의 직접적인 프로퍼티 일지 어떨지를 판정합니다.

var object = {'a':{'b':2}};
var other = _.create({'a':_.create({'b':2})})

console.log(
  _.has(object,'a')
);
console.log(
  _.has(object,'a.b')
);
console.log(
  _.has(object,['a','b'])
);
console.log(
  _.has(other)
);
//prototype에 있는건 has로 체크하지 않음

// _.hasIn(object, path)
// path가 객체의 직접적인 속성인지 상속 된 속성인지 확인합니다.

console.log(
  _.hasIn(object,'a')
);
console.log(
  _.hasIn(other,'a.b')
);

// _.invert(object)
// 객체의 반전 된 키와 값으로 구성된 객체를 만듭니다. object에 중복 값이 ​​포함 된 경우 후속 값은 이전 값의 속성 할당을 덮어 씁니다.
var object = { 'a': 1, 'b': 2, 'c': 1 };
 
_.invert(object);
// => { '1': 'c', '2': 'b' }

// _.invertBy(object, [iteratee=_.identity])
// 이 메소드는 반전 된 오브젝트가 iteratee를 통해 오브젝트의 각 요소를 실행 한 결과에서 생성된다는 점을 제외하면 _.invert와 유사합니다. 각 반전 된 키의 해당 반전 값은 반전 된 값을 생성하는 키 배열입니다. iteratee는 (value) 하나의 인수로 호출됩니다.

var object = { 'a': 1, 'b': 2, 'c': 1 };
 
_.invertBy(object);
// => { '1': ['a', 'c'], '2': ['b'] }
 
_.invertBy(object, function(value) {
  return 'group' + value;
});
// => { 'group1': ['a', 'c'], 'group2': ['b'] }


// _.invoke(object, path, [args])
// 오브젝트의 패스에있는 메소드를 호출합니다.

var object = { 'a': [{ 'b': { 'c': [1, 2, 3, 4] } }] };
 
_.invoke(object, 'a[0].b.c.slice', 1, 3);
// => [2, 3]

// _.keys(object)

// _.keysIn(object)

// _.mapKeys(object, [iteratee=_.identity])
// _.mapValues의 반대; 이 메소드는 iteratee를 통해 오브젝트의 자체 열거 가능 문자열 키 특성을 실행하여 생성 된 오브젝트 및 키와 동일한 값을 갖는 오브젝트를 작성합니다. iteratee는 (value, key, object) 세 개의 인수로 호출됩니다.

_.mapKeys({'a':1,'b':2}, function(value,key){
  return key + value;
})

// _.mapValues(object, [iteratee=_.identity])
// 객체와 동일한 키를 가진 객체를 생성하고 iteratee를 통해 객체의 자체 열거 형 문자열 키 특성을 각각 실행하여 생성 된 값을 생성합니다. iteratee는 세 개의 인수로 호출됩니다.


var users = {
  'fred':    { 'user': 'fred',    'age': 40 },
  'pebbles': { 'user': 'pebbles', 'age': 1 }
};
 
_.mapValues(users, function(o) { return o.age; });
// => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
 
// The `_.property` iteratee shorthand.
_.mapValues(users, 'age');
// => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)


// _.merge(object, [sources])

// 이 메소드는 _.assign과 유사하지만 소스 객체의 자체 및 상속 된 열거 가능 문자열 키 특성을 대상 객체에 재귀 적으로 병합합니다. 대상 값이 있으면 undefined로 확인되는 소스 속성은 건너 뜁니다. 배열 및 일반 개체 속성은 재귀 적으로 병합됩니다. 다른 객체 및 값 유형은 할당에 의해 무시됩니다. 원본 개체는 왼쪽에서 오른쪽으로 적용됩니다. 후속 소스는 이전 소스의 등록 정보 지정을 겹쳐 9니다.
// 1:1매칭으로 머지가됨.

// 참고 :이 메서드는 객체를 변형합니다.
var object = {
  'a': [{ 'b': 2 }, { 'd': 4 },{'g':[1]}]
};
 
var other = {
  'a': [{ 'c': 3 }, { 'e': 5 },{'g':[3]}]
};
 
console.log(
  _.merge(object, other)
);
// => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }

// _.mergeWith(object, sources, customizer)

// 이 메소드는 destination 및 source 특성의 병합 된 값을 생성하기 위해 호출되는 사용자 정의 프로그램을 허용한다는 점을 제외하면 _.merge와 유사합니다. 사용자 정의 프로그램이 undefined를 리턴하면 병합은 대신 메소드에 의해 처리됩니다. 커스터마이져는 6 개의 인자로 호출된다 :
// (objValue, srcValue, 키, 객체, 소스, 스택).

// 참고 :이 메서드는 객체를 변형합니다.

function customizer(objValue, srcValue) {
  if (_.isArray(objValue)) {
    return objValue.concat(srcValue);
  }
}
 
var object = { 'a': [1], 'b': [2] };
var other = { 'a': [3], 'b': [4] };
 
console.log(
  _.mergeWith(object, other, customizer)
);
// => { 'a': [1, 3], 'b': [2, 4] }

// _.omit(object, [paths])

// _.pick의 반대; 이 메소드는 생략되지 않은 객체의 자체 및 상속 가능한 열거 가능 속성 경로로 구성된 객체를 만듭니다.

// 참고 :이 방법은 _.pick보다 상당히 느립니다.
// 조건에서 제외된 친구들을 가져옴
var object = { 'a': 1, 'b': '2', 'c': 3 };
 
_.omit(object, ['a', 'c']);
// => { 'b': '2' }
