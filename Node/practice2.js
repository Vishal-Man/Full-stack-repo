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

/*code 88 get functionalities from other folder and have a clean code
import http from'node:http'
import { getDataFromDb} from './database/db.js'
import { sendJSONResponse } from './utils/sendJsonResponse.js'
import { sendJSONDestinations } from './utils/filterApis.js'
const PORT = 3000

const server =http.createServer(async (req, res) => {
    const destination = await getDataFromDb()

    if (req.url === '/api' && req.method === 'GET') {
        sendJSONResponse(res, 200, destination)

    } else if (req.url.startsWith('/api/continent') && req.method === 'GET') {
        const continent = req.url.split('/').pop()
        const filteredData = sendJSONDestinations(destination,'continent', continent)
        sendJSONResponse(res, 200, filteredData)

    } else if (req.url.startsWith('/api/country')&& req.method==='GET'){
        const country = req.url.split('/').pop()
        const filterCountry = sendJSONDestinations(destination,'country', country)
        sendJSONResponse(res, 200, filterCountry)

    } else {
        sendJSONResponse(res, 404,({error: "not found", message: "the requested route does not exist"}))
    }
})

server.listen(PORT)*/

/* code 89 query parameters
 const urlObj = new URL(req.url, `http:${req.headers.host}`)

    const queryObj = Object.fromEntries(urlObj.searchParams)
    console.log(queryObj)*/
