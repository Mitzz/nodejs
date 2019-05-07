const http = require('http')

const server = http.createServer((req, res) => {
    const url = req.url;
    console.log('Url Received', url);
    if(url === '/'){
        res.setHeader('Content-type', 'text/html');
        res.write('<html>');
        res.write('<header><title>Enter Message</title></header>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
    }
    res.setHeader('Content-type', 'text/html');
    res.write('<html>');
    res.write('<header><title>My First Page</title>');
    res.write('</header>');
    res.write('<body><h1>Hello from Node.js Server!</h1></body>');
    res.write('</html>');
    res.end();
});

server.listen(3000)