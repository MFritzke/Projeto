import React, { useEffect, useState } from "react";

export default function Hour() {

    const [date, setDate] = useState(new Date())

    useEffect(() => {
        setTime();
    }, [date])

    function setTime() {
        setTimeout(() => {
            setDate(new Date())
        }, 1000);
    }

    return (
        <div>
            {(date.getHours() > 9 ? date.getHours() : "0" + date.getHours())
            + ':' +
            (date.getMinutes() > 9 ? date.getMinutes() : "0" + date.getMinutes())
            + ':' +
            (date.getSeconds() > 9 ? date.getSeconds() : "0" + date.getSeconds())}
        </div>
    )
}