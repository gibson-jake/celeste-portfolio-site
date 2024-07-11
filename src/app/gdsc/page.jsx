import Image from "next/image";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import cover from '/public/images/gdscPage/cover.svg';
import sample from '/public/images/gdscPage/sample.svg';
import painPoint from '/public/images/gdscPage/painPoint.svg';
import webTree from '/public/images/gdscPage/webTree.svg';
import homepageBefore from '/public/images/gdscPage/homepageBefore.svg';
import homepageBeforeSmall from '/public/images/gdscPage/homepageBeforeSmall.svg';
import solution from '/public/images/gdscPage/solution.svg';
import homepageBeforeDescription from '/public/images/gdscPage/homepageBeforeDescription.svg';
import joinBeforeSmall from '/public/images/gdscPage/joinBeforeSmall.png';
import joinBeforeDescription from '/public/images/gdscPage/joinBeforeDescription.svg';
import joinBefore from '/public/images/gdscPage/joinBefore.svg';
import projectBeforeSmall from '/public/images/gdscPage/projectBeforeSmall.png';
import projectBeforeDescription from '/public/images/gdscPage/projectBeforeDescription.svg';
import projectBefore from '/public/images/gdscPage/projectBefore.svg';
import initialDesign from '/public/images/gdscPage/initialDesign.png';
import secondDesign from '/public/images/gdscPage/secondDesign.png';
import thirdDesign from '/public/images/gdscPage/thirdDesign.png';
import finalDesign from '/public/images/gdscPage/finalDesign.png';
import Title from "../../components/Title";
import React from "react";
import WrittenSection from "@/components/WrittenSection";
import Bold from "@/components/Bold";
import MoreToExplore from "@/components/MoreToExplore";
import HiddenBreaks from "@/components/HiddenBreaks";
import TextContent from "@/components/TextContent";
import SmallHeading from "@/components/SmallHeading";

export default function Ielc() {
    return (
        <main className={"bg-white flex flex-col"}>
            <div className={"mx-[10%] md:mx-[15%] 2xl:mx-[25%]"}>
                <Navbar/>
                <div className={"mt-40"}>
                    <Title title={"Google Developer Student Clubs"}
                           subtitle={"WEBSITE DESIGN・DESKTOP・MOBILE"}/>
                    <Image
                        className={"items-center w-full max-w-4xl m-auto"}
                        src={cover}
                        alt=""
                    />
                    <WrittenSection
                        header={"INTRODUCTION"}
                        content={<>
                            As the Vice President and Design Director of the Google Developer Student Club (GDSC), I
                            undertook the challenge of redesigning our club's website. With our chapter being one of the
                            most well-known in the Google community, it was essential that our new website <Bold text={
                            " not only adhered to Google's brand guidelines but also effectively represented our club's" +
                            " identity and mission."}/>
                        </>}
                    />
                    <WrittenSection
                        content={<>
                            The project was driven by a tight deadline of less than two weeks before the winter quarter
                            began and the formation of our cohort project teams. One of these teams, composed of four
                            developers, was assigned the task of programming the new site. <Bold
                            text={"My responsibility" +
                                " was to deliver a fully designed website ready for them to implement."}/>
                        </>}
                    />
                    <div
                        className={"md:flex md:*:max-w-[30%] md:flex-wrap lg:flex-nowrap lg:flex-row md:place-content-between *:w-auto lg:*:max-w-[33%] xl:*:max-w-[30%]"}>
                        <WrittenSection
                            header={"MY ROLE"}
                            content={<>
                                I served as the senior product designer, overseeing user research, design systems,
                                visual assets, and collaborating with a team of 4 developers.
                            </>}
                        />
                        <WrittenSection
                            header={"TIMELINE"}
                            content={<>
                                January 2024 - 3 weeks;<br/>
                                Launch in May 2024
                            </>}
                        />
                        <WrittenSection
                            header={"TOOLS"}
                            content={<>
                                Figma, Slack,<br/> Notion, Firebase
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
                            I started with identifying several problems with the current website. I focused on these key
                            questions and areas, and created a "How might we" statement to guide the redesign process.
                        </>}
                    />
                    <div className={"md:flex md:*:w-[45%] md:place-content-between md:flex-wrap"}>
                        <WrittenSection
                            title={"Clarity of Purpose 🔍"}
                            content={<>
                                Does the site clearly explain what our club does? Are options such as joining, attending
                                events, and accessing resources easy to find?
                            </>}
                        />
                        <WrittenSection
                            header={``}
                            title={"Ease of Navigation 🧭"}
                            content={<>
                                Could users easily find what they needed? Was the navigation intuitive and
                                user-friendly?
                            </>}
                        />
                        <WrittenSection
                            title={"Visual Consistency 🎨"}
                            content={<>
                                Does the website adhere to Google's brand guidelines? Does it visually represent the
                                professionalism and dynamism of our club?
                            </>}
                        />
                    </div>
                    <WrittenSection
                        header={"HOW MIGHT WE STATEMENT"}
                    />
                    <div className={"border-2 border-blue-500 border-opacity-70 shadow-md p-9 mb-14 text-center"}>
                        <TextContent
                            text={<>
                                “How can I design a user-friendly GDSC website that clearly communicates our club’s
                                offerings,
                                makes it easy to join and attend events, and answers common questions to reduce
                                repetitive
                                inquiries to our leadership team?"
                            </>}
                        />
                    </div>
                    <hr className="bg-blue-300 opacity-50 h-7 my-4"/>
                    <WrittenSection
                        header={"STAGE 1 - USER RESEARCH"}
                        title={"Gathering User Feedback"}
                        content={<>
                            To better understand my audience, I interviewed over 25 people, including regular club
                            members, leadership team members, and those who don't know about GDSC. I asked them what
                            features the website was missing and what problems they had. I learned that the website
                            lacked informative features, leaving users guessing. Here is some of the feedback I
                            received:
                        </>}
                    />
                    <div
                        className={"lg:flex lg:*:w-[45%] lg:place-content-between lg:flex-wrap *:border-2 *:border-opacity-70 *:shadow-md *:p-8 *:rounded-2xl my-3 *:my-8"}>
                        <div>
                            <TextContent
                                text={<>
                                    “I would like a <Bold text={`"Contact Us"`}/> page where I can ask further
                                    questions. I would also like a place where I could potentially sign up and become a
                                    part of the club's cohort program.”
                                </>}
                            />
                        </div>
                        <div>
                            <TextContent
                                text={<>
                                    “I think a <Bold text={`cohort page`}/> would be great. I currently don’t know what
                                    cohorts the club offers and where to get more information about them.”
                                </>}
                            />
                        </div>
                        <div>
                            <TextContent
                                text={<>
                                    “The <Bold text={`web design looks very outdated`}/> and none of the buttons are
                                    consistent or eye-catching. The overall <Bold text={`UI and UX can be improved.`}/>”
                                </>}
                            />
                        </div>
                    </div>
                    <WrittenSection
                        title={"Noting Common Pain Points"}
                    />
                    <div className={"border-2 shadow-md rounded-2xl md:p-4 lg:p-14"}>
                        <div className={""}>
                            <div className={"flex flex-row *:m-4 m-auto"}>
                                <Image
                                    className={""}
                                    src={painPoint}
                                    alt=""
                                />
                                <TextContent text={"Lack of informational pages- cohort, contact us, sign up, etc."}/>
                            </div>
                            <div className={"flex flex-row *:m-4 m-auto"}>
                                <Image
                                    className={""}
                                    src={painPoint}
                                    alt=""
                                />
                                <TextContent text={"Missing or outdated content in several sections"}/>
                            </div>
                            <div className={"flex flex-row *:m-4"}>
                                <Image
                                    className={""}
                                    src={painPoint}
                                    alt=""
                                />
                                <TextContent text={"Inconsistent designs and outdated user interface"}/>
                            </div>
                            <div className={"flex flex-row *:m-4"}>
                                <Image
                                    className={""}
                                    src={painPoint}
                                    alt=""
                                />
                                <TextContent text={"Lack of good user experience"}/>
                            </div>
                        </div>
                    </div>
                    <hr className="bg-blue-300 opacity-50 h-7 my-8"/>
                    <WrittenSection
                        header={"STAGE 2 - INFORMATION ARCHITECTURE"}
                        title={"Setting Up the Ground Work"}
                        content={"After reviewing the user survey feedback, it was clear that the site lacked vital informational pages. To address these issues, I decided to create a sitemap to identify what content matters most to my audience and what pages need to be added. Mapping out the site not only helps prioritize important pages but also allows me to empathize with my audience and tailor the website to their needs."}
                    />
                    <Image
                        className={"mb-6 w-auto m-auto"}
                        src={webTree}
                        alt=""
                    />
                    <hr className="bg-blue-300 opacity-50 h-7 my-8"/>
                    <WrittenSection
                        header={"STAGE 3 - UX SUGGESTIONS & THE REDESIGN"}
                        title={"Ready, Set, Redesign"}
                        content={<>
                            Now that I had a better grasp of my audience and their needs, I felt ready to analyze the
                            website and identify areas for redesign. Time to put on my design glasses and get started!
                        </>}
                    />
                    <WrittenSection
                        header={"WEBPAGE 1 - HOMEPAGE (BEFORE)"}
                    />
                    <Image
                        className={"mb-6 w-auto m-auto hidden md:block"}
                        src={homepageBefore}
                        alt=""
                    />
                    <div className={"md:hidden"}>
                        <Image
                            className={"mb-6 w-auto m-auto"}
                            src={homepageBeforeSmall}
                            alt=""
                        />
                        <Image
                            className={"mb-6 w-auto m-auto"}
                            src={homepageBeforeDescription}
                            alt=""
                        />
                    </div>
                    <WrittenSection
                        className={"pb-8"}
                        header={"WEBPAGE 1 - HOMEPAGE (REDESIGNED)"}
                        title={"Evaluating the User Experience"}
                    />
                    <video
                        autoPlay
                        loop
                        muted
                        className={"max-h-[70vh] m-auto"}
                        src={"/videos/gdscPage/homepage.mp4"}
                    />
                    <WrittenSection
                        className={"mt-10"}
                        title={"User-Centered Solutions"}
                    />
                    <div className={"border-2 shadow-md rounded-2xl p-4 lg:p-14"}>
                        <div className={""}>
                            <div className={"flex flex-row *:m-4 m-auto"}>
                                <Image
                                    className={""}
                                    src={solution}
                                    alt=""
                                />
                                <TextContent
                                    text={"Added an Events, FAQ’s, Contact, and Apply page to provide users with essential information and streamline their experience."}/>
                            </div>
                            <div className={"flex flex-row *:m-4"}>
                                <Image
                                    className={""}
                                    src={solution}
                                    alt=""
                                />
                                <TextContent
                                    text={"Designed cohesive and intuitive CTA buttons to effectively guide user actions."}/>
                            </div>
                            <div className={"flex flex-row *:m-4"}>
                                <Image
                                    className={""}
                                    src={solution}
                                    alt=""
                                />
                                <TextContent
                                    text={"Used Google Sans as the typeface to align with brand guidelines and improve readability."}/>
                            </div>
                            <div className={"flex flex-row *:m-4"}>
                                <Image
                                    className={""}
                                    src={solution}
                                    alt=""
                                />
                                <TextContent
                                    text={"Implemented interactive hover states for buttons to enhance user engagement and improve overall user experience."}/>
                            </div>
                        </div>
                    </div>
                    <hr className="bg-blue-300 opacity-50 h-7 my-10"/>
                    <WrittenSection
                        header={"WEBPAGE 2 - JOIN (BEFORE)"}
                        title={"Information Overload"}
                        content={`The next page under review was the “Join” page, which had proven to be somewhat misleading. It provided information about both the club and a tech lead program. To improve clarity, I recommended renaming it and dividing it into two separate pages: “About Us” and “Apply.” This segmentation will help users find the information they need  more easily. Shall we analyze this page together now?`}
                    />
                    <div className={"pt-4"}>
                        <Image
                            className={"mb-6 w-auto m-auto hidden md:block"}
                            src={joinBefore}
                            alt=""
                        />
                        <div className={"md:hidden"}>
                            <Image
                                className={"mb-6 w-auto m-auto"}
                                src={joinBeforeSmall}
                                alt=""
                            />
                            <Image
                                className={"mb-6 w-auto m-auto"}
                                src={joinBeforeDescription}
                                alt=""
                            />
                        </div>
                    </div>
                    <WrittenSection
                        header={"WEBPAGE 2 - ABOUT US & APPLY (REDESIGNED)"}
                        title={"More Pages for Better Organization"}
                    />
                    <video
                        autoPlay
                        loop
                        muted
                        className={"max-h-[70vh] m-auto pb-6"}
                        src={"/videos/gdscPage/aboutpage.mp4"}
                    />
                    <WrittenSection
                        className={"mt-10"}
                        title={"Research-Based Improvements"}
                    />
                    <div className={"border-2 shadow-md rounded-2xl p-4 lg:p-14"}>
                        <div className={""}>
                            <div className={"flex flex-row *:m-4 m-auto"}>
                                <Image
                                    className={""}
                                    src={solution}
                                    alt=""
                                />
                                <TextContent
                                    text={`Separated the “Join” page into “About Us” and “Apply” to better organize information and improve user navigation.`}/>
                            </div>
                            <div className={"flex flex-row *:m-4"}>
                                <Image
                                    className={""}
                                    src={solution}
                                    alt=""
                                />
                                <TextContent
                                    text={`I added images from the club to build trustworthiness and elevate the club’s brand identity. I included a “Meet The Team” section for contacting leadership.`}/>
                            </div>
                            <div className={"flex flex-row *:m-4"}>
                                <Image
                                    className={""}
                                    src={solution}
                                    alt=""
                                />
                                <TextContent
                                    text={`On the “Apply” page, I added a prominent CTA button and clearly separated the cohort offerings for clear, simple information.`}/>
                            </div>
                        </div>
                    </div>
                    <WrittenSection
                        className={"my-8"}
                        header={"WEBPAGE 3 - PROJECTS (BEFORE)"}
                        title={"Endless Scrolling"}
                    />
                    <Image
                        className={"mb-6 w-auto m-auto hidden md:block"}
                        src={projectBefore}
                        alt=""
                    />
                    <div className={"md:hidden"}>
                        <Image
                            className={"mb-6 w-auto m-auto"}
                            src={projectBeforeSmall}
                            alt=""
                        />
                        <Image
                            className={"mb-6 w-auto m-auto"}
                            src={projectBeforeDescription}
                            alt=""
                        />
                    </div>
                    <WrittenSection
                        header={"WEBPAGE 3 - PROJECTS (REDESIGNED)"}
                        title={"Fixing Overflow with Horizontal Scrolling"}
                    />
                    <video
                        autoPlay
                        loop
                        muted
                        className={"max-h-[70vh] m-auto pb-6"}
                        src={"/videos/gdscPage/projects.mp4"}
                    />
                    <WrittenSection
                        title={"Project Page Enhancements"}
                    />
                    <div className={"border-2 shadow-md rounded-2xl p-4 lg:p-14"}>
                        <div className={""}>
                            <div className={"flex flex-row *:m-4 m-auto"}>
                                <Image
                                    className={""}
                                    src={solution}
                                    alt=""
                                />
                                <TextContent
                                    text={`Relocated the project type headings (AI/ML, App Dev) to the top of each section to organize all projects into their respective categories.`}/>
                            </div>
                            <div className={"flex flex-row *:m-4"}>
                                <Image
                                    className={""}
                                    src={solution}
                                    alt=""
                                />
                                <TextContent
                                    text={`Updated information cards to align with Google's brand colors and font. Added a “Learn More” button to direct users to a detailed project page.`}/>
                            </div>
                            <div className={"flex flex-row *:m-4"}>
                                <Image
                                    className={""}
                                    src={solution}
                                    alt=""
                                />
                                <TextContent
                                    text={`Implemented horizontal scrolling for each set of cards to reduce scrolling time and prevent visual clutter by increasing white space.`}/>
                            </div>
                        </div>
                    </div>
                    <hr className="bg-blue-300 opacity-50 h-7 my-10"/>
                    <WrittenSection
                        header={"OTHER WEBPAGES & MOBILE DESIGN"}
                        title={"Building Essential Webpages"}
                        content={<>
                            From my user research and surveys, I learned that my audience needed more informational
                            pages. It's important to listen to audience feedback and create pages that meet their needs.
                            While redesigning existing pages is crucial for improving the website, adding necessary new
                            pages is also important. Additionally, I built the mobile version of the site from scratch
                            to ensure it is accessible on all devices. Take a closer look at the brand new pages and
                            mobile version!
                        </>}
                    />
                    <video
                        autoPlay
                        loop
                        muted
                        className={"max-h-[70vh] m-auto my-6"}
                        src={"/videos/gdscPage/upcomingEvents.mp4"}
                    />
                    <div className={"lg:flex lg:flex-row lg:gap-8 mt-16"}>
                        <video
                            autoPlay
                            loop
                            muted
                            className={"max-h-[70vh] pb-6 m-auto w-1/2"}
                            src={"/videos/gdscPage/mobile.mp4"}
                        />
                        <div>
                            <WrittenSection
                                title={"Mobile Design Decisions"}
                            />
                            <div className={"border-2 shadow-md rounded-2xl p-4 xl:p-14"}>
                                <div className={""}>
                                    <div className={"flex flex-row *:m-4 m-auto"}>
                                        <Image
                                            className={""}
                                            src={solution}
                                            alt=""
                                        />
                                        <TextContent
                                            text={`I designed a mobile version of the website to ensure a responsive design. I learned that having different versions is essential for user accessibility.`}/>
                                    </div>
                                    <div className={"flex flex-row *:m-4"}>
                                        <Image
                                            className={""}
                                            src={solution}
                                            alt=""
                                        />
                                        <TextContent
                                            text={`All buttons are designed to be noticeable and guide user actions, with the “Apply Here” button on the “Join Us” page always easily accessible.`}/>
                                    </div>
                                    <div className={"flex flex-row *:m-4"}>
                                        <Image
                                            className={""}
                                            src={solution}
                                            alt=""
                                        />
                                        <TextContent
                                            text={`Lastly, I focused on creating a positive user experience with thoughtful designs: clear buttons, intuitive UI, and more.`}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="bg-blue-300 opacity-50 h-7 my-10"/>
                    <WrittenSection
                        header={"ITERATIONS"}
                        title={"Behind the Scenes"}
                        content={<>
                            Now that I've shared my page analyses and the final product, it's important to highlight the
                            trials and errors along the way. Here’s my secret recipe for successful designs: <Bold
                            text={" Research. Sketch. Design. Research. Revise. Repeat."}/> It's a repetitive process,
                            but it's key to achieving great results.<HiddenBreaks/> Here’s a sneak peek into my
                            iterative design process!
                        </>}
                    />
                    <div className={"flex flex-wrap gap-4 *:gap4 text-center md:flex-nowrap"}>
                        <div className={"flex flex-row "}>
                            <div className={"max-h-[50vh]"}>
                                <SmallHeading text={"INITIAL DESIGN"}/>
                                <Image
                                    className={"pt-4 "}
                                    src={initialDesign}
                                    alt=""
                                />
                            </div>
                            <div>
                                <SmallHeading text={"SECOND DESIGN"}/>
                                <Image
                                    className={"pt-4 " }
                                    src={secondDesign}
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className={"flex flex-row *:*:m-auto"}>
                            <div>
                                <SmallHeading text={"THIRD DESIGN"}/>
                                <Image
                                    className={"pt-4 "}
                                    src={thirdDesign}
                                    alt=""
                                />
                            </div>
                            <div>
                                <SmallHeading text={"FINAL DESIGN"}/>
                                <Image
                                    className={"pt-4 "}
                                    src={finalDesign}
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                    <div className={"xl:flex xl:flex-row xl:gap-6 xl:*:w-1/2 max-h-min"}>
                        <div className={"flex flex-col"}>
                            <WrittenSection
                                className={"pt-7"}
                                title={"First Few Iterations"}
                            />
                            <div className={"border-2 shadow-md rounded-2xl p-4 lg:p-14 h-full"}>
                                <div>
                                    <div className={"flex flex-row *:m-4 m-auto"}>
                                        <Image
                                            className={""}
                                            src={painPoint}
                                            alt=""
                                        />
                                        <TextContent
                                            text={<> <Bold text={"Lack of Color:"}/> Information dividers were dull, and cohort
                                                emotes were not eye-catching.</>}/>
                                    </div>
                                    <div className={"flex flex-row *:m-4"}>
                                        <Image
                                            className={""}
                                            src={painPoint}
                                            alt=""
                                        />
                                        <TextContent
                                            text={<> <Bold text={"Typography Issues:"}/> Overly bold text failed to highlight
                                                key information. I improved visual hierarchy by decreasing text size and
                                                increasing header sizes.</>}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={"flex flex-col"}>
                            <WrittenSection
                                className={"pt-7"}
                                title={"Finished Design"}
                            />
                            <div className={"border-2 shadow-md rounded-2xl p-4 lg:p-14 h-full"}>
                                <div>
                                    <div className={"flex flex-row *:m-4 m-auto"}>
                                        <Image
                                            className={""}
                                            src={solution}
                                            alt=""
                                        />
                                        <TextContent
                                            text={<> <Bold text={"Apply Here Button:"}/> Thorough A/B testing showed that having
                                                an always-accessible “Apply Here” button guides user actions more effectively
                                                and simplifies the process.</>}/>
                                    </div>
                                    <div className={"flex flex-row *:m-4"}>
                                        <Image
                                            className={""}
                                            src={solution}
                                            alt=""
                                        />
                                        <TextContent
                                            text={<> <Bold text={"Clear UI:"}/> The typography layout now highlights the most
                                                important information. Additionally, each card is clearly separated from the
                                                others.</>}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <WrittenSection
                        header={"REFLECTION"}
                        title={"Design Journey Takeaways"}
                        content={<>Initially, I felt anxious about redesigning our club's website in just two weeks by
                            myself. The tight timeline was challenging, but I was motivated to create something
                            meaningful for my club and community. As Vice President and Design Director, I was committed
                            to showcasing everything our club offers. This dedication guided me throughout the process.
                            Drawing on my past design experiences, I focused on what I excel at: design.<br/><br/>Throughout
                            this process, I've learned that design is a journey. Each small step is essential to
                            reaching larger goals. Ongoing learning allows me to create better designs for users. I
                            stayed focused on my end goal: crafting meaningful and useful designs. Every detail, from
                            buttons to font sizes, is tailored to the audience—it's all about user-focused design. I've
                            learned to identify what works and what doesn't, and <Bold text={"the best part is that the learning is continuous."}/> 
                        </>}
                    />
                    <hr className="bg-blue-300 opacity-50 h-7 my-10"/>
                    <WrittenSection
                        content={<>
                            That’s a wrap! Thank you so much for joining me. I had a great time designing this website, and I hope you enjoyed reading about it! Feel free to contact me at <a className={"underline"} href="mailto:celestechanglu@gmail.com">celestechanglu@gmail.com</a> if you have any questions or would love to learn more!
                        </>}
                    />
                    <MoreToExplore/>
                </div>
                <Footer/>
            </div>

        </main>
    );
}