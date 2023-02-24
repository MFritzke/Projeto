import React, { useContext } from "react";
import { AuthContext } from "../../contest/AuthContest";

export default function Home() {

    const { user, setUser } = useContext(AuthContext)
    console.log("🥶 --> file: HomePage.js:7 --> Home --> user:", user)

    return (
        <div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: 200 }}>
                teste
            </div>
        </div>
    );
}