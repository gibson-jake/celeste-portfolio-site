import Image from "next/image";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import post1 from '/public/images/fun/Post1.svg';
import post2 from '/public/images/fun/Post2.svg';
import post3 from '/public/images/fun/Post3.svg';
import post4 from '/public/images/fun/Post4.svg';
import post5 from '/public/images/fun/Post5.png';
import post6 from '/public/images/fun/Post6.svg';
import concertPoster from '/public/images/fun/ConcertPoster.png';
import aboveMatcha from '/public/images/fun/AboveMatchaShot.png';
import sideMatcha from '/public/images/fun/SidewaysMatchaShot.png';
import Title from "../../components/Title";
import React from "react";
import WrittenSection from "@/components/WrittenSection";
import MoreToExplore from "@/components/MoreToExplore";

export default function fun() {
    return (
        <main className={"bg-white flex flex-col min-h-screen min-w-screen"}>
            <div className={"mx-[10%] md:mx-[15%] 2xl:mx-[25%] "}>
                <Navbar/>
                <div className={"mt-40"}>
                    <Title title={"More Of My Work"}
                           subtitle={"THINGS I MADE FOR FUN!"}
                    />
                    <Image
                        className={"items-center m-auto mb-8 md:hidden"}
                        src={post1}
                        alt=""
                    />
                    <div className={"flex flex-col md:gap-10 md:flex-row md:place-content-between"}>
                        <WrittenSection
                            className={"lg:max-w-[28%] md:max-w-[40%]"}
                            title={"Google Developer Student Club Posts"}
                            header={"GRAPHIC DESIGNS"}
                            content={<>
                                At GDSC, I was responsible for all graphic design and social media posts. I loved
                                representing the community through meaningful and visually appealing
                                content. <br/><br/> Using my creative vision to expand and enhance our community was a
                                truly rewarding experience. Here are some of my favorite designs!
                            </>}
                        />
                        <div className={"md:max-w-[60%] w-fit md:*:gap-4 m-auto md:m-0"}>
                            <div className={"flex flex-col md:flex-row"}>
                                <Image
                                    className={"items-center md:w-[50%] mb-8 hidden md:block"}
                                    src={post1}
                                    alt=""
                                />
                                <Image
                                    className={"items-center md:w-[50%] w-fit mb-8"}
                                    src={post2}
                                    alt=""
                                />
                            </div>
                            <div className={"flex flex-col md:flex-row"}>
                                <Image
                                    className={"items-center md:w-[50%] h-auto mb-8"}
                                    src={post3}
                                    alt=""
                                />
                                <Image
                                    className={"items-center md:w-[50%] h-auto mb-8"}
                                    src={post4}
                                    alt=""
                                />
                            </div>
                            <div className={"flex flex-col md:flex-row"}>
                                <Image
                                    className={"items-center md:w-[50%] h-auto mb-8"}
                                    src={post5}
                                    alt=""
                                />
                                <Image
                                    className={"items-center md:w-[50%] h-auto mb-8"}
                                    src={post6}
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>

                    <div className={"flex flex-col md:gap-10 md:flex-row md:place-content-between pt-16 md:pt-32"}>
                        <WrittenSection
                            className={"lg:max-w-[28%] md:max-w-[40%]"}
                            title={"Jeremy Zucker Concert Poster"}
                            header={"GRAPHIC DESIGN"}
                            content={<>
                                I created this concert poster for one of my favorite artists using Adobe Illustrator and
                                Photoshop.
                                <br/><br/> I believe graphic design is a fantastic medium for representing various forms
                                of art. My goal was to capture and convey the album's aesthetic and vibe through
                                graphical elements.
                            </>}
                        />
                        <div className={"md:max-w-[60%] w-fit"}>
                            <Image
                                className={"items-center"}
                                src={concertPoster}
                                alt=""
                            />
                        </div>
                    </div>

                    <div className={"flex flex-col md:gap-10 md:flex-row md:place-content-between pt-16 md:pt-32"}>
                        <WrittenSection
                            className={"lg:max-w-[28%] md:max-w-[40%]"}
                            title={"Botanik Herbs & Tea- Matcha Line"}
                            header={"PRODUCT PHOTOGRAPHY"}
                            content={<>
                                During my internship at Botanik, I had an amazing opportunity to explore my passion for photography. Here are some of my favorite shots, all captured with my Fujifilm X-T100 camera.
                                <br/><br/> This experience taught me a lot about working with a manual camera and helped hone my skills in capturing unforgettable moments and, of course, a brand’s identity.
                            </>}
                        />
                        <div className={"md:max-w-[60%] w-fit"}>
                            <div className={"flex flex-col"}>
                                <Image
                                    className={"items-center mb-8"}
                                    src={aboveMatcha}
                                    alt=""
                                />
                                <Image
                                    className={"items-center w-fit mb-8"}
                                    src={sideMatcha}
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>

                    <MoreToExplore/>
                </div>
                <Footer/>
            </div>

        </main>
    );
}