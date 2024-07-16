// 나이 계산
// 생년월일 - 임의 값 지정
// 오늘
const bYear = 1997, bMonth = 6, bDay = 12;
const today = new Date();
let tYear = today.getFullYear();
let tMonth = today.getMonth()+1;    // JS는 월에 1을 더해주어야 함
let tDay = today.getDate();

let age = 0;
// 현재월이 생일보다 작은 경우
if(tMonth<bMonth)
    age = tYear-bYear-1;
// 현재월이 생일보다 큰 경우
else if(tMonth>bMonth)
    age = tYear-bYear;
// 현재월이 생일보다 같은 경우 : 현재일과 생일을 비교.
else{
    if(tday>=bDay)
        age = tYear - bYear;
    else
        age = tYear - bYear -1 ;
}



if((tMonth-bMonth)>0){
    age = tYear-bYear;
}else if((tMonth-bMonth)<0){
    age = (tYear-bYear)-1;
}else if((tMonth-bMonth)==0){
    if((tDay-bDay)>=0){
        age = tYear-bYear;
    }else{
        age = (tYear-bYear)-1;
    }
}
console.log(`생일 : ${bYear}-${bMonth}-${bDay}, 나이 : ${age}`);


if(tMonth<bMonth)
    age = tYear-bYear-1;
else if(tMonth>bMonth)
    age = tYear-bYear;
else{
    if(tday>=bDay)
        age = tYear - bYear;
    else
        age = tYear - bYear -1 ;
}

