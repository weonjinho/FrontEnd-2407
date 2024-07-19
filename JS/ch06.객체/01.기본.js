/*
 *객체(object) 
 */
// 1. JS에서 객체는 자료구조의 의미 - 파이선에서는 이러한 자료구조를 딕셔너리, 자바에서는 맵과 유사함.
// key : value 의 조합.
// 특징의 조합. (제조사, 이름, 색상, ...)
// 사물을 묘사하는 과정을 자료구조로 만든것이 객체이다.
let personArray = ['James', 27, '남자','프로그래머',175.2];
let personObject = {
    name : 'James',     // key : value
    age : 27,
    gender : '남자',
    job : '프로그래머',
    height : 175.2
};

// 2. 객체 본연의 의미 - 객체는 속성(attribute)과 메소드(method)로 사물을 묘사.
// 속성 : 형용사; 
// 메소드: 동사, 그 사물의 혀용된 동작. (전진, 후퇴, 정지 ...)

// JS는 객체 지원연어이다.(지향언어 X)
// 자바는 객체 지향언어이다.
const pet = {
    name : '구름',
    eat : function(food = '사료'){
        console.log(`${food} 을/를 먹습니다.`);
    }
}
console.log(pet.name);  // 객체의 속성을 이용한다.
pet.eat();  // 객체의 메소드를 이용한다. ; 기본값
pet.eat('간식'); // 주어진 값 --> '간식'.

// 메소드 : 객체가 할 수 있는 일.
// 파란 박스 : 속성
// 보라색 박스 : 메소드.

// 객체 속성에 대한 접근
console.log(personObject.job);      // 이렇게 사용하는 것이 일반 적
console.log(personObject['job']);   // 이런식으로는 사용하지 않는다.
let key = 'job';
console.log(personObject[key]);     // key 값을 변수로 사용하는 경우.

// 배열은 객체의 특수한 형태
console.log(typeof(personArray));
let fruitArray = ['감','밤','배'];
let fruitObject = {
    0:'감',
    1:'밤',
    2:'배'
};
// JS 기본 자료형 : 문자열, 숫자 , undefined, fucntion,  object, boolean
