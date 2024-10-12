import Image from "next/image";

import BgHero from '../../public/background/Bg_hero.png';

export default function Hero() {
    return (
        <div className="w-screen h-screen">
            <div className="relative h-full">
                <Image src={BgHero} alt="background" className="absolute -z-[1] object-cover w-screen h-screen" />

                <div className="flex items-center justify-center h-full text-center text-[#F4F4F5]">
                    <div>
                        <p className="font-lato-regular text-[56px] py-4">Preserve An Everlasting Series</p>
                        <p className="font-inter text-2xl">Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>

            </div>
        </div>
    );
}