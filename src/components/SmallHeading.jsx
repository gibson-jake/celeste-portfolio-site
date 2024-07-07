import React from "react";

const SmallHeading = ({text, styles}) => {
    return (
        <span className={`opacity-50 text-black font-bold text-[11px] tracking-[0.15em] ${styles}`}>{text}</span>
    )
}

export default SmallHeading;