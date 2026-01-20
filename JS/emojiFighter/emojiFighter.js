let fighters = ["🐵","🐒","🐺","🦊","🦝","🐱","🐆","🐴","🐎","🦄","🦓","🐮","🐂","🐃","🐄","🐷","🐖","🐗","🐽"]
let stageEl = document.getElementById("stage")
let fightButton = document.getElementById("fightButton")
console.log(fighters)

console.log(fighters.length)
fightButton.addEventListener("click", function() {
    let randoIndexOne = Math.floor(Math.random() + fighters.length)
    let randoIndexTwo = Math.floor(Math.random() + fighters.length)
    //stageEl.textContent = randoIndex + " VS " + randoIndex
    stageEl.textContent = fighters[randoIndexOne] + "VS" + fighters[randoIndexTwo]
})