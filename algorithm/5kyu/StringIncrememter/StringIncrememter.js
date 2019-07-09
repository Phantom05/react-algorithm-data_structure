
function incrementString(str) {
  let last = str[str.length-1];
  let strarr = str.split('');
  if(isNaN(+last)) return str+1;

  let numIdx = 0;
  for(let i = 0; i < str.length; i++){
    if(!isNaN(str[i])){
      numIdx = i;
      break;
    }
  }
  let newstr = strarr.splice(numIdx,str.length).join('');
  let newnum = +newstr;
  let newarr = '';

  for(let i = 0 ; i < newstr.length; i ++){
    if(newstr[i] !== '0'){break;
    }else{
      newarr += newstr[i];
    }
  }
  if(+newstr === 0){
    newarr = newarr.substring(0, newarr.length-1);
    return strarr.join('') + newarr+(+newstr+1);
  }

  let len = String(newnum).length;
  let newlen = String(newnum+1).length;

  if(len !== newlen){
    newarr = newarr.substring(0, newarr.length-1);
    return strarr.join('') + newarr+(+newstr+1)
  }

  return strarr.join('') + newarr+(+newstr+1)
}

console.log(
  incrementString('foobar00999')
);



function incrementString(input) {
  if(isNaN(parseInt(input[input.length - 1]))) return input + '1';
  return input.replace(/(0*)([0-9]+$)/, function(match, p1, p2) {
    var up = parseInt(p2) + 1;
    return up.toString().length > p2.length ? p1.slice(0, -1) + up : p1 + up;
  });
}

function incrementString(input) {
  return input.replace(/([0-8]?)(9*)$/, function(s, d, ns) {
      return +d + 1 + ns.replace(/9/g, '0');
    });
}


function incrementString(input) {
  return input.replace(/\d*$/, function(n) {
    var x = ~~n + 1
    return ('0000000' + x).slice(-Math.max(n.length, String(x).length))
  })
}

let incrementString = str => str.replace(/([0-8]|\d?9+)?$/, (e) => e ? + e + 1 : 1)

function incrementString(str){
  var c = str[str.length-1];
    switch(c){
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8': return str.substring(0, str.length-1) + (parseInt(c)+1);
            case '9': return incrementString(str.substring(0, str.length-1)) + 0;
            default: return str+"1";
                }
}

function incrementString (strng) {
  var m = strng.match(/^(\w*?)(\d*)$/);
  var next = (parseInt('0'+m[2], 10) + 1) + '';
  return m[1] + m[2].slice(0, -next.length) + next;
}