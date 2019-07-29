console.log(`hello world`);

var object = {
  "a": [{
    "b": {
      "c": 3
    }
  }, 4]
};
console.log(
  _(object).at(['a[0].b.c', 'a[1]']).value()
);

var users = [{
    "user": "barney",
    "age": 36
  },
  {
    "user": 'fred',
    "age": 40
  }
];

console.log(
  _(users).head()
);
console.log(
  _(users)
  .chain()
  .head()
  .pick('user')
  .value()
);

// _.prototype.chain()
// 명시 적 메서드 체인 시퀀스가 ​​활성화 된 lodash 래퍼 인스턴스를 만듭니다.

// _.prototype.commit()
// 체인 순서를 실행 해, 랩 된 결과를 돌려줍니다.

var array = [1,2];
var wrapped = _(array).push(3);
console.log(array);
wrapped = wrapped.commit();
console.log(array);

var a = _(array).drop();
console.log(a.value());

console.clear()
// _.prototype.next()
// 반복자 프로토콜에 따라 래핑 된 객체의 다음 값을 가져옵니다.

var wrapped = _([1, 2]);
 
console.log(
  wrapped.next()
);
// => { 'done': false, 'value': 1 }
 
wrapped.next()
// => { 'done': false, 'value': 2 }
 
wrapped.next()
// => { 'done': true, 'value': undefined }

// _.prototype.plant(value)
// 래핑 된 값으로 체인 시퀀스 심기 값의 복제본을 만듭니다.

function square(n){
  return n * n;
}

var wrapped = _([1,2]).map(square);
console.log(
  wrapped.value()
);

var other = wrapped.plant([3,4]);
console.log(
  other.value()
);

console.log(
  _.camelCase('--h-ell_o world')
);
// _.camelCase([string=''])
// 문자열을 카멜케이스로 변환합니다.
_.camelCase('Foo Bar');
// => 'fooBar'
 
_.camelCase('--foo-bar--');
// => 'fooBar'
 
_.camelCase('__FOO_BAR__');
// => 'fooBar'



// _.capitalize([string=''])
// 문자열의 첫 번째 문자를 대문자로 변환하고 나머지는 소문자로 변환합니다.

// _.deburr([string=''])
// 라틴 -1 보충 및 라틴 확장 A 문자를 기본 라틴 문자로 변환하고 결합 분음 기호를 제거하여 말괄량이 문자열.

console.log(
  _.deburr('déjà vu')
);
// => 'deja vu'


// _.endsWith([string=''], [target], [position=string.length])
// 지정된 문자열로 문자열이 끝나는 지 확인합니다.

// => true
 
_.endsWith('abc', 'b');
// => false
 
_.endsWith('abc', 'b', 2);
// => true

// _.escape([string=''])
// 문자열의 "&", "<", ">", ""및 " '"문자를 해당 HTML 엔터티로 변환합니다.

// 참고 : 다른 문자는 이스케이프되지 않습니다. 추가 문자를 이스케이프하려면 해당 타사 라이브러리를 사용하십시오.

// ">"문자가 대칭을 위해 이스케이프되지만 ">"및 "/"와 같은 문자는 HTML에서 이스케이프 할 필요가 없으며 태그 또는 인용되지 않은 속성 값의 일부가 아닌 한 특별한 의미가 없습니다. 자세한 내용은 Mathias Bynens의 기사 ( "준 관련 재미있는 사실"참조)를 참조하십시오.

// HTML로 작업 할 때 XSS 벡터를 줄이기 위해 항상 속성 값을 인용해야합니다.

_.escape('fred, barney, & pebbles');
// => 'fred, barney, &amp; pebbles'


// _.escapeRegExp([string=''])

// RegExp 특수 문자 "^", "$", "", "*", "+", "?", "(", ")", "[", "]", "{" ","} "및"| " 문자열에.
_.escapeRegExp('[lodash](https://lodash.com/)');
// => '\[lodash\]\(https://lodash\.com/\)'

// _.kebabCase([string=''])

// 문자열을 케밥 케이스로 변환합니다.
_.kebabCase('Foo Bar');
// => 'foo-bar'
 
_.kebabCase('fooBar');
// => 'foo-bar'
 
_.kebabCase('__FOO_BAR__');
// => 'foo-bar'


// _.lowerCase([string=''])
// 문자열을 공백으로 구분 된 단어로 변환하여 소문자로 변환합니다.
_.lowerCase('--Foo-Bar--');
// => 'foo bar'
 
_.lowerCase('fooBar');
// => 'foo bar'
 
_.lowerCase('__FOO_BAR__');
// => 'foo bar'

// _.lowerFirst([string=''])
// 문자열의 첫 번째 문자를 소문자로 변환합니다._.lowerFirst([string=''])

_.lowerFirst('Fred')
// => 'fred'
 
_.lowerFirst('FRED');
// => 'fRED'



// _.pad([string=''], [length=0], [chars=' '])
// 길이보다 짧으면 왼쪽과 오른쪽에 문자열을 덧붙입니다. 패딩 문자는 길이별로 균등하게 나눌 수없는 경우 잘립니다.
_.pad('abc', 8);
// => '  abc   '
 
console.log(
  _.pad('abc', 8, '_-')
);
// => '_-abc_-_'
 
_.pad('abc', 3);
// => 'abc'



// _.padEnd([string=''], [length=0], [chars=' '])
// 길이보다 짧은 경우 오른쪽에 문자열을 덧붙입니다. 패딩 문자는 길이를 초과하면 잘립니다.
// _.padStart([string=''], [length=0], [chars=' '])
// 길이보다 짧으면 왼쪽에 문자열을 덧붙입니다. 패딩 문자는 길이를 초과하면 잘립니다.

// _.parseInt(string, [radix=10])
// 지정된 기수의 정수로 문자열을 변환합니다. radix가 미정 도리 또는 0의 경우, 값이 16 진수가 아닌 경우는 10의 기수가 사용됩니다. 기수는 16이 사용됩니다.


// _.repeat([string=''], [n=1])
// 주어진 문자열을 n 번 반복합니다.
_.repeat('*', 3);
// => '***'
 
_.repeat('abc', 2);
// => 'abcabc'
 
_.repeat('abc', 0);
// => ''


// _.replace([string=''], pattern, replacement)
// 문자열의 패턴 일치를 대체로 대체합니다.
_.replace('Hi Fred', 'Fred', 'Barney');
// => 'Hi Barney'

// _.snakeCase([string=''])
// 문자열을 snakeCase 로 변환합니다.
_.snakeCase('Foo Bar');
// => 'foo_bar'
 
_.snakeCase('fooBar');
// => 'foo_bar'
 
_.snakeCase('--FOO-BAR--');
// => 'foo_bar'


// _.split([string=''], separator, [limit])
// 구분 기호로 문자열을 분할합니다.
// 세번째 인자는 몇까지 자를것인지 선택함.
// 참고 :이 방법은 String # split을 기반으로합니다.

console.log(
  _.split('a-b-c', '-', 2)
);
// => ['a', 'b']

// _.startsWith([string=''], [target], [position=0])
// 지정된 문자열로 문자열이 시작하는지 확인합니다.
_.startsWith('abc', 'a');
// => true
 
_.startsWith('abc', 'b');
// => false
 
_.startsWith('abc', 'b', 1);
// => true

// _.template([string=''], [options={}])


// _.toLower([string=''])
// 문자열을 전체적으로 String # toLowerCase처럼 소문자로 변환합니다.
_.toLower('--Foo-Bar--');
// => '--foo-bar--'
 
_.toLower('fooBar');
// => 'foobar'
 
_.toLower('__FOO_BAR__');
// => '__foo_bar__'
// _.toUpper([string=''])
// String # toUpperCase와 마찬가지로 문자열을 전체적으로 대문자로 변환합니다.
_.toUpper('--foo-bar--');
// => '--FOO-BAR--'
 
_.toUpper('fooBar');
// => 'FOOBAR'
 
_.toUpper('__foo_bar__');
// => '__FOO_BAR__'


// _.trim([string=''], [chars=whitespace])
// 문자열에서 앞뒤 공백이나 지정된 문자를 제거합니다.

_.trim('  abc  ');
// => 'abc'
 
_.trim('-_-abc-_-', '_-');
// => 'abc'
 
_.map(['  foo  ', '  bar  '], _.trim);
// => ['foo', 'bar']

// _.trimEnd([string=''], [chars=whitespace])
// 후행 공백 또는 지정된 문자를 문자열에서 제거합니다.
_.trimEnd('  abc  ');
// => '  abc'
 
_.trimEnd('-_-abc-_-', '_-');
// => '-_-abc'



// _.trimStart([string=''], [chars=whitespace])
// 문자열에서 선행 공백이나 지정된 문자를 제거합니다.
_.trimStart('  abc  ');
// => 'abc  '
 
_.trimStart('-_-abc-_-', '_-');
// => 'abc-_-'


// _.truncate([string=''], [options={}])
// 지정된 최대 문자열 길이보다 긴 경우 문자열을 자릅니다. 절단 된 문자열의 마지막 문자는 생략 문자로 대체되며 기본값은 "..."입니다.
_.truncate('hi-diddly-ho there, neighborino');
// => 'hi-diddly-ho there, neighbo...'
 
_.truncate('hi-diddly-ho there, neighborino', {
  'length': 24,
  'separator': ' '
});
// => 'hi-diddly-ho there,...'
 
_.truncate('hi-diddly-ho there, neighborino', {
  'length': 24,
  'separator': /,? +/
});
// => 'hi-diddly-ho there...'
 
_.truncate('hi-diddly-ho there, neighborino', {
  'omission': ' [...]'
});
// => 'hi-diddly-ho there, neig [...]'


// _.unescape([string=''])

// _.upperCase([string=''])
// 문자열을 공백으로 분리 된 단어로 대문자로 변환합니다.

// _.upperFirst([string=''])
// 문자열의 첫 번째 문자를 대문자로 변환합니다.

// _.words([string=''], [pattern])
// 문자열을 단어의 배열로 나눕니다.
_.words('fred, barney, & pebbles');
// => ['fred', 'barney', 'pebbles']
 
_.words('fred, barney, & pebbles', /[^, ]+/g);
// => ['fred', 'barney', '&', 'pebbles']