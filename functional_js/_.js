/* eslint-disable no-underscore-dangle */
// export 
const FORM_PROPERTIES = {
  key: 'key',
  value: 'value',
  hasError: 'hasError',
  message: 'message',
  isRequired: 'isRequired',
  requiredMessage: 'requiredMessage',
  // Event/s
  onValidation: 'onValidation',
  // Options
  isOnCreatedValidation: 'isOnCreatedValidation',
  isOnChangeValidation: 'isOnChangeValidation',
  onGroupValidation: 'onGroupValidation',
};

// Will be improvement considering browser
const REQUIRED_CHECKING_TYPES = {
  value: 'string',
  hasError: 'boolean',
  message: 'string',
  isRequired: 'boolean',
  requiredMessage: 'string',
  // Events
  onValidation: 'function',
  // Options
  isOnCreatedValidation: 'boolean',
  isOnChangeValidation: 'boolean',
  onGroupValidation: 'function',
};

class FormBuilder {
  constructor(properties, options) {
    // 1. 함수를 생성할 때 가장 먼저 실행되는 것이 생성자이므로 생성자에서 유효성 검사를 실시합니다.
    const validtionProperties = this._checkPropertiesValidation(properties);
    // 4. 주어진 값에 문제가 있다면, 어디에 문제가 있는지를 사용자(개발자)에게 알려줍니다.
    if (!validtionProperties.hasError) {
      throw new Error(
        `Properties types('${validtionProperties.keys.join(', ')}') are invalid`
      );
    }
    this.properties = this._buildFormProperties(properties, options);
  }

  _checkPropertiesValidation = (properties) => {
    // 2. 유효성 검사는 위에서 언급한 Object 값을 이용하여 실행시켜줍니다.
    const invalidProperties = [];
    const isInvalidProperty = Object.keys(REQUIRED_CHECKING_TYPES).every(
      (key) => {
        if (properties[key]) {
          // 3. 주어진 변수에 값이 있다면, 해당 키를 이용하여 타입이 올바른지 확인합니다.
          const propertyType = typeof properties[key];
          const validType = REQUIRED_CHECKING_TYPES[key];
          const isMatch = validType === propertyType;
          if (!isMatch) {
            invalidProperties.push(key);
          }
          return isMatch;
        }
        return true;
      }
    );
    return {
      hasError: isInvalidProperty,
      keys: invalidProperties,
    };
  };

  _buildFormProperties = (
    {
      // Values
      key,
      value,
      hasError = false,
      message = '',
      isRequired = false,
      requiredMessage,
      // Events
      onValidation = () => ({
        hasError: false,
        message: '',
      }),
    },
    // Options
    {
      isOnCreatedValidation = false,
      isOnChangeValidation = false,
      onGroupValidation,
    }
  ) => {
    let isValidObject = {
      hasError,
      message,
    };
    if (isOnCreatedValidation) {
      isValidObject = onValidation(value);
    }

    return {
      key,
      value,
      hasError: isValidObject.hasError,
      message: isValidObject.message,
      isRequired,
      requiredMessage,
      onValidation,
      isOnCreatedValidation,
      isOnChangeValidation,
      onGroupValidation,
    };
  };

  // 8. 그룹 유효성 검사를 실시합니다.
  _handleOnGroupValidation = () => {
    const { key, hasError, message } = this.onGroupValidation();
    if (key === this.key && hasError) {
      this._setProperties({
        key,
        hasError,
        message,
      });
    }
    return this;
  };

  // 7. 해당 값의 유효성 감사를 실행하여 줍니다.
  _handleOnValidation = (value = this.properties.value) => {
    // 필수 값의 옵션은 쉽게 체크할 수 있어 FomrBuilder 내에 구현해놓았습니다.
    if (this.properties.isRequired && !value) {
      this.setProperties({
        hasError: true,
        message: this.properties.requiredMessage || 'Value is required',
      });
      return this;
    }
    // onValidation의 외부 Props값을 받았다면 클로저로 함수를 이용하여 유효성 검사값을 반영합니다.
    let isValidObject = this.onValidation(value);
    // 에러가 없다면, 그룹 값과 비교한 유효성 검사를 한 번 더 실시합니다.
    if (!isValidObject.hasError) {
      this._setProperties({
        ...isValidObject,
      });
      isValidObject = this._handleOnGroupValidation();
    }
    this._setProperties({
      ...isValidObject,
    });
    return this;
  };

  setProperties(newProperties) {
    this.properties = {
      ...this.properties,
      ...newProperties,
    };
    return this;
  }

  setValue(value) {
    if (this.properties.isOnChangeValidation) {
      this._handleOnValidation(value);
    }
    this.setProperties({
      value,
    });
    return this;
  }

  /**
   * Finished Methods
   */
  getPropertyBy(propertyKey) {
    return this.properties[propertyKey];
  }

  getProperties() {
    return this.properties;
  }

  getValues() {
    const { value, hasError, message } = this.properties;

    return {
      value,
      hasError,
      message,
    };
  }
}


class abc{
  constructor(){
    console.log(this,'g');
    this.t = 10;
  }

  _bbbb = ()=>{
    console.log(this);

  }

  _aaa=(elm) =>{
    console.log(elm,'elm');
    return () => {
      elm.addEventListener('click',function(){
        console.log(abc.t,'event in');
      })
    }
  }
}

const bbba = new abc();
bbba._bbbb()
// bbba._aaa(document.getElementById('btn'))()
// export default FormBuilder;

// utility functions
const takeUntilFunc = (endRange, currentNumber) => {
  return endRange > currentNumber
    ? val => val <= endRange
    : val => val >= endRange;
};

const positiveOrNegative = (endRange, currentNumber) => {
  return endRange > currentNumber ? 1 : -1;
};

const updateHTML = id => val => document.getElementById(id).innerHTML = val;
// display
const input = document.getElementById('range');
const updateButton = document.getElementById('update');

const subscription = (function(currentNumber) {
  return Rx.Observable
      .fromEvent(updateButton, 'click')
      .map(_ => parseInt(input.value))
      .switchMap(endRange => {
        return Rx.Observable.timer(0, 20)
            .mapTo(positiveOrNegative(endRange, currentNumber))
            .startWith(currentNumber)
            .scan((acc, curr) => acc + curr)
            // .delayWhen(//easing here)
            .takeWhile(takeUntilFunc(endRange, currentNumber))
      })
      .do(v => currentNumber = v)
      .startWith(currentNumber)
      .subscribe(updateHTML('display'));
}(0));

function subScript(...abc){
  return () =>{
    Rx.Observable.fromEvent(updateButton, 'click')
  }
}


// 정수 n이 주어지면, n개의 여는 괄호 "("와 n개의 닫는 괄호 ")"로 만들 수 있는 괄호 조합을 모두 구하시오. (시간 복잡도 제한 없습니다).

// Given an integer N, find the number of possible balanced parentheses with N opening and closing brackets.

// // 예제)
// Input: 1
// Output: ["()"]

// Input: 2
// Output: ["(())", "()()"]

// Input: 3
// Output: ["((()))", "(()())", "()(())", "(())()", "()()()"]

// Input: 3
// Output: ["(())()", "(()())", "()(())", "(())()", "()()()"]

console.clear();

function remove(arr,idx){
  arr.splice(idx,1)
}
function insert(arr,idx,info){
  arr.splice(idx,0,info);
}

function conc(res,arr){
  res.push(arr.concat([]).join(''))
}
function t(n){
  let num = n;
  n = '()'.repeat(n).split('').sort();
  let half = Math.floor(n.length /2),res = [];

  conc(res,n);
  for(let i = 0 ; i < num-1 ; i ++){
    let id = half+i+1;
    // console.log(n,id);
    insert(n,id,n[0]);
    remove(n,0);

    conc(res,n);
  }
  console.log(res);
  // return n
}

console.log(
  t(3)
);
// (((())))
// (((()()))
// ((()()))
// (()()()) 


// var test = [1,2,3]
// insert(test,1,5);
// console.log(test);
// remove(test,1);
// console.log(test);


function fireEvent(element, event) {
  if (document.createEventObject) {
    // dispatch for IE
    var evt = document.createEventObject();
    return element.fireEvent('on' + event, evt)
  } else {
    // dispatch for firefox + others
    var evt = document.createEvent("HTMLEvents");
    evt.initEvent(event, true, true); // event type,bubbling,cancelable
    return !element.dispatchEvent(evt);
  }
}

/**
 * Fire an event handler to the specified node. Event handlers can detect that the event was fired programatically
 * by testing for a 'synthetic=true' property on the event object
 * @param {HTMLNode} node The node to fire the event handler on.
 * @param {String} eventName The name of the event without the "on" (e.g., "focus")
 */
function triggerEvent(node, eventName) {
  let doc;
  if (node.ownerDocument) {
      doc = node.ownerDocument;
  } else if (node.nodeType == 9){
      // the node may be the document itself, nodeType 9 = DOCUMENT_NODE
      doc = node;
  } else {
      throw new Error("Invalid node passed to fireEvent: " + node.id);
  }

   if (node.dispatchEvent) {
    let eventClass = "";
      switch (eventName) {
          case "click": 
          case "mousedown":
          case "mouseup":
              eventClass = "MouseEvents";
              break;

          case "focus":
          case "change":
          case "blur":
          case "select":
              eventClass = "HTMLEvents";
              break;

          case "submit":
              break

          default:
              throw "fireEvent: Couldn't find an event class for event '" + eventName + "'.";
              break;
      }
      
      if(eventName === 'submit'){
        let event = new Event(eventName);
        node.dispatchEvent(event);
        return
      }else{
        let event = doc.createEvent(eventClass);
        let bubbles = eventName == "change" ? false : true;
        event.initEvent(eventName, bubbles, true); // All events created as bubbling and cancelable.
        event.synthetic = true; // allow detection of synthetic events
        node.dispatchEvent(event, true);
      }
  } else if (node.fireEvent) {
      // IE-old school style
      let event = doc.createEventObject();
      event.synthetic = true; // allow detection of synthetic events
      node.fireEvent("on" + eventName, event);
  }
};


document.getElementById('test').addEventListener('click',function(e){
  triggerEvent(document.getElementById("target"), "submit");
  triggerEvent(document.getElementById("elem1"), "click");
})


document.getElementById('elem1').addEventListener('click',function(e){
  e.preventDefault();
  console.log('elem1');

})

document.getElementById('elem1').addEventListener('click',function(e){
  e.preventDefault();
  console.log('elem11');

})


var event = new Event('build')



var event = document.createEvent("HTMLEvents");
event.initEvent("mouseover", true, false);


var btn = document.getElementById('test')

btn.addEventListener("mouseover", function (e) {
  // getElm('.boxbox').classList.add('on')
// console.log('hello');
})

$('#test').bind('click',function(){
  console.log('click')
})



let sumtest= 0;


document.getElementById('target').addEventListener('submit',function(e){
  e.preventDefault();
  console.log('in');
  console.log(++sumtest);
})

let aaaa = new Event("submit");
$('#testForm').on('click', function() {
  target.dispatchEvent(aaaa);
});


  // catch on document...
  document.addEventListener("hello", function(event) { // (1)
    alert("Hello from " + event.target.tagName); // Hello from H1
  });

  // ...dispatch on elem!
  let event22 = new Event("hello", {bubbles: true}); // (2)
  // elem1.dispatchEvent(event22);

  // the handler on document will activate and display the message.

