import React from 'react';
import PropTypes from 'prop-types';

const Clima =({resultado}) => {

    //extraer los avlores
    const { name, main}= resultado;

    if (!name) return(false);

    //grados kelvin
    const kelvin = 273.15;


    return (

        <div className="card-panel white col s12">
            <h2>La temperatura de {name} es: </h2>
            <p className="temperatura">
                {parseFloat (main.temp - kelvin, 10).toFixed(1)}<span>&#x2103;</span>
            </p>
            <p>Temperatura Máxima:
                {parseFloat (main.temp_max - kelvin, 10).toFixed(1)} <span>&#x2103;</span>
            </p>
            <p>Temperatura Minima:
                {parseFloat (main.temp_min - kelvin, 10).toFixed(1)} <span> &#x2103;</span>
            </p>
        </div>
    )
}

Clima.ropTypes = {
    resultado: PropTypes.object.isRequired
}

export default Clima;