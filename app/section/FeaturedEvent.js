import Image from "next/image"

import FeatureEventImg from "../../public/image/Featured-event-img.png";

export default function FeaturedEvent() {
    return (
        <div id="gallery" className="mx-12 xl:mx-24 tracking-[.6px] min-h-screen my-36">
            <div className="flex justify-center text-center font-lato-light text-4xl md:text-[40px] text-black my-16 xl:my-[120px]">
                Featured Events
            </div>

            <div className="text-center xl:text-left">

                <div className="flex flex-col md:flex-row-reverse  items-center justify-between gap-x-8 ">

                    <div className="basis-1/2">
                        <Image src={FeatureEventImg} alt="featured event image" className=" w-[380px] md:w-[625px] md:h-[480px] object-scale-down md:object-cover" />
                    </div>

                    <div className="basis-1/2 text-[#27272A] my-8 md:mt-0">
                        <p className="font-lato-light text-base">MEETING</p>
                        <p className="font-lato-regular text-2xl md:text-[32px] my-3">Special Meeting Event</p>
                        <p className="font-inter text-lg md:ext-[22px]">Tailored to your needs</p>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between gap-x-8">

                    <div className="basis-1/2">
                        <Image src={FeatureEventImg} alt="featured event image" className=" w-[380px] md:w-[625px] md:h-[480px] object-scale-down md:object-cover" />
                    </div>

                    <div className="basis-1/2 text-[#27272A] my-8 md:mt-0">
                        <p className="font-lato-light text-base">MEETING</p>
                        <p className="font-lato-regular text-2xl md:text-[32px] my-3">Special Meeting Event</p>
                        <p className="font-inter text-lg md:ext-[22px]">Tailored to your needs</p>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row-reverse  items-center justify-between gap-x-8 ">

                    <div className="basis-1/2">
                        <Image src={FeatureEventImg} alt="featured event image" className=" w-[380px] md:w-[625px] md:h-[480px] object-scale-down md:object-cover" />
                    </div>

                    <div className="basis-1/2 text-[#27272A] my-8 md:mt-0">
                        <p className="font-lato-light text-base">MEETING</p>
                        <p className="font-lato-regular text-2xl md:text-[32px] my-3">Special Meeting Event</p>
                        <p className="font-inter text-lg md:ext-[22px]">Tailored to your needs</p>
                    </div>
                </div>
            </div>
        </div>
    )
}