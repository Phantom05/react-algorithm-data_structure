var uniqueInOrder = function (iter) {
  const arr = Array.isArray(iter) ? iter.join('').split('') : iter.split('');
  const new_arr = [];
  arr.forEach((list, idx) => {
    if (arr[idx - 1] != list)(isNaN(+list)) ? new_arr.push(list) : new_arr.push(+list)
  });
  return new_arr
}


function uniqueInOrder(it) {
  var result = [], last;
  for (var i = 0; i < it.length; i++) {
    if (it[i] !== last) {
      result.push(last = it[i])
    }
  }
  return result
}


var uniqueInOrder = function (iterable) {
  return [].filter.call(iterable, (function (a, i) {
    return iterable[i - 1] !== a
  }));
}


var uniqueInOrder = function (iterable) {
  return Array.prototype.reduce.call(iterable, function (a, b) {
    if (a[a.length - 1] !== b) a.push(b);
    return a;
  }, []);
}


console.log(
  uniqueInOrder('ABBCcAD')
);
console.log(
  uniqueInOrder([1, 2, 2, 3, 3])
);