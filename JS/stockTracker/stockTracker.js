import {getStockData} from "./fakeStocksAPI.js";

setInterval(function() {
    const stockData = getStockData()
    stockerTicker(stockData)
},1500)

function stockerTicker(stockData) {
    const stockName = document.getElementById("stock-name")
    const stockSymbol = document.getElementById("stock-symbol")
    const stockPrice = document.getElementById("stock-price")
    const Time = document.getElementById("tim")

    const { name, sym, price, time } = stockData
    
    stockName.innerText = name
    stockSymbol.innerText = sym
    stockPrice.innerText = price
    Time.innerText = time
}


