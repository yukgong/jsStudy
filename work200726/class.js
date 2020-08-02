"use strict";

// 1. Class 선언하기
class Person {
    // constructor
    constructor(name, age) {
        // fields
        this.name = name;
        this.age = age;
    }

    // methods
    speak() {
        console.log(`${this.name}:hello!`);
    }
}

const kang = new Person("kang", 30);
console.log(kang.name);
console.log(kang.age);
kang.speak();

// 2. Getter and setters
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get age() { // 값 가져오기
        return this._age; // 무한 콜백을 피하기 위해 변수명을 다르게 지정해준다.
    }

    set age(value) { // 값 설정
        // if (value < 0) {
        //     throw Error("age can not be negative");
        // }
        this._age = value < 0 ? 0 : value;
    }
}

const user1 = new User("steve", "job", -1);
console.log(user1.age);

// Static properties and methods
// 아직 사용하기에 이르다. 
// 오브젝트에 상관없이 메소드에서 공통적으로 사용할 수 있는 값이라면,
// static과 static 메소드를 활용해 사용하는 것이 좋다. 
class userDao {
    static publisher = '안녕';

    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }

    static print() {
        console.log(userDao.publisher);
    }
}

const artcle1 = new userDao(1);
const artcle2 = new userDao(2);
console.log(artcle1.publisher);
userDao.print();

// 4. 상속
// 위의 User 메소드를 상속받아서 전화번호를 변수에 추가해보자
class UserDetail extends User {
    constructor(firstName, lastName, age, phoneNum) {
            super(firstName, lastName, age);
            this.phoneNum = phoneNum;
        }
        // methods
    speak() {
        console.log(`name : ${this.lastName + " " + this.firstName}, 
            age : ${this.age}
            phoneNum : ${this.phoneNum}`);
    }
}

const detail = new UserDetail("kyunghyun", "kang", 23, "010-1234-1234");
detail.speak();

// 6. Class checking : instanceOf
console.log(detail instanceof UserDetail);