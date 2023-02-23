import React from "react";
import "./style.css";

export default function C_Button(props) {

    function onClick(e) {
        props.onClick(e);
    }


    return (
        <div>
            <button onClick={(e)=> onClick(e)} name={props.name} class="defaultButton" role="button">{props.label}</button>
        </div>
    )
};