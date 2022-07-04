import "./style/style.css"
import copy from "./assets/copy.svg"
import { useState } from "react";
import { useClipboard } from "use-clipboard-copy";

function App() {
   const [values, setValues] = useState("Your new password")
   const [lengths, setLengths] = useState(5)
   const [checked1, setChecked1] = useState(true)
   const [checked2, setChecked2] = useState(true)
   const [checked3, setChecked3] = useState(true)
   const [checked4, setChecked4] = useState(true)
   const clipboard = useClipboard();

   function gen_password(){
      let password = ""
      let upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
      let lowerChar = "abcdefghijklmnopqrstuvwxyz"
      let numberChar = "0123456789"
      let symbols = "!@#$%^&*()№?;:_+="
      let finalSymbols = ""
      if(checked1 === true) finalSymbols += upperChar
      if(checked2 === true) finalSymbols += lowerChar
      if(checked3 === true) finalSymbols += numberChar
      if(checked4 === true) finalSymbols += symbols
      for (var i = 0; i < lengths; i++){
         let randomNumber = Math.floor(Math.random() * finalSymbols.length)
         password += finalSymbols.substring(randomNumber, randomNumber + 1)  
      } 
      setValues(password)
  }


   return (
    <div className="App">
      <div className="bg"></div>
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>
      <div className="container">
         <div className="header">Password Generator</div>
         <div className="input__block">
            <input type="text" className="input" value={values} readOnly ref={clipboard.target}/>
            <button className="copy" onClick={clipboard.copy}><img src={copy} alt="" /></button>

         </div>
         <div className="blocks length__block">
            <div className="plength">
               Password length
               <input className="length__num" type="number" max={20} value={lengths} onChange={event => {setLengths(event.target.value)}}/>
            </div>
            <input type="range" className="range" max={20} min={1} value={lengths} onChange={event => {setLengths(event.target.value)}}/>
         </div>
         <div className="blocks">Include uppercase letters<input className="check" type="checkbox" checked={checked1} onChange={() => setChecked1(!checked1)}/></div>
         <div className="blocks">Include lowercase letters<input className="check" type="checkbox" checked={checked2} onChange={() => setChecked2(!checked2)}/></div>
         <div className="blocks">Include numbers<input className="check" type="checkbox" checked={checked3} onChange={() => setChecked3(!checked3)}/></div>
         <div className="blocks">Include symbols<input className="check" type="checkbox" checked={checked4} onChange={() => setChecked4(!checked4)}/></div>
         <button className="generate" onClick={gen_password}>Generate password</button>
      </div>
    </div>
  );
}

export default App;
