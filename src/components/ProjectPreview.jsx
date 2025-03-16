import React from "react";
import Image from "next/image";

const ProjectPreview = ({styles, project}) => {
    return (
        <div className={`${styles} flex flex-col group gap-4 py-4 text-lapis max-w-[450px] font-manrope`}>
            <a href={project.link ? project.link : "#"}
               onClick={(e) => !project.link && e.preventDefault()}>
                <div className={"relative group-hover:scale-110 transition-transform ease-in-out duration-300 "}>
                    <div className={"absolute rounded-xl inset-0 bg-black bg-opacity-50 text-white flex items-center justify-center text-lg font-semibold transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100 z-10"}>
                        { project.link ? "Click To Learn More" : "Coming Soon!" } 
                    </div>
                    <Image
                        className={"rounded-xl object-cover max-h-60 max-w-full z-[1]"}
                        src={project.image}
                        alt={project.title}
                    />
    
                </div>
                <div className={"text-2xl font-bold pt-6"}>
                    {project.title}
                </div>
                <div className={"flex flex-wrap gap-4 my-4"}>
                    {Object.keys(project.tags).map((key) => {
                        return (
                            <div key={key} className={"bg-sand rounded-full px-3 py-0.5 font-bold text-lg"}>
                                {project.tags[key]}
                            </div>
                        );
                    })}
                </div>
                <div className={"font-medium"}>
                    {project.description}
                </div>
            </a>
        </div>
    )
}

export default ProjectPreview;