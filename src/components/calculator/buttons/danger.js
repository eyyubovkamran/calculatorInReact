import React from "react";
import CalcButton from "./buttons";


const DangerButton = (props) => {
    return (
        <CalcButton
            type="button"
            className="btn btn-danger waves-effect"
            {...props}
        />
    )
}

export default DangerButton;
