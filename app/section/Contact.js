
export default function Contact() {
    return (
        <div id="contact" className="mx-24 h-screen tracking-[.6px] text-[#27272A] flex justify-between items-center">
            <div className="mx-10 basis-1/2">
                <p className="font-inter text-base mb-8">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nam quis odio venenatis, tristique nisi eget, lobortis lectus.
                    Integer sollicitudin blandit est, in commodo turpis vestibulum et.
                    Etiam dignissim metus id lorem egestas condimentum. Suspendisse
                    lobortis tempor dolor id lobortis. Donec non tellus sed magna
                    tincidunt pulvinar sed id diam. Morbi in lectus non erat mattis
                    ornare a quis nulla. Praesent vitae facilisis felis.
                </p>
                <p className="font-lato-regular text-[32px]">
                    Contact Us!
                </p>
            </div>

            <div className="basis-1/2">
                <form>
                    <p className="font-lato-bold text-2xl">Name <span className="text-base">(required)</span></p>

                    <div className="flex justify-between items-center gap-x-3 my-4">
                        <div className="basis-1/2">
                            <p className="font-lato-light text-base">First Name</p>
                            <input type="text" className="border border-[#71717A] rounded p-2 text-base w-full" />
                        </div>
                        <div className="basis-1/2">
                            <p className="font-lato-light text-base">Last Name</p>
                            <input type="text" className="border border-[#71717A] rounded p-2 text-base w-full" />
                        </div>
                    </div>

                    <div>
                        <p className="font-lato-bold text-2xl">Email <span className="text-base">(required)</span></p>
                        <input type="email" className="border border-[#71717A] rounded p-2 text-base w-full" />
                    </div>

                    <div className="my-4">
                        <p className="font-lato-bold text-2xl">Message <span className="text-base">(required)</span></p>
                        <textarea rows="10" cols="30" className="border border-[#71717A] rounded p-2 text-base w-full"></textarea>
                    </div>
                    <button className="bg-[#27272A] px-6 py-3 text-[#FAFAFA] font-lato-regular text-base">Send</button>
                </form>
            </div>
        </div>
    )
}