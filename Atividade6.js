let botao = document.getElementById("botao");
botao.onclick = function()
{
    let dia = document.getElementById("dia").value;
    let mes = document.getElementById("mes").value;
    let ano = document.getElementById("ano").value;
    let p = document.getElementById("paragrafo");
    let Mes = "";
    switch(mes)
    {
        case 1: Mes="janeiro";break;
        case 2: Mes="fevereiro";break;
        case 3: Mes="março";break;
        case 4: Mes="abril";break;
        case 5: Mes="maio";break;
        case 6: Mes="junho";break;
        case 7: Mes="julho";break;
        case 8: Mes="agosto";break;
        case 9: Mes="setembro";break;
        case 10: Mes="outubro";break;
        case 11: Mes="novembro";break;
        case 12: Mes="dezembro";
    }
    p.innerHTML = dia+" de "+Mes+" de "+ano;
}