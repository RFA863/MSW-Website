import Image from "next/image"

import EvetWedding2 from "../../public/image/Event-wedding-2.png";
import EventPrivate1 from "../../public/image/Event-private-1.png";
import EventDecor3 from "../../public/image/Event-decor-3.png";

export default function FeaturedEvent() {
    return (
        <div id="gallery" className="mx-12 md:mx-24 tracking-[.6px] min-h-screen my-8 md:my-16">
            <div className="flex justify-center text-center font-lato-light text-4xl md:text-[40px] text-black my-16 ">
                Featured Events
            </div>

            <div className="text-center lg:text-left">

                <div className="flex flex-col lg:flex-row-reverse  items-center justify-between gap-x-8 md:my-16">

                    <div className="basis-1/2">
                        <Image src={EvetWedding2} alt="featured event image" className=" w-[380px] md:w-[625px] md:h-[480px] object-scale-down md:object-cover" />
                    </div>

                    <div className="basis-1/2 text-[#27272A] my-8 lg:mt-0">
                        <p className="font-lato-light text-base">GATHERING</p>
                        <p className="font-lato-regular text-2xl md:text-[32px] my-3">Elegant & Exclusive Gatherings</p>
                        <p className="font-inter text-lg md:ext-[22px]">Crafted to reflect your unique vision</p>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row items-center justify-between gap-x-8 md:my-16 ">

                    <div className="basis-1/2">
                        <Image src={EventPrivate1} alt="featured event image" className=" w-[380px] md:w-[625px] md:h-[480px] object-scale-down md:object-cover" />
                    </div>

                    <div className="basis-1/2 text-[#27272A] my-8 lg:mt-0">
                        <p className="font-lato-light text-base">CELEBRATION</p>
                        <p className="font-lato-regular text-2xl md:text-[32px] my-3">Unforgettable Moments, Beautifully Arranged</p>
                        <p className="font-inter text-lg md:ext-[22px]">Customized for every cherished occasion</p>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row-reverse  items-center justify-between gap-x-8 md:my-16">

                    <div className="basis-1/2">
                        <Image src={EventDecor3} alt="featured event image" className=" w-[380px] md:w-[625px] md:h-[480px] object-scale-down md:object-cover" />
                    </div>

                    <div className="basis-1/2 text-[#27272A] my-8 lg:mt-0">
                        <p className="font-lato-light text-base">DECORATION</p>
                        <p className="font-lato-regular text-2xl md:text-[32px] my-3">Crafted to Delight and Celebrate</p>
                        <p className="font-inter text-lg md:ext-[22px]">Every slice tells a story of joy</p>
                    </div>
                </div>
            </div>
        </div>
    )
}