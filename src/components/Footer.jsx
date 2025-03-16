import React from "react";
import { NavigationPages } from "@/collections/NavigationPages";
import sandWave from '/public/images/sandWaves.svg';
import mistWave from '/public/images/mistWaves.svg';

import Image from "next/image";
import Link from "next/link";
const Footer = () => {
    return (
        <nav className={"relative rounded-3xl bg-mint mb-4 font-manrope overflow-clip text-white mx-[5%] "}>
            <div className={"flex flex-col lg:flex-row w-fit lg:w-full mx-auto lg:mx-0 md:justify-items-start lg:justify-evenly md:px-28 lg:px-0"}>
                <div className={"flex flex-col md:gap-3 w-fit font-semibold pt-16 lg:mb-16"}>
                    <div className={"flex flex-row text-4xl md:text-7xl"}>
                        <div>
                            Let's
                        </div>
                        <a href={`mailto:celestechanglu@gmail.com`}
                            className={"relative duration-300 hover:rotate-[0deg] transition-all hover:bottom-0 md:hover:-bottom-4 left-3 md:left-8 -rotate-[8.5deg] bottom-3.5 md:bottom-0 bg-lapis rounded-full px-8 md:px-10 py-1.5 md:py-2 h-fit text-xl md:text-3xl text-sand shadow-[0px_3.2px_8px_0px_rgba(0,0,0,0.14)]"}>
                            email me!
                        </a>
                    </div>
                    <div className={"text-4xl md:text-7xl"}>
                        Get in Touch!
                    </div>
                    <Image src={sandWave} alt={"squiggle"} className={"pb-4 w-full"}/>
                    <a href={`mailto:celestechanglu@gmail.com`} className={"text-sm text-lapis pb-1 md:pb-0"}>
                        celestechanglu@gmail.com
                    </a>
                    <div className={"text-sm text-lapis"}>
                        San Francisco, United States
                    </div>
                </div>
                <div className={"flex flex-col w-fit py-8 my-auto"}>
                    <Link href={"#top"} className={"text-lapis font-extrabold mx-auto w-fit text-xl pt-4 pb-1 md:pb-5"}>
                        Back to the Top
                    </Link>
                    {Object.keys(NavigationPages).map((key) => {
                    return (
                        <Link passHref={true} key={key} href={NavigationPages[key].link}>
                            <div className={"pb-1 md:pb-1.5"} >
                                {NavigationPages[key].text}
                            </div>
                        </Link>
                    );
                    })}
                </div>
            </div>
            <Image
                className={"absolute object-cover -rotate-[21.5deg] md:-rotate-[37deg] lg:-rotate-[26deg] w-full left-12 md:left-48 lg:left-[25%] bottom-4 md:bottom-8 lg:-bottom-12"}
                src={mistWave} 
                alt={"squiggle"}
            />
        </nav>
    )
}

export default Footer; 