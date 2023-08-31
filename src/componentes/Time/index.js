import Colaborador from "../Colaborador";
import "./Time.css";


const Time = (props) => {
  return (
    // renderização condicional ( so aparace se existir )
    props.colaboradores.length > 0 ? (
      <section
        className="time"
        style={{ backgroundColor: props.corSecundaria }}
      >
        <h3 style={{ borderBlockColor: props.corPrimaria }}>{props.nome}</h3>
        <div className="colaboradores">
          {props.colaboradores.map((colaborador) => (
            <Colaborador
              key = {colaborador.nome}
              nome={colaborador.nome}
              cargo={colaborador.cargo}
              imagem={colaborador.imagem}
              corDeFundo = {props.corPrimaria}
            />
          ))}
        </div>
      </section>
    ) : ''
  );
};

export default Time;
