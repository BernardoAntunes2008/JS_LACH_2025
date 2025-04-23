let botao = document.getElementById("botao");

const Ocorrencias = (palavra) => 
{
    return {palavra : palavra, ocorre: 1}
}

const ArrayDeOcorrencia = [];

const VerificaOcorrencia = palavra => 
{
    let i, repete = false;
    for(i=0;i<ArrayDeOcorrencia.length;i++)
    {
        if(ArrayDeOcorrencia[i].palavra==palavra)
        {
            ArrayDeOcorrencia[i].ocorre++;
            repete = true;
        }
    }

    if(repete==false)
    {
        ArrayDeOcorrencia.push(Ocorrencias(palavra));
    }

    return ArrayDeOcorrencia;
}

const MaiorOcorrencia = () =>
{
    let maior = 0;
    let posicao;
    for(let i = 0; i<ArrayDeOcorrencia.length ; i++)
    {
        if(ArrayDeOcorrencia[i].ocorre>=maior)
        {
            maior=ArrayDeOcorrencia[i].ocorre;
            posicao = i;
        }
    }
    return posicao;
}

function Letras(texto)
{
    let letra = 0;
    for(let i = 0; i<texto.length; i++)
    {
        for(let j = 0; j<texto[i].length; j++)
        {
            letra++;
        }
    }
    return letra;
}

botao.onclick = function()
{
    let frase = document.getElementById("frase").value;
    let paragrafo = document.getElementById("paragrafo");
    let ArrayDePalavra = frase.split(" ");
    let tam = ArrayDePalavra.length;
    let letras = Letras(ArrayDePalavra);
    for( let i = 0 ; i < tam ; i++ )
    {
        VerificaOcorrencia(ArrayDePalavra[i]);
    }
    let Mo = MaiorOcorrencia();
    paragrafo.innerHTML = "A palavra de maior ocorrencia no texto é: "+ ArrayDeOcorrencia[Mo].palavra +". <br/> Ela ocorre "+
    ArrayDeOcorrencia[Mo].ocorre+" vezes. <br/> O texto tem "+tam+" palavras e o total de letras é: "+letras;
}