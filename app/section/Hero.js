import Image from "next/image";

import BgHero from '../../public/background/Bg_hero.png';

export default function Hero() {
    return (
        <div id="hero" className="w-screen h-screen">
            <div className="relative h-full">
                <Image src={BgHero} alt="background" className="absolute -z-[1] object-cover w-screen h-screen" />

                <div className="flex items-center justify-center h-full text-center text-[#F4F4F5] mx-12">
                    <div>
                        <p className="font-lato-regular text-5xl md:text-[56px] py-4">Preserve An Everlasting Series</p>
                        <p className="font-inter text-xl">Your moments deserve to be cherished forever.</p>
                    </div>
                </div>

            </div>
        </div>
    );
}