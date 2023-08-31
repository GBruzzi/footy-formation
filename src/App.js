import { useState } from "react";
import Banner from "./componentes/Banner/index.js";
import Formulario from "./componentes/Formulario/index.js";
import Time from "./componentes/Time/index.js";
import Footer from "./componentes/Footer/index.js";
import Titulo from "./componentes/Titulo/index.js";

function App() {
  const times = [
    {
      nome: "Goleiro",
      corPrimaria: "black",
      corSecundaria: "#d9f7e9",
    },
    {
      nome: "Zagueiro",
      corPrimaria: "black",
      corSecundaria: "#38fa48",
    },
    {
      nome: "Meio-campista",
      corPrimaria: "black",
      corSecundaria: "#d9f7e9",
    },
    {
      nome: "Ponta",
      corPrimaria: "black",
      corSecundaria: "#38fa48",
    },
    {
      nome: "Centroavante",
      corPrimaria: "black",
      corSecundaria: "#d9f7e9",
    },
  ];

  const [colaboradores, setColaboradores] = useState([]);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador]);
  };

  return (
    <div className="App">
      <Banner />
      <Titulo title = 'FootyFormation'/>
      <Formulario
        aoColaboradorCadastrado={(colaborador) =>
          aoNovoColaboradorAdicionado(colaborador)
        }
        times={times.map((time) => time.nome)}
      />

      {times.map((time) => (
        <Time
          key={time.nome}
          nome={time.nome}
          corPrimaria={time.corPrimaria}
          corSecundaria={time.corSecundaria}
          colaboradores={colaboradores.filter(
            (colaborador) => colaborador.time === time.nome
          )}
        />
      ))}
      <Footer/>
    </div>
  );
}

export default App;
