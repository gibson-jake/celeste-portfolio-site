import React from "react";

const Title = ({title, subtitle}) => {
    return (
        <div className="w-full justify-center flex flex-col text-center *:py-3 my-8">
            <span className={"text-black text-3xl font-bold"}>{title}</span>
            <span className={"opacity-50 text-black font-bold text-[11px] tracking-[0.15em]"}>{subtitle}</span>
        </div>
    )
}

export default Title;