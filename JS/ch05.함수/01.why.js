// 함수분리
// 소수(prime number) 판별

// 방법1
let num = 13;
// for(let i = 2; i < num; i++){
//     if(num % i == 0){
//         console.log(`${num} 은/는 소수가 아님.`);
//         break;
//     }
// }
// function isPrimeNumber(num){    // PrimeNumber인지 판별하는 함수.
//     for(let i = 2; i < num; i++){
//         if(num % i == 0)
//             return false;
//     }
//     return true;
// }
// console.log(12,isPrimeNumber(13));  // 소수가 아님.
// console.log(13,isPrimeNumber(12));  // 소수임.
// // console.log(13,isPrimeNumber(매개변수,파라미다));  // 소수임.

// // 2에서 부터 20까지의 소수
// let isPrimeNumbers = [];
// for(let i = 2; i <= 100; i++){
//     if(isPrimeNumber(i)) // 참일때
//         isPrimeNumbers.push(i);
// }
// console.log(isPrimeNumbers);


// 방법2:
function isPrimeNumber(num){    // PrimeNumber인지 판별하는 함수.
    let sqrtNum = Math.floor(Math.sqrt(num));   // 스퀘어 루트값 사용.(정답)
    for(let i = 2; i < sqrtNum; i++){
        if(num % i == 0)
            return false;
    }
    // for(let i = 2; i< num; i++){
    //     if(num% i ==0)
    //         return false;
    // }
    return true;
}
console.log(12,isPrimeNumber(12));  // 소수가 아님.
console.log(13,isPrimeNumber(13));  // 소수임.
// console.log(13,isPrimeNumber(매개변수,파라미다));  // 소수임.

// 2에서 부터 20까지의 소수
let isPrimeNumbers = [];
for(let i = 2; i <= 100; i++){
    if(isPrimeNumber(i)) // 참일때
        isPrimeNumbers.push(i);
}
console.log(isPrimeNumbers);