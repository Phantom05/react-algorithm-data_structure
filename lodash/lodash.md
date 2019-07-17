# lodash

<i>함수형 프로그래밍 로대쉬</i>

## Array

+ **chunk**

청크는 덩어리라는 뜻으로 하나의 배열을 잘라주는 역할을 한다.

```js
_.chunk([1,2,3],2)
// [1,2],[3]
```



+ **compact **

compact는 배열의 false나 ' '등 문자를 걸러준다.

```js
_.compact([0, 1, false, 2, '', 3]);
// => [1, 2, 3]
```



+ **concat**

배열을 하나로 합쳐준다. 

```js
var array = [1];
var other = _.concat(array, 2, [3], [[4]]);
 
console.log(other);
// => [1, 2, 3, [4]]
 
console.log(array);
// => [1]
```



+ **difference**

차집합으로 두번째 배열요소에 포함하지 않는 첫번째배열의 나머지 요소를 반화한다.

```js
_.difference([2, 1], [2, 3]);
// => [1]
```



+ **_.differenceBy**

차집합에서 조건을 달수있다. 3번째인자로 필터링을 하고 값을 구한다음에 구한 값의 원본을 반환한다.

```js
_.differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor);
// => [1.2]
 
// The `_.property` iteratee shorthand.
_.differenceBy([{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }], 'x');
// => [{ 'x': 2 }]
```



+ **drop**

두번째 인자로부터  잘린 배열을를 만든다.

```js
_.drop([1, 2, 3]);
// => [2, 3]
 
_.drop([1, 2, 3], 2);
// => [3]
 
_.drop([1, 2, 3], 5);
// => []
 
_.drop([1, 2, 3], 0);
// => [1, 2, 3]
```



+  **_.dropRight**

반대쪽에서부터 자른다. drop과 마찬가지다.

```js
_.dropRight([1, 2, 3]);
// => [1, 2]
 
_.dropRight([1, 2, 3], 2);
// => [1]
 
_.dropRight([1, 2, 3], 5);
// => []
 
_.dropRight([1, 2, 3], 0);
// => [1, 2, 3]
```



+ **fill**

start의 값부터 end까지의 값을 가진 array 요소를 채 웁니다.

```js
var array = [1, 2, 3];
 
_.fill(array, 'a');
console.log(array);
// => ['a', 'a', 'a']
 
_.fill(Array(3), 2);
// => [2, 2, 2]
 
_.fill([4, 6, 8, 10], '*', 1, 3);
// => [4, '*', '*', 10]
```



+ **findIndex**

이 메소드는 첫 번째 요소 술어의 색인을 리턴한다는 점을 제외하고는 _.find와 유사합니다. 요소 자체 대신 진실을 리턴합니다.

```js
var users = [
  { 'user': 'barney',  'active': false },
  { 'user': 'fred',    'active': false },
  { 'user': 'pebbles', 'active': true }
];
 
_.findIndex(users, function(o) { return o.user == 'barney'; });
// => 0
 
// The `_.matches` iteratee shorthand.
_.findIndex(users, { 'user': 'fred', 'active': false });
// => 1
 
// The `_.matchesProperty` iteratee shorthand.
_.findIndex(users, ['active', false]);
// => 0
 
// The `_.property` iteratee shorthand.
_.findIndex(users, 'active');
// => 2
```



+ **findLastIndex**

라스트 인덱스를 찾음.

```js
_.findLastIndex(users, function(o) { return o.user == 'pebbles'; });
// => 2
 
// The `_.matches` iteratee shorthand.
_.findLastIndex(users, { 'user': 'barney', 'active': true });
// => 0
 
// The `_.matchesProperty` iteratee shorthand.
_.findLastIndex(users, ['active', false]);
// => 2
 
// The `_.property` iteratee shorthand.
_.findLastIndex(users, 'active');
// => 0
```



+ **flatten**

이중 배열까지는 플랫하게 만든다.

```js
_.flatten([1, [2, [3, [4]], 5]]);
// => [1, 2, [3, [4]], 5]
```



+ **flattenDeep**

깊은 배열까지 플랫하게 만든다.

```js
_.flattenDeep([1, [2, [3, [4]], 5]]);
// => [1, 2, 3, 4, 5]
```



+ **flattenDepth**

플랫의 뎁스를 인덱스로 컨트롤 할수 있다.

```js
var array = [1, [2, [3, [4]], 5]];
 
_.flattenDepth(array, 1);
// => [1, 2, [3, [4]], 5]
 
_.flattenDepth(array, 2);
// => [1, 2, 3, [4], 5]
```



+ **fromParis**

_.toPairs의 역함수. 이 메서드는 키 - 값 쌍으로 구성된 객체를 반환합니다.

```js
_.fromPairs([['a', 1], ['b', 2]]);
// => { 'a': 1, 'b': 2 }
```



+ **head**

배열의 첫번쨰인자를 가져옴

```ㅓjs
_.head([1, 2, 3]);
// => 1
 
_.head([]);
// => undefined
```



+ **indexOf**

인덱스오브, 세번째인자로 세번째인덱스에 있는 놈을 

```js
_.indexOf([1, 2, 1, 2], 2);
// => 1
 
// Search from the `fromIndex`.
_.indexOf([1, 2, 1, 2], 2, 2);
// => 3
```



+ **lastIndexOf**

이 메소드는 array의 요소를 오른쪽에서 왼쪽으로 반복한다는 점을 제외하면 _.indexOf와 유사합니다.

```js
_.lastIndexOf([1, 2, 1, 2], 2);
// => 3
 
// Search from the `fromIndex`.
_.lastIndexOf([1, 2, 1, 2], 2, 2);
// => 1
```





+ **initial**

마지막 요소를 제외한 배열을 가져옴

```js
_.initial([1, 2, 3]);
// => [1, 2]
```



+ **intersection**

동일성 비교를 위해 SameValueZero를 사용하여 지정된 모든 배열에 포함 된 고유 한 값의 배열을 만듭니다. 결과 값의 순서와 참조는 첫 번째 배열에 의해 결정됩니다.

```js
_.intersection([2, 1], [2, 3]);
// => [2]
 _.intersection([2, 1, 3], [2, 3],[2])
// => [2]
```



+ **intersectionBy**

이 메소드는 _.intersection과 비슷하지만, 각 배열의 각 요소에 대해 호출되는 iteratee를 받아 들여 비교할 기준을 생성합니다. 결과 값의 순서와 참조는 첫 번째 배열에 의해 결정됩니다. iteratee는 하나의 인수로 호출됩니다.

```js
_.intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor);
// => [2.1]
 
// The `_.property` iteratee shorthand.
_.intersectionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
// => [{ 'x': 1 }]
```



+ **insersectionWith**

이 메소드는 array 요소를 비교하기 위해 호출되는 비교자를 허용한다는 점을 제외하면 _.intersection과 유사합니다. 결과 값의 순서와 참조는 첫 번째 배열에 의해 결정됩니다. 비교자는 두 개의 인수 (arrVal, othVal)로 호출됩니다.

```js
var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
 
_.intersectionWith(objects, others, _.isEqual);
// => [{ 'x': 1, 'y': 2 }]
```



+ **join**

```js
_.join(['a', 'b', 'c'], '~')
// => 'a~b~c'
```



+ **last**

마지막 엘리먼트요소를 가져옴

```js
_.last([1, 2, 3]);
// => 3
```



+ **nth**

배열의 인덱스 n에있는 요소를 가져옵니다. n가 음수이면 끝에있는 n 번째 요소가 반환됩니다.

```js
var array = ['a', 'b', 'c', 'd'];
 
_.nth(array, 1);
// => 'b'
 
_.nth(array, -2);
// => 'c';
```



+ **pull**

동일성 비교를 위해 SameValueZero를 사용하여 배열에서 주어진 모든 값을 제거합니다.

```js
var array = ['a', 'b', 'c', 'a', 'b', 'c'];
 
_.pull(array, 'a', 'c');
console.log(array);
// => ['b', 'b']

_.pull([1,2,3,4,5,1,2,3,4],1,2,3,4)
// => [5]
```



+ **pullAll**

제거할 항목을 배열로 제공한다

```js
var array = ['a', 'b', 'c', 'a', 'b', 'c'];
 
_.pullAll(array, ['a', 'c']);
console.log(array);
// => ['b', 'b']
```



+ **pullAt**

인덱스에 대응하는 배열로부터 요소를 삭제 해, 삭제 된 요소의 배열을 돌려줍니다.

pullAt의 반환값을 자른것들을 모은 배열이고, 자름 당한 배열은 원본이 변경된다.

```js
var array = ['a', 'b', 'c', 'd'];
var pulled = _.pullAt(array, [1, 3]);
 
console.log(array);
// => ['a', 'c']
 
console.log(pulled);
// => ['b', 'd']
```



+ **remove**

술어가 진리를 리턴하는 모든 요소를 배열에서 제거하고 제거 된 요소의 배열을 리턴합니다. 술어는 (value, index, array) 세 개의 인수로 호출됩니다.

```js
var array = [1, 2, 3, 4];
var evens = _.remove(array, function(n) {
  return n % 2 == 0;
});
 
console.log(array);
// => [1, 3]
 
console.log(evens);
// => [2, 4]
```



+ **reverse*

첫 번째 요소가 마지막 요소가되고 두 번째 요소가 두 번째 요소가되도록 배열을 되돌립니다.

```js
var array = [1, 2, 3];
 
_.reverse(array);
// => [3, 2, 1]
 
console.log(array);
// => [3, 2, 1]
```



+ **slice**

_.slice(array,[start=0],[end=array.length])

시작부터 끝까지 포함하는 배열 조각을 만듭니다.

```js
var arr = [1,2,3,3,4];
_.slice(arr,1,3)
// => [2,3]
```



+ **sortedIndex**

이진 검색을 사용하여 정렬 순서를 유지하기 위해 값을 배열에 삽입해야하는 가장 낮은 인덱스를 결정합니다.

```js
_.sortedIndex([30, 50], 40);
// => 1
_.sortedIndex([30, 50], 20);
// => 0
_.sortedIndex([30, 50], 55);
// => 2
```



+ **sortedLastIndex**

sortIndex가 가장 낮은 인덱스면 이건 가장 큰인덱스

```js
_.sortedLastIndex([4, 5, 5, 5, 6], 5);
// => 4
```



+ **tail**

array의 첫 번째 요소를 제외한 모든 것을 가져옵니다.

```js
_.tail([1, 2, 3]);
// => [2, 3]
```



+ **take**

n 개의 요소가있는 배열의 조각을 처음부터 가져옵니다.

```js
_.take([1, 2, 3]);
// => [1]
 
_.take([1, 2, 3], 2);
// => [1, 2]
 
_.take([1, 2, 3], 5);
// => [1, 2, 3]
 
_.take([1, 2, 3], 0);
// => []
```



+ **takeRight**

끝에서 가져온 n 개의 요소가있는 배열을 만듭니다.

```js
_.takeRight([1, 2, 3]);
// => [3]
 
_.takeRight([1, 2, 3], 2);
// => [2, 3]
 
_.takeRight([1, 2, 3], 5);
// => [1, 2, 3]
 
_.takeRight([1, 2, 3], 0);
// => []
```



+ **takeWhile**

반복문을 돌면서 조건이 트루인것들을 가져옴

```js
var users = [
  { 'user': 'barney',  'active': false },
  { 'user': 'fred',    'active': false },
  { 'user': 'pebbles', 'active': true }
];
 
_.takeWhile(users, function(o) { return !o.active; });
// => objects for ['barney', 'fred']
 
// The `_.matches` iteratee shorthand.
_.takeWhile(users, { 'user': 'barney', 'active': false });
// => objects for ['barney']
 
// The `_.matchesProperty` iteratee shorthand.
_.takeWhile(users, ['active', false]);
// => objects for ['barney', 'fred']
 
// The `_.property` iteratee shorthand.
_.takeWhile(users, 'active');
// => []
```



+ union

등가 비교를 위해서 (때문에) SameValueZero를 사용해, 지정된 모든 배열로부터 순차적으로 일의의 값의 배열을 작성합니다.

각 배열에서 값들을 가져오고 중복된것들은 제거하고 1개로표기

```js
_.union([2], [1, 2]);
// => [2, 1]
_.union([2], [1, 2],[1,2,10])
// => [1,2,10]
```



+ unionBy

union과 비슷하나 조건을 걸고 가져올 수 있음.

```js
_.unionBy([2.1], [1.2, 2.3], Math.floor);
// => [2.1, 1.2]
 
// The `_.property` iteratee shorthand.
_.unionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
// => [{ 'x': 1 }, { 'x': 2 }]
```



+ uniq

동일성 비교를 위해 SameValueZero를 사용하여 각 요소의 첫 번째 항목 만 보관되는 중복되지 않은 배열 버전을 만듭니다. 결과 값의 순서는 배열에서 발생하는 순서에 따라 결정됩니다.

1개의 배열에서만 유니크한것을 찾아냄

```js
 _.uniq([2, 1, 2,3])
// => [2,1,3]
```



+ uniqBy

조건을 조져서 가져올 수 있음.

```js
_.uniqBy([2.1, 1.2, 2.3], Math.floor);
// => [2.1, 1.2]
 
// The `_.property` iteratee shorthand.
_.uniqBy([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x');
// => [{ 'x': 1 }, { 'x': 2 }]
```



+ zip

그룹화 된 요소의 배열을 작성합니다. 그 배열의 최초의 요소에는, 지정된 배열의 최초의 요소가 포함되어 2 번째의 요소에는 지정된 배열의 2 번째의 요소가 포함됩니다.

```js
_.zip(['a', 'b'], [1, 2], [true, false]);
// => [['a', 1, true], ['b', 2, false]]

_.zip([1,2,'d'],[1,2])
// => [[1,2],[2,2],['d',undefined]]
```



+ zipObject

이 메소드는 _.fromPairs와 비슷합니다. 단 두 개의 배열, 즉 속성 식별자와 해당 값 중 하나를 받아들입니다.

```js
_.zipObject(['a', 'b'], [1, 2]);
// => { 'a': 1, 'b': 2 }
```



+ zipObjectDeep

이 메소드는 속성 경로를 지원한다는 점을 제외하면 _.zipObject와 유사합니다.

```js
_.zipObjectDeep(['a.b[0].c', 'a.b[1].d'], [1, 2]);
// => { 'a': { 'b': [{ 'c': 1 }, { 'd': 2 }] } }
```



+ zipWith

이 메소드는 그룹화 된 값의 결합 방법을 지정하는 iteratee를 허용한다는 점을 제외하고는 _.zip과 유사합니다. iteratee는 각 그룹의 요소로 호출됩니다 (... 그룹).

```js
_.zipWith([1, 2], [10, 20], [100, 200], function(a, b, c) {
  return a + b + c;
});
// => [111, 222]
```



+ unzip

zip 형태를 다시 원래대로 풀음

이 메소드는 그룹화 된 요소의 배열을 허용하고 요소를 사전 zip 구성으로 재 그룹화하는 배열을 작성한다는 점을 제외하고는 _.zip과 유사합니다.

```js
var zipped = _.zip(['a', 'b'], [1, 2], [true, false]);
// => [['a', 1, true], ['b', 2, false]]
 
_.unzip(zipped);
// => [['a', 'b'], [1, 2], [true, false]]
```



+ unzipWith

이 메소드는 반복되는 값을 결합하는 방법을 지정하는 iteratee를 허용한다는 점을 제외하면 _.unzip과 유사합니다. iteratee는 각 그룹의 요소로 호출됩니다 (... 그룹).

```js
var zipped = _.zip([1, 2], [10, 20], [100, 200]);
// => [[1, 10, 100], [2, 20, 200]]
 
_.unzipWith(zipped, _.add);
// => [3, 30, 300]
```



+ widthout

동일성 비교를 위해 SameValueZero를 사용하여 지정된 모든 값을 제외하고 배열을 만듭니다.

```js
_.without([2, 1, 2, 3], 1, 2);
// => [3]
```





+ xor

지정된 배열의 대칭적인 차이 인 고유 값의 배열을 만듭니다. 결과 값의 순서는 배열에서 발생하는 순서에 따라 결정됩니다.

공통되지 않은것만 가져옴.

```js
_.xor([2, 1], [2, 3]);
// => [1, 3]
```



+ xorBy

이 메소드는 _xor와 비슷하지만, 각 배열의 각 요소에 대해 호출 된 iteratee를 받아 들여서 비교할 기준을 생성한다는 점만 다릅니다. 결과 값의 순서는 배열에서 발생하는 순서에 따라 결정됩니다. iteratee는 (value) 하나의 인수로 호출됩니다.

조건을 걸 수 있음.

```js
_.xorBy([2.1, 1.2], [2.3, 3.4], Math.floor);
// => [1.2, 3.4]
 
// The `_.property` iteratee shorthand.
_.xorBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
// => [{ 'x': 2 }]
```



+ xorWith

```js
var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
 
_.xorWith(objects, others, _.isEqual);
// => [{ 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
```





## Collection



+ countBy (collection, [iteratee=_.identity])

iteratee를 통해 컬렉션의 각 요소를 실행 한 결과로 생성 된 키로 구성된 객체를 만듭니다. 각 키의 해당 값은 iteratee가 키를 리턴 한 횟수입니다. iteratee는 (value) 하나의 인수로 호출됩니다.

두번째 인자로 들어간 조건으로 숫자를 새서 객체로 반환

```js
_.countBy([6.1, 4.2, 6.3], Math.floor);
// => { '4': 1, '6': 2 }
 
// The `_.property` iteratee shorthand.
_.countBy(['one', 'two', 'three'], 'length');
// => { '3': 2, '5': 1 }
```



+ every(collection, [predicate=_.identity])

술어가 컬렉션의 모든 요소에 대해 진실성을 반환하는지 확인합니다. 술어가 거짓을 반환하면 반복이 중지됩니다. 술어는 (value, index | key, collection) 세 개의 인수로 호출됩니다.

```js
_.every([true, 1, null, 'yes'], Boolean);
// => false
 
var users = [
  { 'user': 'barney', 'age': 36, 'active': false },
  { 'user': 'fred',   'age': 40, 'active': false }
];
 
// The `_.matches` iteratee shorthand.
_.every(users, { 'user': 'barney', 'active': false });
// => false
 
// The `_.matchesProperty` iteratee shorthand.
_.every(users, ['active', false]);
// => true
 
// The `_.property` iteratee shorthand.
_.every(users, 'active');
// => false
```



+ fillter(collection, [predicate=_.identity])

모든 요소의 배열을 반환하는 컬렉션의 요소를 반복하고 predicate가 truthy를 반환합니다. 술어는 (value, index | key, collection) 세 개의 인수로 호출됩니다.

```js
var users = [
  { 'user': 'barney', 'age': 36, 'active': true },
  { 'user': 'fred',   'age': 40, 'active': false }
];
 
_.filter(users, function(o) { return !o.active; });
// => objects for ['fred']
 
// The `_.matches` iteratee shorthand.
_.filter(users, { 'age': 36, 'active': true });
// => objects for ['barney']
 
// The `_.matchesProperty` iteratee shorthand.
_.filter(users, ['active', false]);
// => objects for ['fred']
 
// The `_.property` iteratee shorthand.
_.filter(users, 'active');
// => objects for ['barney']
```



+ find(collection, [predicate=_.identity], [fromIndex=0])

컬렉션 요소를 반복하고, 첫 번째 요소 조건자를 반환하면 true를 반환합니다. 술어는 (value, index | key, collection) 세 개의 인수로 호출됩니다.

```js
var users = [
  { 'user': 'barney',  'age': 36, 'active': true },
  { 'user': 'fred',    'age': 40, 'active': false },
  { 'user': 'pebbles', 'age': 1,  'active': true }
];
 
_.find(users, function(o) { return o.age < 40; });
// => object for 'barney'
 
// The `_.matches` iteratee shorthand.
_.find(users, { 'age': 1, 'active': true });
// => object for 'pebbles'
 
// The `_.matchesProperty` iteratee shorthand.
_.find(users, ['active', false]);
// => object for 'fred'
 
// The `_.property` iteratee shorthand.
_.find(users, 'active');
// => object for 'barney'
```



+ findLast(collection, [predicate=.identity], [fromIndex=collection.length-1])

이 메소드는 컬렉션의 요소를 오른쪽에서 왼쪽으로 반복한다는 점을 제외하면 _.find와 유사합니다.

모두 맞는 존재들에서 마지막 값을 가져옴

```js
_.findLast([1, 2, 3, 4], function(n) {
  return n % 2 == 1;
});
// => 3
```



+ _.flatMap(collection,[iteratee=_.identity])

iteratee를 통해 컬렉션의 각 요소를 실행하고 매핑 된 결과를 병합하여 값의 병합 된 배열을 만듭니다. iteratee는 (value, index | key, collection) 세 개의 인수로 호출됩니다.

```js
function duplicate(n){
  return [n,n]
}
console.log(
  _.flatMap([1,2,1,[2],[[3]]])
);
// => [1,2,1,2,[3]]
console.log(
  _.flatMap([1,2],duplicate)
);
// => [1,1,2,2]
```



+ _.flatMapDeep(collection, [iteratee=_.identity])

이 메소드는 매핑 된 결과를 재귀 적으로 평평하게한다는 점을 제외하면 _.flatMap과 같습니다.

```js
function duplicate(n) {
  return [[[n, n]]];
}
 
_.flatMapDeep([1, 2], duplicate);
// => [1, 1, 2, 2]
```



+ _.flatMapDepth(collection, [iteratee=_.identity], [depth=1])

이 메소드는 매핑 된 결과를 반복적으로 심도 시간까지 평탄화한다는 점을 제외하면 _.flatMap과 같습니다.

```js
function duplicate(n) {
  return [[[n, n]]];
}
 
_.flatMapDepth([1, 2], duplicate, 2);
// => [[1, 1], [2, 2]]
```



+ _.forEach(collection, [iteratee=_.identity])

컬렉션의 요소를 반복하고 각 요소에 대해 iteratee를 호출합니다. iteratee는 (value, index | key, collection) 세 개의 인수로 호출됩니다. Iteratee 함수는 명시 적으로 false를 반환하여 일찍 반복을 종료 할 수 있습니다.

참고 : 다른 "컬렉션"메서드와 마찬가지로 "길이"속성이있는 객체는 배열처럼 반복됩니다. 이 동작을 피하려면 객체 반복에 _.forIn 또는 _.forOwn을 사용하십시오.

```js
_.forEach([1, 2], function(value) {
  console.log(value);
});
// => Logs `1` then `2`.
 
_.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
  console.log(key);
});
// => Logs 'a' then 'b' (iteration order is not guaranteed).
```





+ _.forEachRight(collection, [iteratee=_.identity])

이 메소드는 컬렉션의 요소를 오른쪽에서 왼쪽으로 반복한다는 점을 제외하면 _.forEach와 같습니다.

```js
_.forEachRight([1, 2], function(value) {
  console.log(value);
});
// => Logs `2` then `1`.
```



+ _.groupBy(collection, [iteratee=_.identity])

iteratee를 통해 컬렉션의 각 요소를 실행 한 결과로 생성 된 키로 구성된 객체를 만듭니다. 그룹화 된 값의 순서는 컬렉션에서 발생하는 순서에 따라 결정됩니다. 각 키의 해당 값은 키를 생성하는 요소의 배열입니다. iteratee는 (value) 하나의 인수로 호출됩니다.

```js
_.groupBy([6.1, 4.2, 6.3], Math.floor);
// => { '4': [4.2], '6': [6.1, 6.3] }
 
// The `_.property` iteratee shorthand.
_.groupBy(['one', 'two', 'three'], 'length');
// => { '3': ['one', 'two'], '5': ['three'] }
```



+ _.includes(collection, value, [fromIndex=0])

값이 콜렉션에 있는지 점검합니다. collection이 문자열이면 값의 하위 문자열이 있는지 확인합니다. 그렇지 않으면 SameValueZero가 등호 비교에 사용됩니다. fromIndex가 음수이면 컬렉션 끝에서의 오프셋으로 사용됩니다.

```js
_.includes([1, 2, 3], 1);
// => true
 
_.includes([1, 2, 3], 1, 2);
// => false
 
_.includes({ 'a': 1, 'b': 2 }, 1);
// => true
 
_.includes('abcd', 'bc');
// => true
```



+ _.invokeMap(collection, path, [args])

콜렉션 내의 각 요소의 패스에있는 메소드를 호출 해, 불려가는 각 메소드의 결과의 배열을 돌려줍니다. 추가 인수는 각 호출 된 메소드에 제공됩니다. path가 함수이면 컬렉션의 각 요소에 대해 호출되고 여기에 바인딩됩니다.

 음수이면 컬렉션 종료 시점의 오프셋으로 사용됩니다.

각 요소에 원하는 행위를 조질 수 있음.

```js
_.invokeMap([[5, 1, 7], [3, 2, 1]], 'sort');
// => [[1, 5, 7], [1, 2, 3]]
 
_.invokeMap([123, 456], String.prototype.split, '');
// => [['1', '2', '3'], ['4', '5', '6']]
```



+ _.keyBy(collection, [iteratee=_.identity])

iteratee를 통해 컬렉션의 각 요소를 실행 한 결과로 생성 된 키로 구성된 객체를 만듭니다. 각 키의 해당 값은 키를 생성하는 마지막 요소입니다. iteratee는 (value) 하나의 인수로 호출됩니다.

반복돌면서 키로 해당 객체를 새로 만듬

```js
var array = [
  { 'dir': 'left', 'code': 97 },
  { 'dir': 'right', 'code': 100 }
];
 
_.keyBy(array, function(o) {
  return String.fromCharCode(o.code);
});
// => { 'a': { 'dir': 'left', 'code': 97 }, 'd': { 'dir': 'right', 'code': 100 } }
 
_.keyBy(array, 'dir');
// => { 'left': { 'dir': 'left', 'code': 97 }, 'right': { 'dir': 'right', 'code': 100 } }
```



+ _.map(collection, [iteratee=_.identity])

iteratee를 통해 컬렉션의 각 요소를 실행하여 값의 배열을 만듭니다. iteratee는 세 개의 인수로 호출됩니다.

(값, 색인 키, 모음).

많은 lodash 메소드는 _every, _.filter, _.map, _.mapValues, _.reject 및 _.some과 같은 메소드의 반복 프로그램으로 작동하도록 보호됩니다.

보호되는 방법은 다음과 같습니다.

반복, sampleSize, slice, some, sortBy, split, take, takeRight, template, trim, trimEnd, trimStart, trimEnd, trimStart, trimEnd, trimStart, trimEnd, trimStart, trimEnd, 단어들

```js
function square(n) {
  return n * n;
}
 
_.map([4, 8], square);
// => [16, 64]
 
_.map({ 'a': 4, 'b': 8 }, square);
// => [16, 64] (iteration order is not guaranteed)
 
var users = [
  { 'user': 'barney' },
  { 'user': 'fred' }
];
 
// The `_.property` iteratee shorthand.
_.map(users, 'user');
// => ['barney', 'fred']
```



+ _.orderBy(collection, [iteratees=[_.identity]], [orders])

이 메소드는 iteratees의 정렬 순서를 정렬 기준으로 지정할 수 있다는 점을 제외하면 _.sortBy와 같습니다. 주문이 지정되지 않으면 모든 값이 오름차순으로 정렬됩니다. 그렇지 않으면 내림차순에 대해 "desc"의 순서를 지정하거나 해당 값의 오름차순 정렬 순서에 "asc"를 지정하십시오.

```js
var users = [
  { 'user': 'fred',   'age': 48 },
  { 'user': 'barney', 'age': 34 },
  { 'user': 'fred',   'age': 40 },
  { 'user': 'barney', 'age': 36 }
];
 
// Sort by `user` in ascending order and by `age` in descending order.
_.orderBy(users, ['user', 'age'], ['asc', 'desc']);
// => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
```



+ _.partition(collection, [predicate=_.identity])

두 개의 그룹으로 나뉘는 요소의 배열을 만듭니다. 첫 번째 요소는 참을 반환합니다. 두 번째 요소는 거짓을 반환합니다. 술어는 하나의 인수 (값)로 호출됩니다.

조건에 따라 2개의 배열로 반환해줌

```js
var users = [
  { 'user': 'barney',  'age': 36, 'active': false },
  { 'user': 'fred',    'age': 40, 'active': true },
  { 'user': 'pebbles', 'age': 1,  'active': false }
];
 
_.partition(users, function(o) { return o.active; });
// => objects for [['fred'], ['barney', 'pebbles']]
 
// The `_.matches` iteratee shorthand.
_.partition(users, { 'age': 1, 'active': false });
// => objects for [['pebbles'], ['barney', 'fred']]
 
// The `_.matchesProperty` iteratee shorthand.
_.partition(users, ['active', false]);
// => objects for [['barney', 'pebbles'], ['fred']]
 
// The `_.property` iteratee shorthand.
_.partition(users, 'active');
// => objects for [['fred'], ['barney', 'pebbles']]
```



+ _.reduce(collection, [iteratee=_.identity], [accumulator])

콜렉션에서 각 요소를 반복하여 누적 한 결과 인 값으로 콜렉션을 줄입니다. 연속되는 각각의 호출에는 이전의 리턴 값이 제공됩니다. accumulator를 지정하지 않으면, 콜렉션의 최초의 요소가 초기치로서 사용됩니다. iteratee는 네 개의 인수로 호출됩니다.

(누적 기, 값, 색인 키, 콜렉션).

많은 lodash 메소드는 _.reduce, _.reduceRight 및 _.transform과 같은 메소드의 반복자로 작동하도록 보호됩니다.

보호되는 방법은 다음과 같습니다.

defaultsDeep, includes, merge, orderBy 및 sortBy를 지정합니다.

```js
// key는 인덱스라고 알고있었으나 사실 배열도 객체이기 때문에 key값임.

_.reduce([1, 2], function(sum, n) {
  return sum + n;
}, 0);
// => 3

  _.reduce(['a','b','c'], function(res,val,key){
    res.push(val);
    return res;
  },[])
  // => abc

_.reduce({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
  (result[value] || (result[value] = [])).push(key);
  return result;
}, {});
// => { '1': ['a', 'c'], '2': ['b'] } (iteration order is not guaranteed)
// 객체의 경우 index의 키값이 존재하므로 key이름값이 들어감

```



+ _.reduceRight(collection, [iteratee=_.identity], [accumulator])

이 메소드는 컬렉션의 요소를 오른쪽에서 왼쪽으로 반복한다는 점을 제외하면 _.reduce와 같습니다.

```js
var array = [[0, 1], [2, 3], [4, 5]];
 
_.reduceRight(array, function(flattened, other) {
  return flattened.concat(other);
}, []);
// => [4, 5, 2, 3, 0, 1]
```



+ _.reject(collection, [predicate=_.identity])

_.filter의 반대; 이 메소드는 술어가 사실대로 리턴하지 않는] 렉션의 요소를 리턴합니다.

```js
var users = [
  { 'user': 'barney', 'age': 36, 'active': false },
  { 'user': 'fred',   'age': 40, 'active': true }
];
 
_.reject(users, function(o) { return !o.active; });
// => objects for ['fred']
 
// The `_.matches` iteratee shorthand.
_.reject(users, { 'age': 40, 'active': true });
// => objects for ['barney']
 
// The `_.matchesProperty` iteratee shorthand.
_.reject(users, ['active', false]);
// => objects for ['fred']
 
// The `_.property` iteratee shorthand.
_.reject(users, 'active');
// => objects for ['barney']
```



+ _.sample(collection)

컬렉션에서 임의의 요소를 가져옵니다.

```js
_.sample([1, 2, 3, 4]);
// => 2
```



+ _.sampleSize(collection, [n=1])

컬렉션의 고유 키에서 n 개의 임의 요소를 컬렉션의 크기까지 가져옵니다.

```js
_.sampleSize([1, 2, 3], 2);
// => [3, 1]
 
_.sampleSize([1, 2, 3], 4);
// => [2, 3, 1]
```



+ _.shuffle(collection)

Fisher-Yates 셔플 버전을 사용하여 셔플 된 값의 배열을 만듭니다.

```js
_.shuffle([1, 2, 3, 4]);
// => [4, 1, 3, 2]
```



+ _.size(collection)

배열 형 값의 길이 또는 개체의 열거 형 문자열 키 특성의 개수를 반환하여 컬렉션 크기를 가져옵니다.

```js
_.size([1, 2, 3]);
// => 3
 
_.size({ 'a': 1, 'b': 2 });
// => 2
 
_.size('pebbles');
// => 7
```



+ _.some(collection, [predicate=_.identity])

술어가 컬렉션의 모든 요소에 대해 진실성을 반환하는지 확인합니다. 술어가 진리를 반환하면 반복이 중지됩니다. 술어는 (value, index | key, collection) 세 개의 인수로 호출됩니다.

조건이 하나라도 맞으면 true

```js
_.some([null, 0, 'yes', false], Boolean);
// => true
 
var users = [
  { 'user': 'barney', 'active': true },
  { 'user': 'fred',   'active': false }
];
 
// The `_.matches` iteratee shorthand.
_.some(users, { 'user': 'barney', 'active': false });
// => false
 
// The `_.matchesProperty` iteratee shorthand.
_.some(users, ['active', false]);
// => true
 
// The `_.property` iteratee shorthand.
_.some(users, 'active');
// => true
```



+ _.sortBy(collection, [iteratees=[_.identity]])

각 반복을 통해 컬렉션의 각 요소를 실행 한 결과에 따라 오름차순으로 정렬 된 요소 배열을 만듭니다. 이 메서드는 안정적인 정렬을 수행합니다. 즉, 동일한 요소의 원래 정렬 순서를 유지합니다. iteratees는 (value) 하나의 인수로 호출됩니다.

```js
var users = [
  { 'user': 'fred',   'age': 48 },
  { 'user': 'barney', 'age': 36 },
  { 'user': 'fred',   'age': 40 },
  { 'user': 'barney', 'age': 34 }
];
 
_.sortBy(users, [function(o) { return o.user; }]);
// => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
 
_.sortBy(users, ['user', 'age']);
// => objects for [['barney', 34], ['barney', 36], ['fred', 40], ['fred', 48]]
```



+ _.now()

Unix 에포크 (1970 년 1 월 1 일 00:00:00 UTC)로부터 경과 한 밀리 세컨드 수의 타임 스탬프를 가져옵니다.

```js
_.defer(function(stamp) {
  console.log(_.now() - stamp);
}, _.now());
// => Logs the number of milliseconds it took for the deferred invocation.
```



## Function

+ _.after(n, func)

_ 이전과 반대; 이 메서드는 n 번 이상 호출되면 func을 호출하는 함수를 만듭니다.

지정한만큼 호출한 이후로 작동함

```js
var saves = ['profile', 'settings'];
 
var done = _.after(saves.length, function() {
  console.log('done saving!');
});
 console.log(
  done(),done()
);
// => undefined "done saving!"
_.forEach(saves, function(type) {
  asyncSave({ 'type': type, 'complete': done });
});
// => Logs 'done saving!' after the two async saves have completed.
```



> - _.ary(func, [n=func.length])
>
> 추가 인수를 무시하고 n 개 인수까지 func을 호출하는 함수를 만듭니다.
>
> **공부 필요**





+ _.before(n, func)

이 바인딩과 생성 된 함수의 인수를 사용하여 func을 호출하는 함수를 만듭니다.이 함수는 n보다 작 으면서 호출됩니다. 생성 된 함수에 대한 후속 호출은 마지막 func 호출의 결과를 반환합니다.

지정한 만큼만 호출하여 작동함.

```js
$('#btn').on('click', _.before(5, function(){
  console.log('helo');
}));
//=> 4번만 helo 가 뜸.
```



+ _.bind(func, thisArg, [partials])

모 놀리 식 빌드에서 기본적으로 _ 인 _.bind.placeholder 값은 부분적으로 적용된 인수의 자리 표시 자로 사용될 수 있습니다.

참고 : 기본 Function # bind와 달리이 메서드는 바인딩 된 함수의 "length"속성을 설정하지 않습니다.

```js
var objx = {
  x:0,
  y:0,
  dx:5,
  dy:7
};
var step = function(){
  this.x += this.dx;
  this.y += this.dy;
};
objx.step = _.bind(step,objx);
objx.step()
objx.x;
// => 5

var objy ={s:10}
function hello(){
  return this.s;
}
var he = _.bind(hello,objy);
he()
// => 10
// => 렝스를 지원해 주지 않음.

var obj = {
  0:'hello',
  1:'how',
  2:'exist',
  3:'you',
  4:"play",
  5:"today",
  length:6
}
// => 이렇게 렝스를 일일이 넣어줘야함

obj.slice = _.bind(Array.prototype.slice,obj);
console.log(
  obj.slice(1,4)
);
// =>(3) ["how", "exist", "you"]

function greet(greeting,pubctuation){
  console.log(greeting,pubctuation);
  return greeting+' '+ this.user + pubctuation;
}
var object = {'user':'fred'};

var bound = _.bind(greet, object,'hi');
console.log(
  bound('!')
);
// =>hi fred!
// greet함수를 object 객체에 바인드해주고 greet함수의 첫번째인자로 hi를 넣어준다.
// bount에 hi를 넣어 실행한 함수를 넣어주고 bound를 실행할때 !를 넣어서 실행하면 pubctuation 두번째인자로 들어가게된다.
```





+ _.bindKey(object, key, [partials])

객체 [key]에서 메소드를 호출하는 함수를 작성합니다.이 메소드는 수신 한 인수 앞에 부분이 붙습니다.

이 메소드는 바운드 함수가 재 정의되거나 아직 존재하지 않는 메소드를 참조 할 수 있도록함으로써 _.bind와 다릅니다. 자세한 내용은 Peter Michaux의 기사를 참조하십시오.

모 놀리 식 빌드에서 기본적으로 _ 인 _.bindKey.placeholder 값은 부분적으로 적용된 인수의 자리 표시 자로 사용될 수 있습니다.

```js
var object = {
  'user': 'fred',
  'greet': function(greeting, punctuation) {
    return greeting + ' ' + this.user + punctuation;
  }
};
 
var bound = _.bindKey(object, 'greet', 'hi');
// object에서 greet키의 값을 object로 바인딩 해주고 hi를 넣어서 실행한다.
bound('!');
// => 'hi fred!'
 
object.greet = function(greeting, punctuation) {
  return greeting + 'ya ' + this.user + punctuation;
};
 
bound('!');
// => 'hiya fred!'
 
// Bound with placeholders.
var bound = _.bindKey(object, 'greet', _, '!');
bound('hi');
// => 'hiya fred!
```





+ _.curry(func, [arity=func.length])

func의 인수를 받아들이고 인수의 개수가 제공된 경우 결과를 반환하는 func을 호출하거나 나머지 func 인수를 받아들이는 함수를 반환하는 등의 함수를 만듭니다. func.length가 충분하지 않으면 func의 값을 지정할 수 있습니다.

모 놀리 식 빌드에서 기본적으로 _ 인 _.curry.placeholder 값은 제공된 인수의 자리 표시 자로 사용할 수 있습니다.

참고 :이 메서드는 카레 함수의 "길이"속성을 설정하지 않습니다.

단 정의된 인자가 모두 들어와야지 실행됨.

```js
var abc = function(a, b, c) {
  return [a, b, c];
};
 
var curried = _.curry(abc);
 
curried(1)(2)(3)
// => [1, 2, 3]
 
curried(1, 2)(3);
// => [1, 2, 3]
 
curried(1, 2, 3);
// => [1, 2, 3]
 
// Curried with placeholders.
curried(1)(_, 3)(2);
// => [1, 2, 3]

//원하는 곳에서 인자를 하나씩 넣어서 실행해도 될듯.
var aAsync  = curried(1)
var bAsync = aAsync(2)
var cAsync = bAsync(3)
console.log(cAsync);
```



+ _.curryRight(func, [arity=func.length])

이 메소드는 인수가 _.partial 대신 _.partialRight의 func에 func에 적용된다는 점을 제외하고는 _curry와 같습니다.

단일체 빌드에서 기본적으로 _ 인 _.curryRight.placeholder 값은 제공된 인수의 자리 표시 자로 사용될 수 있습니다.

참고 :이 메서드는 카레 함수의 "길이"속성을 설정하지 않습니다.

```js

```

