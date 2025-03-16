'use client'
import Image from "next/image";
import sandBubble from '/public/images/sandBubble.svg';
import sandHeart from '/public/images/sandHeart.svg';
import sandWaves from '/public/images/sandWaves.svg';
import largeSandWaves from '/public/images/largeSandWaves.svg';
import mistBlob from '/public/images/mistBlob.svg';
import flowerBorder from '/public/images/flowerBorder.svg'
import coverPhoto from '/public/images/CoverPhoto.png'
import flower from '/public/images/Flower.svg'
import { Projects } from "@/collections/Projects";
import ProjectPreview from "../components/ProjectPreview";
import React from "react";
import mistWave from "../../public/images/mistWaves.svg";

export default function Home() {
    return (
    <main className={"bg-white flex flex-col"}>
        <div className={"flex flex-col lg:flex-row mt-24 lg:mt-64 lg:mb-40 overflow-hidden"}>
            <div className={"text-lapis text-3xl sm:text-5xl sm:leading-tight font-semibold mx-auto my-14 sm:my-20"}>
                <div>{"hello there,"}</div>
                <div className={"flex flex-row gap-2 sm:gap-4"}>
                    <div className={"relative w-fit"}>{"celeste"}
                        <Image className={"absolute"} src={largeSandWaves} alt={"squiggle"}/>
                    </div>
                    <div> here</div>
                    <Image className={"relative top-1 sm:w-10 md:top-2.5"} src={sandHeart} alt={"heart"}/>
                </div>
                <div>{`so happy to see you!`}</div>
            </div>
            <div className={"relative max-w-[80%] w-[450px] sm:max-w-[50%] lg:w-[450px] lg:max-w-[30%] mx-auto"}>
                <Image className={"w-full h-full object-cover lg:object-fill"} src={flowerBorder} alt={"Cover Photo Border"}/>
                <Image className={"absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[85%]"}
                        loading={"eager"}
                       src={coverPhoto} alt={"Cover Photo"}/>
                <Image className={"absolute bottom-3/4 lg:bottom-[70%] xl:bottom-[75%] left-[77%] xl:left-[80%] sm:w-24"} src={flower} alt={"Flower"}/>
                <div className={"absolute bottom-[70%] -left-7 w-fit rounded-full bg-lapis text-white text-xl px-4 pb-1 sm:text-3xl lg:text-4xl sm:px-6 sm:pb-2.5 sm:pt-1 font-semibold shadow-[0px_5px_12px_0px_rgba(0,0,0,0.14)]"}>
                    product
                </div>
                <div className={"absolute bottom-[13%] sm:bottom-[11%] -right-7 sm:-right-12 w-fit rounded-full bg-lapis text-white text-xl sm:text-3xl lg:text-4xl px-4 pb-1 sm:px-6 sm:pb-2.5 sm:pt-1 font-semibold shadow-[0px_5px_12px_0px_rgba(0,0,0,0.14)]"}>
                    designer
                </div>
            </div>
            <div className={"w-[120%] mb-8 lg:w-0"}>
                <Image
                    className={"relative lg:absolute rotate-[12deg] lg:rotate-[40deg] object-cover h-fit w-full -mx-12 lg:mx-0 my-12 lg:-left-[50%] lg:bottom-[15%] 2xl:bottom-[30%]"}
                    src={largeSandWaves}
                    alt={"squiggle"}
                />
            </div>
        </div>
        <div className={"bg-mint mb-12 overflow-clip z-10 "}>
            <Image
                className={"relative object-cover rotate-[35deg] h-9 md:h-fit top-8 left-[20%] w-full justify-end"}
                src={mistWave}
                alt={"squiggle"}
            />
            <div className={"flex flex-col gap-2 md:gap-3 text-4xl md:text-7xl text-white mx-auto w-fit font-medium my-36 md:*:leading-tight"}>
                <div>I'm a curious</div>
                <div className={"flex flex-col lg:flex-row gap-2 lg:gap-6"}>
                    <div className={"w-fit rounded-full bg-sand text-lapis text-3xl md:text-5xl px-5 md:px-10 pb-2 md:pb-5 h-fit pt-1 md:pt-2 my-auto lg:mt-[2%] font-semibold shadow-[0px_5px_12px_0px_rgba(0,0,0,0.14)]"}>
                        product
                    </div>
                    <div className={"w-fit"}>designer,</div>
                </div>
                <div className={"flex flex-col lg:flex-row relative w-fit gap-2 lg:gap-5"}>
                    <div className={""}>
                        storyteller
                    </div>
                    <Image
                        className={"absolute -right-10 md:-right-16 -top-5 object-cover md:w-16 "}
                        src={sandBubble}
                        alt={"bubble"}
                    />
                    <div className={""}>with heart,</div>

                </div>
                <div className={"flex flex-col lg:flex-row w-fit gap-2 lg:gap-5"}>
                    <div className={""}>& an endless</div>
                    <div className={""}>explorer.</div>
                </div>
            </div>
            <Image
                className={"relative object-cover right-32 -mt-24 -mb-16"}
                src={mistBlob}
                alt={"blob"}
            />
        </div>
        <div className={"max-w-[1500px] w-fit self-center mx-4 sm:mx-10 md:mx-20"}>
            <div className={"animate-fadeIn mx-auto mt-16 lg:mt-24"}>
                <div className={"flex flex-wrap text-4xl font-semibold text-lapis gap-2 pb-5"}>
                    <div>{"my"}</div>
                    <div className={"relative w-fit"}>{"handcrafted"}<Image className={"absolute"} src={sandWaves} alt={"squiggle"}/></div>
                    <div>{`collection`}</div>
                    <Image className={"relative top-1"} src={sandHeart} alt={"heart"}/>
                </div>
                <div className={"text-lapis text-xl"}>
                    created with passion / precision, fueled by countless cups of matcha 🍵
                </div>
                <div className={"flex flex-wrap gap-10 my-10 lg:mt-20 lg:mb-28 mx-auto justify-center"}>
                    {Object.keys(Projects).map((key) => {
                        return (
                            <ProjectPreview
                                key={key}
                                project={Projects[key]}
                            />
                        );  
                    })}
                </div>
            </div>
        </div>
    
    </main>
    );
}
