let botao = document.getElementById("botao");
botao.onclick = function()
{
    let frase = document.getElementById("frase").value;
    const para = document.querySelector("#paragrafo");
    let i, j, repet;
    const w = frase.length;
    let palavras = frase.split(" ");
    let repetidas =[""];
    let NovaFrase="";
    let op;
    for(i=0;i<w;i++)
    {
        op=0;
        repet=0;
        for(j=0;j<w;j++)
        {
            if(palavras[i]==repetidas[i])op=1;
            if(op==1)break;
            else if(palavras[i]==palavras[j])repet++;
        }
        if(op==0)NovaFrase+=palavras[i]+" "+repet+"<br/>";        
        repetidas[i]+=palavras[i];
    }
    para.innerHTML = NovaFrase;
}