"use client"

import Image from "next/image";
import { Carousel } from "flowbite-react";

import BgService from "../../public/background/Bg-service.png"
import ServiceImg1 from "../../public/image/Service-img1.png"
import ServiceImg2 from "../../public/image/Service-img2.png"
import ServiceImg3 from "../../public/image/Service-img3.png"
import ServiceImg4 from "../../public/image/Service-img4.png"
import ServiceImg5 from "../../public/image/Service-img5.png"
import ServiceImg6 from "../../public/image/Service-img6.png"
import ServiceImg7 from "../../public/image/Service-img7.png"
import ServiceImg8 from "../../public/image/Service-img8.png"
import ServiceImg9 from "../../public/image/Service-img9.png"

export default function Service() {
    return (
        <div id="service" className=" h-screen tracking-[.6px] text-white">
            <div className="relative h-full">
                <Image src={BgService} alt="Background" className="absolute -z-[1] object-cover w-screen h-screen" />

                <div className="flex justify-center items-center text-center h-full mx-44">

                    <Carousel >
                        <div >
                            <p className="font-lato-light text-base text-[#FAFAFA] mb-3">OUR SERVICES</p>
                            <p className="font-lato-regular text-5xl mb-14">Wedding Organizer</p>
                            <div className="flex justify-center gap-x-4">
                                <Image src={ServiceImg1} alt="Service image" />
                                <Image src={ServiceImg2} alt="Service image" />
                                <Image src={ServiceImg3} alt="Service image" />
                            </div>
                            <p className="font-inter text-sm mt-16">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Donec vulputate accumsan odio quis congue. Cras sed urna nec
                                velit posuere laoreet quis vitae magna. Donec aliquet tristique
                                turpis quis euismod. Vestibulum nec eros sed metus mollis aliquam
                                nec at diam. Phasellus ac mauris commodo, rutrum ante ac, ultricies velit.
                            </p>
                        </div>

                        <div>
                            <p className="font-lato-light text-base text-[#FAFAFA] mb-3">OUR SERVICES</p>

                            <p className="font-lato-regular text-5xl mb-14">Customized Decoration</p>
                            <div className="flex justify-center gap-x-4">
                                <Image src={ServiceImg4} alt="Service image" />
                                <Image src={ServiceImg5} alt="Service image" />
                                <Image src={ServiceImg6} alt="Service image" />
                            </div>
                            <p className="font-inter text-sm mt-16">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Donec vulputate accumsan odio quis congue. Cras sed urna nec
                                velit posuere laoreet quis vitae magna. Donec aliquet tristique
                                turpis quis euismod. Vestibulum nec eros sed metus mollis aliquam
                                nec at diam. Phasellus ac mauris commodo, rutrum ante ac, ultricies velit.
                            </p>
                        </div>

                        <div>
                            <p className="font-lato-light text-base text-[#FAFAFA] mb-3">OUR SERVICES</p>

                            <p className="font-lato-regular text-5xl mb-14">Private Wedding</p>
                            <div className="flex justify-center gap-x-4">
                                <Image src={ServiceImg7} alt="Service image" />
                                <Image src={ServiceImg8} alt="Service image" />
                                <Image src={ServiceImg9} alt="Service image" />
                            </div>
                            <p className="font-inter text-sm mt-16">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Donec vulputate accumsan odio quis congue. Cras sed urna nec
                                velit posuere laoreet quis vitae magna. Donec aliquet tristique
                                turpis quis euismod. Vestibulum nec eros sed metus mollis aliquam
                                nec at diam. Phasellus ac mauris commodo, rutrum ante ac, ultricies velit.
                            </p>
                        </div>

                    </Carousel>

                </div>



                {/* <div className="flex justify-center items-center text-center h-full mx-44">
                    <div>
                        <p className="font-lato-light text-base text-[#FAFAFA] mb-3">OUR SERVICES</p>
                        <Carousel>
                           
                            <div>
                                <p className="font-lato-regular text-5xl mb-14">Wedding Organizer</p>
                                <div className="flex justify-center gap-x-4">
                                    <Image src={ServiceImg1} alt="Service image" />
                                    <Image src={ServiceImg2} alt="Service image" />
                                    <Image src={ServiceImg3} alt="Service image" />
                                </div>
                                <p className="font-inter text-sm mt-16">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Donec vulputate accumsan odio quis congue. Cras sed urna nec
                                    velit posuere laoreet quis vitae magna. Donec aliquet tristique
                                    turpis quis euismod. Vestibulum nec eros sed metus mollis aliquam
                                    nec at diam. Phasellus ac mauris commodo, rutrum ante ac, ultricies velit.
                                </p>
                            </div>

                            <div>
                                <p className="font-lato-regular text-5xl mb-14">Customized Decoration</p>
                                <div className="flex justify-center gap-x-4">
                                    <Image src={ServiceImg4} alt="Service image" />
                                    <Image src={ServiceImg5} alt="Service image" />
                                    <Image src={ServiceImg6} alt="Service image" />
                                </div>
                                <p className="font-inter text-sm mt-16">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Donec vulputate accumsan odio quis congue. Cras sed urna nec
                                    velit posuere laoreet quis vitae magna. Donec aliquet tristique
                                    turpis quis euismod. Vestibulum nec eros sed metus mollis aliquam
                                    nec at diam. Phasellus ac mauris commodo, rutrum ante ac, ultricies velit.
                                </p>
                            </div>

                            <div>
                                <p className="font-lato-regular text-5xl mb-14">Private Wedding</p>
                                <div className="flex justify-center gap-x-4">
                                    <Image src={ServiceImg7} alt="Service image" />
                                    <Image src={ServiceImg8} alt="Service image" />
                                    <Image src={ServiceImg9} alt="Service image" />
                                </div>
                                <p className="font-inter text-sm mt-16">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Donec vulputate accumsan odio quis congue. Cras sed urna nec
                                    velit posuere laoreet quis vitae magna. Donec aliquet tristique
                                    turpis quis euismod. Vestibulum nec eros sed metus mollis aliquam
                                    nec at diam. Phasellus ac mauris commodo, rutrum ante ac, ultricies velit.
                                </p>
                            </div>
                        </Carousel>
                    </div>
                </div>
                 */}
            </div>
        </div>
    )
}