let breakIncrement = document.getElementById('break-increment');
let breakLength = document.getElementById('break-length');
let breakDecrement = document.getElementById('break-decrement');
let sessionIncrement = document.getElementById('session-increment');
let sessionLength = document.getElementById('session-length');
let sessionDecrement = document.getElementById('session-decrement');
let clockContainer = document.getElementById('time-left');
var start = document.getElementById('start_stop');
let refresh = document.getElementById('reset');
let parentEle = document.getElementById('button-container');
let breakSetting = true;


function breakInc(){
    let breakLengthVar = parseInt(breakLength.innerText);
    if(breakLengthVar < 10){
        breakLength.innerText = breakLengthVar + 1;
    }
}

function breakDec(){
    let breakLengthVar = parseInt(breakLength.innerText);
    if(breakLengthVar > 2){
        breakLength.innerText = breakLengthVar - 1;
    }
}

function sessionInc(){
    let sessionLengthVar = parseInt(sessionLength.innerText);
    if(sessionLengthVar < 58){
        sessionLength.innerText = sessionLengthVar + 1;
        clockContainer.innerText = `${sessionLength.innerText}:00`
    }
}

function sessionDec(){
    let sessionLengthVar = parseInt(sessionLength.innerText);
    if(sessionLengthVar > 3){
        sessionLength.innerText = sessionLengthVar - 1;
        clockContainer.innerText = `${sessionLength.innerText}:00`
    }
}


let timerStatus = false;
let intervalCounter = 1;

start.addEventListener('click', function(){
    console.log('click');
    let clockVal = clockContainer.innerText;
    let clockSplit = clockVal.split(":");
    let seconds = parseInt(clockSplit[1]);
    let minutes = parseInt(clockSplit[0]);
    if(!timerStatus){
        // swap out images
        start.setAttribute('src', 'stop.jpeg');

        // toggle timerStatus
        timerStatus = true;

        // create interval
        var intId = setInterval(() => {

            if(seconds <= 1 && minutes <= 0){
                if(breakSetting){
                    minutes = parseInt(breakLength.innerText);
                    breakSetting = false;
                }
                else{
                    minutes = parseInt(sessionLength.innerText);
                    breakSetting = true;
                }
            }

            if(seconds <= 9){
                clockContainer.innerText = `${minutes}:0${seconds}`
                seconds--;
                if(seconds <= 0){
                    minutes--;
                    seconds = 59;
                }
            }
            else{
                clockContainer.innerText = `${minutes}:${seconds}`
                seconds--;
            }
            
        }, 1000);
    }
    else{
        clearInterval(intervalCounter);
        start.setAttribute('src', 'play.jpeg');
        timerStatus=false;
        intervalCounter++;
    }
});

function refreshFun(){
        window.location.reload();
}