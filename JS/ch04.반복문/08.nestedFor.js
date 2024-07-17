// 중첩(nested) for 반복문

// 별 5개를 6줄 그리기
for(let i = 0; i < 6; i++){
    let line = '';
    for(let k = 0; k < 5; k++){
        line += '* ';
    }
    console.log(line);
}

// 2. 디지털 시계를 10분마다 표시하기
for(let hour = 0; hour <= 23; hour++){
    for(let minute = 0; minute <= 59;minute++){
        if(minute % 10 ==0)
            console.log(`${hour} : ${minute}`);
    }
}

// 3. 별을 대각선 모양으로 그리기 (다이아몬드 1사분면)
for(let i = 0; i<5; i++){
    let line = '';
    for(let k = 0; k < i+1; k++){  // 여기는 '*'의 갯수를 결정한다.
        line += '*';
    }
    console.log(line);
}

console.log("============");
// 4. 다이아몬드 그리기.
for(let i = 5; i >= 1; i--){
    let line = '';
    for(let k = 0 ; k < i; k++){
        line += '*';
    }
    console.log(line);
}

for(let i = 5; i >= 1; i--){
    let line = '';
    for(let k = 0 ; k < i; k++){
        line += k;
    }
    console.log(line);
}


// 다이아몬드 4사분면
for(let i = 5; i > 0; i--){
    let line = '';
    for(let k = 0; k < i; k++){
        line += "* ";
    }
    console.log(line);
}

// 5. 주사위 눈으로 6 x 6 배열 만들기
let diceArray = []
for(let i = 0;i < 6 ; i++){
    let line = [];
    for(let k = 0; k < 6; k++){
        line.push(Math.ceil(Math.random()*6))
    }
    diceArray.push(line);
}
console.log(diceArray);


let line2 = [];
for(let k = 0; k < 6; k++){
    line2.push(Math.ceil(Math.random()*6))
}
console.log(line2);


// 구구단 만들기
for(let i = 2; i <= 9; i++){
    for(let k = 1; k <=9; k++){
        console.log(`${i} x ${k} = ${i*k}`);
    }
    console.log("-----------");
}

