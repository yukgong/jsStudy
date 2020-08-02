'use strict';

// Array

// 1. 배열 선언 
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ['🍎', '🍌', '🍊'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[3]);

console.log(fruits[fruits.length - 1]);
// 배열의 마지막 인덱스 값 반환

// 화면에 배열의 내용을 뿌리는 방법은?

// 1. for
for (let i = 0; i < fruits.length; i++) {
    console.log("for : " + fruits[i]);
}

// 2. for of
for (let key of fruits) {
    console.log("for of : " + key);
}

// 3. for each
fruits.forEach((fruits, index) => {
    console.log("for each : " + fruits, index);
});

// 익명 함수는 화살표 함수를 사용해 아래처럼 축약할 수 있다. 
fruits.forEach(fruits => console.log(fruits));

console.clear();

// Addtion, deletion, copy
// push: add an item to the end // 뒤에 추가
fruits.push('🍒', '🥝');
console.log(fruits);

// pop : remove an item from the end
fruits.pop();
console.log(fruits);

// unshift : 앞에서 부터 삽입
fruits.unshift('🍒', '🥝');
console.log(fruits);

// shift : 앞에서 부터 데이터 제거
fruits.shift();
console.log(fruits);

//! shift와 unshift는 pop과 push보다 매우매우 느리다. 
// 기존의 데이터를 한 칸씩 옮겨서 데이터를 삽입해야하기 때문이다.
// 되도록 pop과 push를 사용한다!

//splice : 시작하는 인덱스를 지정하고 몇개나 지울 것인지를 파라미터에 정의하면
// 필요한 범위를 잘라낼 수 있다. 
// fruits.splice(1); // 시작할 값만 지정하면, 해당값부터 뒤에 오는 모든 값을 제거한다.
fruits.splice(2, 4);
console.log(fruits);

fruits.splice(1, 1, '🥑'); // 특정한 값을 지우고 지정한 값으로 추가할 수 있다.
console.log(fruits);

// concat : 두개의 배열 결합하기 
const fruits2 = ['🍓', '🍆'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);


console.clear();

// Serching
// indexOf : find the index -> 앞에서 부터 탐색
console.log(fruits);
console.log(fruits.indexOf('🥑'));
console.log(fruits.indexOf('🧀')); // 배열안에 없으면 -1을 반환한다.

// includes : true/false
console.log(fruits.includes('🥑')); // true
console.log(fruits.includes('🧀')); // false

// lastIndexOf -> 뒤에서 부터 탐색
fruits.push('🥝');
console.log(fruits); // ["🥝", "🥑", "🥝"]
console.log(fruits.indexOf('🥝')); // 1
console.log(fruits.lastIndexOf('🥝')); //2