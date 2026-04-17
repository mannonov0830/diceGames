// O'yinchilar holatini boshqarish uchun ( stave varibles ) o'zgaruvchilar
let scores = [0, 0]
let currentScore = 0
let activePlayer = 0
let playing = true
const WINNING_SCORE = 100

// Dom elementlarni olish

const dice = document.getElementById('dice')
const btnNew = document.getElementById("btn-new")
const btnRoll = document.getElementById("btn-roll")
const btnHold = document.getElementById("btn-hold")
const playing0 = document.getElementById("player-0")
const playing1 = document.getElementById("player-1")
console.log(playing0);

function init() {
    scores = 0
    currentScore = 0
    activePlayer = 0
    playing = true
    document.getElementById('score-0').textContent = 0
    document.getElementById('score-1').textContent = 0
    document.getElementById('current-0').textContent = 0
    document.getElementById('current-1').textContent = 0
    document.querySelector("#player-0 h2").textContent = "O'yinchi - 0"
    document.querySelector("#player-1 h2").textContent = "O'yinchi - 1"

    btnRoll.disabled = false
    btnHold.disabled = false

}

btnRoll.addEventListener("click", () => {
    const diceNumber = Math.trunc(Math.random() * 6) + 1
    console.log(diceNumber);
    
    dice.src=`images/dice-${diceNumber}.png`
    dice.classList.remove("hidden")
    dice.classList.add("rolling")

    setTimeout(()=>{
        dice.classList.remove('rolling')
    },400)
})