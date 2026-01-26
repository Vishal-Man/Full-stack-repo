const meter = 3.281 //feet
const liter = 0.264 //gallon
const kilogram = 2.204 //pound
let num = document.getElementById("num")
let btn = document.getElementById("convert-btn")
let lenCon = document.getElementById("len-con")
let volCon = document.getElementById("vol-con")
let massCon = document.getElementById("mass-con")



btn.addEventListener("click", function() {
    lenCon.textContent = `${num.value} meters = ${(num.value * meter).toFixed(3)} feet | ${num.value} feet is ${(num.value / meter).toFixed(3)} meters`
    volCon.textContent = `${num.value} liters = ${(num.value * liter).toFixed(3)} gallons | ${num.value} gallons is ${(num.value / liter).toFixed(3)} liters`
    massCon.textContent = `${num.value} kilos = ${(num.value * kilogram).toFixed(3)} pounds | ${num.value} pounds is ${(num.value / kilogram).toFixed(3)} kilos`
})



