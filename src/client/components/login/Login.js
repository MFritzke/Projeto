import React, { useEffect, useState } from "react";
import C_Button from "../button/C_Button";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { firebase, auth } from '../../../serveice/Firebase'

export default function Login() {

    const [user, setUser] = useState();
    useEffect(() => {

        auth.onAuthStateChanged(user => {
            if (user) {
                const { uid, displayName, photoURL, email } = user;

                setUser({
                    id: uid,
                    avatar: photoURL,
                    name: displayName,
                    email
                })
                console.log(user);
                return toast.success("Login efetuado com sucesso!", {
                    position: "bottom-center",
                    autoClose: 800,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: false,
                    theme: "colored",
                })
            } else {
                return toast.warn("Sessão não iniciada, favor efetuar o login", {
                    position: "bottom-center",
                    autoClose: 3000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: false,
                    theme: "colored",
                })
            }
        })
    }, [])

    const googleLogin = async () => {

        const provider = new firebase.auth.GoogleAuthProvider;

        const result = await auth.signInWithPopup(provider);

        if (result.user) {

            const { uid, displayName, photoURL, email } = result.user;

            setUser({
                id: uid,
                avatar: photoURL,
                name: displayName,
                email
            })
            console.log(user);

            toast.success("Login efetuado com sucesso!", {
                position: "bottom-center",
                autoClose: 800,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: false,
                theme: "colored",
            })
        } else {
            toast.warn("Sessão não iniciada, favor efetuar o login", {
                position: "bottom-center",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: false,
                theme: "colored",
            })
        }
    };

    return (
        <div style={{ width: "100%", height: "100vh", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", backgroundColor: "#e5e5e5" }} >
            <div style={{ width: 730, height: 540, backgroundColor: "white", borderRadius: 10, display: "flex", flexDirection: "column" }}>
                <div style={{ alignItems: "center", display: "flex", flexDirection: "column" }}>
                    <p style={{ marginLeft: "3vh", fontSize: 30, fontFamily: "inherit", fontWeight: "bold" }}>
                        BEM VINDO AO SISTEMA
                    </p>
                </div>
                <div style={{ display: "flex", justifyContent: "center", justifyContent: "center", height: "65%", alignItems: "center" }}>
                    <C_Button label="Login with GOOGLE" onClick={googleLogin} name="loginButton" />
                </div>
            </div>
            <ToastContainer />
        </div>
    )
};