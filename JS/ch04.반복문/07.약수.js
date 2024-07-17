// 문제 : 약수 구하기
// num = 12; 12의 약수를 배열의 저장하세요.
let num = 12;
let divisors = [];
for( let i = 1; i <= num; i++){
    if( num % i == 0 )
        divisors.push(i);
}
console.log(divisors);

// 소수(prime number) 판별
let numbers = [5, 11, 17, 23, 27];
for(num of numbers){
    for(let i = 2; i < num; i++){
        if(num % i == 0){
            console.log(`${num} 은/는 소수가 아님.`);
            break;
        }
    }
}
