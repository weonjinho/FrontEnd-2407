// 배열( Array )
let summerFruits = ['수박','참외','복숭아','포도'];
console.log(summerFruits);
console.log(typeof(summerFruits)); // Object 타입
// 자바스크립트에서는 배열이 object타입으로 존재한다.
// Array는 object의 한 형태.

// 인덱싱
// 배열 요소의 접근하는 방법 : indexing(인덱싱)
console.log(summerFruits[0],summerFruits[2]);
console.log(summerFruits.length);
console.log(summerFruits[summerFruits.length - 1]); // 맨 마지막 요소

// 배열에 임의의 타입의 원소를 사용할 수 있음.
let person = ['James',27, '남자', '프로그래머', 175.3,['수박', '포도']];
console.log(person);
// 여러가지 타입을 섞어쓰는 것은 바람직하지 않음. Object를 사용하는 것을 관장함.
let personObj = {
    name : 'james', 
    age : 27, 
    gender : '남자',
    job : '프로그래머',
    height : 175.3, 
    favoriteFruites : ['수박','포도']
};

// 배열 요소 추가 : push(추가할 요소)
summerFruits.push('자두');
console.log(summerFruits);
console.log(summerFruits.length);
// 배열 요소 제거 : splice()
summerFruits.splice(2,1); // (제거할 요소의 인덱스번호, 제거할 요소의 갯수)
console.log(summerFruits);