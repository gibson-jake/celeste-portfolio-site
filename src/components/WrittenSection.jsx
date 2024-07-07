import React from "react";
import SmallHeading from "@/components/SmallHeading";
import TextContent from "@/components/TextContent";
import Bold from "@/components/Bold";

const WrittenSection = ({header, title, content}) => {
    return (
        <div className="w-full flex flex-col pb-4">
            <SmallHeading text={header} styles={header ? "pt-6 pb-4" : ""} />
            <Bold text={title} styles={title ? "py-2" : ""}/>
            <TextContent text={content} styles={content ? "py-2" : ""}/>
        </div>
    )
}

export default WrittenSection;