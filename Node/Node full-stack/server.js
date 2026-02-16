import http from "node:http"

const __dirname = import.meta.dirname

const PORT = 3001

const server = http.createServer(async(req, res)=>{
    res.statusCode = 200
    res.getHeader('Content-Type', 'text/html')
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.end('<html><h1>The server is working with writeHead()<h1><html>')
})

server.listen(PORT, ()=> console.log(`Connected on port: ${PORT}`))