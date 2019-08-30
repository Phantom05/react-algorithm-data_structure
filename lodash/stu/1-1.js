function _push(array,value){
  var index = -1,
  value = Array.prototype.slice.call(arguments[1]),
  length = value.length,
  offset = array.length;

  while(++index < length){
    array[offset + index] = value[index];
  }
  return array
}

let a = [1];
console.log(
  _push(a,[1,2,3,4])
);


function __push(){
  var index = -1,
  value = Array.prototype.slice.call(arguments),
  length = value.length,
  offset = this.length;
  while(++index < length){
    this[offset + index] = value[index];
  }
  return this
}

Array.prototype._push = __push;

let a = [1];
console.log(
  a._push(5,6,7,8,[5])
);