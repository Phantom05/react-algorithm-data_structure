## BigInt



```js
String.prototype.reverse = function() {
  return this.split('').reverse().join('');
}
```

String prototype에 reverse라는 함수를 지정했는데, 반환값으로 배열로 바꿔주고 리벌스 메서드를 사용한다음 다시 조인해줘서 스트링을 뒤집는 함수를 지정해 놓았다.



1.  `a = a.reverse(); b = b.reverse();` 첫 줄은 들어온 매개변수 a와 매개변수 b를 미리 지정해둔 프로토타입으로 reverse 해주었다.

2. `var [carry, index, sumDigits] = [0,0,[]]` 변수도 설정해 두었다.

3.  ```js
   while (index < a.length || index < b.length || carry != 0) {}
   //반복문을 돌리는대 조건은 index가 a.length보다 작거니 b.length보다 작거나 carry가 0이 아닐때의 조건이다.
    ```

4. ```js
   while (index < a.length || index < b.length || carry != 0) {
       var aDigit = index < a.length ? parseInt(a[index]) : 0;
       var bDigit = index < b.length ? parseInt(b[index]) : 0;
       var digitSum = aDigit + bDigit + carry;
   // 그다음 반복문엔 aDigit과 bDigit을 선언하는데, 할당값으로 reverse한 a의 값과 b의 값에 대한 인덱스가 있으면 정수 값을 가져오고 없을땐 0을 가져오라는 것이다.
   // 즉, a와 b의 렝스가 다르니까 둘중 더 긴것은 값을 계속 가져와야하는데 더 적은 렝스를 가진 놈일경우 뒤부터는 0을 넣어주라는것이다.
       
   // 그다음은 digitSum변수를 선언하고 앞에 설명한 두 값과 carry라는 값을 더한다.
       
   ```

5. ```js
   while (index < a.length || index < b.length || carry != 0) {
       var aDigit = index < a.length ? parseInt(a[index]) : 0;
       var bDigit = index < b.length ? parseInt(b[index]) : 0;
       var digitSum = aDigit + bDigit + carry;
      
       sumDigits.push((digitSum % 10).toString());
       carry = Math.floor(digitSum / 10);
   
       index++;
     }
   // 그다음은 subDigits 배열에 푸쉬하는데 리벌스한 첫번째 값인 2개의 변수들을 10으로 나눠서 나머지값을 변수에 넣고
   // carry 변수에는 역시 리벌스한 2개의 값을 10으로 나눈 값을 할당한다.
   //그리고 인덱스를 올려 다음 값을 계산한다. 반복
   ```

6. 