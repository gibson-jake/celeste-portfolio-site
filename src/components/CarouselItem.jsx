import React from "react";
import Image from "next/image";

export default function CarouselItem({ imgUrl, imgTitle }) {
    return (
        <div className="justify-center align-middle h-auto w-[300px]">
            <Image 
                className={"rounded"}
                src={imgUrl} 
                alt={imgTitle}
            />
        </div>
    );
}