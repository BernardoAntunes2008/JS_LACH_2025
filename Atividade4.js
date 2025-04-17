let botao = document.getElementById("botao");
let texto,p,tam,ArrayDePalavra,i,j,r,ArrayDeRepeticao=[],maior, maisrecorrente = "";
botao.onclick = function() 
{
    texto = document.getElementById("frase").value;
    p = document.getElementById("paragrafo");
    tam = texto.length;
    ArrayDePalavra = texto.split(" ");
        for(i=0;i<tam;i++)
        {
            r=0;
            for(j=0;j<tam;j++)
            {
                if(ArrayDePalavra[i]==ArrayDePalavra[j])r++;
            }
            ArrayDeRepeticao[i] = r; 
        }
        maior=ArrayDeRepeticao[0];
        for(i=0;i<tam;i++)
        {
            if(ArrayDeRepeticao[i] >= maior)maior=ArrayDeRepeticao[i];
        }
        for(i=0;i<tam;i++)
        {
            if(ArrayDeRepeticao[i]==maior)maisrecorrente=ArrayDePalavra[i];
        }
    p.innerHTML = maisrecorrente;
}