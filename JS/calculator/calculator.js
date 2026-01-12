let num1 = 8
let num2 = 10
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2
let sum = document.getElementById("sum-el")

function add() {
    sum.textContent = num1 + num2    
}
function sub() {
    sum.textContent = num1 - num2    
}
function mul() {
    sum.textContent = num1 * num2    
}
function div() {
    sum.textContent = num1 / num2    
}