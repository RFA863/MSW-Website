export default function Map() {
    return (
        <div id="map" className="mx-12 lg:mx-24 h-screen tracking-[.6px] text-[#27272A] flex flex-col lg:flex-row justify-center lg:justify-between  items-center gap-y-12 lg:gap-y-0 text-center lg:text-left py-8 lg:py-0">

            <div >
                <p className="font-lato-regular text-[32px]">MSW Ohio</p>
                <p className="font-inter text-2xl">10203 State Route 43</p>
                <p className="font-inter text-2xl">Streetsboro, Ohio 44241</p>
                <p className="font-lato-regular text-2xl">info@example.com</p>
            </div>

            <div className=" hidden md:block">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.8404226940224!2d-81.3489535241936!3d41.26881030334233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883122ae8e38db3b%3A0xa0ad5d1d8dbd9a80!2s10203%20OH-43%2C%20Streetsboro%2C%20OH%2044241%2C%20Amerika%20Serikat!5e0!3m2!1sid!2sid!4v1728764904610!5m2!1sid!2sid"
                    width="600"
                    height="450"
                    style={{ border: 0 }}  // Properti style harus berupa objek JavaScrip
                    allowFullScreen={true}  // JSX menggunakan allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>

            <div className=" block md:hidden">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.8404226940224!2d-81.3489535241936!3d41.26881030334233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883122ae8e38db3b%3A0xa0ad5d1d8dbd9a80!2s10203%20OH-43%2C%20Streetsboro%2C%20OH%2044241%2C%20Amerika%20Serikat!5e0!3m2!1sid!2sid!4v1729828544186!5m2!1sid!2sid"
                    width="300"
                    height="300"
                    style={{ border: 0 }}  // Properti style harus berupa objek JavaScript
                    allowFullScreen={true}
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade">

                </iframe>
            </div>

        </div>
    )
}