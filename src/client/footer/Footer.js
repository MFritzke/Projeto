import React from "react";
import Hour from "../components/displayHour/DisplayHour";

export default function Footer() {
    return (
        <div style={{ height: 30, backgroundColor: "white", display: "flex", position: "absolute", width: "100%", bottom: 0 }} >
            <div style={{ marginLeft: 51, textAlign: "center", display: "flex", alignItems: "center", width: "100%", justifyContent: "center", color: "red" }}>
                footer
            </div>
            <div style={{ marginRight: 15, display: "flex", alignItems: "center" }}>
                <Hour />
            </div>
        </div>
    )
};