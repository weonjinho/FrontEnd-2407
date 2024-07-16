// 백준도장 -- 2884 문제
// const alarmHour = 0, alarmMin = 30; // 5시 55분
// if(alarmHour>=1 && alarmHour <=24 && alarmMin>=45){
//     alarmMin = 60-(45-alarmMin);
// }else{
//     alarmHour--;
//     alarmMin = 60-(45-alarmMin);
// }
// console.log();

// if(alarmHour>=1 && alarmHour <=24 && 0<alarmMin<60){
//     if(alarmMin>=45){
//         alarmMin = 60-(45-alarmMin);
//     }else
// }else{
//     console.log("시간을 다시 입력하세요.");
// }
const alarmHour = 0, alarmMin = 40;
let newHour = 0, newMin = 0;
if(alarmMin >= 45){
    newHour = alarmHour;
    newMin = alarmMin - 45; 
}else{
    // 방법 1:
    // if(alarmHour == 0){
    //     newHour = 24 +(alarmHour-1);
    //     newMin = 60-(45-alarmMin);
    // }else{
    //     newHour = alarmHour-1;
    //     newMin = 60-(45-alarmMin);
    // }

    // 방법 2:
    newHour = (24 + alarmHour - 1) % 24;
    newMin = 60 + alarmMin - 45;
}
console.log(`새롭게 설정한 알람 시간은 ${newHour}시 ${newMin}분입니다.`)




