let botao = document.getElementById("botao");
let fraca = document.getElementById("fraca");
let media = document.getElementById("media");
let forte = document.getElementById("forte");

function VerificaSenha(senha)
{
    let verificacao = 0;
    let j=senha.length;
    let i;
    for(i=0;i<j;i++)
    {
        if(('A'<=senha[i] && senha[i]<='Z') || ('a'<=senha[i] && senha[i]<='z'));
        else if('0'<=senha[i] && senha[i]<='9')verificacao=1;
        else return 2;
    }
    return verificacao;
}

botao.onclick = function()
{
    let senha = document.getElementById("senha").value;
    if(VerificaSenha(senha)==0) fraca.innerHTML = "Senha Fraca";
    else if(VerificaSenha(senha)==1) media.innerHTML = "Senha Média";
    else forte.innerHTML = "Senha Forte";
}