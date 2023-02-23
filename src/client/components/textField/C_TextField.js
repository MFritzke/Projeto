import React from "react";
import "./style.scss";

export default function C_TextField(props) {

    function onChange(e) {
        props.onChange(e)
    }

    return (
        <div class="form__group field">
            <input
                type={props.type || "input"}
                class="form__field"
                placeholder={props.placeholder}
                name={props.name}
                id={props.id}
                required
                onChange={
                    (e) => onChange(e)
                } />
            <label for="name" class="form__label">{props.label}</label>
            {props.error ? <div class="error-message">{props.error}</div> : undefined}
        </div>
    )
};