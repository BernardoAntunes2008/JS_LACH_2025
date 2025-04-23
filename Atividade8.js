let botao = document.getElementById("botao");
let resposta = document.getElementById("resposta");

function Criptografia(texto)
{
    let NovoTexto = "";
    let i, j=texto.length;
    for(i=0;i<j;i++)
    {
        if(texto[i]=='P' || texto[i]=='p')NovoTexto+='t';
        if(texto[i]=='T' || texto[i]=='t')NovoTexto+='p';
        if(texto[i]=='E' || texto[i]=='e')NovoTexto+='o';
        if(texto[i]=='O' || texto[i]=='o')NovoTexto+='e';
        if(texto[i]=='N' || texto[i]=='n')NovoTexto+='l';
        if(texto[i]=='L' || texto[i]=='l')NovoTexto+='n';
        if(texto[i]=='A' || texto[i]=='a')NovoTexto+='i';
        if(texto[i]=='I' || texto[i]=='i')NovoTexto+='a';
        if(texto[i]=='R' || texto[i]=='r')NovoTexto+='s';
        if(texto[i]=='S' || texto[i]=='s')NovoTexto+='r';
    }
    return NovoTexto;
}

botao.onclick = function()
{
    let texto = document.getElementById("texto").value;
    resposta.innerHTML = "A frase criptografada eh: "+ Criptografia(texto);
}