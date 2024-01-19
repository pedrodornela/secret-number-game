let listaDeNumeroSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
let textoTentativas;
 
mensagemInicial();

function gerarNumeroAleatorio() 
{
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementoNaLista = listaDeNumeroSorteados.length;

    if(quantidadeDeElementoNaLista == numeroLimite)
    {
        listaDeNumeroSorteados = []; 
    }

    if(listaDeNumeroSorteados.includes(numeroEscolhido))
    {
        return gerarNumeroAleatorio();
    }
    else
    {
        listaDeNumeroSorteados.push(numeroEscolhido);
        //console.log(listaDeNumeroSorteados);
        return numeroEscolhido;
    }
}

function exibirTextoNaTela(tag, texto)
{
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.3});
}

function mensagemInicial() {
    exibirTextoNaTela('h1', 'Hora do Desafio');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');    
}

function verificarChute()
{
    let chute = document.querySelector('input').value;

    if(chute == numeroSecreto)
    {
        exibirTextoNaTela('h1', 'Acertou');
        textoTentativas = tentativas == 1? 'tentativa' : 'tentativas';
        let mensagemTentativas = `Você descobriu o número secreto em ${tentativas} ${textoTentativas}`; 
        exibirTextoNaTela('p', mensagemTentativas);

        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else
    {
        if(chute > numeroSecreto)
        {
            exibirTextoNaTela('p', 'O número secreto é menor');
        }
        else
        {
            exibirTextoNaTela('p', 'O número secreto é maior');
        }
        
        tentativas++;
        limparCampo();
    }
}

function limparCampo()
{
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo()
{
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}
