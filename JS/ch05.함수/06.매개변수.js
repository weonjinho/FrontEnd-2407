// 매개변수에 값을 입력하지 않고 호출하는 경우.
function printFruit(name, count){
    console.log(`${name} 과일이 ${count}개 있습니다.`);
}
printFruit('참외',5);
printFruit('복숭아');   // 복숭아 과일이 undefined개 있습니다. 

// 입력이 없을때 default값 부여하는 방법.
function printFruit2(name,count){
    if(typeof(count) == 'undefined')
        count = 0;
    console.log(`${name} 과일이 ${count}개 있습니다.`);
}
printFruit2('복숭아');
function printFruit3(name,count){
    count = count ? count : 0; // count가 undefined 이면, 0으로 체워넣는다.
    // boolean 값이 false가 되는 경우: 0, 0.0, '', undefined;
    console.log(`${name} 과일이 ${count}개 있습니다.`);
}
printFruit3('복숭아');

// 기본 매개변수
// default 값 지정 - 매개변수값을 지정하지 않으면 default 값으로 설정.
function printFruit4(name,count = 0){
    console.log(`${name} 과일이 ${count}개 있습니다.`);
}
printFruit4('복숭아',3); // 값을 지정한 경우.
printFruit4('복숭아'); // 지정 안한 경우.


// 가변 매개변수 (React)
// ... : rest operator, 나머지의 의미.
function smaple(x, ...items){  // items는 함수 안에서 배열처럼 사용할 수 있음.
    console.log(x, items);
}
smaple(1,2); // [ 1,2 ] / 1 [2]  x를 제외한 나머지를 가변 매개변수로 인식.
smaple(1,2,3,4); // [ 1,2,3,4 ] / 1 [2,3,4]
console.log(); // 매개변수의 갯수가 한정되 있지 않다.

