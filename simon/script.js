let gameSeq=[];
let userSeq=[];
let btns = ["yellow", "red","purple", "green" ];

let started = false;
let level = 0;
let highestScore = 0;

let h2 = document.querySelector("h2");
let h4 = document.querySelector("h4");

document.addEventListener("keypress", function(){
    if (started == false){
        console.log("game is started");
        started = true;
        levelUp();
    };
});


function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 250);
};

function btnFlashh(btn) {
    btn.classList.add("flash1");
    setTimeout(function(){
        btn.classList.remove("flash1");
    }, 250);
};

function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `level ${level}`;

    let randIdx = Math.floor(Math.random()* 4);
    let randColor = btns[randIdx];
    let randbtn = document.querySelector(`.${randColor}`);
    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randbtn);
    gameSeq.push(randColor);
    console.log(gameSeq);
    btnFlash(randbtn);
};

    function checkAns(idx){

     if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length == gameSeq.length) {
           setTimeout(levelUp, 1000);
        }
     } else {

        if (level > highestScore) {
            highestScore = level; // Update the highest score if current level is higher
        }

        h2.innerHTML = `Game Over!Your score was  <b>${level}<b/> <br> press any key to star`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function (){
        document.querySelector("body").style.backgroundColor = "white";
        }, 150);
    h4.innerHTML = `Your highestScore <b>${level}</b>`;
        reset();
     }
    }


function btnPress() {
    // console.log(this);
    let btn = this;
    btnFlashh(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns){
    btn.addEventListener("click", btnPress);
}


function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level =0;
}