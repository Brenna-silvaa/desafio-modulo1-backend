
function solucao(min, km) {
    
    const diferencaMin = min - 20;
    const diferancaKm = km - 10;
    
    if (km <= 10 && min <= 20){
        console.log((min * 50) + (km * 70));
    } else if (km > 10 && min > 20){
        console.log((20 * 50) + (10 * 70) + (diferancaKm * 50) + (diferencaMin * 30));
    } 
    
    if (km > 10 && min < 20){
        console.log((min * 50) + (10 * 70) + (diferancaKm * 50));
    } else if (min > 20 && km < 10){
        console.log((20 * 50) + (km * 70) + (diferencaMin * 30))
    }
    }