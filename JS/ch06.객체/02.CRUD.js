// C - create, R - read/retrieve, U - update, D - delete

// 빈 객체 생성
let obj = {};

// 속성 추가
obj['name'] = '우피';
obj.weight = 10;
console.log(obj);

// 속성 수정
obj.weight = 12;
console.log(obj);

// 속성 제거
delete obj.weight;
console.log(obj);

// 출력
console.log(obj.toString());    // 객체를 문자열로 변환
console.log("-----");
console.log(typeof(obj.toString()));
console.log(typeof(obj));
// 사용예제
let num = 24;
console.log(num, typeof(num));
let str = num.toString();
console.log(str, typeof(str));


// 반복문
obj.weight = 9;
obj.height = 50;
for(let key in obj){
    console.log(key, obj[key]); // key값 : obj의 키값.
}