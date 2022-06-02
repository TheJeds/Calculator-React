import React from "react";
import '../style/ButtonClear.css'

const ButtonClear = (props) => (
    <div className="button-clear" onClick={props.takeClear}>
        {props.children}
    </div>
);

export default ButtonClear;