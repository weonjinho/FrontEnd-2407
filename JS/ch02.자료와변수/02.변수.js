/*
    상수(Constant)와 변수(Variable)
*/
// 상수
const PI = 3.1415926;
let radius = 10;
console.log(`번디름이 ${radius}인 원의 둘레는 ${2*PI*radius},면적은 ${PI *radius**2}입니다.`);

// 상수의 값을 중복할당하면 에러발생.

// 변수 - 전역변수(var), 로컬변수(let)
radius = 5;
// 번수는 값을 바꿀수 있다.
// 변수는 프로그램 내에서 얼마든지 값이 변할수 있다.

// 변수의 제선언은 안됨.
function area(){
    let radius = 5; // 로컬변수
    return PI*radius**2;
}

// 복합 대입 연산자
let a = 0, str = '';
a += 1;a+=2;a+=3; // a = a+1, a = a+2, a = a+3
console.log(a); // 6
str += 'A quick brown fox '; // str <-str + 'A quick brown fox '
str += 'jumps over the lazy dog.'
console.log(str);
// += ***

// 증감 연산자
let x = 0, y = 0;
console.log(x++,++y); // 0, 1
// post-increment(조회후 1증가), pre-increment(조회전 1증가)
console.log(x,y); // 1 1
console.log(x--,--y); //1,0
// post-decrement, pre-decrement
console.log(x,y); // 0 0

// 4. undefined 자료형
console.log(typeof(abc)); // 선언하지 않는값.
let c;
console.log(typeof(abc),typeof(c)); // 선언하지 않은 변수, 값을 초기화하지 않은 변수 --> undefined.

// 자료형 변환
console.log(Number('123',parseInt('123'))); // 강제변환
console.log(typeof(Number('123')),typeof(parseInt('123')));
console.log(String(123),typeof String(123));
console.log("===================================================");
console.log(Boolean(1),typeof(Boolean(1)));// true boolean
console.log(Boolean(0),Boolean(0.0),Boolean(),Boolean(undefined)); // false, 이 경우를 베외하곤 다 true.

// 자동 자료 변환
console.log("ABC"+100+true); // ABC100true : 더 많이 포현할수 있는 쪽으로 변환
// 표현범위가 작은 것이 큰 것으로 자동 변환됨
console.log(100+true); // 101
console.log(typeof(!!x)); // 값은 변하지 않고, 타입만 바꿀때 사용.(Reacter)

// 인치를 센치로 변환
console.log("===================================================");
let inch = '32';
console.log(2.54*Number(inch)); // 81.28


