import React from "react";
import SmallHeading from "@/components/SmallHeading";
import TextContent from "@/components/TextContent";
import Bold from "@/components/Bold";

const WrittenSection = ({header, title, content, className}) => {
    return (
        <div className={`${className} w-full flex flex-col pb-4`}>
            <SmallHeading text={header} styles={header ? "pt-6 pb-2"  : ""} />
            <Bold text={title} styles={title ? "py-6" : ""}/>
            <TextContent text={content} styles={content ? "py-4" : ""}/>
        </div>
    )
}

export default WrittenSection;