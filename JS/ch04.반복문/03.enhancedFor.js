// Enhanced For(개선된 for문)
let summerFruits = ['수박','참외','복숭아','포도'];
// for(let k = 0; k < summerFruits.length; k++){   
//     console.log(k, summerFruits[k]);
// }

// 배열의 모든 요소의 적용할때
// for(let i in summerFruits[i]){      // Object에서 사용하는 방법.
//     console.log(i,summerFruits[i]);
// }

// 배열의 모든 요소에 대해 출력을 한다.
// for( let fruit of summerFruits){    // ( 권장 )
//     console.log(fruit);
// }

// 여름 과일들을 하나의 문자열로 표현하세요.
let favoriteFruits = '';
for(let fruit of summerFruits)
    favoriteFruits += fruit + '';
console.log(favoriteFruits);

// 1에서 10까지 곱한 값(10 factorial)
let product = 1;
for(let i = 1; i <= 10; i++)
    product *= i;
console.log(product);

// 1에서 30까지 3의 배수의 배열을 만들어라.
let multiple3 = [];
for(let i = 3; i <= 30; i +=3 )
    multiple3.push(i)
console.log(multiple3);

// 그릇 : 배열[], 합0, 곱1, 문자열''
