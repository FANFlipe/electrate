import React, { useState } from "react";
import AppMenu from './AppMenu';
const Imc = () => {
    const [num1, setNum1] = useState();
    const [num2, setNum2] = useState();
    const [resultado, setResultado] = useState();

    const soma = (evento) => {
        evento.preventDefault();
        setResultado(parseFloat(num1) / (parseFloat(num2) *parseFloat (num2)));
    }
    return (
        <>
        <AppMenu selectedkey='2'/>
            <h2> Calculadora de IMC</h2>
            <form>
                <div> 
                    <label>
                        massa:
                        <input value={num1}
                            onChange={(e) => { setNum1(e.target.value) }} />
                    </label>
                </div>
                <div>
                    <label>
                        altura:
                        <input value={num2}
                            onChange={(e) => { setNum2(e.target.value) }} />
                    </label>
                </div>
                <button onClick={soma} >soma</button>
            </form>
            <h1> Resulatado:{resultado} </h1>
        </>
    );
}
export default Imc