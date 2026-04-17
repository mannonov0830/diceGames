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

function switchPlayer() {
    document.getElementById(`current-${activePlayer}`).textContent = currentScore
    currentScore = 0
    activePlayer = activePlayer === 0 ? 1 : 0

    playing0.classList.toggle("active")
    playing1.classList.toggle("active")
}

btnRoll.addEventListener("click", () => {
    if (!playing) return;
    const diceNumber = Math.trunc(Math.random() * 6) + 1

    dice.src = `images/dice-${diceNumber}.png`
    dice.classList.remove("hidden")
    dice.classList.add("rolling")

    setTimeout(() => {
        dice.classList.remove('rolling')
    }, 400)

    if (diceNumber !== 1) {
        currentScore += diceNumber
        document.getElementById(`current-${activePlayer}`).textContent = currentScore
    } else {
        switchPlayer()
    }
})

btnHold.addEventListener("click", () => {
    if (!playing) return;
    scores[activePlayer] += currentScore
    document.getElementById(`score-${activePlayer}`).textContent = scores[activePlayer]


    if (scores[activePlayer] >= WINNING_SCORE) {
        playing = false
        dice.classList.add("hidden")
        const winnerPlayer = document.getElementById(`player-${activePlayer}`)
        winnerPlayer.classList.add("winner")
        winnerPlayer.classList.remove("active")
        winnerPlayer.querySelector('h2').textContent = `G'olib : O'yinchi ${activePlayer}`
        btnRoll.disabled = true
        btnHold.disabled = true
    } else {
        switchPlayer()
    }

})