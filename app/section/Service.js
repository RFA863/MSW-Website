import Image from "next/image";

import BgService from "../../public/background/Bg-service.png"
import ServiceImg1 from "../../public/image/Service-img1.png"
import ServiceImg2 from "../../public/image/Service-img2.png"
import ServiceImg3 from "../../public/image/Service-img3.png"

export default function Service() {
    return (
        <div className=" h-screen tracking-[.6px] text-white">
            <div className="relative h-full">
                <Image src={BgService} alt="Background" className="absolute -z-[1] object-cover w-screen h-screen" />

                <div className="flex justify-center items-center text-center h-full mx-44">
                    <div>
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
                </div>
            </div>
        </div>
    )
}