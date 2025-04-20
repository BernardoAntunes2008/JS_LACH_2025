//Código da Questão 1:
let botaoUm = document.getElementById("botao1");
botaoUm.onclick = function()
{
    let a = document.getElementById("numero").value;
    let paraUm = document.getElementById("para1");
    const gas = 7;
    let qtdCombustivel = a/gas;
    let rodar = qtdCombustivel*20;
    paraUm.innerHTML = "Você pode comprar "+qtdCombustivel.toFixed(2)+" litro(s) de combustível e conseguirá rodar "+rodar.toFixed(2)+" km";
}
//Código da Questão 2:
let botaoDois = document.getElementById("botao2");
botaoDois.onclick = function()
{
    let paraDois = document.getElementById("para2");
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;
    let IMC = peso/(altura**2);
    if(IMC<18.5) {paraDois.innerHTML = "Abaixo do peso";}
    else if(18.5<=IMC<=24.9) {paraDois.innerHTML = "Peso normal";}
    else if(24.9<IMC<=29.9) {paraDois.innerHTML = "Levemente acima do peso";}
    else if(29.9<IMC<=34.9) {paraDois.innerHTML = "Obesidade grau I";}
    else if(34.9<IMC<=39.9) {paraDois.innerHTML = "Obesidade grau II (severa)";}
    else if(39.9<IMC) {paraDois.innerHTML = "Obesidade grau III (mórbida)";}
}
//Código da Questão 3:
let botaoTres = document.getElementById("botao3");
botaoTres.onclick = function()
{
    let i, lancamentos=[0,0,0,0,0,0];
    for(i=0;1;i++)
    {
        let lance = Math.ceil(Math.random() * 6);
        switch(lance)
        {
            case 1:
                lancamentos[0]++;
                break;
            case 2:
                lancamentos[1]++;
                break;
            case 3:
                lancamentos[2]++;
                break;
            case 4:
                lancamentos[3]++;
                break;
            case 5:
                lancamentos[4]++;
                break;
            case 6:
                lancamentos[5]++;
                break;
        }
        if(i==1000000)break;
    }
    let tabela = document.getElementById("tabela");
    tabela.innerHTML= "<tr><th> Face </th><th> Ocorrências </th><th> Frequência </th></tr>"+
    "<tr><td>1</td><td>"+lancamentos[0]+"</td><td>"+lancamentos[0]/10000+ " % </td></tr>"+
    "<tr><td>2</td><td>"+lancamentos[1]+"</td><td>"+lancamentos[1]/10000+ " % </td></tr>"+
    "<tr><td>3</td><td>"+lancamentos[2]+"</td><td>"+lancamentos[2]/10000+ " % </td></tr>"+
    "<tr><td>4</td><td>"+lancamentos[3]+"</td><td>"+lancamentos[3]/10000+ " % </td></tr>"+
    "<tr><td>5</td><td>"+lancamentos[4]+"</td><td>"+lancamentos[4]/10000+ " % </td></tr>"+
    "<tr><td>6</td><td>"+lancamentos[5]+"</td><td>"+lancamentos[5]/10000+ " % </td></tr>";
}
//Código da Questão 4:
let botaoQuatro = document.getElementById("botao4");
let Inversor = document.getElementById("botaoinversor");
let listadeInvertidos = document.getElementById("listadeInvertidos");
let listaDeNomes = document.getElementById("listaDeNomes");
let listaDePalavras = [];
let j=0,i;
botaoQuatro.onclick = function() 
{
    listaDePalavras[j]=document.getElementById("nome").value;
    listaDeNomes.innerHTML += "<li>"+listaDePalavras[j]+"</li>";
    j++;
}
const invertePalavra = palavra => {
    let NovaPalavra = "";
    for(let i =palavra.length ; i>0 ; i--)
    {
        NovaPalavra += palavra[i-1];
    }
    return NovaPalavra;
}
Inversor.onclick = function()
{
    for(i=0;i<j;i++)
    {
        listadeInvertidos.innerHTML += "<li>"+invertePalavra(listaDePalavras[i])+"</li>";
    }
}
//Código da Questão 5:
let botaoCinco = document.getElementById("botao5");
let palindromo = document.getElementById("palindromo").value;
let Resposta = document.getElementById("resposta");
let op= "Não é palíndromo";
botaoCinco.onclick = function()
{
    if(palindromo == invertePalavra(palindromo)) op = "É palíndromo";
    Resposta.innerHTML = op;
}