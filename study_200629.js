const multiline = "line1\n" + "line2\n" + "line3";
console.log(multiline);

const multiline1 = `line1
line2`;
console.log(multiline1);

const multiline2 = "line1\n\
line2"
console.log(multiline2);

// const red = Symbol("The color of a sunset!");
// const orange = Symbol("The color of a sunset!");
// consol.log(red === Orange);

const obj = {};
obj.color = "yellow";
obj.height = 124;
obj.item = Symbol("phone");
obj["my Name"] = "kyunghyun.kang";

console.log(obj);

const SIZE = Symbol();
obj[SIZE] = 8;
console.log(obj[SIZE]);

const sam1 = {
    name: 'Sam',
    age: '4'
};

const sam3 = {
    name: 'Sam',
    classification: {
        kingdom: 'Anamalia',
        phylum: 'Chordata'
    }
};


console.log(sam1.name);
console.log(sam3.classification.kingdom);

// 객체에 함수를 담을 때
sam3.speak = function() {
    return "Meow!";
};
console.log(sam3.speak()); // 함수 호출시 뒤에 ()를 붙여준다.

const a1 = [1, 2, 3, 4];
const a2 = [28, "강경현", 160, null];
const a3 = [
    "What do you think about it?",
    "Today is new day"
]

const a4 = [{
        name: "kyunghyun.kang",
        age: "28",
        Height: "160"
    },
    {
        name: "bori",
        age: "16",
        Height: "35"
    },
    {
        name: "phone",
        age: "1.5",
        Height: "17"
    }
];

const a5 = [
    [1, 3, 5],
    [4, 3, 4]
];

console.log(a1);
console.log(a2);
console.log(a3);
console.log(a4[a4.length - 1]);
console.log(a5.length);