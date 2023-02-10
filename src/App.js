import React, { useState } from 'react';
import './App.css';

function App() {
  const [result, setResult] = useState("");

  const operation = (x) => {
    setResult(result.concat(x.target.name));
  }
  const erase = () =>{
    setResult("");
  }

  const back = () =>{
    setResult(result.slice(0, result.length-1))
  }

  const calculate = () => {
    try{
      setResult(eval(result).toString());
      
    }catch(err){
      setResult("Error")
    }
  }
  
  return (
    
    <>
    <p id="calc">My Calculator</p>
  
    <div className='container'>
    <form>
      <input type="text" value={result}/>
    </form>
    <div className='keypad'>
      <button className='light' onClick={erase} id='erase'>Clear</button>
      <button className='light' id='back' onClick={back}>C</button >
      <button className='light' name="/" onClick={operation}>&#247;</button >
      <button className='aftereffect' name="7" onClick={operation}>7</button >
      <button className='aftereffect' name="8" onClick={operation}>8</button >
      <button className='aftereffect' name="9" onClick={operation}>9</button >
      <button className='light' name="*" onClick={operation}>&#215;</button >
      <button className='aftereffect' name="4" onClick={operation}>4</button >
      <button className='aftereffect' name="5" onClick={operation}>5</button >
      <button className='aftereffect' name="6" onClick={operation}>6</button >
      <button className='light' name="-" onClick={operation}>&#8722;</button >
      <button className='aftereffect' name="1" onClick={operation}>1</button >
      <button className='aftereffect' name="2" onClick={operation}>2</button >
      <button className='aftereffect' name="3" onClick={operation}>3</button >
      <button className='light' name="+" onClick={operation}>+</button >
      <button className='aftereffect' name="0" onClick={operation}>0</button >
      <button className='aftereffect' name="." onClick={operation}>.</button >
      <button className='light' onClick={calculate} id="ans">=</button >
    </div>
    </div>
    
    
    
    
    
    
    
    
    
    
    
    
    </>
  );
}

export default App;
