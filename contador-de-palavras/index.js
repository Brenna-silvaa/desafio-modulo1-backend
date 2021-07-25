
function solucao(texto) {
    const palavras = texto.trim().split(" ");

    const semEspaco = palavras .filter(palavra => palavra.trim())

    console.log(semEspaco.length)
}
