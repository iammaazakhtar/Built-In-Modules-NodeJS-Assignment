const http = require('http')

const server = http.createServer((request, response)=>{
    if(request.url == '/'){
        response.write('<h1> I Am Happy To Learn Full Stack Web Development From PW Skills! </h1>')
    }
    response.end()
})

server.listen(5001)
console.log("5001 server is running")