import React from "react";

const WorkExperience = ({startDate, endDate, title, subtitle}) => {
    return (
        <div className="w-full flex flex-col my-8 *:py-2">
            <div className={"flex flex-col sm:flex-row *:sm:min-w-[55%] "}>
                <div className={"flex items-center sm:justify-center "}>
                    <span className={"text-gray-500 text-[15px]"}>{startDate} - {endDate}</span>
                </div>
                <div className={"flex flex-col *:py-2"}>
                    <span className={"text-black text-[17px] font-bold"}>{title}</span>
                    <span className={"opacity-50 text-black text-[17px]"}>{subtitle}</span>
                </div>
            </div>
            <span>
                 <hr className="bg-gray-500 mt-10 shadow"/>
            </span>
        </div>
    )
}

export default WorkExperience;