/*
    if()
    else if()
    ...
    else
*/
// score
// let score = Math.ceil(Math.random()*60)+40; // 41 ~ 100 사이의 정수
// let grade = '';

// if(score >= 90){
//     grade = 'A';    // 범위가 제일 작은거 부터 시작.
// }else if(score >= 80){
//     grade = 'B';
// }else if(score >=70){
//     grade = 'C';
// }else if(score >= 60){
//     grade = 'D';
// }else{
//     grade = 'F';
// }
// console.log(`점수 : ${score}, 학점 : ${grade}`);

// FizzBuzz
// 숫자가 5로 나누어지면 Fizz, 7로 나누어지면 Buzz, 5와 7 둘다 나누어지면 FizzBuz
// 위의 경우가 아니면 숫자를 출력.
var inputNum = 35;

if(inputNum % 5 == 0 && inputNum % 7 != 0 ){
    console.log(`Fizz`);
}else if(inputNum % 7 == 0 && inputNum % 5 != 0 ){
    console.log(`Buzz`);
}else if(inputNum %35 == 0){
    console.log(`FizzBuzz`);
}else{
    console.log(inputNum);
}

if(inputNum %35 == 0){ // 번위가 작은게 위에 있어야한다.
    console.log(`FizzBuzz`);
}else if(inputNum % 5 == 0 ){
    console.log(`Fizz`);
}else if(inputNum % 7 == 0 ){
    console.log(`Buzz`);
}else{
    console.log(inputNum);
}