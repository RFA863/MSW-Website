import Image from "next/image";

import AboutImg from "../../public/image/About-img.png";

export default function About() {
    return (
        <div id="about" className="mx-24 h-screen mt-2" >
            <div className="flex justify-between items-center gap-x-12 h-full">

                <div className="text-black tracking-[.6px]">
                    <p className="font-lato-light text-base">ABOUT US</p>
                    <p className="font-lato-regular text-[32px] my-3">Every Details Are Important</p>
                    <p className="text-[#121212]/75">
                        At MSW, lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Curabitur nec pulvinar metus. Suspendisse potenti. Vestibulum in
                        bibendum risus, euismod tincidunt neque. Proin vitae commodo odio.
                        Nam dui est, interdum sed vehicula at, convallis vel nulla.
                        Phasellus eget tortor vel leo congue luctus eu vel odio.
                    </p>
                </div>
                <Image src={AboutImg} alt="about-image" />
            </div>
        </div>
    )
}