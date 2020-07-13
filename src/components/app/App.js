import React from "react";
import CalcPad from "../calculator/pad";

class App extends React.Component {

    displayElementId;
    displayElement;

    num1 = null;
    num2 = null;
    operator = null;
    waitForSecondOperand = false;
    dotOperand = false;

    constructor(props) {
        super(props);
        this.displayElementId = "display";
        this.state = {
            displayValue: "",
        }
    }

    componentDidMount() {
        this.displayElement = document.getElementById("display");
        this.setDisplayValue("");
    }

    onNumberClick = (e) => {
        // console.log(e.target.value)
        if (this.operator == null) {
            this.operateNum1Value(e.target.value);
        } else {
            this.operateNum2Value(e.target.value);
        }
    }

    operateNum1Value = (value) => {
        if (this.num1 == null) {
            this.setNum1(value);
            this.setDisplayValue(value);

        } else {
            if (this.dotOperand) {
                this.setNum1(this.concatWithCurrentDisplay(value));
                this.dotOperand = false;
            } else {
                this.setNum1(this.num1 + value);
                this.setDisplayValue(this.num1);
            }
        }
    }

    operateNum2Value = (value) => {
        if (this.num2 == null) {

            this.setNum2(value);
            this.setDisplayValue(value);

        } else {
            if (this.dotOperand) {
                this.setNum2(this.concatWithCurrentDisplay(value));
                this.dotOperand = false;
            } else {
                this.setNum2(this.num2 + value);
                this.setDisplayValue(this.num2);
            }
        }
    }

    concatWithCurrentDisplay = (glue = ".") => {
        let currentDisplayValue = this.displayElement.value;
        let newValue = currentDisplayValue + glue;

        this.setDisplayValue(newValue);
        return newValue;
    }

    onEqualClick = () => {
        let result = this.calculate();
        this.setNum1(result);

        if (this.isInt(result)) {
            this.setDisplayValue(result);
        } else {
            this.setDisplayValue(result.toFixed(2).toString().replace("0", ""));
        }
    }

    onClearClick = () => {
        this.reset();
    }

    onOperatorClick = (e) => {

        if (this.operator !== null) {
            this.waitForSecondOperand = true;
            this.onEqualClick();
        } else {
            this.setDisplayValue("");
        }

        this.operator = e.target.value;
        this.num2 = null;
    }

    onDotClick = () => {
        this.concatWithCurrentDisplay();
        this.dotOperand = true;
    }

    calculate = () => {
        switch (this.operator) {
            case "+": {
                return this.add();
            }
            case "-": {
                return this.subtract();
            }
            case "*": {
                return this.multiply();
            }
            case "/": {
                return this.divide();
            }
            default: {
                return null;
            }
        }
    }

    setNum1 = (value) => {
        this.num1 = parseFloat(value);
    }

    setNum2 = (value) => {
        this.num2 = parseFloat(value);
    }

    setDisplayValue = (value) => {
        this.setState({
            displayValue: value,
        });
    }

    add = () => {
        return this.num1 + this.num2;
    }

    subtract = () => {
        return this.num1 - this.num2;
    }

    multiply = () => {
        return this.num1 * this.num2;
    }

    divide = () => {
        return this.num1 / this.num2;
    }

    isInt = (n) => {
        return n % 1 === 0;
    }

    reset = () => {
        this.setDisplayValue("");
        this.num1 = null;
        this.num2 = null;
        this.operator = null;
        this.waitForSecondOperand = false;
        this.dotOperand = false;
    }

    render() {
        return <CalcPad
            title="Simple calculator in typescript"
            onNumberClick={this.onNumberClick}
            onEqualClick={this.onEqualClick}
            onClearClick={this.onClearClick}
            onOperatorClick={this.onOperatorClick}
            onDotClick={this.onDotClick}
            displayId="display"
            displayValue={this.state.displayValue}
            equalId={this.displayElementId}
        />
    }
}

export default App;