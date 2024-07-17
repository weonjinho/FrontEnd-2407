// 다이아몬드 그리기
/* 
    1 사분면
    *
    * *
    * * *
    * * * *
    * * * * *
*/
// 방법1:
for(let i = 1; i <= 5; i++){
    let line = '';
    for(let k = 0; k < i; k++){
        line += '*';
    }
    console.log(line);
}
// 방법2:
for(let i = 0; i < 5; i++){
    let line = '';
    for(let k = 0; k < i+1; k++){
        line += '*' ;
    }
    console.log(line);
}
