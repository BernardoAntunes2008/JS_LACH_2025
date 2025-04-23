let botao = document.getElementById("botao");
let resultado = document.getElementById("resultado");
botao.onclick = function()
{
    let data = document.getElementById("data").value;
    let ArrayDeData = data.split("-");
    let ArrayNumDeData = [];
    let i;
    for(i=0;i<3;i++)
    {
        ArrayNumDeData[i] = parseInt(ArrayDeData[i]);
    }
    let dataAtual = new Date();
    let anos = dataAtual.getFullYear() - ArrayNumDeData[0];
    let meses = dataAtual.getMonth()+1 - ArrayNumDeData[1];
    let dias = dataAtual.getDate() - ArrayNumDeData[2];
    let DiasDeVida =(anos*365)+(meses*30)+dias;
    resultado.innerHTML = "Você tem aproximadamente "+DiasDeVida+" dias de vida";
}