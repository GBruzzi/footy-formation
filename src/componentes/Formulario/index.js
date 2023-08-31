import './Formulario.css'
import CampoTexto from "../CampoTexto";
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../botao';
import { useState } from 'react';


const Formulario = (props) => {
  const [nome, setNome] = useState('');
  const [cargo, setCargo] = useState('');
  const [imagem, setImagem] = useState('');
  const [time, setTime] = useState('');

  const aoSalvar = (evento) => {
    // previnir o forms de recarregar após ser submetido
    evento.preventDefault()
    props.aoColaboradorCadastrado({
      nome,
      cargo,
      imagem,
      time
    })
    // Limpar o forms
    setNome('');
    setImagem('');
    setCargo('');
    setTime('');
  }

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados do jogador</h2>
        <CampoTexto 
          obrigatorio = {true} 
          label="Nome" 
          placeholder="Digite o nome " 
          valor= {nome}
          aoAlterado = {valor => setNome(valor)}
        />
        <CampoTexto 
          obrigatorio = {true} 
          label="Idade" 
          placeholder="Digite a idade" 
          valor = {cargo}
          aoAlterado = {valor => setCargo(valor)}
        />
        <CampoTexto  
          label="Foto" 
          placeholder="Entre com a foto" 
          valor = {imagem}
          aoAlterado = {valor => setImagem(valor)}
        />
        <ListaSuspensa  
          obrigatorio = {true} 
          label = 'Posição' 
          itens = {props.times}
          valor = {time}
          aoAlterado = {valor => setTime(valor)}
        />
        <Botao>
          Criar card
        </Botao>
      </form>
    </section>
  );
};

export default Formulario;
