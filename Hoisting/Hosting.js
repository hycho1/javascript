/*
Hoisting
hoistable(끌어올릴 수 있는)
JS의 인터프리터가 코드를 실행하기전 function, variable, class 또는 import의 선언 문을 해당 범위의 맨 위로 끌어올리는 것처럼 보이는 현상

1. Being able to use a variable's value in its scope before the line it is declared. 
   ("Value hoisting") - 스코프 내에서 체크

2. Being able to reference a variable in its scope before the line it is declared, without throwing a ReferenceError, but the value is always undefined. 
   ("Declaration hoisting") - 선언 전 변수 참조가 가능하지만 값은 항상 undefined

3. The declaration of the variable causes behavior changes in its scope before the line in which it is declared.
   반대로 생각하면 '변수 선언'이 변수 선언 이전의 범위에도 영향을 미친다

4. The side effects of a declaration are produced before evaluating the rest of the code that contains it.
   선언의 부작용은 이를 포함하는 나머지 코드를 평가하기 전에 발생

 - 자바스크립트는 value가 할당되지 않으면 변수에 undefined를 암묵적으로 자동 할당
 - 호이스팅은 변수, 함수 선언을 스코프의 최상단으로 올리지만 값 할당은 올리지 않음 그렇기에 undefined를 반환하는 것, 선언 되지 않은 상태에서 사용되면 RefenceError 발생
 - 초기화되지않은 선언된 변수에 자동 할당되는 것과 선언하지 않아도 사용할 수 있게 되는 것의 차이, 같은 뜻이 아님

 - var의 경우 초기화가 실제 할당 시점에서 이뤄짐 / 함수 스코프 / return: undefined
 - let, const는 실제 선언 위치에서 이뤄짐 / 블록 스코프 / return: throwing 'ReferenceError'

 - 선언 이전에 접근하는 게 이상하다

 - 먼저 선언이 될 필요가 있는 함수를 위에 쓸 필요는 없음
 
Ref : https://developer.mozilla.org/ko/docs/Glossary/Hoisting

*/

// 변수 호이스팅
console.log(x); // 출력: undefined
var x = 5;
console.log(x); // 출력: 5


// 함수 호이스팅 : 함수는 변수 호이스팅(undefiend)에 영향을 받지 않는다면 정상 리턴됨
greet(); // "Hello, World!"
function greet() {
    console.log("Hello, World!");
}


// var
console.log(myVar); // 출력: undefined (변수 선언은 호이스팅되지만 초기화는 아직 안 됨)
var myVar = 10;
console.log(myVar); // 출력: 10

// let
console.log(myLet); // ReferenceError: Cannot access 'myLet' before initialization
let myLet = 20;
console.log(myLet); // 출력: 20
// const
console.log(myConst); // ReferenceError: Cannot access 'myConst' before initialization
const myConst = 30;
console.log(myConst); // 출력: 30
