// 타이머 내장 함수
setTimeout(function(){
    console.log('3초 경과');
}, 3000);
// 3000 milliSecond = 3초
// handler : callback 함수를 넣는 위치.
// timeout : 실행할 시기.


const si = setInterval(()=>{
    console.log(new Date());
} , 1000);
// 1초에 한번씩 사간 표시.

setTimeout(() => {
    console.log('5초 경과후 초시계 정지시킴.');
    clearInterval(si);
}, 5100);

// 함수 3개가 동시에 실행되서 각자 함수를 실행한다.
// 5ms 정도의 오차가 존제한다.

// 이걸로 디지털 시계를 만들수 있음.

// 대부분의 언어를 위 --> 아래 순으로 실행된다(자바,c ...), 하지만 JS는  순차적실행?
// I/O 작업과 CPU작업하는 속도와 차이는 엄청난다.
// JS는 callback를 이용한다. 
// JS에서 callback지옥.
// 비동기 - 순서 보장이 안된다.
// 자바스트립트 - Promise
// React
