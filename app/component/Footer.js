import { FaYoutube, FaFacebookF, FaInstagram } from "react-icons/fa";

import Logo from "../../public/logo/Logo.svg"

export default function Footer() {
    return (
        <div className="bg-[#18181B] text-[#F4F4F5] py-24">

            <div className="mx-10 xl:mx-20 flex flex-col items-center xl:flex-row ">
                <div className="basis-1/2 ">
                    <Logo className="text-[#F472B6] mx-auto h-20 mb-14" />
                </div>
                <div className="basis-1/2 flex gap-x-6 font-inter font-extralight text-xs">
                    <div className="basis-1/2 ">
                        <p className="font-normal text-xl mb-6">About MSW</p>
                        <p className="mb-1">Visit us in person:</p>
                        <p className="mb-6">
                            10203 State Route 43, Streetsboro,
                            Ohio 4421
                        </p>
                        <p className="mb-1">Phone Number:</p>
                        <p className="mb-6">+1 - 999 - 888 - 777</p>
                        <p className="mb-1">Working Hours:</p>
                        <p>
                            Monday - Friday <br />
                            10 AM - 4 PM EST
                        </p>

                    </div>
                    <div className="basis-1/2">
                        <p className="font-normal text-xl ">Quick Links</p>
                        <p className="my-6">About Us</p>
                        <p>Contact</p>
                    </div>
                </div>

            </div>

            <div className="flex  gap-x-4 justify-center items-center my-14 text-2xl">
                <FaYoutube />
                <FaFacebookF />
                <FaInstagram />
            </div>

            <div className="font-lato-regular text-[8px] text-center">© 2024. MSW Event Planner & Decor. All Rights Reserved</div>
        </div>
    )
}