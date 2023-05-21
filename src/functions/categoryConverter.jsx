function categoryToString({ number }) {

    if (number === 1) return "Dia";

    else if (number === 2) return "Semana";

    else if (number === 3) return "Mês";

}

function categoryToNumber({ string }) {

    if (string === "Dia") return 1;

    else if (string === "Semana") return 2;

    else if (string === "Mês") return 3;

}

export {
    
    categoryToNumber,

    categoryToString

};