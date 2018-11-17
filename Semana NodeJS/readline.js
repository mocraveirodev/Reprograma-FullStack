const readline = require('readline');
const io = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function chamaOutraFuncao(dado) {
    console.log(dado)
}

io.on('line', line => {
    chamaOutraFuncao(line)
    console.log('Nova linha!')
    io.close();
})