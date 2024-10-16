// Create web server
const http = require('http');
const fs = require('fs');
const path = require('path');
const port = 8080;

http.createServer((req, res) => {
    console.log(req.url);
    if (req.url === '/comments') {
        fs.readFile(path.resolve(__dirname, 'comments.json'), (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Server error');
                return;
            }
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(data);
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not found');
    }
}).listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});