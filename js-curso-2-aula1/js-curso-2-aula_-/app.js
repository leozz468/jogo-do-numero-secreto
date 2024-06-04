let ListaDeNSorteados = [];
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', 
    {rate:1.2} );
}

function exibirMensagemInicial (){
    exibirTextoNaTela('h1','Jogo Do Número Secreto ');
    exibirTextoNaTela('p','Escolha um número de 1 a 10');
};

    exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto){
        exibirTextoNaTela('h1','Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Parabéns! Você ganhou o jogo do número secreto com 
        ${tentativas} ${palavraTentativa} !`;
        document.getElementById ('reiniciar').removeAttribute('disabled');
        exibirTextoNaTela('p', mensagemTentativas );
    } else {
        if (chute > numeroSecreto){
            exibirTextoNaTela('p','O número é menor do que o chute.');
        } else{
            exibirTextoNaTela('p','O número é maior do que o chute.');
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() *10 + 1);
    let quantidadeDeElementosNaLista = ListaDeNSorteados.length;
    if (quantidadeDeElementosNaLista == 10){
        ListaDeNSorteados = [];
    }

    if (ListaDeNSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else {
        ListaDeNSorteados.push(numeroEscolhido);
        console.log(ListaDeNSorteados);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}
function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial()
    document.getElementById('reiniciar').setAttribute('disabled',
    true);
}