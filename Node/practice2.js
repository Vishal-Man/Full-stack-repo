/* code 84 setting up server and showing in network
import http from "node:http"

const PORT = 8000

const server = http.createServer((req, res) =>{
    res.end("Hello from server", ()=> console.log(`response end`))
})

server.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`))*/

/* code 85 server stringified JSON
import http from 'http'
import { getDataFromDb } from './database/db.js'

const PORT = 3001

const server = http.createServer(async (req, res) => {
    const destination = await getDataFromDb()
    res.end(JSON.stringify(destination))
})

server.listen(PORT, () => console.log(`Server link: http://localhost:${PORT}`))*/

/* code 86 adding Content-Type and statusCode
import http from 'http'
import { getDataFromDb } from './database/db.js'

const PORT = 3001

const server = http.createServer(async (req, res) => {
    const destination = await getDataFromDb()

    res.setHeader('Content-type', 'application/json')
    res.statusCode = 200
    res.end(JSON.stringify(destination))
})

server.listen(PORT, () => console.log(`Server link: http://localhost:${PORT}`))*/

/* code 87 route not found
import http from'node:http'
import { getDataFromDb} from './database/db.js'

const PORT = 3000

const server =http.createServer(async (req, res) => {
    const destination = await getDataFromDb()
    if (req.url === '/api' && req.method === 'GET') {
        res.setHeader('Content-Type', 'application/json')
        res.statusCode = 200
        res.end(JSON.stringify(destination))
    } else {
        res.setHeader('Content-Type', 'application/json') 
        res.statusCode = 404
        res.end(JSON.stringify({error: "not found", message: "the requested route does not exist"}))
    }
})

server.listen(PORT)*/