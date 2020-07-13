const startBtn = document.querySelector(".startBtn");

let count = 0; 
let time = 0;
let choice = 0;

function noodle(){
    // setInterval로 반복하고 있는걸 멈추게 한다. 
    // 이경우 noodle 함수가 발생할때 마다 시간 카운트가 멈춘다.
    clearInterval(time);

    // 셀렉트 박스에서 선택한 시간의 값을 대입한다. 
    let timeValue = document.getElementById("selId").value;
    count = timeValue

    // 1초마다 myTimer함수를 주기적으로 실행하는 함수
    time = setInterval('myTimer()', 1000);

    // // 다른 접근 방법
    // choice = document.frm.myChoice.selectedIndex;
    // count = parseInt(document.frm.myChoice.options[choice].value);
    // console.log(count);
}

function myTimer(){

    count = count - 1;
    document.getElementById('countdown').innerHTML
        = "완료까지<b>" + count + "</b>초 남았습니다.";
    
    if(count === 0){
        clearInterval(time);
        alert('시간이 완료 되었습니다.');
    }
}

function init() {
    startBtn.addEventListener("click", noodle)
}

init();
