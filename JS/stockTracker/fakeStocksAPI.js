export function getStockData() {
    return {
        name: 'Otechs',
        sym: 'OTS',
        price: (Math.random() * 3).toFixed(2),
        time: new Date().toLocaleTimeString()
    }
}
