const HTTP = require('http')
const URL = require('url')

const Router = function router(request, response, handler) {

  let message = ''

  message += "----------------------------------------\n"
  message += `Request: ${request.method} ${request.url}\n`
  message += "----------------------------------------\n"
  message += "HEADERS\n"
  message += "````````````````````````````````````````\n"

  for (key in request.headers) {
    message += `${key}: ${request.headers[key]}\n`
  }

  message += "----------------------------------------\n"
  message += "BODY\n"
  message += "````````````````````````````````````````\n"

  const p = new Promise((ok, reject) => {
    request.on( 'data' , function(chunk){
      message += `${chunk.toString()}\n`
      message += "----------------------------------------\n"
      ok()
    })
  })

  Promise.all([p])
    .then(() => console.log(`${message}`))
    .then(() => response.end('(/\'0`)/ Oo-i!\n'))
}

HTTP.createServer(Router).listen(3333);
