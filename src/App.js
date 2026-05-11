
import './App.css';
import { useState } from 'react';

function App() {
  const numberButtons =[0,1,2,3,4,5,6,7,8,9]
  const operationButtons =["/", "*", "-", "+"]
const [resultText, setResultText] = useState("");

function handleClick(event){
  //update the text in the calculator to show the buttons that were pressed
  setResultText(resultText +  event.target.value)
    console.log(
    event.target.value)
  
   }

function handleEq(event){
  let numResult;
  // perform the first operation, take the result and perform the next
  if(resultText.includes("+") || resultText.includes("-") || resultText.includes("*")  || resultText.includes("/") ){
    const userInput = resultText.split(/([+\-/*])/);
    
       console.log(userInput)
       for(let i =0; i < userInput.length; i+= 2){
        // if this is the first operation prev = the first number , else prev = last result
        let prev;
        if(i == 0){
           prev = parseFloat(userInput[i]); //25
         
        } else{
          prev = numResult; //25
        }
       
        let currentOperation = userInput[i+1]; // +
        let current= parseFloat(userInput[i+2]); // 5

        if(currentOperation == "+"){
           numResult = prev + current
        } else if(currentOperation == "-"){
          numResult = prev - current

        }else if(currentOperation == "*"){
          numResult = prev * current

        }else if(currentOperation == "/"){
          numResult = prev / current

        }
       }
  }else{
    numResult= parseFloat(resultText);
  }
  
    setResultText(numResult.toString())
   console.log(numResult)

  }
    
  function handleReset(){
    setResultText("")
  
  }
  function handleDelete(){
    let newText = resultText.slice(0, -1);
    setResultText(newText);
  }

 


  return (
    <>
  <h1>Calculator App</h1>
    <div className="calculator-container">
      <div className="result-container">
        <h1>{resultText}</h1>
      </div>
      <div className="buttons-container">
        
        <button value="reset"className="reset-btn" onClick={handleReset}>C</button>
        <button value="reset"className="del-btn" onClick={handleDelete}>CE</button>
       
        {numberButtons.map(number=>(
          <button key ={number} id ={number} value ={number} className="number-button" onClick={handleClick}>{number}</button>
        )  
        )}
        
        <button className="number-btn" id="decimal" value="." onClick={handleClick}>.</button>

        {operationButtons.map(op=>(
          <button key ={op} id = {op} value ={op} className="operation-btn" onClick={handleClick}>{op}</button>
        )  
        )}
      
        <button value="=" className="eq-btn" onClick={handleEq}>=</button>

      </div>

    </div>
     </>
  );
}

export default App;
