import React from "react";

const CalcButton = (props) => {

    const handleClick = (e) => {
        return props.onButtonClick(e) ?? void (0);
    }

    return React.createElement(
        'button',
        {
            className: props.class,
            type: props.type,
            value: props.value,
            id: props.id ?? null,
            onClick: (event) => handleClick(event),
        },
        props.text,
    )
}

export default CalcButton;