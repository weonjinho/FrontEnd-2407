
let N = 4; // 가운데 두꺼운 별이 9개
for(let i = 0; i <= N; i++){
    let line = '';
    for(let k = 0; k < N-i ;k++){
        line += ' ';
    }
    for(let k = 0; k<2*i+1;k++){
        line += '*';    // 참이면 * 하나찍는다.
    }
    console.log(line);
}
for(let i = N-1;i>=0;i--){
    let line = '';
    for(let k = 0; k < N-i ;k++){
        line += ' ';
    }
    for(let k = 0; k<2*i+1;k++){
        line += '*';
    }
    console.log(line)
}

