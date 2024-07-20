let hello = '안녕하세요.';

// 속성
// 1. 문자열의 길이
console.log(hello.length); // 6

// 2. 인덱스 번호로 특정 문자찾기.
console.log(hello[2]);          // 하
console.log(hello.charAt(2));   // 하
console.log(hello + ' 여러분!', hello.concat(' 여러분!'));  // 문자열 + 문자열.

// 3. 문자열의 특정 문자열이 있는지 확인할때 사용.
console.log(hello.indexOf('세요'), hello.indexOf('가'));    // 3, -1
// 찾는 값이 있으면 그 값의 index번호를 반환하고, 없으면 -1를 반환한다.
console.log(hello.includes('세요'));   // true, includes() --> true / false;
console.log('pineapple'.lastIndexOf('p'));  // 6, 마지막 찾는 문자의 index번호.
// 문제 :
// 디지털 시계에서 하루에 3이 표시되는 시간은 총 몇초인가?  00:00 ~ 00:59
let sum = 0;
for(let hour = 0; hour <= 23; hour++){
    for(let minute = 0; minute <= 59; minute++){
        let timeStr = hour + ':' + minute;  // 굳이 배열 선언할 필요 없이 직접 문자열에다 저장하면 된다.
        if(timeStr.includes('3')){
            sum += 60;
        }
    }
}
console.log(sum);   // 29700

// .length('길이를 확인하고 싶은 문자열')                   ---> 문자열의 길이(숫자)
// .charAt(indexNum)
// .concat('추가할 문자열')                                ---> 문자열 + 문자열
// .indexOf('index번호를 알고 싶은 문자열')                 ---> 인덱스 번호 ( 문자를 찾는것도 왼쪽 부터, 인덱스번호도 왼쪽 부터 count! )
// .lastIndexOf('index번호를 알고 싶은 문자열')             ---> 인덱스 번호 ( 오른쪽 부터 찾았을때 첫 번째 a, 단 이의 인덱스번호는 왼쪽 부터 count! )
// .includes('존재 여부를 확인하고 싶은 문자열')             ---> true / false

// 문자열을 분리해서 배열을 생성.
// .split(' ')                                            ---> ' '(공백)을 기준으로 문자 데이터를 나누어 배열에 저장하여 반환한다.

let today = new Date();     // 2024-07-20T04:09:44.317Z
console.log(today);
let today2 = today.toISOString();       // 2024-07-20T04:10:52.009Z
console.log(today2);
let today3 = new Date().toLocaleString();
console.log(today3);
console.log(today2.indexOf('T'));
console.log(today2.substring(0,9));
console.log(today3.replaceAll('.','-').replaceAll(' ','').substring(0,9));

let space = '  Hello?  ';
let space2 = '\tHello?\r\n';
console.log(space.trim());
console.log(space2.trim());

console.log(space2.trim().toUpperCase());
console.log(space2.trim().toLowerCase());


// 정규식(Regular Expression)
let sample = 'A quick brown fox - 3 - 갈색의 재빠른 여우 the lazy dog = 5 = 게으른 개';
console.log(sample.replace(/[^A-Z a-z1-9]/g,'')); // 대문자, 공백, 소문자, 숫자가 아닌건 모두 지운다.

