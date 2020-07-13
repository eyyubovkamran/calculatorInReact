import React from "react";
import CalcDisplay from "./display";
import OperatorButton from "./buttons/operators";
import NumberButton from "./buttons/numbers";
import DangerButton from "./buttons/danger";
import EqualButton from "./buttons/equal";

const CalcPad = (props) => {

    const operators = ['+', '-', '*', '/'];
    const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];

    const onNumberClick = (e) => {
        return props.onNumberClick(e);
    }

    const onDotClick = () => {
        return props.onDotClick();
    }

    const onEqualClick = () => {
        return props.onEqualClick();
    }

    const onClearClick = () => {
        return props.onClearClick();
    }

    const onOperatorClick = (e) => {
        return props.onOperatorClick(e);
    }

    return (
        <div className="calculator card">

            <h2 className="text-center">{props.title}</h2>

            <CalcDisplay
                type="text"
                className="calculator-screen z-depth-1"
                value={props.displayValue}
            />

            <div className="calculator-keys">

                {operators.map(function (m) {
                    return <OperatorButton value={m} text={m} onButtonClick={props.onOperatorClick}/>;
                })}

                {numbers.map(function (n) {
                    return <NumberButton value={n} text={n} onButtonClick={(event) => onNumberClick(event)}/>
                })}

                <NumberButton value="." text="." onButtonClick={onDotClick}/>

                <DangerButton value="all-clear" text="AC" onButtonClick={onClearClick}/>
                <EqualButton value="=" text="=" id={props.equalId} onButtonClick={onEqualClick}/>

            </div>
        </div>
    )
}

export default CalcPad;
