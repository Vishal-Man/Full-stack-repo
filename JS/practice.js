/*code1
let count = 0
console.log(count)*/

/*code2
 let myAge = 24
 console.log(myAge)*/

/*code3
let myAge = 24
let humanDogRatio = 7
let myDogAge = myAge * humanDogRatio
console.log(myDogAge)*/

/*code4
let bonusPoints = 50
console.log(bonusPoints)
bonusPoints = bonusPoints + 50
console.log(bonusPoints)
bonusPoints = bonusPoints -75
console.log(bonusPoints)
bonusPoints = bonusPoints + 45
console.log(bonusPoints)*/

/*code5
function countdown() {
    console.log(5)
    console.log(4)
    console.log(3)
    console.log(2)
    console.log(1)
}

countdown()*/

/*code6
function calls() {
    console.log(42)
}
calls()*/

/*code7
let lap1 = 34
let lap2 = 33
let lap3 = 36

function sumOfLaps() {
    console.log(lap1 + lap2 + lap3)
}
sumOfLaps()*/

/*code8
let lapsCompleted = 0
//
function increase() {
    lapsCompleted = lapsCompleted+1
}
increase()
increase()
increase()
console.log(lapsCompleted)*/

/*code9
let username = "Per"
let message = "You have three new notifications"
let messageToUser = username + ", " + message + "!"
console.log(messageToUser)*/

/*code10
let Name = "Vishal"
let greeting = "Hi, I am "
let myGreeting = greeting + Name 
console.log(myGreeting)*/

/*code11
let welcomeEr = document.getElementById("welcome-er")
let Name = " Vishal!"
let greeting = "Hello"
welcomeEr.innerText = greeting + Name*/

/*code12
firstName = "Vishal Mihir"
lastName = " Mantri"
fullName = firstName + lastName
console.log(fullName)*/

/*code13
let name = "Vishal"
let greeting = "Hi, good day "
function greet () {
    console.log(greeting + name)
}
greet()*/

/*code14
let myPoints = 3

function add3points() {
    myPoints += 3
}
function remove1point() {
    myPoints -= 1
}
add3points()
add3points()
add3points()
remove1point()
remove1point()
console.log(myPoints)*/

/*code15 nightclub entry
let age = 22

if (age <= 20) {
    console.log("You cannot enter the club!")
} else {
    console.log("Welcome")
}*/

/*code16 birthday card from king(100yrs)
let age = 101

if (age < 100) {
    console.log("Not eligable")
} else if (age === 100) {
    console.log("Here is your birthday card from King!")
} else {
    console.log("Not eligable, you already got one")
}*/

/* code17 strings
let featuredPosts = ["Check out", "Here's code", "Relaunched"]
let lists = ['exp', 'skill', 'stats']
console.log(lists[2])
console.log(lists[1])
console.log(lists[0])*/

/*code18
let mE = ["Vishal", 24, true]
console.log(mE)*/

/*code19
let messages = [
    "Hey there",
    "It's me",
    "How are you"
]
console.log(messages)
let newMessage = "Fine"
messages.push(newMessage)
console.log(messages)
messages.pop()
console.log(messages)*/

/*code20 for loops
for ( let count = 10; count < 21; count += 1) {
    console.log(count)
}*/

/*code 21
for (let i = 10; i<101; i += 10) {
    console.log(i)
}*/

/*code22 array+for loop
let cards = [7, 3, 9]

for (let i = 0; i < cards.length; i++) {
    console.log(cards[i])
}*/

/*code23 array+for loop + DOM
let sentance = ["Hello ", "my ", "name ", "is ", "Vishal"]
let greetingEl = document.getElementById("greeting-el")

for (let i = 0; i < sentance.length; i++) {
    greetingEl.textContent += sentance[i]
}*/

/* code 24
let player1Time =102
let player2Time = 107

function getFastestRaceTime() {
    if (player1Time < player2Time) {
        return player1Time
    } else if (player2Time < player1Time) {
        return player2Time
    } else {
        return player1Time & player2Time
    }
}

let fastestRace = getFastestRaceTime()
console.log(fastestRace)

function totalRaceTime() {
    return player1Time + player2Time
}
let raceTime = totalRaceTime()
console.log(raceTime)*/

/* code 25 roll a dice
function rollDice() {
    let randomNumber = Math.floor(Math.random() * 6) + 1
    return randomNumber
}
console.log(rollDice())*/

/*code 26 AND oporator
let hasCompletedCourse = true
let givesCirtificate = true

if (hasCompletedCourse === true && givesCirtificate === true) {
    (hasCompletedCourse && giveCirtficate) //cause statements in if block are considered true 
    generateCirtificate()
}
function generateCirtificate() {
    console.log("Generateing cirtificate...")
}*/

/*code 27
let hasSolvedChallenge = false
let hasHintsLeft = false

if (hasSolvedChallenge === false && hasHintsLeft === false) {
    showSolution()
}

function showSolution() {
    console.log("Showing the solution...")
}*/

/* code 28  || (or) oporator
let likesDocumentaries = false
let likesStartups = false

if (likesDocumentaries || likesStartups) {
    recomemendMovie()
}

function recomemendMovie() {
    console.log("Hey, check out this new film we think you like")
}*/

/*code 29 objects
let castle = {
    title: "live like a king",
    capacity: 4,
    rateing: 4.9,
    available: true,
    images: [1 , 2]
}

console.log(castle.title , castle.rateing)*/