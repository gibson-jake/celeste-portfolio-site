import React from "react";

const Bold = ({text, styles}) => {
    return (
        <span className={`font-bold text-black text-xl ${styles}`}>{text}</span>
    )
}

export default Bold;