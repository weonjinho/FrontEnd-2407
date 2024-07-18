// 배열 원소 각각의 제곱의 합.
let arr = [1,2,3,4,5]; 
function sumOfSquare(arr){
    let sum = 0;
    for(let squareNum of arr){
        squareNum *= squareNum;
        sum += squareNum;
        // sum += squareNum *= squareNum;
    }
    return sum;
}
console.log(`sumOfSquare is : ${sumOfSquare(arr)}`);

// 배열 원소의 합의 제곱.
function squareOfSum(arr){
    let sum2 = 0;
    for(let sumNum of arr){
        sum2 += sumNum;
    }
    return sum2 * sum2;
}
console.log(`squareOfSum is : ${squareOfSum(arr)}`);

// 방법2
let variance = sumOfSquare(arr) / arr.length - squareOfSum(arr) / arr.length ** 2;
console.log(variance);

// 자바스크립트는 비동기 방식으로 작동되는 언어이다.
// A(B) : callback 함수.