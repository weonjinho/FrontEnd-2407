// String 객체 ( *** )
let hello = '안녕하세요?';

// 속성
console.log(hello.length); // 문자열의 길이. 6

// 메소드(Method)
console.log(hello[2],hello.charAt(2));  // 하 하
console.log(hello + ' 여러분!', hello.concat(' 여러분!')); // 문자열 + 문자열

// 문자열의 특정 문자열이 있는지 없는지 확인할 때 사용.
console.log(hello.indexOf('세요'), hello.indexOf('가'));   // 3 , 값이 없으면 "-1"로 출력됨. ( Q1.연습문제 )
console.log(hello.includes('세요'));    // true, includes() --> true/false
console.log('pineapple'.lastIndexOf('p'));  // 6

// 문자열을 분리해서 배열을 생성
let fruits = '수박 참외 포도';
let furitArray = fruits.split(' ');
console.log(furitArray);    // [ '수박', ' 참외', ' 포도' ]
console.log(typeof(furitArray));

// 응용 : 특정 단어가 나온 개수를 탐색할 수 있다.

// 문자열 일부분(substring)
let today = new Date().toISOString();   // 2024-07-19T02:12:21.103Z
console.log(today);     
// 날짜 추출 - 2024-07-19
console.log(today.substring(0, 10));    //  ( 시작하는 위치, 원하는 워치 + 1 ) // 0은 포함, 10은 포함하지 않음.
// 사간 추출 - 02:12:21
console.log(today.substring(11,19));    // 11에서 출발해서 8글자를 읽음(11 + 8)
console.log(new Date().toLocaleString()); // 2024. 7. 19. 오전 11:20:27   현지시간
console.log(new Date().toLocaleString().substring(16)); // 11:22:09  start값만 주면 시작index부터 끝까지. // 인덱스 16부터 끝까지.

// 공백 제거
let space = '   Hello?     ';
let space2 = '\t Hello?     \r\n';
console.log(space.trim());  // trim() : 공백 전부 제거; trimStart() : 앞 공백 제거;  trimEnd() : 뒤 공백 제거.
console.log(space2.trim());
// 양쪽의 White space : 공백, 탭, \r, \n

// Method chaining
console.log(space.trim().substring(0,5).toUpperCase()); // 공백제거 후 , 특정 문자 추출후, 대문자로 변환.

// 문자열 변환
let sample = 'A quick brown fox';
console.log(sample.replace('A','The'));     // The quick brown fox
console.log(sample.replace('o','O'));       // A quick brOwn fox; 하나만 바뀐다.

// 정규표현식(Regular Expression) : 패턴 매칭.
sample = 'A quick brown fox - 3 - 갈색의 재빠른 여우 the lazy dog = 5 = 게으른 개';
// 영문자와 공백만 남기고 모두 지움
console.log(sample.replace(/[^A-Z a-z]/g,''));  // 대문자, 공백, 소문자가 아닌건은 모두 지운다.
// 한글과 공백한 남기고 모두 지움
console.log(sample.replace(/[^가-힣ㄱ-ㅎ ㅏ-ㅣ]/g,''));  
// 숫자, 특수기호만 남기고 모두 지움
console.log(sample.replace(/[^0-9-=]/g,''));




