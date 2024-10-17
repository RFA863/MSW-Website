import Image from "next/image"

import FeatureEventImg from "../../public/image/Featured-event-img.png";

export default function FeaturedEvent() {
    return (
        <div id="gallery" className="mx-24 tracking-[.6px] min-h-screen mb-40">
            <div className="flex justify-center text-center font-lato-light text-[40px] text-black my-[120px]">
                Featured Events
            </div>

            <div>

                <div className="flex flex-row-reverse items-center justify-between flex-wrap">
                    <Image src={FeatureEventImg} alt="featured event image" />

                    <div className="text-[#27272A]">
                        <p className="font-lato-light text-base">MEETING</p>
                        <p className="font-lato-regular text-[32px] my-3">Special Meeting Event</p>
                        <p className="font-inter text-[22px]">Tailored to your needs</p>
                    </div>
                </div>

                <div className="flex  items-center justify-between flex-wrap my-[32px]">
                    <Image src={FeatureEventImg} alt="featured event image" />

                    <div className="text-[#27272A]">
                        <p className="font-lato-light text-base">MEETING</p>
                        <p className="font-lato-regular text-[32px] my-3">Special Meeting Event</p>
                        <p className="font-inter text-[22px]">Tailored to your needs</p>
                    </div>
                </div>

                <div className="flex flex-row-reverse items-center justify-between flex-wrap">
                    <Image src={FeatureEventImg} alt="featured event image" />

                    <div className="text-[#27272A]">
                        <p className="font-lato-light text-base">MEETING</p>
                        <p className="font-lato-regular text-[32px] my-3">Special Meeting Event</p>
                        <p className="font-inter text-[22px]">Tailored to your needs</p>
                    </div>
                </div>
            </div>
        </div>
    )
}