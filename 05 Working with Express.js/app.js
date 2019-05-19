const http = require('http')
const fs = require('fs')
const routes = require('./routes')

const PORT_NO = 3000;
const server = http.createServer(routes.handler);

server.listen(PORT_NO,  function(){
    console.log("Server listening on port " + PORT_NO);
});
