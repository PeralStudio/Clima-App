import React from 'react';
import PropTypes from 'prop-types';

const Clima =({resultado}) => {

    //extraer los valores
    const { name, main, wind,}= resultado;

    if (!name) return(false);

    //grados kelvin
    const kelvin = 273.15;

    var icon = "https://openweathermap.org/img/w/" + resultado.weather[0].icon + ".png"

console.log (icon)
    return (

        <div className="card-panel white col s12">
            <h2>La Temperatura de {name} es: </h2>
            <p className="temperatura">
            <img className="icono" alt="icono"src={icon}/> {parseFloat (main.temp - kelvin, 10).toFixed(1)}<span>&#x2103;</span>
            </p>
            <p>Sensación Termica:&nbsp;
                {parseFloat (main.feels_like - kelvin, 10).toFixed(1)} <span>&#x2103;</span>
            </p>
            <p>Temperatura Máxima:&nbsp;
                {parseFloat (main.temp_max - kelvin, 10).toFixed(1)} <span>&#x2103;</span>
            </p>
            <p>Temperatura Minima:&nbsp;
                {parseFloat (main.temp_min - kelvin, 10).toFixed(1)} <span> &#x2103;</span>
            </p>
            <p>Humedad:&nbsp;
                {(main.humidity)}<span>&nbsp;%</span>
            </p>
            <p>Viento:&nbsp;
                {(wind.speed)}<span>&nbsp;m/s</span>
            </p>
        </div>
    )
}

Clima.propTypes = {
    resultado: PropTypes.object.isRequired
}

export default Clima;