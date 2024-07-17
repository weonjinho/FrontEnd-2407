// break - 반복문 탈출

// 04.while.js에 있는 방법보다 아래 방법이 더 많이 쓰임.
let sumDice = 0;
let diceArray = [];
// for(;;){  // for문으로 무한loop설정하는 방식.
while(true){
    let dice = Math.ceil(Math.random()*6);
    diceArray.push(dice);
    sumDice += dice;
    if(sumDice > 21)    // 조건이 false인 상황이면 break문 실행.
        break;
}
console.log(diceArray);
console.log(sumDice);

// 위 방법의 한계 :
// break는 loop의 한단계만 벗어날 수 있음.
for(let i = 0; i < 3; i++){
    for(let k = 0; k < 5; k++){
        if(k == i)
            break;
    }
    console.log(`point A`,i);
}
console.log(`point B`);
// 프로그램 작성할때 실수할 요소를 최소화 해야한다.
// i --> k 실수 방지용.


