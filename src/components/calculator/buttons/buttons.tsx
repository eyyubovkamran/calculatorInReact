import React, { FC } from "react";

const colors = {
    danger: "btn-danger",
    warning: "btn-warning"
}

interface IProps {
    color: "danger" | "warning" | "info";
    value: string;
    type: any;
    onButtonClick: (e: React.MouseEvent) => void;
}
interface IState {
    valuye:string;
}

class BBB extends React.Component<IProps, IState> {


}

<CalcButton color="danger" />

const CalcButton: FC<IProps> = (props) => {

    let className = "btn " + props.className + " " + colors[props.color];

    return <button onClick={props.onButtonClick} >{props.text}</button>

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