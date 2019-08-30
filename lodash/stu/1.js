

// var INFINITY = 1 / 0,
//  MAX_SAFE_INTEGER = 9007199254740991,
//  MAX_INTEGER = 1.7976931348623157e+308,
//  NAN = 0 / 0;
// var arrayProto = Array.prototype,
//  funcProto = Function.prototype,
//  objectProto = Object.prototype;

// var freeParseFloat = parseFloat,
//       freeParseInt = parseInt;
// var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;
// var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
// var root = freeGlobal || freeSelf || Function('return this')();
// var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;
// var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;
// var moduleExports = freeModule && freeModule.exports === freeExports;
// var freeProcess = moduleExports && freeGlobal.process;
// var Buffer = moduleExports ? context.Buffer : undefined,
//  Symbol = context.Symbol,
//  Uint8Array = context.Uint8Array,
//  allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined,
//  getPrototype = overArg(Object.getPrototypeOf, Object),
//  objectCreate = Object.create,
//  propertyIsEnumerable = objectProto.propertyIsEnumerable,
//  splice = arrayProto.splice,
//  spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined,
//  symIterator = Symbol ? Symbol.iterator : undefined,
//  symToStringTag = Symbol ? Symbol.toStringTag : undefined;
// var nativeObjectToString = objectProto.toString;
// var isArray = Array.isArray;
// var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
//   return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
//     !propertyIsEnumerable.call(value, 'callee');
// };

function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}
function functions(object) {
  return object == null ? [] : baseFunctions(object, keys(object));
}
function baseFunctions(object, props) {
  return arrayFilter(props, function(key) {
    return isFunction(object[key]);
  });
}
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}
function transform(object, iteratee, accumulator) {
  var isArr = isArray(object),
      isArrLike = isArr || isBuffer(object) || isTypedArray(object);

  iteratee = getIteratee(iteratee, 4);
  if (accumulator == null) {
    var Ctor = object && object.constructor;
    if (isArrLike) {
      accumulator = isArr ? new Ctor : [];
    }
    else if (isObject(object)) {
      accumulator = isFunction(Ctor) ? baseCreate(getPrototype(object)) : {};
    }
    else {
      accumulator = {};
    }
  }
  (isArrLike ? arrayEach : baseForOwn)(object, function(value, index, object) {
    return iteratee(accumulator, value, index, object);
  });
  return accumulator;
}
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}
function objectToString(value) {
  return nativeObjectToString.call(value);

}
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;
  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

function flatten(array) {
  var length = array == null ? 0 : array.length;
  return length ? baseFlatten(array, 1) : [];

}
function flattenDeep(array) {
  var length = array == null ? 0 : array.length;
  return length ? baseFlatten(array, INFINITY) : [];
}

// flatable이 가능한지 확인. 
// 배열인지 살피고, 아규먼트인지 살피고, 
function isFlattenable(value) {
  return isArray(value) || isArguments(value) ||
    !!(spreadableSymbol && value && value[spreadableSymbol]);
}

// 큰 함수를 하나 만들고, 기능을 쪼개논다...
function baseFlatten(array, depth, predicate, isStrict, result) {
  var index = -1,
      length = array.length;

  predicate || (predicate = isFlattenable);
  result || (result = []);

  while (++index < length) {
    var value = array[index];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        // Recursively flatten arrays (susceptible to call stack limits).
        baseFlatten(value, depth - 1, predicate, isStrict, result);
      } else {
        arrayPush(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}

let arr = [1,2,3,[4]]
console.log(
  // baseFlatten(arr)
);


function test(array,depth,result){
  //처음 뎁스를 2로 했을때
  var index = -1;
  var length = array.length; //4
  result || (result = []); // [] // result가 있으면 참조 배열을 사용하겠다이거임 재귀시..

  while(++index < length){
    var value = array[index];// 들어온 인자의 순회

    if(depth > 0 && Array.isArray(value)){ //뎁스가 1 이상이고 순회하는데 배열이 나오게되면,
      if(depth > 1){
        //value는 뎁스가 있는 배열, 처음에 넣은 depth에서 -1을 해준다., result는 맨처음 함수에서 만든 배열을 참조.
        test(value,depth-1,result); // 다시돌아가게되면. [5,[6]] 가  첫번쨰 value로 들어가게된다. e뎁스는 1
  
      }else{
        //새배열에  value를 계속 합쳐서 줌. result는 참조 상태이기때문에 함수 내부에서 반복문이 돌아도 계속 들어감.
        arrayPush(result,value)
      }
    }else{ // 뎁스가 1이하면. 그냥 뒤쪽으로 벨류들을 계속 넣음.
      result[result.length] = value;
    }

  }

  return result
}
test([1,2,3,[5,[6]],7], 2)



function pushArr(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;
  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}
let res = [];
for(let i = 0 ; i < 5 ; i ++){
  pushArr(res,[i])
}
console.log(res);