// 함수선언 방법3가지

// 1. 선언적 함수
function add(a,b){  // a, b - 매개변수,  parameter, argument
    return a+ b;    // 반환값
}
let result = add(3,4);  // 호출할때 값을 넣어준다.
console.log(result);
console.log(add(4,5));
console.log(`2 + 5 = ${add(2,5)}`);

// 함수의 이름(식별자 - identifier)을 정하는 규칙?

// 2. 익명(Anonymous) 함수 - 함수이름은 없지만 파라미터는 받은함수?
const anonyAdd = function (a,b){
    return a+b;
}
console.log(`3+4 = ${anonyAdd(3,4)}`);
console.log(typeof(anonyAdd)); // function
// JS에서 사용하는 기본 자료형 : 문자열, 숫자, 불, undefined, function, object.
// 함수를 자료형으로 삼을때는  자료형을 const로 사용한다.

// 3. 화살표 함수, 람다(lambda)함수. (React에서 자주사용)
const arrowAdd = (a,b) => a+b;  // arrowAdd()는 a,b를 받아서 a+b를 return하는 함수이다.
console.log(`3+4 = ${arrowAdd(3,4)}`);
console.log(typeof(arrowAdd));


// 