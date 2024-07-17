// 1 ~ 10 홀수의 합
let sumOdd = 0;
for(let i = 1; i <= 10; i += 2){
    sumOdd += i;
}

sumOdd = 0;
for(let i = 1; i <= 10; i++){
    if(i % 2 == 0) // i가 짝수일때 무시.
        continue;
    sumOdd += i; 
}
console.log(sumOdd);

console.log("================================");

// 2단(구구단)
for(let i = 1; i <= 2; i++){
    for(let k = 1; k <= 9; k++ ){
        console.log(`${i} x ${k} = ${i*k}`);
    }
    console.log("###########");
}






for(let i = 1; i <= 5; i++){
    let line = ''; // console.log()의 줄바꿈을 방지하는 코드.
    for(let k = 1; k <= 5; k++ ){
        line += k + ' ';
    }
    console.log(line);
}
console.log("***********");
for(let i = 1; i <= 5; i++){
    let line = ''; // console.log()의 줄바꿈을 방지하는 코드.
    for(let k = 1; k <= 5; k++ ){
        if( k==i)
            continue;   // 다각선 숫자 제거하는 방법. k == i인 상황의 값은 코드 실행하지 안음.
        line += k + ' ';
    }
    console.log(line);
}
console.log("============");
for(let i = 1; i <= 5; i++){
    let line = ''; // console.log()의 줄바꿈을 방지하는 코드.
    for(let k = 1; k <= 5; k++ ){
        // if( k==i)
        //     continue;   // 다각선 숫자 제거하는 방법.
        line += k + ' ';
        if(k==i)
            break; // 다이아몬드 형태 만들기.
    }
    console.log(line);
}

console.log("------------");


