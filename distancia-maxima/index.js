function processData(input) {

    const linhas = input.trim().split("\n");
    const n = linhas[0];
    let maiorDistancia = 0;
    
    const coordenadas = [];
    for (let i = 1; i < linhas.length; i++) {
        const coord = linhas[i].split(" ");
        coordenadas.push({
            x: parseFloat(coord[0], 10),
            y: parseFloat(coord[1], 10)
        })
    }
    for (coordenada1 of coordenadas){
        for (coordenadas2 of coordenadas){
            let distancia = Math.sqrt((coordenadas2.x - coordenada1.x)** 2 + (coordenadas2.y - coordenada1.y) ** 2);
            if (distancia > maiorDistancia){
                maiorDistancia = distancia;
            }
        }
    }
    console.log(maiorDistancia)
}