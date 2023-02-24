import React from "react";
import "./style.scss";

export default function C_TextField(props) {

    function onChange(e) {
        props?.onChange(e)
    }

    function KeyPress(e){
        props?.keyPress(e.key)
    }

    return (
        <div class="form__group field">
            <input
                onKeyDownCapture={
                    (e) => KeyPress(e)
                }
                type={props.type || "input"}
                class="form__field"
                placeholder={props.placeholder}
                name={props.name}
                id={props.id}
                required
                onChange={
                    (e) => onChange(e)
                } 
                disabled={props.disabled}
                />
            <label for="name" class="form__label">{props.label}</label>
            {props.error ? <div class="error-message">{props.error}</div> : undefined}
        </div>
    )
};