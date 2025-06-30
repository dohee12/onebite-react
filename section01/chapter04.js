// 1. 변수
let age = 27;
console.log(age);

age = 40;
console.log(age);

// 2. 상수
const birth = "1997.01.07";
console.log(birth);

// 3. 변수 네이밍 규칙
// 3-1. $, _ 제외한 기호는 사용할 수 없음
let $_name;

// 3-2. 숫자로 시작할 수 없음
let name1;
let $2name;

// 3-3. 예약어를 사용할 수 없음

// 4. 변수 명명 가이드
let salesCount = 1;
let refundCount = 1;
let totalSalesCount = salesCount - refundCount;
// 누구도 알아볼 수 없는 이름으로 변수명을 짓는 것을 별로 좋지 않음
// 누가봐도 바로 이해 가능하도록 변수명을 정성스럽게 지어주는 것이 좋음
