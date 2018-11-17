const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Helo World');
        res.end();
    }

    if (req.url === '/reprograma') {
        res.write(JSON.stringify([1,2,3]));
        res.end();
    }
});

// server.on('connection', () => {
//     console.log('Página carregada');
// });

server.listen(3000);
console.log('Escutando na porta 3000');

server.on('close', () => {
    console.log('fechou saporra');
});

server.close();

// process.on("exit", () => {
//     console.log('processo saiu')
// })