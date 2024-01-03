import './App.css';
import Boton from './components/Boton';
import Pantalla from './components/Pantalla';
import BotonClear from './components/BotonClear';
import { useState } from 'react';
import {evaluate} from 'mathjs';
import BotonDelete from './components/BotonDelete';

function App() {

  const [input, setInput] = useState('');

  const agregarInput = val => {
    setInput(input + val);
  };

  const calcularResultado = () => {
    if(input){
      try {
        setInput(String(evaluate(input)));
      } catch (error) {
        alert('Por favor ingrese una expresion valida');
      }
      
    }else{
      alert('Por favor ingrese valores para realizar los calculos');
    }
    
  };

  const deleteInput = () => {
    setInput(input.substring(0,input.length -1));
  }


  return (
    <div className="App">
      <div className='contenedor-calculadora'>
        <Pantalla input={input} />
        <div className='fila'>
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </div>

        <div className='fila'>
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
        </div>

        <div className='fila'>
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>
        </div>

        <div className='fila'>
          <Boton manejarClic={calcularResultado}>=</Boton>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>
        </div>

        <div className='fila'>
          <BotonClear clearInput={() => setInput('')}>
            Clear
          </BotonClear>
        </div>

        <div className='fila'>
          <BotonDelete deleteInput = {deleteInput}>
            Delete
          </BotonDelete>
        </div>
      </div>
    </div>
  );
}

export default App;
