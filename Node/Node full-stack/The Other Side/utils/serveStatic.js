import path from 'node:path'
import fs from 'fs/promises'
import { sendResponse } from './sendResponse.js'

export async function serveStatic(req, res, dirname) {
    const filePath = path.join(dirname,'The Other Side', 'index.html')
    try {
        const content = await fs.readFile(filePath)
        sendResponse(res, 200, 'text/html', content)
    } catch (err) {
        console.log(err)
    }
}

