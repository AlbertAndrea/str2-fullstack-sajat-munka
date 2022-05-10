const http = require('http')
const siteRouter = require('./routers/siteRouter')

const port = 8888

const server = http.createServer( ({ url, method }, res) => {
    siteRouter[url]
        ? siteRouter[url](res)
        : siteRouter['notfound'](res)
})

server.listen(port)