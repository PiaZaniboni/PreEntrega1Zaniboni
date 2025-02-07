import { useState } from "react";

export default function Button(props){
    const { color, disabled, children, handleClick, estilos } = props;

    const [isDisabled, setIsDisabled] = useState(disabled);
    const [colorState, setColorState] = useState(color);

    return (
        <button
            className={estilos}
            onClick={handleClick}
            style={{backgroundColor: colorState}}
            disabled={isDisabled}

        >
            {children}
        </button>
    )

}