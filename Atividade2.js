let botao = document.getElementById("botao");
botao.onclick = function()
{
    let frase = document.getElementById("frase").value;
    const para = document.querySelector("#paragrafo");
    let i;
    const w = frase.length;
    frase.split("");
    let NovaFrase="";
    for(i=0;i<w;i++)
    {
        if(frase[i]=='a')NovaFrase+='@';
        else if(frase[i]=='e')NovaFrase+='3';
        else if(frase[i]=='i')NovaFrase+='1';
        else if(frase[i]=='o')NovaFrase+='0';
        else if(frase[i]=='u')NovaFrase+='#';
        else NovaFrase+=frase[i];
    }
    para.innerHTML = NovaFrase;
}