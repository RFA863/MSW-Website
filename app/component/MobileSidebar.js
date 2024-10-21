
"use client";

import { Drawer, Sidebar } from "flowbite-react";
import { FaYoutube, FaFacebookF, FaInstagram, FaBars } from "react-icons/fa";


import Logo from "../../public/logo/Logo.svg"

export default function MobileSidebar({ openSidebar, setOpenSidebar }) {

    const customThemeDrawer = {
        "header": {
            "inner": {
                "closeButton": "absolute end-2.5 top-2.5 flex h-[80px] w-[80px] items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white",
                "closeIcon": "h-[40px] w-[40px]",
                "titleIcon": "me-2.5  w-[130px] text-[#F472B6]",
                "titleText": "mb-4 inline-flex items-center text-base font-semibold text-gray-500 dark:text-gray-400"
            },
            "collapsed": {
                "on": "hidden",
                "off": "block"
            }
        },
    }

    const customThemeSidebar = {
        "itemGroup": {
            "base": " space-y-2 border-b border-black pt-4 first:mt-0 last:border-b-0 first:pt-0 dark:border-gray-700"
        },
    }


    const handleClose = () => setOpenSidebar(false);

    return (
        <>

            <Drawer open={openSidebar} onClose={handleClose} theme={customThemeDrawer}>
                <Drawer.Header titleIcon={Logo} closeIcon={FaBars} />

                <Drawer.Items>
                    <Sidebar
                        aria-label="Sidebar with multi-level dropdown example"
                        className="[&>div]:bg-transparent [&>div]:p-0"
                        theme={customThemeSidebar}
                    >
                        <div className="flex h-full flex-col justify-between py-2">
                            <div>

                                <Sidebar.Items>
                                    <Sidebar.ItemGroup>
                                        <Sidebar.Item href="/#about" >
                                            About Us
                                        </Sidebar.Item>
                                    </Sidebar.ItemGroup>

                                    <Sidebar.ItemGroup>
                                        <Sidebar.Item href="/#gallery" >
                                            Gallery
                                        </Sidebar.Item>
                                    </Sidebar.ItemGroup>

                                    <Sidebar.ItemGroup>
                                        <Sidebar.Item href="/#service" >
                                            Services
                                        </Sidebar.Item>
                                    </Sidebar.ItemGroup>

                                    <Sidebar.ItemGroup>
                                        <Sidebar.Item href="/#client" >
                                            Client
                                        </Sidebar.Item>
                                    </Sidebar.ItemGroup>

                                    <Sidebar.ItemGroup>
                                        <Sidebar.Item href="/#map" >
                                            Map
                                        </Sidebar.Item>
                                    </Sidebar.ItemGroup>

                                    <Sidebar.ItemGroup>
                                        <div className="flex">
                                            <Sidebar.Item href="https://github.com/themesberg/flowbite-react/" icon={FaYoutube}>

                                            </Sidebar.Item>
                                            <Sidebar.Item href="https://flowbite-react.com/" icon={FaFacebookF}>

                                            </Sidebar.Item>
                                            <Sidebar.Item href="https://github.com/themesberg/flowbite-react/issues" icon={FaInstagram}>

                                            </Sidebar.Item>
                                        </div>
                                    </Sidebar.ItemGroup>
                                </Sidebar.Items>
                            </div>
                        </div>
                    </Sidebar>
                </Drawer.Items>
            </Drawer >
        </>
    );
}