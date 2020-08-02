'use strict'
const obj1 = {}; // 오브젝트 리터럴 문법
const obj2 = new Object(); // 오브젝트 생성자 문법

function print(dog) {
    console.log(dog.name);
    console.log(dog.age);
}

const bori = { name: 'bori', age: 16 };
print(bori);

// 오브젝트 안에서 키를 정의하지 않아도 추가 삭제가 가능하지만, 하지 않는다.
bori.hasjob = true;
console.log(bori.hasjob);

// 오브젝트 접근 방법 2가지 

console.log(bori.name);
// .을 통해 접근

console.log(bori['name']);
// 괄호를 통해 접근.
// 이 방법으로 접근시 프로퍼티(Key)는 스트링 타입이므로 
// ""로 키를 묶어서 접근해야한다.

function printValue(obj, key) {
    console.log(obj.key);
    console.log(obj[key]);
}

printValue(bori, 'name');

function makePerson(name, age) {
    return {
        name,
        age
    }
}

const Person1 = new makePerson('kang', 28);
console.log(Person1.name);
console.log('name' in Person1);
console.log(16 in bori);

for (let key in Person1) {
    console.log(key);
}

const array = [1, 2, 3, 4, 5];
for (let value of array) {
    console.log(value);

}

console.clear();

// 방법 1 -> Old way
const user1 = { name: 'kang', age: 28 }
const user2 = {}

for (let key in user1) {
    user2[key] = user1[key];
}

console.log(user2);

// user1의 내용을 user3에 복제한다.
const user3 = Object.assign({}, user1);
console.log(user3);