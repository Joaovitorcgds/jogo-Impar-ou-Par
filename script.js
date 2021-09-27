var jogadorA = {nome: "Você", vitorias: 0, derrotas: 0, pontos: 0};
var maquina = {nome: "Máquina", vitorias: 0, derrotas: 0, pontos: 0};

jogadorA.pontos = calcPontos(jogadorA); // o valor da função calcPontos vai se atribuida ao pontos de joão
maquina.pontos = calcPontos(maquina);


function jogar(){
    let escolhaDaMaquina = parseInt(Math.random() * 10);
    let numeroDigitado = Number(document.querySelector(".numeroDigitado").value);
    let resultado = escolhaDaMaquina + numeroDigitado;

    let resultadoNaTela = document.querySelector(".resultado");

    let imparOuPar = document.querySelector("#imparOuPar").value;
    console.log(resultado)
    
    if(imparOuPar === "impar" && resultado % 2 != 0){
        console.log("ganhou")
        resultadoNaTela.innerHTML = "Parabéns você ganhou, o número escolhido pela Máquina foi " + escolhaDaMaquina + ", logo a soma do seu número que foi " + numeroDigitado + " mais a escolha da máquina foi de um número impar";
        adicionarVitoria(0)
        adicionarDerrota(1)
    } else if(imparOuPar === "impar" && resultado % 2 == 0){
        console.log("perdeu")
        resultadoNaTela.innerHTML = "Que pena você perdeu kkk, o número escolhido pela Máquina foi " + escolhaDaMaquina + ", logo a soma do seu número que foi " + numeroDigitado + " mais a escolha da máquina foi de um número par";
        adicionarVitoria(1)
        adicionarDerrota(0)
    } else if(imparOuPar === "par" && resultado % 2 == 0){
        console.log("ganhou")
        resultadoNaTela.innerHTML = "Parabéns você ganhou, o número escolhido pela Máquina foi " + escolhaDaMaquina + ", logo a soma do seu número que foi " + numeroDigitado + " mais a escolha da máquina foi de um número par";
        adicionarVitoria(0)
        adicionarDerrota(1)
    } else if(imparOuPar === "par" && resultado % 2 != 0){
        console.log("perdeu")
        resultadoNaTela.innerHTML = "Que pena você perdeu kkk, o número escolhido pela Máquina foi " + escolhaDaMaquina + ", logo a soma do seu número que foi " + numeroDigitado + "  mais a escolha da máquina foi de um número impar";
        adicionarVitoria(1)
        adicionarDerrota(0)
    }
    
    document.querySelector(".numeroDigitado").value = "";
}

function calcPontos(jogador){
    let pontos = jogador.vitorias * 3 - jogador.derrotas;
    return pontos  // return faz com que a função receba um valor
}

var jogadores = [jogadorA, maquina];
function aparecerNaTela(jogadores){
    let element = "";

    for(var i = 0; i < jogadores.length; i++){
        element += "<tr><td>" + jogadores[i].nome + "</td>";
        element += "<td onchange='adicionarVitoria(" + i + ")'>" + jogadores[i].vitorias + "</td>";
        element += "<td onchange='adicionarDerrota(" + i + ")'>" + jogadores[i].derrotas + "</td>";
        element += "<td>" + jogadores[i].pontos + "</td>";
        element += "</tr>";
    }

    let tabelaJogadores = document.getElementById("tabelaJogadores");
    tabelaJogadores.innerHTML = element;
}
aparecerNaTela(jogadores);

function adicionarVitoria(i){
    var jogador = jogadores[i];
    jogador.vitorias++;
    jogador.pontos = calcPontos(jogador);
    aparecerNaTela(jogadores);
}

function adicionarDerrota(i){
    var jogador = jogadores[i];
    jogador.derrotas++;
    jogador.pontos = calcPontos(jogador);
    aparecerNaTela(jogadores);
}

function zerarJogo(){
    let resultadoNaTela = document.querySelector(".resultado");
    // document.querySelector(".numeroDigitado").value = "";
    var jogador1 = jogadores[0];
    jogador1.vitorias = 0;
    jogador1.derrotas = 0;
    jogador1.pontos = calcPontos(jogador1);
    aparecerNaTela(jogadores);
    var jogador2 = jogadores[1];
    jogador2.vitorias = 0;
    jogador2.derrotas = 0;
    jogador2.pontos = calcPontos(jogador2);
    aparecerNaTela(jogadores);
    resultadoNaTela.innerHTML = "";
}