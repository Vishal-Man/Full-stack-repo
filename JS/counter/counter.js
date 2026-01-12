let count = 0
let countEl = document.getElementById("count-er")

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    count.textContent += countStr
    countEl.textContent = 0
    count = 0
}


