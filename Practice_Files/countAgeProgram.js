// 나이 계산(만 나이)
// 생년월일 - 임의 값 지정
// 오늘
const bYear = 1997, bMonth = 8, bDay = 12;
const today = new Date();
let tYear = today.getFullYear();
let tMonth = today.getMonth()+1;    // JS는 월에 1을 더해주어야 합.
let tDay = today.getDate();

let age = 0;
// 현재월이 생일보다 작을 경우.
if(tMonth < bMonth)
    age = (tYear-bYear)-1;  // (올해 년도 - 출생년도)-1  (생일 전)
// 현재월이 생일보다 큰 경우
else if(tMonth > bMonth)
    age = tYear - bYear;    // (올해 년도 - 출생년도)    (생일 후)
// 현재월이 생일이랑 같은 경우 ==> 현재일과 생일을 비교.
else{
    if(tDay >= bDay){
        age = tYear - bYear;    // 생일 후
    }else{
        age = (tYear - bYear)- 1;   // 생일 전
    }
}
console.log(`생일 : ${bYear}-${bMonth}-${bDay}, 나이 : ${age}`);    // 생일 : 1997-8-12, 나이 : 26새.