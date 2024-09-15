import NumberInput from "./NumberIntup";
import Select from "react-select";
import Result from "./Result";
import React, { useState } from "react";
import { operations, calculate } from "../utils/calculate";


function CalculatorForm () {
    // states for a, b, operation and result
    const [a, setA] = useState(0);
    const [b, setB] = useState(0);
    const [operation, setOperation] = useState(operations[0]);
    const [result, setResult] = useState(0);

    // handle submit function
    const handleSubmit = (event) => {
        event.preventDefault();
        const numberA = parseFloat(a);
        const numberB = parseFloat(b);
        const result = calculate(numberA, numberB, operation.value);
        setResult(result);
    };
    
    // return form
    return (
        <div>
            <form className="CalculatorForm" onSubmit={handleSubmit}>
                <NumberInput name="a" label="První číslo: " onChange={(e) => setA(e.target.value)}/>
                <NumberInput name="b" label="Druhý číslo: " onChange={(e) => setB(e.target.value)}/>
                <Select options={operations} value={operation} onChange={setOperation}/>
                <input className="button" type="submit" value="Spočítej" />
            </form>
            <Result className="Result" value={result}/>
        </div>
    );
}

export default CalculatorForm;