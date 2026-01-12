let homeScores = 0
let guestScores = 0
let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")

function home1() {
    homeScores += 1
    homeScore.textContent = homeScores
}
function home2() {
    homeScores += 2
    homeScore.textContent = homeScores
}
function home3() {
    homeScores += 3
    homeScore.textContent = homeScores
}
function guest1() {
    guestScores += 1
    guestScore.textContent = guestScores
}
function guest2() {
    guestScores += 2
    guestScore.textContent = guestScores
}
function guest3() {
    guestScores += 3
    guestScore.textContent = guestScores
}
