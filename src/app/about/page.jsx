import Image from "next/image";
import aboutCover from '/public/images/aboutCoverImage.JPG';
import wave from '/public/images/Wave.svg';
import Title from "../../components/Title";
import React from "react";
import WorkExperience from "../../components/WorkExperience";
import AutoplayCarousel from "@/components/AutoplayCarousel";

export default function About() {
    return (
        <main className={"bg-white flex flex-col"}>
            <div className={"mx-[10%] md:mx-[15%]"}>
                <div className={"mt-40"}>
                    <div>
                        <Title
                            title={"About Celeste Lu"}
                            subtitle={"PRODUCT DESIGNER & MATCHA LOVER"}
                        />
                        <div className={"relative -mx-[12.5%] lg:mx-0 md:hidden"}>
                            <Image
                                className={"h-52 object-cover mb-6"}
                                src={aboutCover}
                                alt={"Cherry Blossom"}
                            />
                        </div>
                        <span className={"flex flex-col pb-4 *:mt-3 lg:mx-[10%] 2xl:mx-[20%]"}>
                            <Image
                                className={"hidden md:block h-52 object-cover md:h-52 md:rounded-2xl mb-6"}
                                src={aboutCover}
                                alt={"Cherry Blossom"}
                            />
                            <p className={"font-bold text-[20px] text-black flex flex-row"}>
                                Hello, I'm Celeste! 
                                <Image
                                    className={"ml-2"}
                                    src={wave}
                                    alt={"Waving Emoji"}
                                />
                            </p>
                            <div className={"*:text-[15px] *:pb-4 text-black mb-4"}>
                                <p>
                                    I'm a full-stack product designer with a background in <span
                                    className={"font-bold"}>design and 
                                    psychology</span>, dedicated to creating designs that positively impact people and 
                                    strengthen the community around me.
                                </p>
                                <p>
                                    I am an <a
                                    className={"underline"} href="https://www.16personalities.com/infj-personality"
                                    target="_blank">INFJ</a> who loves
                                    empathizing with others and creating beautiful, effortless, and meaningful user 
                                    experiences. I always design with intention, supporting my actions with thorough user research.
                                </p>
                            </div>
                                
                            <p className={"font-bold text-[20px] text-black flex flex-row"}>
                                What I Do For Fun!
                            </p>
                            <div className={"*:text-[15px] *:pb-4 text-black mb-8"}>
                            <p>
                                In my free time, In my free time, I love capturing life's little moments through photography. Whether I'm snapping pictures of the things that I cook to the flowers on the side of the road, I always <span
                                className={"font-bold"}> find beauty to appreciate around me.</span> I also have a passion for traveling, diving into new books, cooking, baking, and playing video games. 
                            </p>
                            <p>
                                <span className={"font-bold"}>Let's be friends!</span> You can find me on <a
                                className={"underline"} href="https://www.linkedin.com/in/celestelu/"
                                target="_blank">LinkedIn</a> or contact me
                                at <a className={"underline"}
                                      href="mailto:celestechanglu@gmail.com">celestechanglu@gmail.com</a> :)
                            </p>
                            </div>
                        </span>
                    </div>
                    <div className={"mb-24"}>
                        <Title
                            title={"A Look Through My Lens"}
                            subtitle={"PHOTOGRAPHY"}
                        />

                        <div className={"-mx-[12%] md:-mx-[21.4%]"}>
                            <AutoplayCarousel/>
                        </div>
                        
                        
                    </div>
                    <div>
                        <Title
                            title={"My Work Experiences"}
                        />
                        <WorkExperience
                            startDate={"Aug 2024"}
                            endDate={"Nov 2024"}
                            title={"GBCS"}
                            subtitle={"UI/UX Product Designer"}
                        />
                        <WorkExperience
                            startDate={"March 2024"}
                            endDate={"Aug 2024"}
                            title={"The Kool Hair Studio"}
                            subtitle={"Freelance Designer"}
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
            </div>

        </main>
    );
}