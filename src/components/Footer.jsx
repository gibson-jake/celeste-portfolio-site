import React from "react";
import LinkedInImage from '/public/images/LinkedIn.svg';
import emailImage from '/public/images/email.svg';

import Image from "next/image";
import Link from "next/link";
const Footer = () => {
    return (
        <>
            <nav>
                <div className={"py-10 flex items-center justify-center *:px-5 md:*:px-20"}>
                    <div className={""}>
                        <div className={"text-black text-l font-semibold whitespace-nowrap"}><a href="/public">Celeste Lu</a></div>
                        <div className={"flex *:mr-3.5 mt-4"}>
                            <a href="https://www.linkedin.com/in/celestelu/" target="_blank"> 
                                <Image
                                    src={LinkedInImage}
                                    alt="likedin"
                                    width={18} // Adjust width
                                    height={18} // Adjust height
                                />
                            </a>
                           
                            <a className={"flex"} href="mailto:celestechanglu@gmail.com">
                                <Image
                                    className={"align-middle"}
                                    src={emailImage}
                                    alt="celestechanglu@gmail.com"
                                    width={22} // Adjust width
                                    height={22} // Adjust height
                                />
                            </a>
                        </div>
                    </div>
                    <div className={"*:px-10 leading-[2] *:text-black *:text-l"}>
                        <div><Link passHref={true} href={"/"}>Work</Link></div>
                        <div><a href="/Resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a></div>
                        <div><Link passHref={true} href={"/about"}>About</Link></div>
                        <div className={"text-black text-l"}><a href="mailto:celestechanglu@gmail.com">Contact</a></div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Footer;