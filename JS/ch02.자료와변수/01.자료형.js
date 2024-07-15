/*
    자바스트립트의 자료형:
*/ 
// 1.문자열 (String)
console.log("He said 'I love you.'");
console.log('He said "I love you."');
console.log("I'll be back.");

// 특수 문자 - 백슬래시(\) + 문자
console.log("\tabc\tdef\"ghi\njkl");// Tab
/*
줄바꿈
Carriage Return (\r)
New Line (\n)

백슬래시 : \\

Windows --- \r\n : 줄바꿈
Mac OS/Linux --- \n : 줄바꿈
*/

// 문자열 연산자
// 1. 결합 연산자(+)
console.log("가나다"+" "+"라마바");
// 입력폼에서 input태그에서 숫자, 문자, 날짜 다 일단 문자열로 들어온다.

// 문자열 선택
let hello="안녕하세요?";
console.log(hello);
console.log(hello,hello[0],hello[3]);// 안녕하세요? 안 세
// DB 에서는 1번 부터 시작한다.

// 문자열 길이
// 문자열 : 속성(attribute), method
// 문자열이 클래스이기때문에 메소드와 속성을 갖는다.
console.log(hello.length,hello.charAt(0),hello.charAt(3));
// hello[0] == hello.charAt(0)
// 보라색 박스 : 메소드()
// 파란색 박스 : 속성(attribute)

// template literal
console.log(hello + '문자열의 길이는'+hello.length+"입니다.");
console.log(`${hello}문자열의 길이는 ${hello.length}입니다.`); 
// python : ''' ''' (python의 template literal형식)

// 2. 숫자(Number)
// JS에서는 정수형을(integer), 실수형(floating point)을 구분하지 않는다.
// 정수형 : 0 ~ 2의31승-1

// 실수 : 가수 x 지수
// 가수(mantisa) x 지수(exponent)

// 실수와 정수의 내부적인 표현방식은 다르지만,JS에서는 모두 같은 자료형으로 인식한다.

// 정수+가 실수+보다 느리다.
// GFLOPS : Giga Floating Operation per Second
// 1 giga : 10의 9승.
// MIPS : Million Instrection per Second

// * : 에스터리스크.
let a = 3, b = 4;
console.log("=========================================");
console.log(a+b, a-b, a*b, a/b, b%a);
let pi = 0.314159e1;  // 0.31159 x 10 ** 1(10의 1승).
let f = 1.3e-8; // 1.3 x 10 ** -8(10의 -8승).
console.log(pi,f);

console.log(2**10,2**20,2**30); // 1KB 1GB, 1MG

// 3. 논리형(Boolean) - true, false
// 비교 연산자
console.log(a>b, 10===10.0); // false true(둘다 Number로 인식됨.)
console.log(10 =='10', 10 === '10'); // true false
// 조건식에서 사용됨, 조건이 true / false.
// 논리 연산자
// !true, !false
let x = 10;
console.log(x>8||x<0);// true
console.log(x>0 && x<8 ); // false
// 나이 계산기.

// 자료형 검사
console.log(typeof(hello), typeof a, typeof(true)); // String, number, boolean

// - 는 부호로 사용할 수 있다.
let y = a + -b; // + : binary operator ; - : unary operator.



// 함수, object ---> 상수로 선언하는 상황이 많다.
// 변하지 않는 값을 표현할때 대문자로 사용하면 좋다.
