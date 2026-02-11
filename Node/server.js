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

server.listen(PORT)