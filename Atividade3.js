let botao = document.getElementById("botao");
 
const novaOcorrencia = palavra => {
    return {palavra:palavra, qtd:1}
}
 
const ocorrencias= []; // ocorrencias - palavra com a qtd
 
const testaOcorrencia = termo => {
    let palavraRepetida = false;
   
    // pesquisa se a palavra já existe no array ocorrencias
   
    for (let i=0; i<ocorrencias.length; i++) {
        // se existir:
        if(ocorrencias[i].palavra == termo ) {
            //incrementar a qtd da ocorrencia
            palavraRepetida = true;
            ocorrencias[i].qtd++
        }
           
    }
       
    if(palavraRepetida == false) {
        // se a palavra nao for repetida
        //criar nova
            ocorrencias.push(novaOcorrencia(termo)); // {palavra:"xablau",qtd:1}
    }
   
   
    return ocorrencias;
}
 
 
 
botao.onclick = function()
{
    let frase = document.getElementById("frase").value;
    const para = document.querySelector("#paragrafo");
   
    let palavras = frase.split(" "); // as palavras da frase
   
   
    //percorrer o array de palavras
    for(let i=0; i<palavras.length; i++){
       
        let termo = palavras[i];
        testaOcorrencia(termo);
    }
 
    for(i=0;i<ocorrencias.length;i++)
    {
        para.innerHTML += ocorrencias[i].palavra+" "+ocorrencias[i].qtd;
    }
 
}
 