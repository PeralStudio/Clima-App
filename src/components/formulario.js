import React, { useState } from 'react';
import Error from './Error'
import PropTypes from 'prop-types';

const Formulario = ({ busqueda, guardarBusqueda, guardarConsultar }) => {



    const [error, guardarError] = useState(false);

    //extraer ciudad y pais

    const { ciudad, pais } = busqueda;

    //funcion que coloca los elementos en el state

    const handleChange = e => {

        //actualizar el state
        guardarBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value
        });
    }

    //cuando el usuario da submit al form

    const handleSubmit = e => {
        e.preventDefault();

        //validar
        if (ciudad.trim() === '' || pais.trim() === '') {
            guardarError(true);
            return;
        }

        guardarError(false);


        guardarConsultar(true);
    }

    return (
        <form
            onSubmit={handleSubmit}
        >
            {error ? <Error mensaje="Es necesario rellenar ambos campos" /> : null}

            <div className="input-field col s12">

                <input
                    type="text"
                    name="ciudad"
                    id="ciudad"
                    value={ciudad}

                    onChange={handleChange}

                />
                <label htmlFor="ciudad">Ciudad:</label>

            </div>

            <div className="input-field col s12">
                <select
                    name="pais"
                    id="pais"
                    value={pais}
                    onChange={handleChange}
                >
                    <option value="">-- Seleccione un país--</option>
                    <option value="ES">España</option>
                    <option value="US">Estados Unidos</option>
                    <option value="MX">México</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="CR">Costa Rica</option>
                    <option value="PE">Perú</option>

                </select>
                <label htmlFor="pais">País</label>

            </div>

            <div className="input-field col s12">
                <input
                    type="submit"
                    value="Buscar clima"
                    className="waves-effect waves-light btn-large btn-block teal"
                />

            </div>
        </form>
    );
}

Formulario.propTypes = {
    busqueda: PropTypes.object.isRequired,
    guardarBusqueda: PropTypes.func.isRequired,
    guardarConsultar: PropTypes.func.isRequired,

}

export default Formulario;