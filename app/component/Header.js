"use client"

import { useState, useEffect } from "react";
import { FaYoutube, FaFacebookF, FaInstagram, FaBars } from "react-icons/fa";

import Logo from "../../public/logo/Logo.svg"

export default function Headers({ setOpenSidebar }) {

    const [isScrolled, setIsScrolled] = useState(false);


    useEffect(() => {
        const handleScroll = () => {

            if (window.scrollY != 0) {
                setIsScrolled(true);

            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        element.scrollIntoView({ behavior: "smooth" });

    };


    return (

        <header className={`font-tenor-sans text-2xl fixed  top-0 z-[1] w-screen transition-colors duration-300 ${isScrolled ? "bg-white text-[#18181B]" : "bg-transparent text-white"} `}>
            <div className="mx-8 xl:mx-20 my-3 xl:my-6 flex items-center justify-between">

                <div className="flex items-center gap-x-6 ">
                    <div onClick={() => scrollToSection("hero")} className="cursor-pointer">
                        <Logo className={`h-12 transition-colors duration-300 ${isScrolled ? "text-[#F472B6]" : "text-white"}`} />
                    </div>

                    <div onClick={() => scrollToSection("about")} className="cursor-pointer group relative hidden xl:block">
                        <span className="group-hover:text-[#F472B6]  transition-all duration-300">About Us</span>
                        <span className="absolute -bottom-1 left-0 w-0 transition-all duration-300 h-0.5 bg-[#F472B6] group-hover:w-full"></span>
                    </div>

                    <div onClick={() => scrollToSection("gallery")} className="cursor-pointer group relative hidden xl:block">
                        <span className="group-hover:text-[#F472B6]  transition-all duration-300">Gallery</span>
                        <span className="absolute -bottom-1 left-0 w-0 transition-all duration-300 h-0.5 bg-[#F472B6] group-hover:w-full"></span>
                    </div>

                    <div onClick={() => scrollToSection("service")} className="cursor-pointer group relative hidden xl:block">
                        <span className="group-hover:text-[#F472B6]  transition-all duration-300">Services</span>
                        <span className="absolute -bottom-1 left-0 w-0 transition-all duration-300 h-0.5 bg-[#F472B6] group-hover:w-full"></span>
                    </div>

                    <div onClick={() => scrollToSection("client")} className="cursor-pointer group relative hidden xl:block">
                        <span className="group-hover:text-[#F472B6]  transition-all duration-300"> Clients</span>
                        <span className="absolute -bottom-1 left-0 w-0 transition-all duration-300 h-0.5 bg-[#F472B6] group-hover:w-full"></span>
                    </div>

                    <div onClick={() => scrollToSection("map")} className="cursor-pointer group relative hidden xl:block">
                        <span className="group-hover:text-[#F472B6]  transition-all duration-300">Map</span>
                        <span className="absolute -bottom-1 left-0 w-0 transition-all duration-300 h-0.5 bg-[#F472B6] group-hover:w-full"></span>
                    </div>

                </div>

                <div className="hidden xl:block">
                    <div className="flex items-center justify-end gap-x-10 ">
                        <div className="flex gap-x-4">
                            <FaYoutube className="transition-colors duration-300 hover:text-[#F472B6]" />
                            <FaFacebookF className="transition-colors duration-300 hover:text-[#F472B6]" />
                            <FaInstagram className="transition-colors duration-300 hover:text-[#F472B6]" />
                        </div>
                        <div className={`px-8 py-3 rounded-lg transition-colors duration-300 hover:bg-transparent hover:ring-2 ring-[#F472B6] hover:text-[#F472B6] ${isScrolled ? "bg-[#F472B6] text-white " : "bg-transparent text-white"}`} onClick={() => scrollToSection("contact")}>
                            Inquiry
                        </div>
                    </div>
                </div>


                <FaBars className={`xl:hidden text-[40px] ${isScrolled ? "text-[#F472B6]" : "text-[#FAFAFA]"}`} onClick={() => setOpenSidebar(true)} />


            </div>
        </header >
    )
}