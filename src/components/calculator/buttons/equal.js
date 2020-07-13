import React from "react";
import CalcButton from "./buttons";


const EqualButton = (props) => {
    return (
        <CalcButton
            type="button"
            class="equal-sign btn btn-primary"
            value={props.value}
            text={props.text}
            id={props.id}
            onButtonClick = {props.onButtonClick}
        />
    )
}

export default EqualButton;
