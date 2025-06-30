// 1. number Type
let num1 = 27;
let num2 = 1.5;
let num3 = -20;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2);

let inf = Infinity; // 양의 무한대
let minf = -Infinity; // 음의 무한대

let nan = NaN; // not a number - 수치 연산이 실패했을 때의 결과값으로 사용함

// 2. String Type
let myName = "김도희";
let myLocation = "군포";
let introduce = myName + myLocation;

let introduceText = `${myName}은 ${myLocation}에 거주합니다`;
console.log(introduceText);

// 3. Boolean Type
let isSwitchOn = true;
let isEmpty = false;

// 4. Null Type (아무것도 없다)
let empty = null;

// 5. Undefined Type
let none;
console.log(none);