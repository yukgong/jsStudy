const submitAnswer = document.querySelector(".submitAnswer"),
    submitBtn = document.querySelector(".submitBtn"),
    afterBtn = document.querySelector(".afterBtn"),
    answer = document.querySelector(".answer"),
    answerWarpper = document.querySelector(".answerWarpper"),
    quiz = document.querySelector(".quiz"),
    lowerCase = document.querySelector(".lowerCase");

function handleAfterBtnEvent(){
    quiz.classList.remove("hide");
    answerWarpper.classList.add("hide");
    submitAnswer.value = "";
}

function handleClickEvent(){
    // 제출 버튼 클릭시 input박스의 value를 가져온다.
    let getAnswer = submitAnswer.value;
    
    // 소문자로 답한다고 체크박스 클릭시 toLowerCase함수를 사용해
    // 제출한 답을 소문자로 변환 후 getAnswer에 대입한다. 
    if(lowerCase.checked == true){
        getAnswer = getAnswer.toLowerCase();
    }

    // getAnswer의 정답 여부를 확인 후 화면에 피드백을 출력한다.
    if(getAnswer === "apple"){
        answer.innerHTML = "정답입니다!";
    } else {
        answer.innerHTML = "오답입니다!";
    }

    answerWarpper.classList.remove("hide");
    quiz.classList.add("hide");
}

function init() {
    submitBtn.addEventListener("click", handleClickEvent);
    afterBtn.addEventListener("click", handleAfterBtnEvent);
}

init();