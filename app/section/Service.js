"use client"

import Image from "next/image";
import { Carousel } from "flowbite-react";

import BgService from "../../public/background/Bg-service.png"

import EventWedding1 from "../../public/image/Event-wedding-1.png"
import EventWedding2 from "../../public/image/Event-wedding-2.png"
import EventWedding3 from "../../public/image/Event-wedding-3.png"
import EventPrivat1 from "../../public/image/Event-private-1.png"
import EventPrivat2 from "../../public/image/Event-private-2.png"
import EventPrivat3 from "../../public/image/Event-private-3.png"
import EventDecor1 from "../../public/image/Event-decor-1.png"
import EventDecor2 from "../../public/image/Event-decor-2.png"
import EventDecor3 from "../../public/image/Event-decor-3.png"

export default function Service() {

    const customTheme = {
        "root": {
            "base": "relative h-full w-full",
            "leftControl": "absolute -left-10 top-0 flex h-full items-center justify-center  focus:outline-none",
            "rightControl": "absolute -right-10 top-0 flex h-full items-center justify-center  focus:outline-none"
        },
    }

    return (
        <div id="service" className=" h-screen tracking-[.6px] text-white">
            <div className="relative h-screen">
                <Image src={BgService} alt="Background" className="absolute -z-[1] object-cover w-screen h-screen" />

                <div className="flex justify-center items-center text-center h-full mx-12 md:mx-44">

                    <Carousel theme={customTheme}>
                        <div >
                            <p className="font-lato-light text-base text-[#FAFAFA] mb-1 xl:mb-3">OUR SERVICES</p>
                            <p className="font-lato-regular text-2xl md:text-5xl mb-6 xl:mb-14">Wedding Organizer</p>
                            <div className="flex justify-center gap-x-4">
                                <Image src={EventWedding1} alt="Service image" className="w-[265px] h-[265px] object-cover " />
                                <Image src={EventWedding2} alt="Service image" className="hidden md:block w-[265px] h-[265px] object-cover " />
                                <Image src={EventWedding3} alt="Service image" className="hidden lg:block w-[265px] h-[265px] object-cover " />
                            </div>
                            <p className="font-inter text-xs md:text-sm mt-6 xl:mt-16">
                                Let us bring your dream wedding to life with flawless planning and attention to every detail. From intimate gatherings to grand celebrations, we handle all logistics, so you can focus on enjoying each moment. Let’s make your love story unforgettable with a seamless, stress-free wedding day.
                            </p>
                        </div>

                        <div>
                            <p className="font-lato-light text-base text-[#FAFAFA] mb-1 xl:mb-3">OUR SERVICES</p>

                            <p className="font-lato-regular text-2xl md:text-5xl mb-6 xl:mb-14">Customized Decoration</p>
                            <div className="flex justify-center gap-x-4">
                                <Image src={EventDecor1} alt="Service image" className="w-[265px] h-[265px] object-cover " />
                                <Image src={EventDecor2} alt="Service image" className="hidden md:block w-[265px] h-[265px] object-cover " />
                                <Image src={EventDecor3} alt="Service image" className="hidden lg:block w-[265px] h-[265px] object-cover " />
                            </div>
                            <p className="font-inter text-xs md:text-sm mt-6 xl:mt-16">
                                Your wedding decor should be as unique as your love story. We specialize in crafting custom decorations that capture your vision and personality, blending beauty with creativity to transform any venue. Let’s design a setting that reflects your essence and leaves a lasting impression on everyone.
                            </p>
                        </div>

                        <div>
                            <p className="font-lato-light text-base text-[#FAFAFA]mb-1 xl:mb-3">OUR SERVICES</p>

                            <p className="font-lato-regular text-2xl md:text-5xl mb-6 xl:mb-14">Private Wedding</p>
                            <div className="flex justify-center gap-x-4">
                                <Image src={EventPrivat1} alt="Service image" className="w-[265px] h-[265px] object-cover " />
                                <Image src={EventPrivat2} alt="Service image" className="hidden md:block w-[265px] h-[265px] object-cover " />
                                <Image src={EventPrivat3} alt="Service image" className="hidden lg:block w-[265px] h-[265px] object-cover " />
                            </div>
                            <p className="font-inter text-xs md:text-sm mt-6 xl:mt-16">
                                Intimacy and elegance come together in our private wedding packages, designed for couples who cherish the beauty of small gatherings. Surrounded by your closest loved ones, enjoy a bespoke celebration that’s filled with warmth, authenticity, and personal touches. Make your special day truly yours.
                            </p>
                        </div>

                    </Carousel>

                </div>


            </div>
        </div>
    )
}