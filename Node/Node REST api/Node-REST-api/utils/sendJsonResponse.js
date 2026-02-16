export const sendJSONResponse = (res, statusCode, payload) =>{
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET')

    res.setHeader('Content-Type', 'application/json')
        res.statusCode = statusCode
        res.end(JSON.stringify(payload))
}