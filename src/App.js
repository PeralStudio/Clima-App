import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Formulario from './components/formulario';
import Clima from './components/Clima';
import Error from './components/Error';


function App() {


  // state del formulario

  const [busqueda, guardarBusqueda] = useState({
    ciudad: '',
    pais: ''

  });

  const [consultar, guardarConsultar] = useState(false);
  const [resultado, guardarResultado] = useState({});
  const [error, guardarError] = useState(false);

  const { ciudad, pais } = busqueda;

  useEffect(() => {
    const consultarAPI = async () => {

      if (consultar) {
        const appId = '40efccd434eefd0344923485b60fbda7';
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;

        const respuesta = await fetch(url);
        const resultado = await respuesta.json();

        guardarResultado(resultado);
        guardarConsultar(false);

        //Detecta si hay resultados correctos en la consulta

        (resultado.cod === "404") ? guardarError(true) : guardarError(false);
      }


    }
    consultarAPI();

    // eslint-disable-next-line
  }, [consultar]);

  let componente;
  if (error) {
    componente = <Error mensaje="No hay resultados" />
  } else {
    componente = <Clima resultado={resultado} />
  }



  return (
    <Fragment>
      <Header
        titulo='Clima React Alberto Peral'
      />

      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Formulario
                busqueda={busqueda}
                guardarBusqueda={guardarBusqueda}
                guardarConsultar={guardarConsultar}
              />
            </div>
            <div className="col m6 s12">
              {componente}
            </div>

          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
