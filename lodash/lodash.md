

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



+ **reverse**

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



+ **union**

등가 비교를 위해서 (때문에) SameValueZero를 사용해, 지정된 모든 배열로부터 순차적으로 일의의 값의 배열을 작성합니다.

각 배열에서 값들을 가져오고 중복된것들은 제거하고 1개로표기

```js
_.union([2], [1, 2]);
// => [2, 1]
_.union([2], [1, 2],[1,2,10])
// => [1,2,10]
```



+ **unionBy**

union과 비슷하나 조건을 걸고 가져올 수 있음.

```js
_.unionBy([2.1], [1.2, 2.3], Math.floor);
// => [2.1, 1.2]
 
// The `_.property` iteratee shorthand.
_.unionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
// => [{ 'x': 1 }, { 'x': 2 }]
```



+ **uniq**

동일성 비교를 위해 SameValueZero를 사용하여 각 요소의 첫 번째 항목 만 보관되는 중복되지 않은 배열 버전을 만듭니다. 결과 값의 순서는 배열에서 발생하는 순서에 따라 결정됩니다.

1개의 배열에서만 유니크한것을 찾아냄

```js
 _.uniq([2, 1, 2,3])
// => [2,1,3]
```



+ **uniqBy**

조건을 조져서 가져올 수 있음.

```js
_.uniqBy([2.1, 1.2, 2.3], Math.floor);
// => [2.1, 1.2]
 
// The `_.property` iteratee shorthand.
_.uniqBy([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x');
// => [{ 'x': 1 }, { 'x': 2 }]
```



+ **zip**

그룹화 된 요소의 배열을 작성합니다. 그 배열의 최초의 요소에는, 지정된 배열의 최초의 요소가 포함되어 2 번째의 요소에는 지정된 배열의 2 번째의 요소가 포함됩니다.

```js
_.zip(['a', 'b'], [1, 2], [true, false]);
// => [['a', 1, true], ['b', 2, false]]

_.zip([1,2,'d'],[1,2])
// => [[1,2],[2,2],['d',undefined]]
```



+ **zipObject**

이 메소드는 _.fromPairs와 비슷합니다. 단 두 개의 배열, 즉 속성 식별자와 해당 값 중 하나를 받아들입니다.

```js
_.zipObject(['a', 'b'], [1, 2]);
// => { 'a': 1, 'b': 2 }
```



+ **zipObjectDeep**

이 메소드는 속성 경로를 지원한다는 점을 제외하면 _.zipObject와 유사합니다.

```js
_.zipObjectDeep(['a.b[0].c', 'a.b[1].d'], [1, 2]);
// => { 'a': { 'b': [{ 'c': 1 }, { 'd': 2 }] } }
```



+ **zipWith**

이 메소드는 그룹화 된 값의 결합 방법을 지정하는 iteratee를 허용한다는 점을 제외하고는 _.zip과 유사합니다. iteratee는 각 그룹의 요소로 호출됩니다 (... 그룹).

```js
_.zipWith([1, 2], [10, 20], [100, 200], function(a, b, c) {
  return a + b + c;
});
// => [111, 222]
```



+ **unzip**

zip 형태를 다시 원래대로 풀음

이 메소드는 그룹화 된 요소의 배열을 허용하고 요소를 사전 zip 구성으로 재 그룹화하는 배열을 작성한다는 점을 제외하고는 _.zip과 유사합니다.

```js
var zipped = _.zip(['a', 'b'], [1, 2], [true, false]);
// => [['a', 1, true], ['b', 2, false]]
 
_.unzip(zipped);
// => [['a', 'b'], [1, 2], [true, false]]
```



+ **unzipWith**

이 메소드는 반복되는 값을 결합하는 방법을 지정하는 iteratee를 허용한다는 점을 제외하면 _.unzip과 유사합니다. iteratee는 각 그룹의 요소로 호출됩니다 (... 그룹).

```js
var zipped = _.zip([1, 2], [10, 20], [100, 200]);
// => [[1, 10, 100], [2, 20, 200]]
 
_.unzipWith(zipped, _.add);
// => [3, 30, 300]
```



+ **widthout**

동일성 비교를 위해 SameValueZero를 사용하여 지정된 모든 값을 제외하고 배열을 만듭니다.

```js
_.without([2, 1, 2, 3], 1, 2);
// => [3]
```





+ **xor**

지정된 배열의 대칭적인 차이 인 고유 값의 배열을 만듭니다. 결과 값의 순서는 배열에서 발생하는 순서에 따라 결정됩니다.

공통되지 않은것만 가져옴.

```js
_.xor([2, 1], [2, 3]);
// => [1, 3]
```



+ **xorBy**

이 메소드는 _xor와 비슷하지만, 각 배열의 각 요소에 대해 호출 된 iteratee를 받아 들여서 비교할 기준을 생성한다는 점만 다릅니다. 결과 값의 순서는 배열에서 발생하는 순서에 따라 결정됩니다. iteratee는 (value) 하나의 인수로 호출됩니다.

조건을 걸 수 있음.

```js
_.xorBy([2.1, 1.2], [2.3, 3.4], Math.floor);
// => [1.2, 3.4]
 
// The `_.property` iteratee shorthand.
_.xorBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
// => [{ 'x': 2 }]
```



+ **xorWith**

```js
var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
 
_.xorWith(objects, others, _.isEqual);
// => [{ 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
```





## Collection



+ **countBy (collection, [iteratee=_.identity])**

iteratee를 통해 컬렉션의 각 요소를 실행 한 결과로 생성 된 키로 구성된 객체를 만듭니다. 각 키의 해당 값은 iteratee가 키를 리턴 한 횟수입니다. iteratee는 (value) 하나의 인수로 호출됩니다.

두번째 인자로 들어간 조건으로 숫자를 새서 객체로 반환

```js
_.countBy([6.1, 4.2, 6.3], Math.floor);
// => { '4': 1, '6': 2 }
 
// The `_.property` iteratee shorthand.
_.countBy(['one', 'two', 'three'], 'length');
// => { '3': 2, '5': 1 }
```



+ **every(collection, [predicate=_.identity])**

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



+ **fillter(collection, [predicate=_.identity])**

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



+ **find(collection, [predicate=_.identity], [fromIndex=0])**

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



+ **findLast(collection, [predicate=.identity], [fromIndex=collection.length-1])**

이 메소드는 컬렉션의 요소를 오른쪽에서 왼쪽으로 반복한다는 점을 제외하면 _.find와 유사합니다.

모두 맞는 존재들에서 마지막 값을 가져옴

```js
_.findLast([1, 2, 3, 4], function(n) {
  return n % 2 == 1;
});
// => 3
```



+ **_.flatMap(collection,[iteratee=_.identity])**

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



+ **_.flatMapDeep(collection, [iteratee=_.identity])**

이 메소드는 매핑 된 결과를 재귀 적으로 평평하게한다는 점을 제외하면 _.flatMap과 같습니다.

```js
function duplicate(n) {
  return [[[n, n]]];
}
 
_.flatMapDeep([1, 2], duplicate);
// => [1, 1, 2, 2]
```



+ **_.flatMapDepth(collection, [iteratee=_.identity], [depth=1])**

이 메소드는 매핑 된 결과를 반복적으로 심도 시간까지 평탄화한다는 점을 제외하면 _.flatMap과 같습니다.

```js
function duplicate(n) {
  return [[[n, n]]];
}
 
_.flatMapDepth([1, 2], duplicate, 2);
// => [[1, 1], [2, 2]]
```



+ **_.forEach(collection, [iteratee=_.identity])**

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





+ **_.forEachRight(collection, [iteratee=_.identity])**

###### 이 메소드는 컬렉션의 요소를 오른쪽에서 왼쪽으로 반복한다는 점을 제외하면 _.forEach와 같습니다.

```js
_.forEachRight([1, 2], function(value) {
  console.log(value);
});
// => Logs `2` then `1`.
```



+ **_.groupBy(collection, [iteratee=_.identity])**

iteratee를 통해 컬렉션의 각 요소를 실행 한 결과로 생성 된 키로 구성된 객체를 만듭니다. 그룹화 된 값의 순서는 컬렉션에서 발생하는 순서에 따라 결정됩니다. 각 키의 해당 값은 키를 생성하는 요소의 배열입니다. iteratee는 (value) 하나의 인수로 호출됩니다.

```js
_.groupBy([6.1, 4.2, 6.3], Math.floor);
// => { '4': [4.2], '6': [6.1, 6.3] }
 
// The `_.property` iteratee shorthand.
_.groupBy(['one', 'two', 'three'], 'length');
// => { '3': ['one', 'two'], '5': ['three'] }
```



+ **_.includes(collection, value, [fromIndex=0])**

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



+ **_.invokeMap(collection, path, [args])**

콜렉션 내의 각 요소의 패스에있는 메소드를 호출 해, 불려가는 각 메소드의 결과의 배열을 돌려줍니다. 추가 인수는 각 호출 된 메소드에 제공됩니다. path가 함수이면 컬렉션의 각 요소에 대해 호출되고 여기에 바인딩됩니다.

 음수이면 컬렉션 종료 시점의 오프셋으로 사용됩니다.

각 요소에 원하는 행위를 조질 수 있음.

```js
_.invokeMap([[5, 1, 7], [3, 2, 1]], 'sort');
// => [[1, 5, 7], [1, 2, 3]]
 
_.invokeMap([123, 456], String.prototype.split, '');
// => [['1', '2', '3'], ['4', '5', '6']]
```



+ **_.keyBy(collection, [iteratee=_.identity])**

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



+ **_.map(collection, [iteratee=_.identity])**

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



+ **_.orderBy(collection, [iteratees=[_.identity]], [orders])**

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



+ **_.partition(collection, [predicate=_.identity])**

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



+ **_.reduce(collection, [iteratee=_.identity], [accumulator])**

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



+ **_.reduceRight(collection, [iteratee=_.identity], [accumulator])**

이 메소드는 컬렉션의 요소를 오른쪽에서 왼쪽으로 반복한다는 점을 제외하면 _.reduce와 같습니다.

```js
var array = [[0, 1], [2, 3], [4, 5]];
 
_.reduceRight(array, function(flattened, other) {
  return flattened.concat(other);
}, []);
// => [4, 5, 2, 3, 0, 1]
```



+ **_.reject(collection, [predicate=_.identity])**

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



+ **_.sample(collection)**

컬렉션에서 임의의 요소를 가져옵니다.

```js
_.sample([1, 2, 3, 4]);
// => 2
```



+ **_.sampleSize(collection, [n=1])**

컬렉션의 고유 키에서 n 개의 임의 요소를 컬렉션의 크기까지 가져옵니다.

```js
_.sampleSize([1, 2, 3], 2);
// => [3, 1]
 
_.sampleSize([1, 2, 3], 4);
// => [2, 3, 1]
```



+ **_.shuffle(collection)**

Fisher-Yates 셔플 버전을 사용하여 셔플 된 값의 배열을 만듭니다.

```js
_.shuffle([1, 2, 3, 4]);
// => [4, 1, 3, 2]
```



+ **_.size(collection)**

배열 형 값의 길이 또는 개체의 열거 형 문자열 키 특성의 개수를 반환하여 컬렉션 크기를 가져옵니다.

```js
_.size([1, 2, 3]);
// => 3
 
_.size({ 'a': 1, 'b': 2 });
// => 2
 
_.size('pebbles');
// => 7
```



+ **_.some(collection, [predicate=_.identity])**

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



+ **_.sortBy(collection, [iteratees=[_.identity]])**

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



+ **_.now()**

Unix 에포크 (1970 년 1 월 1 일 00:00:00 UTC)로부터 경과 한 밀리 세컨드 수의 타임 스탬프를 가져옵니다.

```js
_.defer(function(stamp) {
  console.log(_.now() - stamp);
}, _.now());
// => Logs the number of milliseconds it took for the deferred invocation.
```



## Function

+ **_.after(n, func)**

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



+ **.ary(func, [n=func.length])**

추가 인수를 무시하고 n 개 인수까지 func을 호출하는 함수를 만듭니다.

```js
_.map(['6', '8', '10'], _.ary(parseInt, 1));
// => [6, 8, 10]
```

<i>단순히 위의 예제만 보면 아리송 할 수 있다.(저의 경우는 그럤음..) `_.map`이 넘기는 인자를 생각하지 않으면 삽질을 할 수 있다. 바닐라의 map이나 로대쉬의 _.map과 비슷한 동작을 하는거 같은데 `arguments`로 (iterater, index,  array )을 넘기게 된다.  array는 현재 map이 적용된 array의 참조이다. 떄문에,  아래와 같이 사용할경우 `parseInt`의 두번째인자로 사용되는 진법 변환떄문에 문제가 될 수 있다.</i>

```js
_.map(['6', '8', '10'], parseInt);
// => (3) [6, NaN, 2]

// _.map([ ... ], (원소요소, 인덱스, 전체 배열) => { ... })
// _.map([ ... ], parseInt) 해서 넘겨버리면 parseInt에 두 번 째 인자값이 진법이라서
// _.ary(parseInt, 1) 하면 인자를 하나만 제한해서 원소 요소만 넘기게된다.
```

<i>`parseInt() `의경우 두번째인자로 진법 변환을 시키는 인자이기 때문에 3개 인자를 전해주는 map을 사용할 경우 문제가 된다. 떄문에, `_.ary`를 사용하여 인자의 개수를 정해서 넘겨주게 되면 원소요소만 전달하여 원하는 값을 얻을 수 있을 것이다.. 그럼 로대쉬 도큐의 기본예제가 이해가 될 것이다.</i>



+ **_.unary(func)**

추가 인수를 무시하고 최대 하나의 인수를 허용하는 함수를 만듭니다.

```js
_.map(['6', '8', '10'], _.unary(parseInt));
// => [6, 8, 10]

```

<i>`_.ary`의 사용법을 단축시킨건대, `_.ary`의 경우는 인자를 1,2,3... 이런식으로 조절할 수 있는데 1로 자주쓰이니까 `_.unary`를 만들어  `_.ary(func,1)`을 만든거라고 보면 될 것 같다.</i>



+ **_.before(n, func)**

이 바인딩과 생성 된 함수의 인수를 사용하여 func을 호출하는 함수를 만듭니다.이 함수는 n보다 작 으면서 호출됩니다. 생성 된 함수에 대한 후속 호출은 마지막 func 호출의 결과를 반환합니다.

지정한 만큼만 호출하여 작동함.

```js
$('#btn').on('click', _.before(5, function(){
  console.log('helo');
}));
//=> 4번만 helo 가 뜸.
```



+ **_.bind(func, thisArg, [partials])**

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





+ **_.bindKey(object, key, [partials])**

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





+ **_.curry(func, [arity=func.length])**

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



+ **_.curryRight(func, [arity=func.length])**

이 메소드는 인수가 _.partial 대신 _.partialRight의 func에 func에 적용된다는 점을 제외하고는 _curry와 같습니다.

단일체 빌드에서 기본적으로 _ 인 _.curryRight.placeholder 값은 제공된 인수의 자리 표시 자로 사용될 수 있습니다.

참고 :이 메서드는 카레 함수의 "길이"속성을 설정하지 않습니다.

```js

```



+ **_.debounce(func, [wait=0], [options={}])**

 디 바운스 함수가 호출 된 마지막 시간이 경과 한 후 대기 밀리 초가 될 때까지 func 호출을 지연시키는 디 바운스 함수를 작성합니다. 디 바운스 된 함수에는 지연된 func 호출을 취소하는 cancel 메소드와 즉시 func 호출을 플러시하는 메소드가 있습니다. func가 대기 시간 초과의 시작 및 / 또는 후행 가장자리에서 호출되어야하는지 여부를 나타내는 옵션을 제공하십시오. func는 debounced 함수에 제공되는 마지막 인자로 호출됩니다. 이후에 debounced 함수를 호출하면 마지막 func 호출의 결과가 반환됩니다.

마지막 호출 이후 일정 밀리세컨드 이후로 지연된 호출을 하도록 debounce된 함수를 만듭니다.

`_.debounce`는 `_.throttle`과 마찬가지로 과다한 이벤트 로직 실행을 방지하기 위해 사용되는 함수이다. 바로 실행되는 `_.throttle`과는 달리 호출이 반복되는 동안에는 로직 실행을 방지하며, 호출이 멈춘 뒤, 설정한 시간이 지나고 나서야 로직을 실행하게 된다

`_.debounce` 역시 실제로 자주 활용되는데, 가장 자주 활용되는 사례로는 AJAX 요청을 이용하는 검색 인터페이스(Autocomplete)가 있겠다. 검색을 담당하는 input 요소에 무언가를 타이핑 할 때마다 AJAX 요청을 보내는 것은 마찬가지로 과도한 부담이다. 따라서 유저가 타이핑을 마쳤다고 예상되는 지점에서 요청을 보내는 것이 적당하다. 그럴 때 `_.debounce`를 사용해서 유저가 타이핑을 멈춘 뒤, 몇 밀리세컨드 이후에 요청을 보내면 되는 것이다.

마지막 호출 이후 일정 밀리세컨드 이후로 지연된 호출을 하도록 debounce된 함수를 만듭니다.

해당 초마다 실행하고 해당 조건이 또 부합하면 그떄 1번씩 실행함. 

```js

var debounceCount = 0;
var notDebounceCount = 0;

var debounceFn = _.debounce(function(){
  $('#debounce').html(`Debounce : ${++debounceCount}`)
   console.log(++debounceCount)
},10)
var notDebounceFn = function(){
  $('#notDebounce').html(`notDebounceCount : ${++notDebounceCount}`)
}
$(document).on('mousemove',function(){
  debounceFn()
  notDebounceFn()
})

// 중요 실시간 ajax를 때릴때, 디바운스를 사용
document.getElementById('input').onkeyup = _.debounce(function() {
  document.getElementById('debounced').innerHTML = 'Debounced message!';
}, 500);


```



+ **_.throttle(func, [wait=0], [options={}])**

최대 대기 밀리 초마다 func 만 호출하는 스로틀 기능을 만듭니다. throttled 함수에는 지연 func 호출을 취소하는 cancel 메소드와 즉시 func 호출을 호출하는 flush 메소드가 있습니다. func가 대기 시간 초과의 시작 및 / 또는 후행 가장자리에서 호출되어야하는지 여부를 나타내는 옵션을 제공하십시오. func은 throttled 함수에 제공된 마지막 인수로 호출됩니다. 이후 스로틀 링 된 함수를 호출하면 마지막 func 호출의 결과가 반환됩니다.

매 밀리세컨드마다 최대 한 번만 호출될 수 있도록 Throttle된 함수를 만듭니다.

`_.throttle`은 로직 실행 주기를 만드는 함수라고 이해하면 된다. 밀리세컨드 단위로 시간을 설정하면 `_.throttle`에 넘긴 콜백함수는 설정한 시간 동안 최대 한 번만 호출된다.

```js
var noThrottledCount = 0;
var throttledCount = 0;

var noThrottledElem = document.getElementById('no-throttle');
var throttledElem = document.getElementById('throttle');

var noThrottledFunc = function() {
	noThrottledElem.innerHTML = noThrottledCount++;
};

var throttledFunc = _.throttle(function() {
	throttledElem.innerHTML = throttledCount++;
}, 100);


document.documentElement.onmousemove = function() {
	noThrottledFunc();
  throttledFunc();
};
```



+ **_.extend(destination, *sources)**

**source** 객체에 있는 모든 프로퍼티를 **destination** 객체에 복사하고, **destination** 객체를 리턴합니다. source는 순서대로 처리하므로, 마지막 source의 프로퍼티가 앞의 인자들이 가진 같은 이름의 프로퍼티를 덮어쓸 수 있습니다.

“extend는 매개변수의 순서에 유의해서 사용해라”라는 말로 축약될 수 있는 이야기를 이렇게 늘어 놓을 필요가 있나 싶지만, 이 문제로 몇 시간 가량을 날려먹었기 때문에 이렇게 포스팅 기록을 남긴다. 역시 API 문서는 영어라고 읽기 싫다고 넘기지말고 주의 깊게 보아야겠다.

```js
const _ = require('underscore');

let people = [{
  name: '이현섭',
  age: 27
}, {
  name: '이승민',
  age: 28
}, {
  name: '오유근',
  age: 26
}];

let base = { home: '한강빌리지' };

people = people.map((person) => _.extend(base, person)); // x
people = people.map((person) => _.extend(person, base)); // o
// 순서 중요
```



+ **_.defer(func, [args])**

현재 호출 스택이 지워질 때까지 func을 호출합니다. func이 호출 될 때 추가 인수가 제공됩니다.



```js
_.defer(function(text) {
  console.log(text);
}, 'deferred');
// => Logs 'deferred' after one millisecond.

_.defer(function(text) {
  console.log(text);
}, 'deferrefd');

console.log('wow');

_.defer(function(text) {
  console.log(text);
}, '
 // = > wow
 // = > deferrefd
 // = > deferred
        
_.delay(function(text) {
  console.log(text);
}, 0, 'later');
//이거와 동일하게 동작함
        
```



+ **_.delay(func, wait, [args])**

 대기 밀리 초 후에 func을 호출합니다. func이 호출 될 때 추가 인수가 제공됩니다.

```js
_.delay(function(text) {
  console.log(text);
}, 1000, 'later');
```



+ **_.flip(func)**

인수가 반전 된 func을 호출하는 함수를 만듭니다.

```js
// 인수가 반전 된 func을 호출하는 함수를 만듭니다.
var flipped = _.flip(function() {
  return _.toArray(arguments);
});
 
flipped('a', 'b', 'c', 'd');
// => ['d', 'c', 'b', 'a']
```



+ **_.memoize(func, [resolver])**

func의 결과를 메모하는 함수를 만듭니다. resolver가 제공되면 memoized 함수에 제공된 인수를 기반으로 결과를 저장하기위한 캐시 키를 결정합니다. 기본적으로 memoized 함수에 제공된 첫 번째 인수는 맵 캐시 키로 사용됩니다. func는 memoized 함수의 바인딩과 함께 호출됩니다.

참고 : 캐시는 memoized 함수의 캐시 속성으로 표시됩니다. _memoize.Cache 생성자를 clear, delete, get, has 및 set의 Map 메소드 인터페이스를 구현하는 인스턴스로 대체하여 생성을 사용자 정의 할 수 있습니다.

```js

var object = { 'a': 1, 'b': 2 };
var other = { 'c': 3, 'd': 4 };
 
var values = _.memoize(_.values);
values(object);
// => [1, 2]
 
values(other);
// => [3, 4]
 
object.a = 2;
values(object);
// => [1, 2]
 
// Modify the result cache.
values.cache.set(object, ['a', 'b']);
values(object);
// => ['a', 'b']
 
// Replace `_.memoize.Cache`.
_.memoize.Cache = WeakMap;

var test = _.memoize(function(val){
  return val
});
console.log(
  test(object)
);
```



+ **_.negate(predicate)**

술어 func의 결과를 무효화하는 함수를 작성합니다. func 술어는이 바인딩과 작성된 함수의 인수로 호출됩니다.

반대로 만들어줌

```js
function isEven(n) {
  return n % 2 == 0;
}
 
_.filter([1, 2, 3, 4, 5, 6], _.negate(isEven));
// => [1, 3, 5]
```



+ **_.once(func)**

func을 한 번만 호출하도록 제한된 함수를 만듭니다. 함수를 반복하여 호출하면 첫 번째 호출의 값이 반환됩니다. func은이 바인딩과 생성 된 함수의 인수를 사용하여 호출됩니다.

```js
function bem(){
  console.log('BEM!');
}
var initialize = _.once(bem);
initialize();
initialize();
initialize();
// 1번만 BEM!이나옴
```



+ **_.overArgs(func, [transforms=[_.identity]])**

인수가 변환 된 func을 호출하는 함수를 만듭니다.

```js
function doubled(n) {
  return n * 2;
}
 
function square(n) {
  return n * n;
}
 
var func = _.overArgs(function(x, y) {
  return [x, y];
}, [square, doubled]);
 
func(9, 3);
// => [81, 6]
 
func(10, 5);
// => [100, 10]
```



+ **_.partial(func, [partials])**

func을 인수로받는 부분 앞에 partial이있는 func을 호출하는 함수를 만듭니다. 이 메소드는이 바인딩을 변경하지 않는다는 점을 제외하면 _.bind와 유사합니다.
모 놀리 식 빌드에서 기본적으로 _ 인 _.partial.placeholder 값은 부분적으로 적용된 인수의 자리 표시 자로 사용될 수 있습니다.
참고 :이 메서드는 부분적으로 적용된 함수의 "length"속성을 설정하지 않습니다.

그냥 새로운 함수를 만들기 위해 만든 함수



```js
//  예를 들어 _.partial 함수는 다음과 같이 기존 함수의 인자를 고정시킨 새로운 함수를 반환해준다.
const add = (v1, v2) => v1 + v2;

const add3 = _.partial(add, 3);
const add5 = _.partial(add, 5);

console.log(add3(10)); // 13
console.log(add5(10)); // 15

//HOF의 장점은 함수에 기능을 추가하는 코드를 재사용 할 수 있다는 것이다. 만약 add 함수를 이용해서 partial 함수가 없이 add3 과 add5 함수를 만드려면 다음과 같이 직접 두 개의 함수를 만들어야 할 것이다.
const add3 = function(x){
  return add(v + 3);
}
const add3 = function(x){
  return add(v + 5);
}
const add6 = v => add(v + 6);
const add8 = v => add(v + 8);

// 하지만 HOF를 이용하면 기능 단위로 새로운 함수를 만들어내는 코드를 재사용할 수 있게 된다. 위의 예제는 너무 간단해서 체감이 잘 안될 수도 있지만, 좀더 복잡한 형태의 HOF인 경우 많은 양의 중복 코드를 제거할 수 있을 것이다.

function acc(f){
  let v = 0;
  return function(){
    v = f(v);
    return v;
  }
}

const partial = (f, v1) => v2 => f(v1, v2);
const add = (v1, v2) => v1 + v2;

const add3 = partial(add, 3);
const acc3 = acc(add3);
console.log(acc3(),acc3(),acc3());
```



+ **_.partialRight(func, [partials])**

이 메소드는 부분적으로 적용된 인수가 수신 한 인수에 추가된다는 점을 제외하면 _.partial과 유사합니다.

모 놀리 식 빌드에서 기본적으로 _ 인 _.partialRight.placeholder 값은 부분적으로 적용된 인수의 자리 표시 자로 사용될 수 있습니다.

참고 :이 메서드는 부분적으로 적용된 함수의 "length"속성을 설정하지 않습니다.

```js
function greet(greeting, name) {
  return greeting + ' ' + name;
}
 
var greetFred = _.partialRight(greet, 'fred');
greetFred('hi');
// => 'hi fred'
 
// Partially applied with placeholders.
var sayHelloTo = _.partialRight(greet, 'hello', _);
sayHelloTo('fred');
// => 'hello fred'
```



+ **_.rearg(func, indexes)**

첫 번째 인덱스의 인수 값이 첫 번째 인수로 제공되고 두 번째 인덱스의 인수 값이 두 번째 인수로 제공되는 등 지정된 인덱스에 따라 정렬 된 인수로 func을 호출하는 함수를 만듭니다.

기존에 만들어서 적용되어있는 함수의 인수를 바꿔서 조질 수 있음.

```js
var rearged = _.rearg(function(a, b, c) {
  return [a, b, c];
}, [2, 0, 1]);
 
rearged('b', 'c', 'a')
// => ['a', 'b', 'c']

rearged('a','b','c')
// => ["c", "a", "b"]
```



+ **_.rest(func, [start=func.length-1])**

생성 된 함수와 인수의이 바인딩을 사용하여 func을 호출하는 함수를 만듭니다.이 함수는 인수로 배열로 제공됩니다.

첫번째 인자만 두면 모든 배열이 들어오고 매개변수를 늘릴때마다 아래와 같이 변한다.

```js
var say = _.rest(function(what,a1,a2) {
  console.log(what,a1,a2);
});
 
console.log(
  say('hello', 'fred', 'barney', 'pebbles')
);
// => hello fred (2) ["barney", "pebbles"]

var say = _.rest(function(what,a1) {
  console.log(what,a1);
});
 
console.log(
  say('hello', 'fred', 'barney', 'pebbles')
);
// => hello (3) ["fred", "barney", "pebbles"]

var say = _.rest(function(what) {
  console.log(what)
});
 
console.log(
  say('hello', 'fred', 'barney', 'pebbles')
);
// => ["hello", "fred", "barney", "pebbles"]
```



+ **_.spread(func, [start=0])**

Create 함수의이 바인딩과 Function # apply와 같은 인수 배열을 사용하여 func을 호출하는 함수를 만듭니다.

```js
var say = _.spread(function(who, what) {
  return who + ' says ' + what;
});
 
say(['fred', 'hello']);
// => 'fred says hello'
 
var numbers = Promise.all([
  Promise.resolve(40),
  Promise.resolve(36)
]);
 
numbers.then(_.spread(function(x, y) {
  return x + y;
}));
// => a Promise of 76
```



+ **_.wrap(value, [wrapper=identity])**

래퍼를 첫 번째 인수로 제공하는 함수를 만듭니다. 함수에 제공된 추가 인수는 랩퍼에 제공된 인수에 추가됩니다. 랩퍼는 작성된 함수의이 Y 인딩으로 호출됩니다.

첫번째들어가는 함수를 두번째인자에 들어가는 함수의 첫번째 인자로 넣어준다.

```js
var p = _.wrap(_.escape, function(func, text) {
  return '<p>' + func(text) + '</p>';
});
 
p('fred, barney, & pebbles');
// => '<p>fred, barney, &amp; pebbles</p>'

var p = _.wrap(function(v){return v+' hehe'}, function(func, text) {
  return '<p>' + func(text) + '</p>';
});

console.log(
  p('fred, barney, & pebbles')
);
// => '<p>fred, barney, &amp; pebbles hehe</p>'
```





## Lang

+ **_.castArray(value)**

값이 배열이 아닌 경우 값을 배열로 변환합니다.

```js
_.castArray(1);
// => [1]
 
_.castArray({ 'a': 1 });
// => [{ 'a': 1 }]
 
_.castArray('abc');
// => ['abc']
 
_.castArray(null);
// => [null]
 
_.castArray(undefined);
// => [undefined]
 
_.castArray();
// => []
 
var array = [1, 2, 3];
console.log(_.castArray(array) === array);
// => true
```



+ **_.clone(value)**

참고 :이 방법은 구조적 복제 알고리즘을 기반으로하며 복제 배열, 배열 버퍼, 부울, 날짜 개체,지도, 숫자, 개체 개체, 정규식, 집합, 문자열, 기호 및 형식이 지정된 배열을 지원합니다. arguments 객체의 자체 열거 가능 속성은 일반 객체로 복제됩니다. 오류 객체, 함수, DOM 노드 및 WeakMaps와 같은 복제 불가능한 값에 대해서는 빈 객체가 반환됩니다.

클론했을때 현재 상황만 참조하고 그 뒤로 원본에 추가하는것들은 복사가 안됨. 좋음..

객체들은 그냥 계속 참조됨.

```js
var objects = [{'a':1},{'b':2}];

var shallow = _.clone(object);
console.log(shallow[0] === objects[0]);
object.a = 'wow';
object[0].a = 5

console.log(object);
// 0: {a: 5}
// 1: {b: 2}
// a: "wow"
console.log(shallow);
// 0: {a: 5}
// 1: {b: 2}
```



+ **_.cloneDeep(value)**

이 메소드는 재귀 적으로 값을 복제한다는 점을 제외하면 _.clone과 유사합니다.

```js
var objects = [{ 'a': 1 }, { 'b': 2 }];
 
var deep = _.cloneDeep(objects);
console.log(deep[0] === objects[0]);
// => false
```



+ **_.cloneDeepWith(value, [customizer])**

이 메소드는 재귀 적으로 값을 복제한다는 점을 제외하면 _.cloneWith와 같습니다.

단순 복사가 아닌 커스텀해서 깊은 복사를 할 수가 있음.

```js
function customizer(value) {
  if (_.isElement(value)) {
    return value.cloneNode(true); //자식까지 모두 복사함.
  }
}
 
var el = _.cloneDeepWith(document.body, customizer);
 
console.log(el === document.body);
// => false
console.log(el.nodeName);
// => 'BODY'
console.log(el.childNodes.length);
// => 20 
```



+ **_.cloneWith(value, [customizer])**

이 메서드는 _.clone과 비슷하지만 복제 된 값을 생성하기 위해 호출되는 사용자 지정자를 허용한다는 점만 다릅니다. 사용자 정의 프로그램이 undefined를 반환하면 복제가 대신 메소드에 의해 처리됩니다. 사용자 정의 프로그램은 최대 네 개의 인수로 호출됩니다. (값 [, 색인 | 키, 객체, 스택]).

단순 복사가 아닌 커스텀해서 얕은 복사를 할 수가 있음.

```js
function customizer(value) {
  if (_.isElement(value)) {
    return value.cloneNode(false);
  }
}
 
var el = _.cloneWith(document.body, customizer);
 
console.log(el === document.body);
// => false
console.log(el.nodeName);
// => 'BODY'
console.log(el.childNodes.length);
// => 0 
```



+ **_.conformsTo(object, source)**

객체의 해당 속성 값을 사용하여 source의 predicate 속성을 호출하여 객체가 source를 준수하는지 확인합니다.

주 :이 메소드는 소스가 부분적으로 적용될 때 _.conforms와 동일합니다.

두번째 인자로 오브젝트가 들어감.

```js
var object = { 'a': 1, 'b': 2 };
 
_.conformsTo(object, { 'b': function(n) { return n > 1; } });
// => true
 
_.conformsTo(object, { 'b': function(n) { return n > 2; } });
// => false
```



+ **_.eq(value, other)**

두 값 사이의 SameValueZero 비교를 수행하여 두 값이 같은지 확인합니다.

```js
var object = { 'a': 1 };
var other = { 'a': 1 };
 
_.eq(object, object);
// => true
 
_.eq(object, other);
// => false
 
_.eq('a', 'a');
// => true
 
_.eq('a', Object('a'));
// => false
 
_.eq(NaN, NaN);
// => true
```



+ **_.gt(value, other)**

value값이 이 other 것보다 큰지 점검합니다.

```js
_.gt(3, 1);
// => true
 
_.gt(3, 3);
// => false
 
_.gt(1, 3);
// => false
```



- **_.gte(value, other)**

value값이 이 other 것보다 크거나 같은지 점검합니다.

```js
_.gte(3, 1);
// => true
 
_.gte(3, 3);
// => true
 
_.gte(1, 3);
// => false
```



+ **_.isArguments(value)**

값이 인수 객체 일 가능성이 있는지 확인합니다.

```js
_.isArguments(function() { return arguments; }());
// => true
 
_.isArguments([1, 2, 3]);
// => false
```



+ **_.isArray(value)**

값이 Array 객체로 분류되는지 확인합니다.

```js
_.isArray([1, 2, 3]);
// => true
 
_.isArray(document.body.children);
// => false
 
_.isArray('abc');
// => false
 
_.isArray(_.noop);
// => false

_.isArray(function(){return arguments})
// => false
```



+ **_.isArrayBuffer(value)**

```js
_.isArrayBuffer(new ArrayBuffer(2));
// => true
 
_.isArrayBuffer(new Array(2));
// => false
```



+ **_.isArrayLike(value)**

값이 배열 형인지 확인합니다. 값이 함수가 아니고 0보다 크고 같고 Number.MAX_SAFE_INTEGER보다 작거나 같은 정수인 value.length를 갖는 경우 값은 배열과 같은 것으로 간주됩니다.

```js
_.isArrayLike([1, 2, 3]);
// => true
 
_.isArrayLike(document.body.children);
// => true
 
_.isArrayLike('abc');
// => true
 
_.isArrayLike(_.noop);
// => false
```



+ **_.*isArrayLikeObject*(value)**

이 메소드는 value가 객체인지 여부를 확인한다는 점을 제외하면 _.isArrayLike와 유사합니다.

```js
_.isArrayLikeObject([1, 2, 3]);
// => true
 
_.isArrayLikeObject(document.body.children);
// => true
 
_.isArrayLikeObject('abc');
// => false
 
_.isArrayLikeObject(_.noop);
// => false
```



+ **_.isBoolean(value)**

```js
_.isBoolean(false);
// => true
 
_.isBoolean(null);
// => false
```



+ **_.isBuffer(value)**

```js
// => true
 
_.isBuffer(new Uint8Array(2));
// => false
```



+ **_.isDate(value)**

값이 Date 객체로 분류되는지 확인합니다.

```js
_.isDate(new Date);
// => true
 
_.isDate('Mon April 23 2012');
// => false
```



+ **_.isElement(value)**

값이 DOM 요소인지 확인합니다.

```js
_.isElement(document.body);
// => true
 
_.isElement('<body>');
// => false
```



+ ***_.isEmpty(value)***

값이 빈 객체, 컬렉션, 맵 또는 세트인지 확인합니다.

**개체에 열거 가능한 문자열 키 특성이없는 경우 개체는 비어있는 것으로 간주**됩니다.

즉, 숫자는 무조건 트루가 나오게됨.. 문자열은 들어있으면 false

인수 오브젝트, 배열, 버퍼, 문자열 또는 jQuery와 유사한 콜렉션과 같은 배열 형 값은 길이가 0이면 비어있는 것으로 간주됩니다. 마찬가지로 크기가 0 인 경우 맵 및 세트는 비어있는 것으로 간주됩니다.

```js
_.isEmpty(null);
// => true
 
_.isEmpty(true);
// => true
 
_.isEmpty(1);
// => true
 
_.isEmpty([1, 2, 3]);
// => false
 
_.isEmpty({ 'a': 1 });
// => false
```



+ ***_.isEqual(value, other)***

두 값을 동일하게 비교할 수 있도록 두 값을 깊이 비교합니다.

참고 :이 메서드는 배열, 배열 버퍼, 부울 값, 날짜 개체, 오류 개체, 맵, 숫자, 개체 개체, 정규식, 집합, 문자열, 기호 및 입력 된 배열 비교를 지원합니다. 객체 객체는 상속 된 열거 가능 속성이 아닌 자체 객체에 의해 비교됩니다.

**함수와 DOM 노드는 엄격한 동등성, 즉 ===로 비교됩니다.**

일반 적으로는 뎁스만 보고 참조인 ===로 비교핮 ㅣ않지만, 함수랑 DOM노드는 ===로 비교함.

```js
var object = { 'a': 1 };
var other = { 'a': 1 };
 
_.isEqual(object, other);
// => true

function hello(){}
_.isEqual(hello, function(){})
// => false


```





>
>
>- ***_.isEqualWith(value, other, [customizer])***
>
>이 메서드는 _.isEqual과 비슷하지만 값을 비교하기 위해 호출되는 사용자 지정자를 허용한다는 점만 다릅니다. 사용자 정의 프로그램이 undefined를 반환하면 비교가 대신 메소드에 의해 처리됩니다. 커스터마이져는 (objValue, othValue [, index | key, object, other, stack]) 최대 6 개의 인수로 호출됩니다.
>
>```js
>
>```
>
>



+ ***_.isError(value)***

값이 Error, EvalError, RangeError, ReferenceError, SyntaxError, TypeError 또는 URIError 객체인지 확인합니다.

```js
_.isError(new Error);
// => true
 
_.isError(Error);
// => false
```



+ ***_.isFinite(value)***

값이 유한 프리미티브 숫자인지 확인합니다.

```js
_.isFinite(3);
// => true
 
_.isFinite(Number.MIN_VALUE);
// => true
 
_.isFinite(Infinity);
// => false
 
_.isFinite('3');
// => false
```



+ ***_.isFunction(value)***

값이 Function 개체로 분류되는지 확인합니다.

```js
_.isFunction(_);
// => true
 
_.isFunction(/abc/);
// => false
```



+ ***_.isInteger(value)***

값이 정수인지 검사합니다.

참고 :이 메서드는 Number.isInteger를 기반으로합니다.

```js
_.isInteger(3);
// => true
 
_.isInteger(Number.MIN_VALUE);
// => false
 
_.isInteger(Infinity);
// => false
 
_.isInteger('3');
// => false
```



+ ***_.isLength(value)***

값이 유효한 배열 모양 길이인지 확인합니다.

참고 :이 메서드는 ToLength를 기반으로합니다.

```js
_.isLength(3);
// => true
 
_.isLength(Number.MIN_VALUE);
// => false
 
_.isLength(Infinity);
// => false
 
_.isLength('3');
// => false
```



+ ***_.isMap(value)***

값이 Map 객체로 분류되는지 확인합니다.

```js
_.isMap(new Map);
// => true
 
_.isMap(new WeakMap);
// => false
```



+ ***_.isMatch(object, source)***

객체와 소스를 부분적으로 비교하여 객체가 동일한 속성 값을 포함하는지 확인합니다.

주 :이 메소드는 소스가 부분적으로 적용될 때 _.matches와 동일합니다.

부분 비교는 빈 배열 및 빈 객체 소스 값을 배열 또는 객체 값과 각각 일치시킵니다. 지원되는 값 비교 목록은 _.isEqual을 참조하십시오.

```js
var object = { 'a': 1, 'b': 2 };
 
_.isMatch(object, { 'b': 2 });
// => true
 
_.isMatch(object, { 'b': 1 });
// => false
```



+ ***_.isNative(value)***

네이티브 기능을 안정적으로 감지 할 수 없습니다. 여러 요청에도 불구하고, core-js 관리자는 탐지를 수정하려는 모든 시도가 방해받을 것임을 분명히했습니다. 결과적으로, 우리는 선택의 여지가 있지만 오류를 던질 것입니다. 불행하게도 이것은 core-js에 의존하는 babel-polyfill 같은 패키지에도 영향을 미친다.

```js
_.isNative(Array.prototype.push);
// => true
 
_.isNative(_);
// => false
```





+ ***_.isNil(value)***

값이 null인지 또는 'undefined'인지 확인합니다.

```js
_.isNil(null);
// => true
 
_.isNil(void 0);
// => true
 
_.isNil(NaN);
// => false
```



+ ***_.isNull(value)***

값이 **null** 일지 어떨지를 판정합니다.

```js
_.isNull(null);
// => true
 
_.isNull(void 0);
// => false
```



+ ***_.isNumber(value)***

값이 Number 프리미티브 또는 객체로 분류되는지 확인합니다.

참고 : 숫자로 분류 된 Infinity, -Infinity 및 NaN을 제외하려면 _.isFinite 메서드를 사용합니다.

```js
_.isNumber(3);
// => true
 
_.isNumber(Number.MIN_VALUE);
// => true
 
_.isNumber(Infinity);
// => true
 
_.isNumber('3');
// => false
```



+ ***_.isObject(value)***

value가 Object의 언어 유형인지 확인합니다. (예 : 배열, 함수, 객체, 정규식, 새 Number (0) 및 새 String ( '))

```js
_.isObject({});
// => true
 
_.isObject([1, 2, 3]);
// => true
 
_.isObject(_.noop);
// => true
 
_.isObject(null);
// => false
```



+ ***_.isObjectLike(value)***

값이 객체와 같은지 검사합니다. null이 아니고 **typeof** result가 "object"인 경우 값은 객체와 유사합니다.

```js
_.isObjectLike({});
// => true
 
_.isObjectLike([1, 2, 3]);
// => true
 
_.isObjectLike(_.noop);
// => false
 
_.isObjectLike(null);
// => false
```



+ ***_.isPlainObject(value)***

값이 일반 객체, 즉 Object 생성자 또는 [[Prototype]]이 **null** 인 객체인지 확인합니다.

```js
function Foo() {
  this.a = 1;
}
 
_.isPlainObject(new Foo);
// => false
 
_.isPlainObject([1, 2, 3]);
// => false
 
_.isPlainObject({ 'x': 0, 'y': 0 });
// => true
 
_.isPlainObject(Object.create(null));
// => true
```



+ ***_.isRegExp(value)***

값이 RegExp 객체로 분류되는지 확인합니다.

```js
_.isRegExp(/abc/);
// => true
 
_.isRegExp('/abc/');
// => false
```





+ ***_.isString(value)***

값이 String 프리미티브 또는 객체로 분류되는지 확인합니다.

```js
_.isString('abc');
// => true
 
_.isString(1);
// => false
```



+ ***_.isUndefined(value)***

값이 정의되지 않았는지 확인합니다.

```js
_.isUndefined(void 0);
// => true
 
_.isUndefined(null);
// => false
```



+ ***_.lt(value, other)***

값이 다른 것보다 작은 지 점검합니다.

```js
_.lt(1, 3);
// => true
 
_.lt(3, 3);
// => false
 
_.lt(3, 1);
// => false
```



+ ***_.lte(value, other)***

값이 다른 값보다 작거나 같은지 검사합니다.

```js
_.lte(1, 3);
// => true
 
_.lte(3, 3);
// => true
 
_.lte(3, 1);
// => false
```



+ ***_.toArray(value)***

값을 배열로 변환합니다.

값만 변환시킴, 객체를 넣으면 값만 가져오고, 스트링을 넣으면 각각 배열의 요소로 들어가지만, 숫자가 들어가면 빈배열이 나오게됨.

```js
_.toArray({ 'a': 1, 'b': 2 });
// => [1, 2]
 
_.toArray('abc');
// => ['a', 'b', 'c']
 
_.toArray(1);
// => []
 
_.toArray(null);
// => []
```



+ ***_.toInteger(value)***

참고 :이 방법은 ToInteger를 기반으로합니다.

```js
_.toInteger(3.2);
// => 3
 
_.toInteger(Number.MIN_VALUE);
// => 0
 
_.toInteger(Infinity);
// => 1.7976931348623157e+308
 
_.toInteger('3.2');
// => 3
```



+ ***_.toLength(value)***

배열과 같은 객체의 길이로 사용하기에 적합한 정수로 값을 변환합니다.

```js
_.toLength(3.2);
// => 3
 
_.toLength(Number.MIN_VALUE);
// => 0
 
_.toLength(Infinity);
// => 4294967295
 
_.toLength('3.2');
// => 3
```



+ ***_.toNumber(value)***

값을 숫자로 변환합니다.

```js
_.toNumber(3.2);
// => 3.2
 
_.toNumber(Number.MIN_VALUE);
// => 5e-324
 
_.toNumber(Infinity);
// => Infinity
 
_.toNumber('3.2');
// => 3.2
```



+ ***_.toPlainObject(value)***

값을 일반 객체의 속성을 소유하기 위해 상속받은 열거 가능한 문자열의 키 특성을 병합하는 일반 객체로 값을 변환합니다.

```js
function Foo() {
  this.b = 2;
}
 
Foo.prototype.c = 3;
 
_.assign({ 'a': 1 }, new Foo);
// => { 'a': 1, 'b': 2 }
 
_.assign({ 'a': 1 }, _.toPlainObject(new Foo));
// => { 'a': 1, 'b': 2, 'c': 3 }
```



+ ***_.toString(value)***

스트링으로 변환해줌

```js
_.toString(null);
// => ''
 
_.toString(-0);
// => '-0'
 
_.toString([1, 2, 3]);
// => '1,2,3'
```



## Math

+ ***_.add(augend, addend)***

두 개의 숫자를 더합니다.

```js
_.add(6, 4);
// => 10
```



+ ***_.ceil(number, [precision=0])***

정밀도로 반올림 한 수를 계산합니다.

```js
_.ceil(4.006);
// => 5
 
_.ceil(6.004, 2);
// => 6.01
 
_.ceil(6040, -2);
// => 6100
```



+ ***_.divide(dividend, divisor)***

두 숫자를 나눕니다.

```js
_.divide(6, 4);
// => 1.5
```



+ ***_.floor(number, [precision=0])***

정밀도로 반올림 한 수를 계산합니다.

두번째 인자는 precision 개수임.

```js
_.floor(4.006);
// => 4
 
_.floor(0.046, 2);
// => 0.04
 
_.floor(4060, -2);
// => 4000
```



+ ***_.max(array)***

배열의 최대 값을 계산합니다. array가 비어 있거나 거짓이면 undefined가 반환됩니다.

```js
_.max([4, 2, 8, 6]);
// => 8
 
_.max([]);
// => undefined
```



+ ***_.maxBy(array, [iteratee=_.identity])***

이 메소드는 array의 각 요소에 대해 호출 된 iteratee를 허용한다는 점을 제외하고 _.max와 유사합니다.이 값은 해당 값의 순위 지정 기준을 생성합니다. iteratee는 (value) 하나의 인수로 호출됩니다.

```js
var objects = [{ 'n': 1 }, { 'n': 2 }];
 
_.maxBy(objects, function(o) { return o.n; });
// => { 'n': 2 }
 
// The `_.property` iteratee shorthand.
_.maxBy(objects, 'n');
// => { 'n': 2 }
```



+ ***_.mean(array)***

배열에있는 값의 평균을 계산합니다.

```js
_.mean([4, 2, 8, 6]);
// => 5
```



+ ***_.meanBy(array, [iteratee=_.identity])***

이 메소드는 array의 각 요소에 대해 호출 된 iteratee를 받아 들여 평균값을 생성한다는 점을 제외하면 _.mean과 유사합니다. iteratee는 (value) 하나의 인수로 호출됩니다.

```js
var objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];
 
_.meanBy(objects, function(o) { return o.n; });
// => 5
 
// The `_.property` iteratee shorthand.
_.meanBy(objects, 'n');
// => 5
```



+ ***_.min(array)***

배열의 최소값을 계산합니다. array가 비어 있거나 거짓이면 undefined가 반환됩니다.

```js
_.min([4, 2, 8, 6]);
// => 2
 
_.min([]);
// => undefined
```



+ ***_.minBy(array, [iteratee=_.identity])***

이 메소드는 배열의 각 요소에 대해 호출 된 iteratee를 받아 들여 값의 순위 지정 기준을 생성한다는 점을 제외하면 _.min과 유사합니다. iteratee는 (value) 하나의 인수로 호출됩니다.

```js
var objects = [{ 'n': 1 }, { 'n': 2 }];
 
_.minBy(objects, function(o) { return o.n; });
// => { 'n': 1 }
 
// The `_.property` iteratee shorthand.
_.minBy(objects, 'n');
// => { 'n': 1 }
```



+ ***_.multiply(multiplier, multiplicand)***

두 숫자를 곱하십시오.

```js
_.multiply(6, 4);
// => 24
```



+ ***_.round(number, [precision=0])***

정밀도로 반올림 한 수를 계산합니다.

두번째 인자는 precision임.

```js
_.round(4.006);
// => 4
 
_.round(4.006, 2);
// => 4.01
 
_.round(4060, -2);
// => 4100
```



+ ***_.subtract(minuend, subtrahend)***

두 숫자를 뺍니다.

```js
_.subtract(6, 4);
// => 2
```



+ ***_.sum(array)***

배열에있는 값의 합을 계산합니다.

```js
_.sum([4, 2, 8, 6]);
// => 20
```



+ ***_.sumBy(array, [iteratee=_.identity])***

이 메소드는 _.sum과 비슷하지만, 배열의 각 요소에 대해 호출 된 iteratee를 받아 들여 합계 값을 생성합니다. iteratee는 (value) 하나의 인수로 호출됩니다.

```js
var objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];
 
_.sumBy(objects, function(o) { return o.n; });
// => 20
 
// The `_.property` iteratee shorthand.
_.sumBy(objects, 'n');
// => 20
```





+ ***_.clamp(number, [lower], upper)***

포괄적 인 상한 및 하한 범위 내에서 클램프 수.



```js
_.clamp(-10, -5, 5);
// => -5
// => -5부터 5까지의 값만 동작하게됨 첫번째 값이 -10이라고 할지라도 -5까지만 잡혀있어서 -5이하는 모두 -5로 반환하게되고 5이상의 값을 첫번째 인자로 넣으면 5까지만 반환하게됨.
 
_.clamp(10, -5, 5);
// => 5
.clamp(-500, -100, 5)
// => -100
_.clamp(9999, -100, 5)
// =>5
```



+ ***_.inRange(number, [start=0], end)***

n가 개시와 종료까지의 사이에 있는지 없는지를 판정합니다. end가 지정되어 있지 않은 경우, start로 시작되어 0으로 설정됩니다. start가 end보다 큰 경우, params는 부의 범위를 지원하도록 (듯이) 스왑됩니다.

가운대가 옵셔널이고, 가운데 인자가 있으면, 두번째 인자가 start부터 세번째인자 end 까지 사이에 첫번째 인자가 있으면 true

인자가 2개밖에 없으면 2번째인자가 end이고 첫번째 인자가 두번째 인자안에 있으면 trur

```js
_.inRange(3, 2, 4);
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
```



+ ***_.random([lower=0], [upper=1], [floating])***

포괄적 인 하위 경계와 상위 경계 사이에 임의의 숫자를 생성합니다. 인수가 1 개만 지정되면 (자), 0 ~ 지정된 번호의 사이의 수치가 돌려 주어집니다. floating이 true이거나 lower 또는 upper가 float이면 부동 소수점 숫자가 정수 대신 반환됩니다.

```js
_.random(0, 5);
// => an integer between 0 and 5
 
_.random(5);
// => also an integer between 0 and 5
 
_.random(5, true);
// => a floating-point number between 0 and 5
 
_.random(1.2, 5.2);
// => a floating-point number between 1.2 and 5.2
```



+ ***_.assign(object, [sources])***

소스 개체의 자체 열거 형 문자열 키 특성을 대상 개체에 할당합니다. 원본 개체는 왼쪽에서 오른쪽으로 적용됩니다. 후속 소스는 이전 소스의 등록 정보 지정을 겹쳐 9니다.

```js
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
```



+ ***_.assignIn(object, [sources])***

이 메소드는 _.assign과 유사하지만, 자신과 상속 된 소스 특성을 반복한다는 점만 다릅니다.

```js
function Foo() {
  this.a = 1;
}
 
function Bar() {
  this.c = 3;
}
 
Foo.prototype.b = 2;
Bar.prototype.d = 4;
 
_.assignIn({ 'a': 0 }, new Foo, new Bar);
// => { 'a': 1, 'b': 2, 'c': 3, 'd': 4 }
// 프로토타입까지 할당해버림.
```



+ ***_.assignInWith(object, sources, [customizer])***

이 메소드는 _.assignIn과 비슷하지만 할당 된 값을 생성하기 위해 호출되는 사용자 정의 프로그램을 허용한다는 점만 다릅니다. 사용자 정의 프로그램이 undefined를 반환하면 대신 할당이 처리됩니다. 커스터마이져는 (objValue, srcValue, key, object, source) 5 개의 인자로 호출된다.

```js

```



+ ***_.assignWith(object, sources, [customizer])***

이 메서드는 할당 된 값을 생성하기 위해 호출되는 사용자 지정자를 수락한다는 점을 제외하면 _.assign과 유사합니다. 사용자 정의 프로그램이 undefined를 반환하면 대신 할당이 처리됩니다. 커스터마이져는 (objValue, srcValue, key, object, source) 5 개의 인자로 호출된다.

```js

```

