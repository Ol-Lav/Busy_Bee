import { useState } from "react";
import './Calculator.scss';

export const Calculator = () => {
  const [calc, setCalc] = useState('');
  const [result, setResult] = useState('');

  const operators = ['/', '*', '+', '-', '.'];

  const createDigits = () => {
    const digits = [];

    for (let i = 1; i < 10; i++) {
      digits.push(
        <button
          onClick={() => updateCalc(i.toString())}
          key={i}
          className="calculator_button"
        >
          {i}
        </button>
      )
    }
    return digits;
  }

  const updateCalc = (value) => {
    if (
      (operators.includes(value) && calc === '') ||
      (operators.includes(value) && operators.includes(calc.slice(-1))
      )
    ) {
      return;
    }
      setCalc(calc + value);

      if (!operators.includes(value)) {
        setResult(eval(calc + value).toString());
    }
  };

  const calculate = () => {
    setCalc(eval(calc).toString());
  };

  const deleteLast = () => {
    if (calc === '') {
      return;
    }
    const value = calc.slice(0, -1);
    setCalc(value);
  };

  const reset = () => {
    setCalc('');
    setResult('');
  };

  return (
    <div className="calculator">
      <div className="calculator_display">
        {result ? <span>({result}) </span> : ''}
        {calc || '0'}
      </div>
      <div className="calculator_operators">
        <button
          onClick={() => updateCalc('/')}
          className="calculator_operators-button"
        >
            /
        </button>
        <button
          onClick={() => updateCalc('*')}
          className="calculator_operators-button"
        >
          *
        </button>
        <button
          onClick={() => updateCalc('+')}
          className="calculator_operators-button"
        >
          +
        </button>
        <button
          onClick={() => updateCalc('-')}
          className="calculator_operators-button"
        >
          -
        </button>

        <button
          onClick={deleteLast}
          className="calculator_operators-button"
        >
          DEL
        </button>
        <button
          onClick={reset}
          className="calculator_operators-button"
        >
            RESET
        </button>
      </div>
      <div className="calculator_digits">
        {createDigits()}
        <button
          onClick={() => updateCalc('0')}className="calculator_button"
          >
            0
          </button>
        <button
          onClick={() => updateCalc('.')}
          className="calculator_button"
          >
            .
          </button>
        <button
          onClick={calculate}
          className="calculator_button"
        >
          =
        </button>
      </div>
    </div>
  )
}
