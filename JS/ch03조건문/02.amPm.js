// 현재 날짜 및 시간을 아는 방법.
let today = new Date(); 
console.log(today); // Time Zone, +9h
let hour = today.getHours();// 시, 0~23사이의 숫자
console.log(hour);
let minute = today.getMinutes();
console.log(minute);
console.log("============================");
console.log(new Date().getHours());
// 객체에는 다양한 메소드와 함수가 있다.

if(hour<12){
    console.log(`오전 ${hour}시 ${today.getMinutes()}분 ${today.getSeconds()}초 입니다.`);
}else{
    console.log(`오후 ${hour-12}시 ${today.getMinutes()}분 ${today.getSeconds()}초 입니다.`);
}

console.log(`${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()}`); // JS에서는 월이 0부터 시작하므로 +1해야한다.
console.log(`${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`);

