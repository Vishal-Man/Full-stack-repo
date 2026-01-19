let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let messageEl = document.getElementById("message-el")
let message =""
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("card-el")

let player = {
    name: "Vishal",
    chips: 10000
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips
console.log(playerEl)
function getRandomCard() {
    let num = Math.floor(Math.random() *13 ) +1
    console.log(num)
    if (num > 10) {
        return 10
    } else if (num === 1) {
        return 11
    } else {
        return num
    }
}

function startgame() {
    let firstCard = getRandomCard()
    cards.push(firstCard)
    let secondCard = getRandomCard()
    cards.push(secondCard)
    sum = firstCard + secondCard
    isAlive = true
    rendergame()

}
function rendergame() {
    cardEl.innerText = "Card: "
    for ( let i=0; i<cards.length; i++) {
        cardEl.innerText += cards[i] + ", "
    }
    sumEl.innerText = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if ( sum === 21) {
        message = "Wohoo! You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You are out of the game!"
        isAlive = false
    }
    messageEl.innerText = message
}

function newcard() {
    if (isAlive && sum !=21) {
        let newCard = getRandomCard()
        cards.push(newCard)
        sum += newCard
        console.log(cards)
        rendergame()
    }
}