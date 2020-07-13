import React from "react";
import CalcButton from "./buttons";


const NumberButton = (props) => {
    return (
        <CalcButton
            type="button"
            class="btn btn-light waves-effect number"
            value={props.value}
            text={props.text}
            onButtonClick = {(event) => props.onButtonClick(event)}
        />
    )
}

export default NumberButton;
