import React from "react";

const colors = {
    danger: "btn-danger",
    warning: "btn-warning"
}



const CalcButton = (props) => {
    let className = "btn " + props.className + " " + colors[props.color];
    
    
    return React.createElement(
        'button',
        {
            className,
            type: props.type,
            value: props.value,
            id: props.id,
            onClick: props.onButtonClick
        },
        props.text,
    )
}

export default CalcButton;