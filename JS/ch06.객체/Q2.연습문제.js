// 1. 1에서 1000사이에 0은 몇번, 1은 몇번, ..., 9는 몇번 사용되었는가?
let arr = [];
let sum0 = 0;
let sum1 = 0;
let sum2 = 0;
let sum3 = 0;
let sum4 = 0;
let sum5 = 0;
let sum6 = 0;
let sum7 = 0;
let sum8 = 0;
let sum9 = 0;
// 1 ~ 1000의 숫자가 포함하는 배열 생성, 값 대입.
for(let i = 1;i<=1000;i++){
    arr.push(i);
};
// arr를 긴 문자열로 전환.
let numbers = arr.join('');
// console.log(numbers);
// 반복문으로 처음부터 끝까지 원하는 문자가 있는지 판단.
for(let i of numbers ){
    if(i.includes('0')){
        sum0++;
    }else if(i.includes('1')){
        sum1++;
    }else if(i.includes('2')){
        sum2++;
    }else if(i.includes('3')){
        sum3++;
    }else if(i.includes('4')){
        sum4++;
    }else if(i.includes('5')){
        sum5++;
    }else if(i.includes('6')){
        sum6++;
    }else if(i.includes('7')){
        sum7++;
    }else if(i.includes('8')){
        sum8++;
    }else if(i.includes('9')){
        sum9++;
    }
}
console.log(sum0);
console.log(sum1);
console.log(sum2);
console.log(sum3);
console.log(sum4);
console.log(sum5);
console.log(sum6);
console.log(sum7);
console.log(sum8);
console.log(sum9);



// 2. C:\Workspace\FrontEnd\JS\ch06.객체\Q2.연습문제.js
// 위 문자열에서 파일명 Q2.연습문제.js 만 분리하세요.

// 문자열을 배열로 저장. 
let myText = 'C:\Workspace\FrontEnd\JS\ch06.객체\Q2.연습문제.js';
let textArr = myText.split('');
let textList = textArr.join('');
let result = textList.substring(28)
console.log(result);




// 3. 두개의 세자리수를 곱해서 나온 결과가 palindrome일때
//    가장 큰 palindrome 수와 어떤 수를 곱해서 나온 결과인가?
let a = [];
let b = [];
let timeResult = [];
let timeResult2 = [];
for(let i = 100;i <= 999;i++){
    a.push(i);
    b.push(i);
}
for(let k = 0;k<900;k++){
    timeResult.push(`${a[k]}x${b[k]}=${a[k]*b[k]} `);
    timeResult2.push(a[k]*b[k]);
}
console.log(timeResult);
console.log(timeResult2);
let reversedNumArrList = [];
for(let i=0;i<900;i++){
    reversedNumArrList = (timeResult2[i]).split('').reverse().join('');
}
console.log(reversedNumArrList);

















// let numList = timeResult2.toString();
// let reversedNum = numList.split(',').reverse().join(',');
// let reversedNumber = Number(reversedNum);
// console.log(reversedNumber);
// console.log("-----");
// console.log(reversedNum);
// let reversedNumArr = [];
// reversedNumArr = reversedNum.split(',');
// console.log('======');
// console.log(reversedNumArr);
// console.log(typeof(reversedNum));



// 4. 다음 문장에서 the 단어는 몇번 사요되었는가?
// let sample = `the grown-ups' response, this time,
//  was to advise me to lay aside my drawings of boa constrictors, 
// whether from the inside or the outside, and devote myself instead to geography, 
// history, arithmetic, and grammar. That is why, at the, age of six, 
// I gave up what might have been a magnificent career as a painter. 
// I had been disheartened by the failure of my Drawing Number One and my Drawing Number Two. 
// Grown-ups never understand anything by themselves, 
// and it is tiresome for children to be always and forever explaining things to the.`;
