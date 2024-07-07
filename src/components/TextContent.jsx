import React from "react";

const TextContent = ({text, styles}) => {
    return (
        <span className={`text-black text-xl ${styles}`}>{text}</span>
    )
}

export default TextContent;