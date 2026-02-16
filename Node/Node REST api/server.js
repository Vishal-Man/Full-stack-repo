import http from'node:http'
import { getDataFromDb} from './database/db.js'
import { sendJSONResponse } from './utils/sendJsonResponse.js'
import { sendJSONDestinations } from './utils/filterApis.js'
import { getDataByQueryParams } from './utils/getDataByQueryParams.js'

const PORT = 3000

const server =http.createServer(async (req, res) => {
    const destination = await getDataFromDb()

    const urlObj = new URL(req.url, `http:${req.headers.host}`)

    const queryObj = Object.fromEntries(urlObj.searchParams)
    
    if (urlObj.pathname === '/api' && req.method === 'GET') {
        
        let filterDestinations = getDataByQueryParams(destination, queryObj)
        console.log(queryObj)
        sendJSONResponse(res, 200, filterDestinations)

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

server.listen(PORT)