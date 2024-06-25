import React from "react";
import Image from "next/image";
import arrowIcon from "/public/images/Arrow.svg";

const ProjectPreview = ({title, description, tags, callToAction, imageSource}) => {
    return (
        <div className={"sm:w-[80%] 2xl:w-1/2 mx-4 my-16 md:m-16"}>
            <div className={"mb-6"}>
                <div className={"flex flex-col md:flex-row gap-6"}>
                    <div className={"flex flex-col gap-4 font-bold md:w-[45%]"}>
                        <span className={"text-3xl text-black md:h-[75%]"}>{title}</span>
                        <span className={"opacity-50 text-black text-[13px] tracking-widest mb-1"}>{tags}</span>
                    </div>
                    <div className={"flex flex-col gap-8 md:w-[55%]"}>
                        <span className={"text-black text-xl"}>{description}</span>
                        <a className={"hidden md:flex flex-row gap-2 align-bottom "}>
                            <Image
                                className={""}
                                src={arrowIcon}
                                alt="arrow"
                                width={40}
                                height={40}
                            />
                            <span className={" text-black text-xl font-bold leading-relaxed"}>{callToAction}</span>
                        </a>
                    </div>
                </div>
            </div>
            <Image
                className={"rounded-3xl"}
                src={imageSource}
                alt="cover"
            />
            <a className={"md:hidden flex flex-row gap-2 align-bottom pt-6"}>
                <Image
                    className={""}
                    src={arrowIcon}
                    alt="arrow"
                    width={40}
                    height={40}
                />
                <span className={" text-black text-xl font-bold leading-relaxed"}>{callToAction}</span>
            </a>
        </div>
    )
}

export default ProjectPreview;