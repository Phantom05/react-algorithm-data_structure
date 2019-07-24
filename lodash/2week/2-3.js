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
