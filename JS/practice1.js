/* code 30
let person = {
    name: "Vishal",
    age: 24,
    country: "India"
}

function logData() {
    console.log(person.name + " is " + person.age  +" old and lives in " + person.country)
}

logData()*/

/* code 31
let age = 67

if (age < 6) {
    console.log("Free")
} else if (age > 6 && age <= 17) {
    console.log("Child discount")
} else if (age >= 18 && age <= 26) {
    console.log("Student Discount")
} else if (age >= 27 && age <= 66) {
    console.log("full price")
} else {
    console.log("Senior citizen discount")
}*/

/*code 32
let largeCountries = ["China", "India", "USA", "Indonesia", "Pakistan"]

for (let i = 0; i < largeCountries.length; i++) {
    console.log("-" + largeCountries[i])
}*/

/*code 33
let largerCountries = ["Tuvalu", "India", "USA", "Indonesia", "Monaco"]
console.log(largerCountries)
largerCountries.pop()
console.log(largerCountries)
largerCountries.shift()
console.log(largerCountries)
largerCountries.unshift("China")
console.log(largerCountries)
largerCountries.push("Pakistan")
console.log(largerCountries)*/

/*code 34
let dayOfMonth = 13
let weekday = "Friday"

if (dayOfMonth === 13 && weekday ==="Friday") {
    console.log("SCARY")
} else {
    console.log("Have a nice day")
}*/



/* code 35 event listener(HTML, CSS and JS)
HTML:

<div id="box">OPEN THE BOX</div>  

CSS:

#box {
    cursor: pointer;
    background: lightseagreen;
    padding: 40px;
    width: 200px;
    text-align: center;
    margin: 20px auto;
    color: white;
    font-weight: bold;
}

JS: 

let box = document.getElementById("box")
box.addEventListener("click", function() {
    console.log("I want to open the box")
})*/

/* code 36 innerHTML
HTML:  <div id="cont"></div>

JS:
let conT = document.getElementById("cont")
conT.innerHTML = "<button onclick='buy()'> Buy!</button>"
function buy() {
    conT.innerHTML += "<p>THank You <p> "
}*/

/* code 37 template strings/literals
const recipient = "Vishal"

const email = `Hey ${recipient} ! how is it going? Cheers Vs`
console.log(email)*/

/* code 38
const recipient = "Vishal"
const Senior = "VIS"

const email = `Hey ${recipient}! how is it going? Cheers ${Senior}.`
console.log(email)*/

/*code 39 Number() in js

HTML:
<!DOCTYPE html>
<html>
    <head>
        <title>Calculator</title>
        <link rel="stylesheet" href="calculator.CSS">
    </head>
    <body>
        <nain>
            <hi>MY cal</hi>
            <form id="form">
                <label for="num1">First Number</label>
                <input type="number" name="num1" id="num1" placeholder="0">
                <label for="num2">Second Number</label>
                <input type="number" name="num2" id="num2" placeholder="0">
                <button id="btn-add">Add numbers</button>
            </form>
            <h2 id="result">0 + 0 = 0</h2>
        </nain>
        <script src="calculator.js"></script>
    </body>
</html>
 
JS: 
const form = document.getElementById('form');
const numOneInput = document.getElementById('num1');
const numTwoInput = document.getElementById('num2');
const resultText = document.getElementById('result');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const numOneVal = number(numOneInput.value);
    const numTwoVal = number(numTwoInput.value)

    console.log(`numOneVal is of type: ${typeof numOneVal}, with a value of ${numOneVal}`)
    console.log(`numTwoeVal is of type: ${typeof numTwoVal}, with a value of ${numTwoVal}`)
    resultText.innerText = `${numOneVal} + ${numTwoVal} = ${numOneVal + numTwoVal}`;
})*/

/*code 40 localStorage in browser
//localStorage.setItem("Names", "Vishal")
let nam = localStorage.getItem("Names")
console.log(nam)
localStorage.clear()*/

/* code 41
let myLeads = `["www.mysite.com"]`
myLeads = JSON.parse(myLeads)
myLeads.push("alkjsfhkl;dsh")*/

/* code 42
const welcomeEl = document.getElementById("welcome-el")
function greetUser(name) {
    welcomeEl.textContent = "Welcome back " + name
}

greetUser("Vishal")*/

/*code 43 
const welcomeEl = document.getElementById("welcome-el")
function greetUser(greeting, name) {
    welcomeEl.textContent = greeting + name
}

greetUser("Hello ", "Vishal")*/

/* code 44
const welcomeEl = document.getElementById("welcome-el")
function greetUser(greeting, name) {
    welcomeEl.textContent =` ${greeting} Mr ${name}`
}

greetUser("Hello ", "Vishal")*/

/*code 45
function add(num1, num2) {
    return num1 + num2
}

console.log(add(3, 4))
console.log(add(9, 102))*/

/* code 46
function getFirst(arr) {
    console.log(arr[0])
}

let rey=["c","d","a"]
getFirst(rey || ["c","d","a"])*/