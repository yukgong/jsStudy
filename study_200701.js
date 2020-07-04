const now = new Date();
// alert(now);

const halloween = new Date(2016, 9, 31, 19, 0);
// 2016 ->  year
// 9    ->  month 월은 0에서부터 시작 = 현재 10월
// 31   ->  day
// 19   ->  hour = 19시를 뜻함
// 0    ->  minutes = 분
// alert(halloween);

halloween.getFullYear(); // 년
halloween.getMonth(); // 월
halloween.getDate(); // 일
halloween.getDay(); // 요일(0~6)   
halloween.getHours(); // 시
halloween.getMinutes(); // 분
halloween.getSeconds(); // 초

let a = 1;
let b = a;
a = 2;
alert(b);