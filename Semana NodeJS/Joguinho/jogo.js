// Como o jogo deve funcionar:

// O usuário deverá adivinhar um número, gerado pelo programa,
// que vai de 0 a 100. Conforme as tentativas do usuário, o
// programa deve avisar se o usuário acertou ou não.
// Caso não tenha acertado, então o programa deverá avisar se
// o palpite era maior ou menor que o número a ser adivinhado.

// Bônus: quando o usuário acertar, ele deverá ter a opção de
// jogar novamente, ou parar e encerrar o programa.

// Bônus 2: quando o usuário digitar um caractere inválido,
// que não seja um número, o programa deve saber identificar
// e avisar ao usuário que ele está digitando um dado inválido.

// Bônus 3: transforme seu jogo em um módulo NPM, suba no NPM e
// use-o em seguida.

// Bônus 4: use classes do ES6 para modelar seu jogo. (:

// Bonus 5: limitar o número de palpites de acordo com a dificuldade.

const readline = require('readline');
const io = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let random;

function sorteado() {
    random = Math.round((Math.random() * 100) + 1);
    return random;

}

function compare(sort, random) {
    if (sort == random) {
        console.log('Parabéns vc acertou!');
        acertou(io);
     
    } else {
        if (sort > random) {
            console.log('O número digitado é maior que o sorteado');
        } else {
            console.log('O número digitado é menor que o sorteado')
        }
        novoNumero(io)
    }
}

function testeResposta(resposta) {
    if (isNaN(resposta)) {
        console.log("digite um número válido")
        novoNumero(io)
    }
    else {
        compare(resposta, random)
    }
}

function novoNumero(io) {
    io.question('Digite um novo número de 0 a 100: ', resposta => {
        testeResposta(resposta);
        console.log('resposta novo numero',resposta);
        console.log('numero sorteado',random);
    });
    
}

function acertou(io){
    io.question("Você gostaria de jogar novamente? (S/N)", resposta =>{
        if(resposta == "S" || resposta == "s"){

            console.log("SIM");
            sorteado()
            novoNumero(io)

        }else{
            console.log("Não");
            io.close();
        }
    } )


}



io.question('Digite um número de 0 a 100: ', resposta => {
    sorteado();
    console.log('numero sorteado',random);
    // let resposta = resposta;
    testeResposta(resposta)

})





