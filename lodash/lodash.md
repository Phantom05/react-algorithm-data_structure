lodash

+ chunk

청크는 덩어리라는 뜻으로 하나의 배열을 잘라주는 역할을 한다.

```js
_.chunk([1,2,3],2)
// [1,2],[3]
```



+ compact 

compact는 배열의 false나 ' '같은 빈값을 걸러준다.

```js
_.compact([0, 1, false, 2, '', 3]);
// => [1, 2, 3]
```



+ concat

배열을 하나로 합쳐준다. 

```js
var array = [1];
var other = _.concat(array, 2, [3], [[4]]);
 
console.log(other);
// => [1, 2, 3, [4]]
 
console.log(array);
// => [1]
```



+ difference

차집합으로 두번째 배열요소에 포함하지 않는 첫번째배열의 나머지 요소를 반화한다.

```js
_.difference([2, 1], [2, 3]);
// => [1]
```



+ _.differenceBy

차집합에서 조건을 달수있다. 3번째인자로 필터링을 하고 값을 구한다음에 구한 값의 원본을 반환한다.

```js
_.differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor);
// => [1.2]
 
// The `_.property` iteratee shorthand.
_.differenceBy([{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }], 'x');
// => [{ 'x': 2 }]
```



+ drop

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



+  _.dropRight

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



+ fill

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



+ findIndex

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



+ findLastIndex

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



+ flatten

이중 배열까지는 플랫하게 만든다.

```js
_.flatten([1, [2, [3, [4]], 5]]);
// => [1, 2, [3, [4]], 5]
```



+ flattenDeep

깊은 배열까지 플랫하게 만든다.

```js
_.flattenDeep([1, [2, [3, [4]], 5]]);
// => [1, 2, 3, 4, 5]
```



+ flattenDepth

플랫의 뎁스를 인덱스로 컨트롤 할수 있다.

```js
var array = [1, [2, [3, [4]], 5]];
 
_.flattenDepth(array, 1);
// => [1, 2, [3, [4]], 5]
 
_.flattenDepth(array, 2);
// => [1, 2, 3, [4], 5]
```



+ fromParis

_.toPairs의 역함수. 이 메서드는 키 - 값 쌍으로 구성된 객체를 반환합니다.

```js
_.fromPairs([['a', 1], ['b', 2]]);
// => { 'a': 1, 'b': 2 }
```



+ head

배열의 첫번쨰인자를 가져옴

```ㅓjs
_.head([1, 2, 3]);
// => 1
 
_.head([]);
// => undefined
```



+ indexOf

인덱스오브, 세번째인자로 세번째인덱스에 있는 놈을 

```js
_.indexOf([1, 2, 1, 2], 2);
// => 1
 
// Search from the `fromIndex`.
_.indexOf([1, 2, 1, 2], 2, 2);
// => 3
```



+ lastIndexOf

이 메소드는 array의 요소를 오른쪽에서 왼쪽으로 반복한다는 점을 제외하면 _.indexOf와 유사합니다.

```js
_.lastIndexOf([1, 2, 1, 2], 2);
// => 3
 
// Search from the `fromIndex`.
_.lastIndexOf([1, 2, 1, 2], 2, 2);
// => 1
```





+ initial

마지막 요소를 제외한 배열을 가져옴

```js
_.initial([1, 2, 3]);
// => [1, 2]
```



+ intersection

동일성 비교를 위해 SameValueZero를 사용하여 지정된 모든 배열에 포함 된 고유 한 값의 배열을 만듭니다. 결과 값의 순서와 참조는 첫 번째 배열에 의해 결정됩니다.

```js
_.intersection([2, 1], [2, 3]);
// => [2]
 _.intersection([2, 1, 3], [2, 3],[2])
// => [2]
```



+ intersectionBy

이 메소드는 _.intersection과 비슷하지만, 각 배열의 각 요소에 대해 호출되는 iteratee를 받아 들여 비교할 기준을 생성합니다. 결과 값의 순서와 참조는 첫 번째 배열에 의해 결정됩니다. iteratee는 하나의 인수로 호출됩니다.

```js
_.intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor);
// => [2.1]
 
// The `_.property` iteratee shorthand.
_.intersectionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
// => [{ 'x': 1 }]
```



+ insersectionWith

이 메소드는 array 요소를 비교하기 위해 호출되는 비교자를 허용한다는 점을 제외하면 _.intersection과 유사합니다. 결과 값의 순서와 참조는 첫 번째 배열에 의해 결정됩니다. 비교자는 두 개의 인수 (arrVal, othVal)로 호출됩니다.

```js
var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
 
_.intersectionWith(objects, others, _.isEqual);
// => [{ 'x': 1, 'y': 2 }]
```



+ join

```js
_.join(['a', 'b', 'c'], '~')
// => 'a~b~c'
```



+ last

마지막 엘리먼트요소를 가져옴

```js
_.last([1, 2, 3]);
// => 3
```



+ nth

배열의 인덱스 n에있는 요소를 가져옵니다. n가 음수이면 끝에있는 n 번째 요소가 반환됩니다.

```js
var array = ['a', 'b', 'c', 'd'];
 
_.nth(array, 1);
// => 'b'
 
_.nth(array, -2);
// => 'c';
```



+ pull

동일성 비교를 위해 SameValueZero를 사용하여 배열에서 주어진 모든 값을 제거합니다.

```js
var array = ['a', 'b', 'c', 'a', 'b', 'c'];
 
_.pull(array, 'a', 'c');
console.log(array);
// => ['b', 'b']

_.pull([1,2,3,4,5,1,2,3,4],1,2,3,4)
// => [5]
```



+ pullAll

제거할 항목을 배열로 제공한다

```js
var array = ['a', 'b', 'c', 'a', 'b', 'c'];
 
_.pullAll(array, ['a', 'c']);
console.log(array);
// => ['b', 'b']
```



+ pullAt

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



+ remove

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



+ reverse

첫 번째 요소가 마지막 요소가되고 두 번째 요소가 두 번째 요소가되도록 배열을 되돌립니다.

```js
var array = [1, 2, 3];
 
_.reverse(array);
// => [3, 2, 1]
 
console.log(array);
// => [3, 2, 1]
```



+ slice

_.slice(array,[start=0],[end=array.length])

시작부터 끝까지 포함하는 배열 조각을 만듭니다.

```js
var arr = [1,2,3,3,4];
_.slice(arr,1,3)
// => [2,3]
```



+ sortedIndex

이진 검색을 사용하여 정렬 순서를 유지하기 위해 값을 배열에 삽입해야하는 가장 낮은 인덱스를 결정합니다.

```js
_.sortedIndex([30, 50], 40);
// => 1
_.sortedIndex([30, 50], 20);
// => 0
_.sortedIndex([30, 50], 55);
// => 2
```



+ sortedLastIndex

sortIndex가 가장 낮은 인덱스면 이건 가장 큰인덱스

```js
_.sortedLastIndex([4, 5, 5, 5, 6], 5);
// => 4
```



+ tail

array의 첫 번째 요소를 제외한 모든 것을 가져옵니다.

```js
_.tail([1, 2, 3]);
// => [2, 3]
```



+ take

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



+ takeRight

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



+ takeWhile

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

