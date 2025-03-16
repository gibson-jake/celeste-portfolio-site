import Image from "next/image";
import cover from '/public/images/tkhsPage/Cover.png';
import coverDark from '/public/images/tkhsPage/coverDark.png';
import brandGuide from '/public/images/tkhsPage/brandGuide.svg';
import iterations from '/public/images/tkhsPage/iterations.svg';
import finalCollage from '/public/images/tkhsPage/finalCollage.png';
import finalWindow from '/public/images/tkhsPage/finalWindow.png';
import Title from "../../components/Title";
import React from "react";
import WrittenSection from "@/components/WrittenSection";
import MoreToExplore from "@/components/MoreToExplore";

export default function Tkhs() {
    return (
        <main className={"bg-white flex flex-col"}>
            <div className={"mx-[5%] md:mx-[7.5%] 2xl:mx-[25%]"}>
                <div className={"mt-40"}>
                    <Title title={"The Kool Hair Studio"}
                           subtitle={"LOGO & BRAND DESIGN"}/>
                    <Image
                        className={"items-center object-cover max-h-40 sm:max-h-64 md:max-h-80 lg:max-h-[450px] xl:max-h-[600px] m-auto rounded-lg sm:rounded-2xl lg:rounded-3xl mb-4 lg:mb-16"}
                        src={cover}
                        alt=""
                    />
                    <WrittenSection
                        className={"md:px-16 lg:px-24 md:mb-6"}
                        title={"Building a Brand from the Ground Up"}
                        content={<>
                            I had the incredible opportunity to work with The Kool Hair Studio, a new barbershop located in the heart of San Jose, CA. The company required a fully developed brand identity for their grand opening. I was responsible for creating all of their graphics and building their brand identity from the ground up. Here’s how it all came together!
                        </>}
                    />
                    <Image
                        className={"items-center object-cover max-h-40 sm:max-h-64 md:max-h-80 lg:max-h-[450px] xl:max-h-[600px] m-auto rounded-lg sm:rounded-2xl lg:rounded-3xl mb-4 lg:my-16"}
                        src={coverDark}
                        alt=""
                    />
                    <WrittenSection
                        className={"md:px-16 lg:px-24 md:mb-6"}
                        title={"Brand Design Process"}
                        content={
                            <ol className={"list-decimal *:pb-8 ml-5"}>
                                <li>
                                    I started by understanding the client’s vision, discussing their brand goals, and
                                    building trust. I created mood boards and guided them in selecting styles that best
                                    represented their brand.
                                </li>
                                <li>
                                    Once we established a clear direction, I designed initial logo concepts, selected typography, and developed branding elements, breaking down each choice to ensure alignment with their vision.
                                </li>
                                <li>
                                    After presenting the drafts, I gathered feedback and refined the designs, making necessary adjustments to perfect the brand identity.
                                </li>
                                <li>
                                    With the final designs approved, I organized and delivered all assets, ensuring they were ready for use across signage, merchandise, and digital platforms.
                                </li>
                            </ol>
                        }
                    />
                    <Image
                        className={"m-auto mb-4"}
                        src={brandGuide}
                        alt=""
                    />
                    <WrittenSection
                        className={"md:px-16 lg:px-24 lg:mb-8"}
                        title={"Logo Iterations"}
                        content={<>
                            I designed over 15 logo iterations, and after my client selected their favorite, I refined it further, ensuring it had versatile variations optimized for different media and sizes.
                        </>}
                    />
                    <Image
                        className={"m-auto mb-4 lg:mb-8"}
                        src={iterations}
                        alt=""
                    />
                    <WrittenSection
                        className={"md:px-16 lg:px-24 md:mb-6 lg:mb-12"}
                        title={"Versatile Branding- Adapting the Logo for Every Platform"}
                        content={<>
                            Once the logo was finalized with the client, I created multiple variations tailored for dark mode and light mode, as well as adaptations for storefront signage, business cards, and other branding materials.
                        </>}
                    />
                    <Image
                        className={"m-auto mb-12 sm:mb-20 w-[500px] max-w-full rounded-lg md:rounded-3xl"}
                        src={finalCollage}
                        alt=""
                    />
                    <Image
                        className={"m-auto rounded-lg md:rounded-3xl sm:mb-20 max-h-40 sm:max-h-64 md:max-h-80 lg:max-h-[500px] object-cover"}
                        src={finalWindow}
                        alt=""
                    />
                    <WrittenSection
                        className={"md:px-16 lg:px-24 "}
                        title={"Takeaways"}
                        content={<>
                            Some of the greatest lessons I’ve learned working with a direct client include the importance of clear and thorough communication. Understanding exactly what the client envisions requires asking the right foundational questions before even beginning the design process. This step is crucial to the project’s success, as it helps set clear expectations, align creative direction, and prevent unnecessary revisions down the line. Strong communication builds trust, streamlines the workflow, and ensures the final product is both visually compelling and strategically effective.
                        </>}
                    />
                    <MoreToExplore/>
                </div>
            </div>

        </main>
    );
}