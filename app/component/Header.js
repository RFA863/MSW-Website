"use client"

import { useState, useEffect } from "react";
import { FaYoutube, FaFacebookF, FaInstagram } from "react-icons/fa";

import Logo from "../../public/logo/Logo.svg"

export default function Headers() {

    const [isScrolled, setIsScrolled] = useState(false);


    useEffect(() => {
        const handleScroll = () => {
            const sectionHeight = document.getElementById("hero").offsetHeight;
            if (window.scrollY > sectionHeight) {
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
        setIsScrolled(true);
    };

    return (

        <header className={`font-tenor-sans text-2xl fixed  top-0 z-[1] w-screen transition-colors duration-300 ${isScrolled ? "bg-white text-[#18181B]" : "bg-transparent text-white"} `}>
            <div className="mx-20 my-6 flex items-center justify-between">

                <div className="flex items-center gap-x-6 ">
                    <div onClick={() => scrollToSection("hero")} className="cursor-pointer">
                        <Logo className={`h-12 transition-colors duration-300 ${isScrolled ? "text-[#F472B6]" : "text-white"}`} />
                    </div>
                    <div onClick={() => scrollToSection("about")} className="cursor-pointer ">About Us</div>
                    <div onClick={() => scrollToSection("gallery")} className="cursor-pointer">Gallery</div>
                    <div onClick={() => scrollToSection("service")} className="cursor-pointer">Services</div>
                    <div onClick={() => scrollToSection("client")} className="cursor-pointer">Clients</div>
                    <div onClick={() => scrollToSection("map")} className="cursor-pointer">Map</div>
                </div>

                <div className="flex items-center justify-end gap-x-10">
                    <div className="flex gap-x-4">
                        <FaYoutube />
                        <FaFacebookF />
                        <FaInstagram />
                    </div>
                    <div className={`px-8 py-3 rounded-lg transition-colors duration-300 ${isScrolled ? "bg-[#F472B6] text-white" : "bg-transparent text-white"}`} onClick={() => scrollToSection("contact")}>
                        Inquiry
                    </div>
                </div>
            </div>
        </header>
    )
}