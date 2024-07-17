// while 반복문
// 반복 횟수가 명확할때 for문 사용.
// 반복 횟수가 불분명할때 while문 사용.
// while(Boolean식){
// }
// 조건이 만족될때 까지 반복 진행.
let summerFruits = ['수박','참외','복숭아','포도'];
let index = 0;
while(index < summerFruits.length){
    console.log(summerFruits[index]);
    index++;        // 조건을 변화하는 실행문이 반드시 필요함, 없으면 무한 루프.
}

// 주사위를 던진 합이 21을 초과할 때 loop 탈출하고
// 그간 던진 주사위 눈을 출력하기.
let sumDice = 0;
let diceArray = [];
while(sumDice <= 21){
    let dice = Math.ceil(Math.random()*6);
    // console.log(dice);
    diceArray.push(dice);
    sumDice += dice;
}
console.log(sumDice);
console.log(diceArray);

// 조건을 잘 모를때 while문으로 무한 루프를 돌리고 조건에 맞을때 loop를 빠져나오는 방식으로 처리.
// break : 한칸만 빠져나온다.
