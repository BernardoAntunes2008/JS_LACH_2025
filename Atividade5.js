let enviar = document.getElementById("enviar");
let procurar = document.getElementById("procurar");
let substituir = document.getElementById("substituir");
let resposta = document.getElementById("resposta");
let frase = "";
let busca = "";
let sbt = "";
let i;
enviar.onclick = function() 
{
    frase += document.getElementById("frase").value;
}
procurar.onclick = function()
{
    busca += document.getElementById("busca").value;
}
substituir.onclick = function()
{
    sbt += document.getElementById("sbt").value;
    let ArrayDePalavra = frase.split(" ");
    let NovoArray = [];
    for(i=0;i<ArrayDePalavra.length;i++)
    {
    if(ArrayDePalavra[i]==busca) NovoArray[i]=sbt;
    else NovoArray[i]=ArrayDePalavra[i];
    }
    for(i=0;i<ArrayDePalavra.length;i++)resposta.innerHTML += " "+NovoArray[i]+" ";
}






























/*
const ocorrencias = function(palavra) {
    return {texto : palavra, qtd : 1};
}
const ArrayDeOcorrencias = [];
function VerificaOcorrencias (palavra)
{
    let existe = false;
    for(i=0;i<ArrayDeOcorrencias.length;i++)
    {
        if(ArrayDeOcorrencias[i].texto==palavra)
        {
            ArrayDeOcorrencias[i].qtd++;
            existe = true;
        }
    }

    if(existe==false)ArrayDeOcorrencias.push(ocorrencias(palavra));
    return ArrayDeOcorrencias;
} 
*/