let N = 4;
for(let i = 0; i <= N; i++){
    let line = '';
    for(let k = 0; k < N-i ;k++){
        line += k;  
    }
    // for(let k = 0; k<2*i+1;k++){
    //     line += '*';   
    // }
    console.log(line);
}