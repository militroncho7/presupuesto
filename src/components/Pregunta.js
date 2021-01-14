import React, {Fragment, useState} from 'react';
import PropTypes from 'prop-types';
import Error from './Error';

const Pregunta = ({guardarPresupuesto, guardarRestante, actualizarPregunta}) => {

    //Definir el state: lo definimos aquí porque no pasa por los demás componentes
    const [cantidad, guardarCantidad] = useState(0);
    const [error, guardarError] = useState(false);

    //Función que lee el rpesupuesto
    const definirPresupuesto = e => {
        guardarCantidad(parseInt(e.target.value, 10));
    };

    //Submit para definir el presupuesto
    const agregarPresupuesto = e => {
        e.preventDefault();

        //Validar
        if (cantidad < 1 || isNaN(cantidad)){ //si la cantidad es menor que 1 o NO ES UN NÚMERO
            guardarError(true)
            return;
        }
        //Si se pasa la validación
        guardarError(false);

        //Accedemos al presupuesto y al restante
        guardarPresupuesto(cantidad);
        guardarRestante(cantidad);

        //Para cargar de una formal funcional el componente (mostrar o ocultar)
        actualizarPregunta(false);
    }


    return (
        <Fragment>
            <h2>Coloca tu presupuesto</h2>

            {error ? <Error mensaje="El presupuesto es incorrecto" /> : null}

            <form
                onSubmit={agregarPresupuesto}
            >
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Coloca tu presupuesto"
                    onChange={definirPresupuesto}
                
                />

                <input
                    type="submit"
                    className="button-primary u-full-width"
                    value="Definir presupuesto"
                />
            </form>
        </Fragment>
    );
}

Pregunta.propTypes = {
    guardarPresupuesto: PropTypes.func.isRequired,
    guardarRestante: PropTypes.func.isRequired,
    actualizarPregunta: PropTypes.func.isRequired
};
 
export default Pregunta;