let mytext = 'Hello World!';
console.log(mytext.includes('o')); // true
console.log(mytext.includes('w')); // false
console.log(mytext.match('o'));

// weon연습문제01:
// [ 'o', index: 4, input: 'Hello World!', groups: undefined ] ==> Hello World!
let mytext2 = [ 'o', {index: 4}, {input: 'Hello World!'}, {groups: undefined} ];
// JSON --> String
let mytext3 = JSON.stringify(mytext2);
console.log('mytext3 :',mytext3);
// 정규식 ---> 불필요 요소 재거.
let mytext4 = mytext3.replace(/[^A-za-z '!]/g,'');
console.log('mytext4 :',mytext4.toString());
// '[', ']' 제거 ---> .replace()
let text5 = mytext4.toString().replace('[','').replace(']','');
console.log('mytext5 :',text5);
// slice할 위치의 인덱스 번호 확인.
console.log("mytext5.indexOf('H') :",text5.indexOf('H'));
// .slice()
let result = text5.slice(11);
console.log('mresult :',result);


function solution(myString){
    console.log(myString);
    console.log(typeof(myString));
}
// 함수에서 사용하는 매개변수는 별또의 선언없이, 호출시 값만주면, 알아서 타입을 판단해 그에 맞는 변수를 선언해줘다.
solution(1);

console.log("----------");

function solution2(myText){
    let a = '1';
    return 1+a; // 문자열 + 숫자 = 문자열; 숫자 + 문자열 = 문자열
}
console.log(solution2('Hello'));

// JS에서 문자열을 숫자로 변환하는 방법
let quantity = '12';
// 1. Number( quantity )
console.log(typeof(Number(quantity)));      // number
console.log(Number(quantity));      // number
// 2. parseInt( quantity ) : 정수
console.log(typeof(parseInt(quantity,10)));     // quantity 를 10진수 숫자로 변환한다.
console.log(parseInt(quantity,10));     // quantity 를 10진수 숫자로 변환한다.
// 3. parseFloat( quantity ) : 실수
// quantity = '12.99';
console.log(typeof(parseFloat(quantity,10)));
console.log(parseFloat(quantity,10));   // 12.99
// 4. '+' 더하기 연산자를 이용해 변경
console.log(+quantity);     // 12
// quantity = '12.99';
console.log(+quantity);     // 12.99

console.log("---");
// 5. 문자열 * 1
console.log(quantity*1);    // 12
quantity = '12.99';
console.log(quantity*1);    // 12.99