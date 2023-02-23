import React, { useState } from "react";
import C_Button from "../button/C_Button";
import C_TextField from "../textField/C_TextField";
import api from "../../../Api";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom'
import Tela from "../../../pages/Tela";

export default function Login() {

    const [user, setUser] = useState(undefined);
    const [password, setPass] = useState(undefined);
    const [inputError, setInputError] = useState(undefined);
    const [inputErrorMessage, setInputErrorMessage] = useState(undefined);
    const [next, showNext] = useState(false);

    function onChange(e) {
        setInputError(false);
        if (e.target.name === "user") {
            setUser(e.target.value);
        }
        if (e.target.name === "password") {
            setPass(e.target.value);
        }
    }

    function Login_(e) {

        if (!user || !password) {
            setInputError(true);
            return setInputErrorMessage("Todos os campos devem ser preenchidos corretamente.");
        }

        const data = {
            user,
            password
        };

        api.post('login', data).then(res => {
            console.log("🥶 --> file: Login.js:39 --> api.post --> res:", res)

            if (res?.data?.Error) {
                return toast.error(res.data.Error, {
                    position: "bottom-center",
                    autoClose: 3000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: false,
                    theme: "colored",
                });
            }

            toast.success("Login efetuado com sucesso!", {
                position: "bottom-center",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: false,
                theme: "colored",
            })
        });
    }

    return (
        <div style={{ width: "100%", height: "100vh", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", backgroundColor: "#e5e5e5" }} >
            <div style={{ width: 730, height: 540, backgroundColor: "white", borderRadius: 10, display: "flex", flexDirection: "column" }}>
                <div style={{ alignItems: "center", display: "flex", flexDirection: "column" }}>
                    <p style={{ marginLeft: "3vh", fontSize: 30, fontFamily: "inherit", fontWeight: "bold" }}>
                        BEM VINDO AO SISTEMA
                    </p>
                </div>
                <div style={{ alignItems: "center", display: "flex", flexDirection: "column", marginTop: "10%" }}>
                    <C_TextField label="Usuário" id="user" required name="user" onChange={(e) => { onChange(e) }} />
                    <C_TextField error={inputError ? inputErrorMessage : undefined} label="Senha" id="password" required name="password" type="password" onChange={(e) => { onChange(e) }} />
                </div>
                <div style={{ display: "flex", justifyContent: "flex-end", marginTop: inputError ? "22.2%" : "25%", marginRight: 4 }}>
                    <C_Button label="Login" onClick={Login_} name="loginButton" />
                </div>
            </div>
            <ToastContainer />
        </div>
    )
};