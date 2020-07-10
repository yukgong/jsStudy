const btn = document.querySelector(".btn"),
    dDay = document.querySelector(".dDay"),
    birthTotalDay = document.querySelector(".birthTotalDay");

function handleClickEvent() {
    const birthday = prompt("생년월일을 입력하세요.(ex.20201119)");

    //prompt로 받은 값 가져오기
    const birthdayYear = birthday.slice(0, 4);
    const birthdayMonth = birthday.slice(4, 6);
    const birthdayDay = birthday.slice(6, 8);

    const today = new Date();
    const myBirthDay = new Date(birthdayYear, birthdayMonth, birthdayDay);
    const nextBirthDay = new Date(today.getFullYear(), birthdayMonth, birthdayDay);
    const nextYearBirthDay = new Date(today.getFullYear() + 1, birthdayMonth, birthdayDay);

    const diffTotalDay = today - myBirthDay;
    const diffNextBirthDay = nextBirthDay - today;
    const diffNextYearBirthDay = nextYearBirthDay - today;
    const currDay = 24 * 60 * 60 * 1000; // 시 * 분 * 초 * 밀리세컨

    if (nextBirthDay > today) {
        // 만약 올해 생일이 안지났다면?
        dDay.innerText = `다음 생일은 ${Math.floor(diffNextBirthDay/currDay)}일 남았습니다.`;
    } else {
        // 만약 올해 생일이 지났다면?
        dDay.innerText = `다음 생일은 ${Math.floor(diffNextYearBirthDay/currDay)}일 남았습니다.`;

    }

    birthTotalDay.innerText = `태어난지 ${Math.floor(diffTotalDay/currDay)}일째 되엇습니다.`;

}

function init() {
    btn.addEventListener("click", handleClickEvent);
}

init();