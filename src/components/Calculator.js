import React, { useState } from 'react';
import '../App.css';
import calculate from '../logic/calculate';
import Button from './Button';

const Calculator = () => {
  const [state, setState] = useState({ total: null, next: null });

  const onClickHandler = (e) => {
    if (!state.total && !state.next && e.target.classList[0] === 'operation') {
      return;
    }
    setState((state) => calculate(state, e.target.innerHTML));
  };

  const { total, next } = state;
  const utilLabels = ['AC', '+/-', '%'];
  const digitLabels = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, '.'];
  const operatorLabels = ['÷', 'x', '-', '+', '='];

  const utils = utilLabels.map(
    (utilLabel) => (
      <Button
        key={`${utilLabel}`}
        cssClass="operation"
        action={onClickHandler}
        label={utilLabel}
      />
    ),
  );

  const digits = digitLabels.map(
    (digitLabel) => (
      <Button
        key={`${digitLabel}`}
        cssClass={digitLabel === 0 ? 'number zero' : 'number'}
        action={onClickHandler}
        label={digitLabel}
      />
    ),
  );

  const operators = operatorLabels.map(
    (operatorLabel) => (
      <Button
        key={`${operatorLabel}`}
        cssClass="operation right"
        action={onClickHandler}
        label={operatorLabel}
      />
    ),
  );

  return (
    <div className="calc-container">
      <div>
        <h3>Lets do some math!</h3>
      </div>
      <div className="calculator-container">
        <div className="row">
          <div className="display">
            <div className="input">{next || total || '0'}</div>
          </div>
        </div>
        <div className="row">
          {utils}
          {operators[0]}
        </div>
        <div className="row">
          {digits[0]}
          {digits[1]}
          {digits[2]}
          {operators[1]}
        </div>
        <div className="row">
          {digits[3]}
          {digits[4]}
          {digits[5]}
          {operators[2]}
        </div>
        <div className="row">
          {digits[6]}
          {digits[7]}
          {digits[8]}
          {operators[3]}
        </div>
        <div className="row bottom">
          {digits[9]}
          {digits[10]}
          {operators[4]}
        </div>
      </div>
    </div>
  );
};

export default Calculator;
