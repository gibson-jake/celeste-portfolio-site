import Image from "next/image";
import Navbar from "../components/Navbar";
import dotImage from '/public/images/Heart.svg';
import planetImage from '/public/images/ringed-planet.png';
import speechImage from '/public/images/SpeechBalloon.svg';
import gdscCover from '/public/images/gdscCover.png';
import ielcCover from '/public/images/ielcCover.png';
import tkhsCover from '/public/images/tkhsCover.png';
import Footer from "../components/Footer";
import ProjectPreview from "../components/ProjectPreview";

export default function Home() {
  return (
      <main className={"bg-white flex flex-col"}>
        <div className={"mx-[5%] md:mx-[10%]"}>
          <Navbar/>
          <div className="mb-36 md:mb-52 mt-52 justify-center items-center text-black text-5xl md:text-7xl font-bold leading-[52px] md:leading-[90px] ">
            <div className="flex justify-center items-center">
              <span>Creative,</span>
            </div>
            <div className="flex justify-center items-center">
                    <span className="whitespace-nowrap relative">collaborative,
                        <span className={"inline-block"}>
                            <Image
                                className={"absolute -top-16 right-4 md:top-0 md:-right-6"}
                                src={speechImage}
                                alt="dot"
                                width={40} // Adjust width
                                height={40} // Adjust height
                            />
                        </span>
                    </span>
            </div>
            <div className="flex justify-center items-center relative">
                    <span className="whitespace-nowrap">
                        <span className="relative inline-block">
                            i
                            <Image
                                className={"absolute top-0.5 md:top-2.5 left-1/2 transform -translate-x-1/2"}
                                src={dotImage}
                                alt=""
                                width={20} // Adjust width
                                height={20} // Adjust height
                            />
                        </span>
                        nnovative
                    </span>
            </div>
            <div className="flex justify-center items-center">
                    <span className="whitespace-nowrap relative">
                        <span className="absolute -left-[4.3rem] md:-left-40 text-white text-[13px] md:text-2xl font-bold bg-tagColor md:py-1 px-2 md:px-5 rounded-2xl md:rounded-3xl leading-7 md:leading-normal bottom-[20%]">
                            product
                        </span>
                        <span>designer
                            <span className={"inline-block"}>
                            <Image
                                className={"absolute -top-2 -right-[3.75rem]] md:-right-[5.5rem] rotate-[70deg] h-[60px] w-[60px] md:h-[80px] md:w-[80px]"}
                                src={planetImage}
                                alt="planet"
                                width={80} // Adjust width
                                height={80} // Adjust height
                            />
                            </span>
                        </span>
                        
                    </span>
            </div>
          </div>
          <div className={"flex flex-col items-center"}>
            <ProjectPreview
                title={<>Google Developer <br/> Student Clubs</>}
                description={"I reimagined GDSC’s desktop site for user-friendliness and created a mobile version, seamlessly integrating Google’s current brand identity."}
                tags={"WEBSITE REDESIGN・DESKTOP・MOBILE"}
                callToAction={"Explore Project"}
                imageSource={gdscCover}
            />
            <ProjectPreview
                title={"The Interactive Elementary Learning Center "}
                description={"I transformed IELC’s online presence by designing an intuitive mobile and desktop website and creating their brand identity from the ground up."}
                tags={"WEBSITE & BRAND DESIGN・DESKTOP・MOBILE "}
                callToAction={"Explore Project"}
                imageSource={ielcCover}
            />
            <ProjectPreview
                title={"The Kool Hair Studio"}
                description={"I designed The Kool Hair Studio’s logo and brand identity, meticulously creating all their visual assets."}
                tags={"LOGO & BRAND DESIGN"}
                callToAction={"Explore Project"}
                imageSource={tkhsCover}
            />
          </div>
          <Footer/>
        </div>

      </main>
  );
}
