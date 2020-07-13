import React from "react";
import CalcButton from "./buttons";


const DangerButton = (props) => {
    return (
        <CalcButton
            type="button"
            class="btn btn-danger waves-effect"
            value={props.value}
            text={props.text}
            onButtonClick = {props.onButtonClick}
        />
    )
}

export default DangerButton;
