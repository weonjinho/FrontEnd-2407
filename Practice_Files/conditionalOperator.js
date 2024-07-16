// 삼항 연산자
// 기본구문 :
// condition ? exprIfTrue : exprIfFalse; 
// 조건 ? 조건문이 참( true )일 경우 실행할 표현식 : 조건문이 거짓( false )일 경우 실행할 표현식.

// 예제01 )
// 홀짝 구분
let dice = Math.ceil(Math.random()*6);      // 1 ~ 6 사이의 값.
let result = '';
// if 문 사용:
if(dice % 2 == 0){
    result = '짝수';
}else{
    result = "홀수";
}
console.log(`${dice} 은/는 ${result}입니다.`);
// 삼항연산자 사용:
let evenOdd = dice % 2 == 0 ? '짝수' : '홀수';
console.log(`${dice} 은/는 ${evenOdd}입니다.`);

// 예제02 )
// 큰수,작은 수 구분
let smallBig = dice <= 3 ? '작은 수' : '큰 수';
console.log(`${dice} 은/는 ${smallBig}입니다.`);

let score = Math.ceil(Math.random()*50) + 50;
let sign = score % 10 >= 7 ? '+' : score % 10 >= 3 ? '0' : '-';     // * 삼항연산자는 false시 실행할 표현식 위치에 다른 삼항연산자를 이여서 추가할 수 있다.
// 위 코드 설명 : 
// score 이 10을 나눈뒤, 나머지 값이 7 이상인 경우 let sign = '+'; 
// 나머지 값이 7 이상이 아닌 경우, score 가 10으로 나눌때 나머지가 3인지를 판단, 참이면 let sign = '0', 거짓이면 let sign = '-';
switch(parseInt(score / 10)){      // 100/10=10; 99/10=9.9; 90/10=9
    case 10 :
        grade = 'A+';
        break;
    case 9 :
        grade = 'A' + sign;
        break;
    case 8 :
        grade = 'B' + sign;
        break;
    case 7 :
        grade = 'C' + sign;
        break;
    case 6 :
        grade = 'D' + sign;
        break;
    default :
        grade = 'F';
}
console.log(`점수 : ${score}, 학점 : ${grade}`);