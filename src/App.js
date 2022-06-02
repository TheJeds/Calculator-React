import './App.css';
import React from 'react';
import theJedsLogo from './images/Logo-TheJeds.png';
import Button from './components/Button';
import Screen from './components/Screen';
import ButtonClear from './components/ButtonClear';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState('');

  const addInput = value => {
    setInput(input + value);
  };

  const calcResult = () => {
    if(input){
      setInput(evaluate(input));
    }else{
      alert("Ingresa un valor");
    }
  };

  return (
    <div className="App">
      <div className='container-TheJeds-logo'>
        <img src={theJedsLogo} className='TheJeds-logo' alt='Logo TheJeds' />
      </div>
      <div className='container-calculadora'>
        <Screen input={input} />
        <div className='fila'>
          <Button takeClick = {addInput}>1</Button>
          <Button takeClick = {addInput}>2</Button>
          <Button takeClick = {addInput}>3</Button>
          <Button takeClick = {addInput}>+</Button>
        </div>

        <div className='fila'>
          <Button takeClick = {addInput}>4</Button>
          <Button takeClick = {addInput}>5</Button>
          <Button takeClick = {addInput}>6</Button>
          <Button takeClick = {addInput}>-</Button>
        </div>
          
        <div className='fila'>
          <Button takeClick = {addInput}>7</Button>
          <Button takeClick = {addInput}>8</Button>
          <Button takeClick = {addInput}>9</Button>
          <Button takeClick = {addInput}>*</Button>
        </div>
          
        <div className='fila'>
          <Button takeClick = {calcResult}>=</Button>
          <Button takeClick = {addInput}>0</Button>
          <Button takeClick = {addInput}>.</Button>
          <Button takeClick = {addInput}>/</Button>
        </div>
          
        <div className='fila'>
          <ButtonClear takeClear={() => setInput('')}>Clear</ButtonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
