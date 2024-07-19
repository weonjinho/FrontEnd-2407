// 디지털 시계에서 하루에 3이 표시되는 시간은 총 몇초인가?
// 00:00 ~ 00:59
let sum = 0;
for(let hour = 0; hour <=23 ; hour++){          // 시
    for(let minute = 0;minute <= 59;minute++){  // 분
        let timeStr = hour + ':' + minute;
        // if(timeStr.indexOf('3') >= 0 ){
        if(timeStr.includes('3')){
            sum += 60;                          // 초
        }
    }
}
console.log(sum);   // 29700
console.log(typeof(timeStr));

// 가능한 모든 경우의 수를 다 대입한다.


// 어떤 문자열이 회문(palindrome)인가?
// 문자열 뒤집기
let a = 'Javascript';
console.log(a.split('').reverse().join('')); // 처리속도는 느리다.

function isPalindrome(str){
    return str === str.split('').reverse().join('');
}
console.log(isPalindrome('우영우'));
console.log(isPalindrome('소주 만병만 주소'));


