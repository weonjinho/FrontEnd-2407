// 최소값, 최대값 찾기.

// 최소값 : 큰 값을 준다.
// 최대값 : 작은 값을 준다.
let arr = [45, 3, 27, 89, 6, 24];
let minVal = 100, maxVal = 0;
for(let num of arr){
    if(num < minVal){
        minVal = num;
    }
    if(num > maxVal){
        maxVal = num;
    }
    console.log(`과정 : ${num}, 최소값 : ${minVal}, 최대값 : ${maxVal}`);
}
console.log(`최소값 : ${minVal}, 최대값 : ${maxVal}`);

console.log("========================");

// 위 작업을 함수화 : 
function myMin(...arr){
    let minVal = Number.MAX_SAFE_INTEGER; //  큰 값 부여.(정수연산자)
    for(let num of arr){
        if(num < minVal){
            minVal = num;
        }
    }
    return minVal;
}
function myMax(...arr){
    let maxVal = Number.MIN_SAFE_INTEGER;
    for(let num of arr){
        if(num > maxVal){
            maxVal = num;
        }
    }
    return maxVal;
}

// console.log(myMin(arr), myMax(arr));
console.log(myMin(45,67,3,25,88,19), myMax(45,67,3,25,88,19));
