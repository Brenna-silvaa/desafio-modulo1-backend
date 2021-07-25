function processData(input) {
    const linhas = input.trim().split("\n");
     const senha = linhas[0];
     const digitado = linhas[1];
     let resultado = "";
     const arrayS = senha.split("");
     let arrayD = digitado
     
     for (let s = 0; s < arrayS.length; s++){
         let posicao = arrayD.indexOf(arrayS[s])
         if (posicao > -1){
             resultado += arrayS[s];
             arrayD = arrayD.substr(posicao + 1);
         }
         
     }
     if (resultado === senha){
         console.log("SIM")
     } else {
         console.log("NAO")
     }
     
 }