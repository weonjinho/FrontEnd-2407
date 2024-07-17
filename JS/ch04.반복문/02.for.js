// for 반복문
// let summerFruits = ['수박','참외','복숭아','포도'];
// for(let i = 0; i<=3; i++){
//     console.log(i, summerFruits[i]);
//     // 수박
//     // 참외
//     // 복숭아
//     // 포도
// }
// console.log("===============================");
// for(let k = 0; k < summerFruits.length; k++){   // ( 권장 )
//     console.log(k, summerFruits[k]);
// }

// 1에서 100사이의 정수값의 합 구하기
let sum100 = 0;
for(let i = 1; i<=100; i++){
    sum100 += i;
}
console.log(`1에서 100사이의 정수값의 합 = ${sum100}`);

console.log("===============================");

// 1에서 100사이의 홀수의 합 구하기
// 방법1
let sumOdd = 0;
// for(let i = 1; i <= 100; i++){
//     if(i % 2 == 1){
//         sumOdd += i;
//     }
// }
console.log(`1에서 100사이의 홀수의 합 = ${sumOdd}`);
// 방법2
for(let i = 1; i <= 100; i += 2){
    sumOdd += i;
}
console.log(sumOdd);

// 1~100 사이 짝수( 2의 배수 )의 합
let sumEven2 = 0;
for(let i = 2; i <=100; i += 2){
    sumEven2 += i;
}
console.log(sumEven2);

// 1~100사이 3의배수의 합 구하기
let sum3 = 0;
for(let i = 3;i <= 100; i += 3){
    sum3 += i;
}
console.log(`1~100사이 3의배수의 합 : ${sum3}`);

// 200에서 100사이의 5의 배수의 합.
let sum5 = 0;
for(let i = 200; i >= 100; i -= 5){
    sum5 += i;
}
console.log(`200에서 100사이의 5의 배수의 합 : ${sum5}`);

// 하루는 몇분이냐?
let sumMinute = 0;          // 중첩 for문 문제가 많이 나온다.
for(let hour = 0; hour <= 23; hour++){
    for(let minute = 0; minute <= 59; minute++){
        sumMinute++;
    }
}
console.log(`하루는 ${sumMinute} 분 입니다.`);


