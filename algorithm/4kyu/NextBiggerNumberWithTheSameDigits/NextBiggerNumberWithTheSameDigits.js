
//최고 큰 숫자..
// function nextBigger(n){
//   let str = String(n).split('');
//   if(str.length == 1) return -1

//   for(let i = str.length; i--;){
//     if(str[i-1] == -1) break;
//     if(str[i-1] < str[i]){
//       str.splice(i-1,2,str[i],str[i-1]);
//     }
//   }
//   return +str.join('')
// }


/**
 * 실패 ㅠㅠ
 * @param {*} n 
 */
function nextBigger(n){
  let count = 0;
  let str = String(n).split('');
  for(let i = str.length; i--;){
    if(str[i-1] == -1) break;
    if(str[i-1] < str[i]){
      count = 1;
      str.splice(i-1,2,str[i],str[i-1]);
      let min = Math.min.apply(null,str.slice(i));
      let max = Math.max.apply(null,str.slice(i-1));
      if(max > min){
        let idx = str.indexOf(`${min}`);
        str.splice(i,1,min);
        str.splice(idx,1,max);
      }
      break;
    }
  }
  if(!count) return -1
  return +str.join('')
}
// fail

function nextBigger(n){
  console.log(n);
  var chars = n.toString().split('');
  var i = chars.length-1;
  while(i > 0) {
    if (chars[i]>chars[i-1]) break;
    i--;
  }
  if (i == 0) return -1;
  var suf = chars.splice(i).sort();
  var t = chars[chars.length-1];
  for (i = 0; i < suf.length; ++i) {
    if (suf[i] > t) break;
  }
  chars[chars.length-1] = suf[i]
  suf[i] = t;
  var res = chars.concat(suf);
  var num = parseInt(res.join(''));
  console.log("->" +num);
  return num;
}


const sortedDigits = n => { let arr = n.toString().split(''); arr.sort((a, b) => b - a); return arr; };

function nextBigger(n){
  let arr = sortedDigits(n);
  let max = parseInt(arr.join(''), 10);
  for(var i = n + 1; i <= max; i++){
    if(sortedDigits(i).every((x, j) => x === arr[j])){
      return i;
    }
  }
  return -1;
}

// 
function nextBigger(n){
  var arr = n.toString().split("").reverse();
  var i = arr.findIndex((d, _i) => d < arr[_i-1]);
  if (i === -1) { return -1; }
  var subarr = arr.slice(0, i);
  var j = subarr.findIndex((d) => d > arr[i]);
  subarr.splice(j, 1, arr[i]);
  return parseInt(arr.slice(i+1).reverse().concat(arr[j]).concat(subarr).join(""));
}
function nextBigger(n) {
  if (n === reverseSortDigits(n)) return -1

  let nSorted = sortDigits(n)
  
  while (true) {
    n += 1
    if (sortDigits(n) === nSorted) return n
  }
}
function splitDigits(d) {
  return String(d).split('')
}
function sortDigits(d) {
  return Number(splitDigits(d).sort().join(''))
}
function reverseSortDigits(d) {
  return Number(splitDigits(d).sort().reverse().join(''))
}
// 

function nextBigger(n){
let a = +String(n).split('').sort((a,b) => b-a).join('');
 for (let i = n + 1; i <= a; i++) {
   if (a == +String(i).split('').sort((a,b) => b-a).join('')) return i
 }
 return -1
}

function nextBigger(n){
  n = ('' + n).split('');
  for(var i = n.length - 2; i >= 0; i--)
    if(n[i] < n[i + 1]) {
      for(var j = n.length - 1; j > i + 1; j--)
        if(n[j] > n[i])
          break;
      [n[i], n[j]] = [n[j], n[i]];
      var end = n.splice(i + 1);
      return +n.concat(end.sort()).join('');
    }
  return -1;
}


console.log(
  nextBigger(59884848459853)
);
// 59884848493855

// expected 59884848483559



// 59884848459853
// => 
// 59884848495853
// =>
// 59884848435859
// =>
// 59884848438559

