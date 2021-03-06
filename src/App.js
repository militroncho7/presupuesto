import React, {useState, useEffect} from 'react';
import Logo from './components/Logo';
import Pregunta from './components/Pregunta';
import Formulario from './components/Formulario';
import Listado from './components/Listado';
import ControlPresupuesto from './components/ControlPresupuesto';
import Footer from './components/Footer';

function App() {

  //Definir el State
  const [presupuesto, guardarPresupuesto] = useState(0);
  const [restante, guardarRestante] = useState(0);
  //Carga funcional de componentes
  const [mostrarpregunta, actualizarPregunta] = useState(true);
  //Función que se ejecuta cuando agreguemos un nuevo gasto
  const [gastos, guardarGastos] = useState([]);

  const [gasto, guardarGasto] = useState({});
  const [creargasto, guadarCrearGasto] = useState(false);

  //useEffect que actualiza el restante
  useEffect(() => {
      if(creargasto) {
        //Agrega el nuevo presupuesto
        guardarGastos([
          ...gastos,
          gasto
        ]);
        //Resta al presupuesto actual
        const presupuestoRestante = restante - gasto.cantidad;
        guardarRestante(presupuestoRestante);

        //Resetear a false
        guadarCrearGasto(false);
      }
  }, [gasto, creargasto, gastos, restante])

  return (
    <div className="container">
      <header>
        <Logo />
        <h1>¡Controla tu presupuesto!</h1>

        <div className="contenido-principal contenido">
          {mostrarpregunta ? 
            (
              <Pregunta 
                guardarPresupuesto={guardarPresupuesto}
                guardarRestante={guardarRestante}   
                actualizarPregunta={actualizarPregunta}       
              />
            ) : (
              <div className="row">
                <div className="one-half column">
                  <Formulario 
                    guardarGasto={guardarGasto}
                    guadarCrearGasto={guadarCrearGasto}
                  />
                </div>

                <div className="one-half column">
                  <Listado
                    gastos={gastos}
                  />
                  <ControlPresupuesto
                    presupuesto={presupuesto}
                    restante={restante}
                  />
                </div>
              </div>
            ) }

        </div>
      </header>

      <Footer />
    </div>
  );
}

export default App;
