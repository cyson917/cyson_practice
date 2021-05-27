const http = require('http');
const fs = require('fs');
const server = http.createServer((request, response) => {
    fs.readFile('./136.html', (error,data) => {
        response.writeHead(200, { 'Content-Type': 'text/html'});
        response.end(data);

    });
});

server.on('request', () => {
    console.log('request');
});

server.on('connection', () => {
    console.log('connection');
});

server.on('close', () => {
    console.log('closed');
});


server.listen(50000,() => {
    console.log('server running');
});

const testClose = function(){
    server.close();
    console.log('server closed');
};
setTimeout(testClose,15000);
