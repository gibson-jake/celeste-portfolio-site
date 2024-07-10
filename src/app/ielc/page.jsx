import Image from "next/image";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import cover from '/public/images/ielcPage/cover.svg';
import sample from '/public/images/ielcPage/sample.png';
import timeline from '/public/images/ielcPage/timeline.png';
import designProcess from '/public/images/ielcPage/designProcess.svg';
import competitiveAnalysis from '/public/images/ielcPage/competitiveAnalysis.svg';
import persona1 from '/public/images/ielcPage/persona1.svg';
import persona2 from '/public/images/ielcPage/persona2.svg';
import informationArchitecture from '/public/images/ielcPage/informationArchitecture.svg';
import ielcLogoCreation from '/public/images/ielcPage/ielcLogoCreation.svg';
import ielcLogoCreationLarge from '/public/images/ielcPage/ielcLogoCreationLarge.svg';
import ielcLogoSamples from '/public/images/ielcPage/ielcLogoSamples.svg';
import colors from '/public/images/ielcPage/colors.svg';
import headings from '/public/images/ielcPage/headings.svg';
import designBoard1 from '/public/images/ielcPage/designBoard1.svg';
import designBoard2 from '/public/images/ielcPage/designBoard2.svg';
import taskFlow from '/public/images/ielcPage/taskFlow.svg';
import oldIssues from '/public/images/ielcPage/oldIssues.svg';
import newImprovements from '/public/images/ielcPage/newImprovements.svg';
import applicationIncrease from '/public/images/ielcPage/applicationIncrease.svg';
import Title from "../../components/Title";
import React from "react";
import WrittenSection from "@/components/WrittenSection";
import Bold from "@/components/Bold";
import MoreToExplore from "@/components/MoreToExplore";
import HiddenBreaks from "@/components/HiddenBreaks";

export default function Ielc() {
    return (
        <main className={"bg-white flex flex-col"}>
            <div className={"mx-[10%] md:mx-[15%] 2xl:mx-[25%]"}>
                <Navbar/>
                <div className={"mt-40"}>
                    <Title title={"Interactive Elementary Learning Center"}
                           subtitle={"WEBSITE DESIGN・DESKTOP・MOBILE"}/>
                    <Image
                        className={"items-center w-full max-w-4xl m-auto"}
                        src={cover}
                        alt=""
                    />
                    <WrittenSection
                        header={"INTRODUCTION"}
                        content={<>
                            My team created a user-friendly website for the Interactive Elementary Learning Center
                            (IELC), a new non-profit organization dedicated to providing free summer tutoring for
                            students in grades 1-5 in Davis and Sacramento. <Bold
                            text={"We created a mobile and online platform" +
                                "where all student and tutor registrations are handled directly on our website."}/>
                        </>}
                    />
                    <div
                        className={"md:flex md:*:max-w-[50%] md:flex-wrap lg:flex-nowrap lg:flex-row md:place-content-between *:w-auto lg:*:max-w-[33%] xl:*:max-w-[45%]"}>
                        <WrittenSection
                            header={"MY ROLE"}
                            content={<>
                                I was responsible for user research and analysis, brand development, creating design
                                systems
                                visual identity, and product design.
                            </>}
                        />
                        <WrittenSection
                            header={"TIMELINE"}
                            content={<>
                                February — March 2023;<br/>
                                Launch in April 2023
                            </>}
                        />
                        <WrittenSection
                            header={"TOOLS"}
                            content={<>
                                Figma, Slite, Notion
                            </>}
                        />
                    </div>
                    <Image
                        className={"m-auto"}
                        src={sample}
                        alt=""
                    />
                    <WrittenSection
                        header={"PROBLEM STATEMENT"}
                        content={<>
                            IELC is a brand-new tutoring company aiming to improve access to free summer tutoring for
                            elementary students. However, they lacked a platform to streamline student and tutor
                            sign and showcase their services. To tackle this, I created a problem
                            statement: <HiddenBreaks/>
                            <Bold text={` "How can we design a website that establishes credibility, reliability,
                            professionalism, while also serving as the primary application platform?" `}/>
                            <HiddenBreaks/>
                            Let's break it down!
                        </>}
                    />
                    <WrittenSection
                        header={"BREAKDOWN OF THE CHALLENGE"}
                    />
                    <div className={"md:flex md:*:w-[45%] md:place-content-between md:flex-wrap"}>
                        <WrittenSection
                            title={"Building Brand Identity from Scratch 🌱"}
                            content={<>
                                I need to build a brand identity from scratch, despite limited resources and the lack
                                of existing brand imagery and testimonials.
                            </>}
                        />
                        <WrittenSection
                            header={``}
                            title={"Mission and Goals 🚀"}
                            content={<>
                                I want to ensure that the project aligns with and highlights the core mission and goals
                                of the company.
                            </>}
                        />
                        <WrittenSection
                            title={"Credibility and Professionalism 💼"}
                            content={<>
                                I must create a platform that establishes credibility and professionalism for the
                                organization.
                            </>}
                        />
                    </div>
                    <hr className="bg-rose-100 h-7 my-4"/>
                    <WrittenSection
                        header={"PROJECTED TIMELINE"}
                        title={"Planning for Success"}
                        content={<>
                            Before diving into research or mockups, I first created an outline for each design stage I
                            would follow. I've learned that mapping out a timeline is crucial for achieving all my goals
                            within a specific timeframe. The site needed to be fully developed in under 8 weeks.
                        </>}
                    />
                    <Image
                        className={"m-auto"}
                        src={timeline}
                        alt=""
                    />
                    <WrittenSection
                        header={"DESIGN PROCESS"}
                        title={"Designing All Starts with a Blueprint"}
                        content={<>
                            I've also learned that an essential step before designing is to outline my design process.
                            Breaking down each stage helps to strengthen my workflow an ensure a thorough approach
                        </>}
                    />
                    <Image
                        className={"m-auto"}
                        src={designProcess}
                        alt=""
                    />
                    <hr className="bg-rose-100 h-7 my-4"/>
                    <WrittenSection
                        header={"STAGE 1 - USER RESEARCH"}
                        title={"Understanding my Audience"}
                        content={"I started the project by diving into research, conducting a competitive analysis, creating" +
                            "user personas, an information architecture, and mapping out task flows. This active engagement" +
                            "helped me empathize with our client and potential users."}
                    />
                    <div className={"lg:flex lg:flex-row"}>
                        <Image
                            className={"justify-center w-full lg:w-1/2"}
                            src={competitiveAnalysis}
                            alt=""
                        />
                        <WrittenSection
                            className={"place-content-center"}
                            content={"For the analysis, I decided to explore other tutoring and summer camp websites targeting" +
                                "a similar audience. My main research areas were: what makes the company uniquely valuable," +
                                "and aspects where their website excelled or not."}
                        />
                    </div>
                    <WrittenSection
                        content={"Some strengths of these websites including strong branding, building trust with testimonials," +
                            "and effective information chunking to engage the audience without overwhelming them. I planned" +
                            "to ensure our site incorporated these elements."}
                    />
                    <WrittenSection
                        header={"DEEP DIVE ON POTENTIAL USERS"}
                        title={"Tailoring to User Desires & Anticipations"}
                        content={"In this stage, I have learned the importance of empathizing with my users. Focusing on" +
                            "two primary user groups— prospective tutors and parents seeking tutoring for their children-" +
                            "I gained insights into their needs. Both groups prioritize clarity and straightforward language," +
                            "preferring well-organized information and ample white space to build trust in my company and website." +
                            "This understanding shaped my design decisions to meet their needs."}
                    />
                    <div className={"py-4 lg:flex lg:flex-row lg:flex-wrap *:m-auto *:w-auto"}>
                        <Image
                            className={""}
                            src={persona1}
                            alt=""
                        />
                        <Image
                            className={""}
                            src={persona2}
                            alt=""
                        />
                    </div>
                    <WrittenSection
                        header={"MAPPING THE SITE"}
                        title={"Understanding User Flows for Optimization"}
                        content={"Building an information architecture and task flow helped me focus on key pages that address" +
                            "user questions. It also guided me in placing CTA buttons strategically for smooth transitions to" +
                            "more information. Analyzing task flows emphasized the importance or understanding user needs" +
                            "and ensuring the site's effectiveness. It reinforced the significance of user-centric design" +
                            "for seamless navigation."}
                    />
                    <div className={"py-4 lg:flex lg:flex-row lg:flex-wrap *:m-auto *:w-auto"}>
                        <Image
                            className={"pb-6"}
                            src={informationArchitecture}
                            alt=""
                        />
                        <Image
                            className={""}
                            src={taskFlow}
                            alt=""
                        />
                    </div>
                    <hr className="bg-rose-100 h-7 my-4"/>
                    <WrittenSection
                        header={"STAGE 2 - BRAND DEVELOPMENT"}
                        title={"Creating a Brand Identity from Scratch"}
                        content={"After analyzing competitors, it was evident that a strong brand identity is crucial" +
                            "for each website's credibility. Therefore, I aimed to strike a balance by using colorful" +
                            "and inviting images to create an identity that revolves around education without veering too " +
                            "close to being child-like."}
                    />
                    <Image
                        className={"lg:hidden mb-6 w-auto m-auto"}
                        src={ielcLogoCreation}
                        alt=""
                    />
                    <Image
                        className={"hidden lg:block mb-6 w-auto m-auto"}
                        src={ielcLogoCreationLarge}
                        alt=""
                    />
                    <WrittenSection
                        header={"LOGO ITERATION"}
                        title={"Perfecting Visual Identity Iteratively"}
                        content={<>
                            When creating the brand identity, I refined over 15 logo options until finding the perfect
                            match, keeping the client updated throughout the process. <HiddenBreaks/> I also crafted
                            mood
                            boards anad implemented a cohesive design system encompassing colors, fonts, and
                            more. <HiddenBreaks/>
                            Prioritizing accessibility, I ensured our design was easily comprehensible, meeting
                            the
                            needs of our users who prefer clear language, easily readable text, and colors that are easy
                            on the eyes.
                        </>}
                    />
                    <Image
                        className={"py-5 m-auto"}
                        src={ielcLogoSamples}
                        alt=""
                    />
                    <WrittenSection
                        header={"DESIGN SYSTEM AND LIBRARIES"}
                        title={"Developing a Unified and Unique Design System"}
                    />
                    <div className={"flex gap-5 *:mb-4 m-auto justify-center md:flex-row flex-wrap md:flex-nowrap"}>
                        <Image
                            className={""}
                            src={colors}
                            alt=""
                        />
                        <Image
                            className={""}
                            src={headings}
                            alt=""
                        />
                    </div>
                    <div className={"flex gap-4 flex-wrap justify-center md:flex-row md:flex-nowrap"}>
                        <Image
                            className={""}
                            src={designBoard1}
                            alt=""
                        />
                        <Image
                            className={"mb-auto"}
                            src={designBoard2}
                            alt=""
                        />
                    </div>
                    <hr className="bg-rose-100 h-7 my-8"/>
                    <WrittenSection
                        header={"STAGE 3 - TESTING & IMPROVEMENTS"}
                        title={"3 Major Improvements to my Design and what I've Learned"}
                        content={<>
                            This homepage serves as a prime example of my iterative approach across every page of the
                            project. Through continuous testing and refinement, I've come to appreciate the importance
                            of iteration in creating a user-focused design. <HiddenBreaks/> Every little tweak, whether
                            it's
                            based on peer feedback, my own analysis, or A/B testing, has played a vital role in making
                            the user experience better and more engaging.
                        </>}
                    />
                    <WrittenSection
                        className={"md:*:hidden"}
                        header={"INITIAL HOMEPAGE PROTOTYPE"}
                    />
                    <div
                        className={"flex gap-5 *:mb-4 m-auto justify-center md:flex-row flex-wrap md:flex-nowrap *:overflow-auto pb-8"}>
                        <video
                            autoPlay
                            loop
                            muted
                            className={"md:max-w-[50%] max-h-[70vh]"}
                            src={"/videos/PhoneOld.mp4"}
                        />

                        <div>
                            <WrittenSection
                                className={"hidden md:block pb-8"}
                                header={"INITIAL HOMEPAGE PROTOTYPE"}
                            />
                            <Image
                                className={"overflow-auto"}
                                src={oldIssues}
                                alt=""
                            />
                        </div>
                    </div>
                    <WrittenSection
                        className={"md:hidden"}
                        header={"FINAL HOMEPAGE PROTOTYPE"}
                    />
                    <div
                        className={"flex gap-5 *:mb-4 m-auto justify-center md:flex-row flex-wrap md:flex-nowrap *:overflow-auto"}>
                        <video
                            autoPlay
                            loop
                            muted
                            className={"md:max-w-[50%] max-h-[70vh]"}
                            src={"/videos/PhoneNew.mp4"}
                        />

                        <div>
                            <WrittenSection
                                className={"hidden md:block pb-8"}
                                header={"FINAL HOMEPAGE PROTOTYPE"}
                            />
                            <Image
                                className={""}
                                src={newImprovements}
                                alt=""
                            />
                        </div>
                    </div>
                    <hr className="bg-rose-100 h-7 my-8"/>
                    <WrittenSection
                        header={"STAGE 4 - FINAL PROTOTYPE"}
                        title={"Revealing the Final Design"}
                    />
                    <video
                        autoPlay
                        loop
                        muted
                        className={"max-h-[70vh] m-auto pb-6"}
                        src={"/videos/DesktopFinal.mp4"}
                    />
                    <WrittenSection
                        header={"PRODUCT RESULTS"}
                        title={"From Vision to Victory: Record Growth of Users & Applications"}
                        content={<>
                            As we approach the end of the design journey, it's time to look back and see how well the
                            product has met its goals. The website and brand identity for IELC have been a hit, with a
                            noticeable increase in applications since its launch. <HiddenBreaks/> In just the first
                            month, we
                            received 42 applications— an impressive 320% increase! Now, the site serves as a go-to
                            application portal, seamlessly bringing together all previous platforms. This not only
                            boosted
                            applications and engagement but also solidified the company's reputation for reliability
                            and trustworthiness.
                        </>}
                    />
                    <Image
                        className={"m-auto"}
                        src={applicationIncrease}
                        alt=""
                    />
                    <hr className="bg-rose-100 h-7 my-10"/>
                    <WrittenSection
                        header={"PROJECT TAKEAWAYS"}
                        title={"Lessons Learned and Insights Gained"}
                        content={<>
                            Looking back on this project, I've realized just how crucial it is to adapt and customize my
                            product to fit both my client's needs and the expectations of our users. By putting
                            functionality first and creating a strong brand identity, I was able to find success in the
                            business
                            world. <HiddenBreaks/> Along the way, I also learned a lot about the iterative process of
                            design
                            and how
                            important it is to keep refining and improving. <HiddenBreaks/> Overall, this experience has
                            given me a
                            deeper understanding of how every design element plays a role in shaping the final outcome
                            of a
                            project.
                        </>}
                    />
                    <WrittenSection
                        header={"FURTHER CONSIDERATIONS"}
                        title={"Future Endeavors: Paths Forward"}
                        content={<>
                            As I look ahead, I'm eager to explore some exciting enhancements for the site. To start,
                            I'll
                            prioritize improving accessibility features to ensure every visitor can easily navigate and
                            use
                            the platform. One example would be incorporating a dark mode for the site to cater to
                            varying
                            needs and preferences. <HiddenBreaks/> Additionally, I plan to amplify the voices of parents
                            whose
                            children have benefited from the program by sharing their real-life stories. These updates
                            are
                            all about ensuring the site continues to evolve and meet the needs of our users, solidifying
                            our company's reputation as a reliable resource.
                        </>}
                    />
                    <hr className="bg-rose-100 h-7 my-8"/>
                    <WrittenSection
                        content={<>
                            This project is extra special to me because it's my first time working with a real client.
                            Thank you for joining me on this design journey! :) Please contact me at
                            <a className={"underline"}
                               href="mailto:celestechanglu@gmail.com"> celestechanglu@gmail.com </a>
                            if you have any questions or would love to learn more!
                        </>}
                    />
                    <MoreToExplore/>
                </div>
                <Footer/>
            </div>

        </main>
    );
}