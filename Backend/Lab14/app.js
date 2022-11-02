const http = require('http');
const path = require('path');
const fs = require('fs');

const PORT = process.env.PORT || 9999;

const server = http.createServer((req, res) => {
    let filename;
    switch(req.url) {
        case '/':
            filename = 'index.html'
            break;
        default:
            filename = '404.html'
    }
    let filePath = path.join(__dirname, filename);

    fs.readFile(filePath, (err, data) => {
        if (err) {
            console.log(err);
            res.end();
        }
        res.end(data);
    })
})

server.listen(PORT, 'localhost', () => {
    console.log('Server running http://localhost:' + PORT);
});
