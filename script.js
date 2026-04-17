// let scores = [0, 0]
// let currentScore = 0
// let activePlayer = 0
// let playing = true
// const WINNING_SCORE = 20
// const playerNames = ["Kamronbek", "AduMalik"]

// const dice = document.getElementById('dice')
// const btnNew = document.getElementById("btn-new")
// const btnRoll = document.getElementById("btn-roll")
// const btnHold = document.getElementById("btn-hold")
// const playing0 = document.getElementById("player-0")
// const playing1 = document.getElementById("player-1")

// function init() {
//     scores = [0, 0]
//     currentScore = 0
//     activePlayer = 0
//     playing = true

//     document.getElementById('score-0').textContent = 0
//     document.getElementById('score-1').textContent = 0
//     document.getElementById('current-0').textContent = 0
//     document.getElementById('current-1').textContent = 0

//     document.querySelector("#player-0 h2").textContent = playerNames[0]
//     document.querySelector("#player-1 h2").textContent = playerNames[1]

//     btnRoll.disabled = false
//     btnHold.disabled = false

//     playing0.classList.remove('winner')
//     playing1.classList.remove('winner')

//     playing0.classList.add('active')
//     playing1.classList.remove('active')

//     dice.classList.add("hidden")
// }

// function switchPlayer() {
//     currentScore = 0
//     document.getElementById(`current-${activePlayer}`).textContent = 0

//     activePlayer = activePlayer === 0 ? 1 : 0

//     playing0.classList.toggle("active")
//     playing1.classList.toggle("active")
// }

// btnRoll.addEventListener("click", () => {
//     if (!playing) return;

//     const diceNumber = Math.trunc(Math.random() * 6) + 1

//     dice.src = `images/dice-${diceNumber}.png`
//     dice.classList.remove("hidden")
//     dice.classList.add("rolling")

//     setTimeout(() => {
//         dice.classList.remove('rolling')
//     }, 400)

//     // ❗ 1 chiqsa → switch
//     if (diceNumber === 1) {
//         currentScore = 0
//         document.getElementById(`current-${activePlayer}`).textContent = 0
//         switchPlayer()
//         return
//     }

//     currentScore += diceNumber
//     document.getElementById(`current-${activePlayer}`).textContent = currentScore

//     // ❗ 20 dan oshsa → avtomatik switch (MUHIM FIX)
//     if (scores[activePlayer] + currentScore > WINNING_SCORE) {
//         currentScore = 0
//         document.getElementById(`current-${activePlayer}`).textContent = 0
//         switchPlayer()
//         return
//     }
// })

// btnHold.addEventListener("click", () => {
//     if (!playing) return;

//     scores[activePlayer] += currentScore

//     document.getElementById(`score-${activePlayer}`).textContent =
//         scores[activePlayer]

//     // 🏆 faqat 20 ga teng bo‘lsa yutadi
//     if (scores[activePlayer] === WINNING_SCORE) {
//         playing = false
//         dice.classList.add("hidden")

//         const winnerPlayer = document.getElementById(`player-${activePlayer}`)
//         winnerPlayer.classList.add("winner")
//         winnerPlayer.classList.remove("active")

//         winnerPlayer.querySelector('h2').textContent =
//             `G'olib : ${playerNames[activePlayer]}`

//         btnRoll.disabled = true
//         btnHold.disabled = true
//     } else {
//         switchPlayer()
//     }
// })

// btnNew.addEventListener("click", init)

// init()

let scores = [0, 0]
let currentScore = 0
let activePlayer = 0
let playing = true
const WINNING_SCORE = 20

const dice = document.getElementById('dice')
const btnNew = document.getElementById("btn-new")
const btnRoll = document.getElementById("btn-roll")
const btnHold = document.getElementById("btn-hold")
const playing0 = document.getElementById("player-0")
const playing1 = document.getElementById("player-1")

const playerNames = ["Kamronbek", "Sardorbek"]

function init() {
    scores = [0, 0]
    currentScore = 0
    activePlayer = 0
    playing = true

    document.getElementById('score-0').textContent = 0
    document.getElementById('score-1').textContent = 0
    document.getElementById('current-0').textContent = 0
    document.getElementById('current-1').textContent = 0


    document.querySelector("#player-0 h2").textContent = "O'yinchilar-1"
    document.querySelector("#player-1 h2").textContent = "O'yinchilar-2"
    btnRoll.disabled = false
    btnHold.disabled = false

    playing0.classList.remove('winner')
    playing1.classList.remove('winner')

    playing0.classList.add('active')
    playing1.classList.remove('active')

    dice.classList.add("hidden")
}

function switchPlayer() {
    document.getElementById(`current-${activePlayer}`).textContent = 0
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

    document.getElementById(`score-${activePlayer}`).textContent =
        scores[activePlayer]

    if (scores[activePlayer] >= WINNING_SCORE) {
        playing = false
        dice.classList.add("hidden")

        const winnerPlayer = document.getElementById(`player-${activePlayer}`)
        winnerPlayer.classList.add("winner")
        winnerPlayer.classList.remove("active")

        winnerPlayer.querySelector('h2').textContent =
            `G'olib o'yinchi : ${playerNames[activePlayer]}`

        btnRoll.disabled = true
        btnHold.disabled = true
    } else {
        switchPlayer()
    }
})

btnNew.addEventListener("click", init)

init()
