
function solucao(lista) {
    const organizado = lista.sort((a, b) => {
       if (a > b){
           return 1
       } else if (a < b){
           return -1
       }
   });

   const permitidos = organizado.find(idade => idade >= 18)

   const barrados = lista.every(idade => idade <= 17)
   if (barrados){
       console.log("CRESCA E APARECA");
   } else {
       console.log(permitidos);
   }

}