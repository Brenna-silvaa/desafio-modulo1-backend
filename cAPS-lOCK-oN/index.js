function processData(input) {
    if (input === input.toUpperCase() || (input[0] === input[0].toLowerCase() && input.substr(1) === input.substr(1).toUpperCase())){
    let valor = "";
    for (let letra of input){
        if (letra === letra.toUpperCase()){
            valor += letra.toLowerCase()
        } else {
            valor += letra.toUpperCase()
        }
} 
console.log(valor);
} else {
console.log(input);
}
}