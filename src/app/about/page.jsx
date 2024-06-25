import Image from "next/image";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import aboutCover from '/public/images/aboutCoverImage.JPG';
import wave from '/public/images/Wave.svg';
import mtFuji from '/public/images/MtFuji.JPG';
import Title from "../../components/Title";
import React from "react";
import WorkExperience from "../../components/WorkExperience";

export default function About() {
    return (
        <main className={"bg-white flex flex-col"}>
            <div className={"mx-[10%] md:mx-[15%]"}>
                <Navbar/>
                <div className={"mt-40"}>
                    <div>
                        <Title
                            title={"About Celeste Lu"}
                            subtitle={"PRODUCT DESIGNER"}
                        />
                        <div className={"relative -mx-[12.5%] lg:mx-0"}>
                            <Image
                                className={"h-52 object-cover md:h-72 md:rounded-3xl"}
                                src={aboutCover}
                                alt={"Cherry Blossom"}
                            />
                        </div>

                        <span className={"flex flex-col mt-6 *:mt-4 sm:mx-[10%] lg:mx-[30%]"}>
                            <p className={"font-bold text-[20px] text-black flex flex-row"}>
                                Hello, I'm Celeste! 
                                <Image
                                    className={"ml-2"}
                                    src={wave}
                                    alt={"Cherry Blossom"}
                                />
                            </p>
                            <div className={"flex flex-row *:shadow *:text-[8.5px] sm:*:text-[12px] *:font-bold *:text-white *:bg-tagColor *:rounded-2xl *:md:py-1 md:*:px-2 *:px-2 *:mx-1 *:leading-5"}>
                                <span>
                                    ADVOCATE
                                </span>
                                <span >
                                    CONSCIENTIOUS
                                </span>
                                <span>
                                    DILIGENT
                                </span>
                                <span>
                                    SUPPORTIVE
                                </span>
                            </div>
                            <div className={"*:text-[15px] *:pb-4 text-gray-500 mb-8"}>
                                <p>
                                    I'm a full-stack designer with a background in <span className={"font-bold"}>design and 
                                    psychology</span>, dedicated to creating designs that positively impact people and 
                                    strengthen the community around me.
                                </p>
                                <p>
                                    I am an <span className={"underline"}>INFJ</span> who loves <span
                                    className={"font-bold"}>
                                    empathizing with others</span> and creating beautiful, effortless, and meaningful user 
                                    experiences. I always design with intention, supporting my actions with <span
                                    className={"font-bold"}>thorough user research.</span>
                                </p>
                                <p>
                                    In my free time, you can find me traveling, doing photography, diving into new books,
                                    cooking, baking, playing video games, and spending time with my family and friends. I
                                    love experiencing new and exciting things and sharing them with others!
                                </p>
                                <p>
                                    <span className={"font-bold"}>Let's be friends!</span> You can find me on <a className={"underline"} href="https://www.linkedin.com/in/celestelu/" target="_blank">LinkedIn</a> or contact me
                                    at <a className={"underline"} href="mailto:celestechanglu@gmail.com">celestechanglu@gmail.com</a> :)
                                </p>
                            </div>
                        </span>
                    </div>
                    <div className={"mb-24"}>
                        <Title
                            title={"A Look Through My Lens"}
                            subtitle={"PHOTOGRAPHY"}
                        />

                        <Image
                            className={"rounded-2xl"}
                            src={mtFuji}
                            alt={""}
                        />
                    </div>
                    <div>
                        <Title
                            title={"My Work Experiences"}
                        />
                        <WorkExperience
                            startDate={"April 2024"}
                            endDate={"Present"}
                            title={"The Kool Hair Studio"}
                            subtitle={"Brand & Graphic Designer"}
                        />
                        <WorkExperience
                            startDate={"March 2023"}
                            endDate={"April 2024"}
                            title={"Google Developers Student Clubs"}
                            subtitle={"Vice President & Design Director"}
                        />
                        <WorkExperience
                            startDate={"Jan 2023"}
                            endDate={"June 2023"}
                            title={"#include"}
                            subtitle={"Product Designer"}
                        />
                        <WorkExperience
                            startDate={"Sept 2021"}
                            endDate={"Dec 2021"}
                            title={"Botanik Herbs & Tea"}
                            subtitle={"Graphic Designer & Photographer"}
                        />
                        <WorkExperience
                            startDate={"June 2019"}
                            endDate={"Sept 2019"}
                            title={"City and County of San Francisco"}
                            subtitle={"Contract Monitoring Division Intern"}
                        />
                        <WorkExperience
                            startDate={"Jan 2019"}
                            endDate={"June 2019"}
                            title={"TEF Design"}
                            subtitle={"Architectural Intern"}
                        />
                    </div>

                </div>
                <Footer/>
            </div>

        </main>
    );
}