import React from "react";
import CalcButton from "./buttons";

const OperatorButton = (props) => {
    return (
        <CalcButton
            type="button"
            class="operator btn btn-info"
            value={props.value}
            text={props.value}
            onButtonClick = {props.onButtonClick}
        />
    );
}

export default OperatorButton;