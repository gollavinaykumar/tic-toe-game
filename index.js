const PLAYER_1 = 0;
const PLAYER_2 = 1;
const PLAYERS = ["x", "O"];

const button = document.getElementById("btn");
const button1 = document.getElementById("btn1");
const button2 = document.getElementById("btn2");
const button3 = document.getElementById("btn3");
const button4 = document.getElementById("btn4");
const button5 = document.getElementById("btn5");
const button6 = document.getElementById("btn6");
const button7 = document.getElementById("btn7");
const button8 = document.getElementById("btn8");

const resultEl = document.getElementById("result");


const buttonEl = document.getElementById("results");
let count = 1;
button.addEventListener("click", () => {
    count++;
    if (count % 2 == PLAYER_1) {
        button.innerHTML = PLAYERS[0];
    } else if (count % 2 == PLAYER_2) {
        button.innerHTML = PLAYERS[1];
    }
    generateWinner();
})
button1.addEventListener("click", () => {
    count++;
    if (count % 2 == PLAYER_1) {
        button1.innerHTML = PLAYERS[0];
    } else if (count % 2 == PLAYER_2) {
        button1.innerHTML = PLAYERS[1];
    }
    generateWinner();
})
button2.addEventListener("click", () => {
    count++;
    if (count % 2 == PLAYER_1) {
        button2.innerHTML = PLAYERS[0];
    } else if (count % 2 == PLAYER_2) {
        button2.innerHTML = PLAYERS[1];
    }
    generateWinner();
})
button3.addEventListener("click", () => {
    count++;
    if (count % 2 == PLAYER_1) {
        button3.innerHTML = PLAYERS[0];
    } else if (count % 2 == PLAYER_2) {
        button3.innerHTML = PLAYERS[1];
    }
    generateWinner();
})
button4.addEventListener("click", () => {
    count++;
    if (count % 2 == PLAYER_1) {
        button4.innerHTML = PLAYERS[0];
    } else if (count % 2 == PLAYER_2) {
        button4.innerHTML = PLAYERS[1];
    }
    generateWinner();
})
button5.addEventListener("click", () => {
    count++;
    if (count % 2 == PLAYER_1) {
        button5.innerHTML = PLAYERS[0];
    } else if (count % 2 == PLAYER_2) {
        button5.innerHTML = PLAYERS[1];
    }
    generateWinner();
})
button6.addEventListener("click", () => {
    count++;
    if (count % 2 == PLAYER_1) {
        button6.innerHTML = PLAYERS[0];
    } else if (count % 2 == PLAYER_2) {
        button6.innerHTML = PLAYERS[1];
    }
    generateWinner();
})
button7.addEventListener("click", () => {
    count++;
    if (count % 2 == PLAYER_1) {
        button7.innerHTML = PLAYERS[0];
    } else if (count % 2 == PLAYER_2) {
        button7.innerHTML = PLAYERS[1];
    }
    generateWinner();
})
button8.addEventListener("click", () => {
    count++;
    if (count % 2 == PLAYER_1) {
        button8.innerHTML = PLAYERS[0];
    } else if (count % 2 == PLAYER_2) {
        button8.innerHTML = PLAYERS[1];
    }
    generateWinner();
})

function generateWinner() {

    if (button.innerHTML == PLAYERS[0] && button1.innerHTML == PLAYERS[0] && button2.innerHTML == PLAYERS[0]) {
        resultEl.style.color = "green";
        button.style.color = "green";
        button1.style.color = "green";
        button2.style.color = "green";
        resultEl.innerHTML = "PLAYER-1 : WON";
    }
    else if (button.innerHTML == PLAYERS[1] && button1.innerHTML == PLAYERS[1] && button2.innerHTML == PLAYERS[1]) {
        button.style.color = "green";
        button1.style.color = "green";
        button2.style.color = "green";
        resultEl.style.color = "green";
        resultEl.innerHTML = "PLAYER-2 : WON";
    }
    else if (button3.innerHTML == PLAYERS[0] && button4.innerHTML == PLAYERS[0] && button5.innerHTML == PLAYERS[0]) {
        button3.style.color = "green";
        button4.style.color = "green";
        button5.style.color = "green";
        resultEl.style.color = "green";
        resultEl.innerHTML = "PLAYER-1 : WON";
    }
    else if (button3.innerHTML == PLAYERS[1] && button4.innerHTML == PLAYERS[1] && button5.innerHTML == PLAYERS[1]) {
        button3.style.color = "green";
        button4.style.color = "green";
        button5.style.color = "green";
        resultEl.style.color = "green";
        resultEl.innerHTML = "PLAYER-2 : WON";
    }
    else if (button6.innerHTML == PLAYERS[0] && button7.innerHTML == PLAYERS[0] && button8.innerHTML == PLAYERS[0]) {
        button6.style.color = "green";
        button7.style.color = "green";
        button8.style.color = "green";
        resultEl.style.color = "green";
        resultEl.innerHTML = "PLAYER-1 : WON";
    }
    else if (button6.innerHTML == PLAYERS[1] && button7.innerHTML == PLAYERS[1] && button8.innerHTML == PLAYERS[1]) {
        button6.style.color = "green";
        button7.style.color = "green";
        button8.style.color = "green";
        resultEl.style.color = "green";
        resultEl.innerHTML = "PLAYER-2 : WON";
    }
    else if (button.innerHTML == PLAYERS[0] && button3.innerHTML == PLAYERS[0] && button6.innerHTML == PLAYERS[0]) {
        button.style.color = "green";
        button3.style.color = "green";
        button6.style.color = "green";
        resultEl.style.color = "green";
        resultEl.innerHTML = "PLAYER-1 : WON";
    }
    else if (button.innerHTML == PLAYERS[1] && button3.innerHTML == PLAYERS[1] && button6.innerHTML == PLAYERS[1]) {
        button.style.color = "green";
        button3.style.color = "green";
        button6.style.color = "green";
        resultEl.style.color = "green";
        resultEl.innerHTML = "PLAYER-2 : WON";
    }
    else if (button1.innerHTML == PLAYERS[0] && button4.innerHTML == PLAYERS[0] && button7.innerHTML == PLAYERS[0]) {
        button1.style.color = "green";
        button4.style.color = "green";
        button7.style.color = "green";
        resultEl.style.color = "green";
        resultEl.innerHTML = "PLAYER-1 : WON";
    }
    else if (button1.innerHTML == PLAYERS[1] && button4.innerHTML == PLAYERS[1] && button7.innerHTML == PLAYERS[1]) {
        button1.style.color = "green";
        button4.style.color = "green";
        button7.style.color = "green";
        resultEl.style.color = "green";
        resultEl.innerHTML = "PLAYER-2 : WON";
    }
    else if (button2.innerHTML == PLAYERS[0] && button5.innerHTML == PLAYERS[0] && button8.innerHTML == PLAYERS[0]) {
        button2.style.color = "green";
        button5.style.color = "green";
        button8.style.color = "green";
        resultEl.style.color = "green";
        resultEl.innerHTML = "PLAYER-1 : WON";
    }
    else if (button2.innerHTML == PLAYERS[1] && button5.innerHTML == PLAYERS[1] && button8.innerHTML == PLAYERS[1]) {
        button2.style.color = "green";
        button5.style.color = "green";
        button8.style.color = "green";
        resultEl.style.color = "green";
        resultEl.innerHTML = "PLAYER-2 : WON";
    }
    else if (button.innerHTML == PLAYERS[0] && button4.innerHTML == PLAYERS[0] && button8.innerHTML == PLAYERS[0]) {
        button.style.color = "green";
        button4.style.color = "green";
        button8.style.color = "green";
        resultEl.style.color = "green";
        resultEl.innerHTML = "PLAYER-1 : WON";
    }
    else if (button.innerHTML == PLAYERS[1] && button4.innerHTML == PLAYERS[1] && button8.innerHTML == PLAYERS[1]) {
        button.style.color = "green";
        button4.style.color = "green";
        button8.style.color = "green";
        resultEl.style.color = "green";
        resultEl.innerHTML = "PLAYER-2 : WON";
    }
    else if (button6.innerHTML == PLAYERS[0] && button4.innerHTML == PLAYERS[0] && button2.innerHTML == PLAYERS[0]) {
        button6.style.color = "green";
        button4.style.color = "green";
        button2.style.color = "green";
        resultEl.style.color = "green";
        resultEl.innerHTML = "PLAYER-1 : WON";
    }
    else if (button6.innerHTML == PLAYERS[1] && button4.innerHTML == PLAYERS[1] && button2.innerHTML == PLAYERS[1]) {
        button6.style.color = "green";
        button4.style.color = "green";
        button2.style.color = "green";
        resultEl.style.color = "green";
        resultEl.innerHTML = "PLAYER-2 : WON";
    }
    else if ((button.innerHTML == PLAYERS[0] || button.innerHTML == PLAYERS[1]) && (button1.innerHTML == PLAYERS[0] || button1.innerHTML == PLAYERS[1]) && (button2.innerHTML == PLAYERS[0] || button2.innerHTML == PLAYERS[1]) && (button3.innerHTML == PLAYERS[0] || button3.innerHTML == PLAYERS[1]) && (button4.innerHTML == PLAYERS[0] || button4.innerHTML == PLAYERS[1]) && (button5.innerHTML == PLAYERS[0] || button5.innerHTML == PLAYERS[1]) && (button6.innerHTML == PLAYERS[0] || button6.innerHTML == PLAYERS[1]) && (button7.innerHTML == PLAYERS[0] || button7.innerHTML == PLAYERS[1]) && (button8.innerHTML == PLAYERS[0] || button8.innerHTML == PLAYERS[1])) {
        resultEl.style.color = "green";
        resultEl.innerHTML = "MATCH-TIE";
    }
};





