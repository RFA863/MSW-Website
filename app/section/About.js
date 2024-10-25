import Image from "next/image";

import AboutImg from "../../public/image/About-img.png";


export default function About() {
    return (
        <div id="about" className="mx-12 md:mx-24 h-screen " >
            <div className="flex flex-col lg:flex-row justify-between items-center gap-x-12  h-full  text-center xl:text-left my-16">

                <div className="basis-1/2 text-black tracking-[.6px]" >
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

                <div className="basis-1/2">
                    <Image src={AboutImg} alt="about-image" className="mx-auto  md:w-[610px] h-[320px] object-scale-down md:object-cover" />
                </div>
            </div>
        </div>
    )
}