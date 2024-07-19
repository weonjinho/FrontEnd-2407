// JSON - JavaScript Object Notation
// 이기종 컴퓨터간에 데이터를 주고 받는 표준 - XML(eXtensible Markup Language)
// 현재 실제는 JSON 이 업계 표준임(de facto standard)

let name = 'James', age = 27, job = '프로그래머';
let person = {name:name, age:age, job:job};
let newPerson = {name,age,job}      // key 이름과 변수명이 같으면 하나만 사용가능.
console.log(person, newPerson);
// { name: 'James', age: 27, job: '프로그래머' } { name: 'James', age: 27, job: '프로그래머' }

let externalForm = JSON.stringify(person);  // form을 JSON 형태로 변환해준다. 외부로 보낼때.
console.log(externalForm);
console.log(typeof(externalForm));

let internalForm = JSON.parse(externalForm);    // 원복 : .parse() 외부에서 받으면
console.log(internalForm);  

let personArray = [person, {name:'Maria', age:25, job:'디자이너'}];
console.log(JSON.stringify(personArray)); // 보낼때.(업계 표준)
console.log(personArray);

let p = [
            { id:1, name: 'James', age: 27, job: '프로그래머' },
            { id:2, name: 'Maria', age: 25, job: '디자이너' }
        ];
p.sort((a,b) => a.id-b.id);         // id의 오름차순
p.sort((a,b) => b.age - a.age);     // age의 내림차순


// API(Application Programming Interface)


