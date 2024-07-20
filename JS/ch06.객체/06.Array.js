// Array 객체

// 배열 생성
let fruits = ['apple','banana','cherry'];
let cars = new Array('Audi','Benz','BMW');
console.log(cars);

// 배열의 메소드
// concat (비파과적 메소드, 자기 지신은 변화없음)
let newFruits = fruits.concat('mango','orange');
console.log(newFruits, fruits);

// join() - 문자열로 연결
console.log(`내가 갖고 싶은 차는 ${cars.join(', ')} 입니다.`); // 내가 갖고 싶은 차는 Audi, Benz, BMW 입니다.

// pop()* - 맨 뒤에 있는 요소를 끄집어 내고, 파괴적 메소드.
console.log(cars.pop()); // BMW
console.log(cars);       // [ 'Audi', 'Benz' ]

// push()* - 멘 뒤에 요소를 추가.
cars.push('Volvo');
cars.push("Hyundai");
console.log(cars);

// reverse()* - 순서 뒤집기
cars.reverse();
console.log(cars); // 배열 요소의 순서만 reverse된다.

// sort()* - 정렬
cars.sort()        // 문자열 기준으로, 오름차순 정렬이 기본.
console.log(cars); // [ 'Audi', 'Benz', 'Hyundai', 'Volvo' ]

let numbers = [34, 25, 89, 7, 45, 55, 19];
// 오름차순 정렬(Ascending order)
// numbers.sort(); // 기본이 오름차순  // 알파뱃순서.(아스키 코드값)
// numbers.sort(function(a,b){
//     return a - b; //  컴퍼레이터
// });
numbers.sort((a,b) => a-b); // 자바에서도 같다.
console.log(numbers);

// comparator : 정렬기준.
// (a, b) => a - b;     오름차순
// (a, b) => b - a;     내림차순

// 내림차순(Descending order)
numbers.sort((a,b) => b-a);
console.log(numbers);

// sort() 후 reverse() ---> 내림차순


// slice()
// console.log(fruits.slice(시작인덱스, 종료인텍스));
console.log(fruits);
console.log(fruits.slice(1, 3))     // fruits.slice(1,3)

