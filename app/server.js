const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/health' && req.method === 'GET'){
        res.writeHead(200, { 'Content-Type': 'application/json'})
        res.end(JSON.stringify({status: 'OK'}));
    } else{
        res.writeHead(404);
        res.end();
    }
});

const PORT = process.env.PORT || 4000;
server.listen(PORT, () => console.log(`API on :${PORT}`));