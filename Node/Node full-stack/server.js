import http from 'node:http'
import path from 'node:path'
import { serveStatic } from './The Other Side/utils/serveStatic.js'
import { sendResponse } from './The Other Side/utils/sendResponse.js'
import fs from 'fs/promises'

const PORT = 8000

const __dirname = import.meta.dirname
console.log(__dirname)

const server = http.createServer(async(req, res)=>{
    await serveStatic(req, res,__dirname)
})

server.listen(PORT, () => console.log(`connected on port ${PORT}`))
