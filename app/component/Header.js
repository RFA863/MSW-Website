import Image from 'next/image'
import { FaYoutube, FaFacebookF, FaInstagram } from "react-icons/fa";

import Logo from "../../public/logo/Logo.svg"

export default function Headers() {

    return (
        <header className="font-tenor-sans text-2xl fixed  top-0 z-[1] w-screen ">
            <div className="mx-20 my-6 flex items-center justify-between">

                <div className="flex items-center gap-x-6">
                    <Image src={Logo} alt='logo' />
                    <div>About Us</div>
                    <div>Gallery</div>
                    <div>Services</div>
                    <div>Clients</div>
                    <div>Map</div>
                </div>

                <div className="flex items-center justify-end gap-x-10">
                    <div className="flex gap-x-4">
                        <FaYoutube />
                        <FaFacebookF />
                        <FaInstagram />
                    </div>
                    <div className='px-8 py-3 rounded-lg'>
                        Inquiry
                    </div>
                </div>
            </div>
        </header>
    )
}