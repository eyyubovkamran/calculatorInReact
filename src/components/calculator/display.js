import React from "react";

const CalcDisplay = (props) => {
    return React.createElement(
        'input',
        {
            type: props.type,
            className: props.class,
            value: props.value,
            id: props.id,
            disabled: props.isDisabled ?? false,
        }
    )
}

export default CalcDisplay;