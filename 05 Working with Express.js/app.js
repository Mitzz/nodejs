const http = require('http');
const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log("in the middleware");
    next();
});

app.use((req, res, next) => {
    console.log("in another middleware");
});

const server = http.createServer(app);



const PORT_NO = 3000;
server.listen(PORT_NO,  function(){
    console.log("Server listening on port " + PORT_NO);
});
