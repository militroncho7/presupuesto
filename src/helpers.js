export const revisarPresupuesto = (presupuesto, restante) => {
    let clase;

    //Clases de forma condicional, en función del % del presupuesto restante
    if((presupuesto / 4) > restante) {
        clase = 'alert alert-danger';
    } else if ((presupuesto / 2) > restante) {
        clase="alert alert-warning";
    } else {
        clase="alert alert-success";
    }

    return clase;
}