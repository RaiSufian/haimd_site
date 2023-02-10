const ContactUS = () => {
    return (
        <div className="contactUS_section py-8 bg-contact bg-fixed bg-no-repeat bg-cover bg-center relative before:absolute before:w-full before:h-full before:top-0 before:left-0 before:content-[''] before:bg-black before:bg-opacity-60" >
            <div className="container md:px-14 px-2 mx-auto font-inter relative">
                <h2 className="lg:text-5xl text-3xl font-extrabold">You Can <span className="text-themeColor"> See Me</span></h2>
                <div className="flex md:mt-8 mt-6 flex-wrap">
                    <div className="flex-1 text-center lg:w-[20%]"><a href="tel:+923094116604"><img src="/img/phone_call.png" className="bg-white lg:w-28 md:w-20 w-16 rounded-full mx-auto"/></a></div>
                    <div className="flex-1 text-center lg:w-[20%]"><a href="mailto:mashancs571@gmail.com"><img src="/img/email.png" className="bg-white lg:w-28 md:w-20 w-16 rounded-full mx-auto"/></a></div>
                    <div className="flex-1 text-center lg:w-[20%]"><a href="https://api.whatsapp.com/send?phone=+923094116604&amp;text=Hi there! I have a question :)" target="_blank"><img src="/img/whats_img.png" className="bg-white lg:w-28 md:w-20 w-16 rounded-full mx-auto"/></a></div>
                    <div className="flex-1 text-center lg:w-[20%]"><a href="https://www.fiverr.com/sufian_wordpres" target="_blank"><img src="/img/upwork logo.png" className="bg-white lg:w-28 md:w-20 w-16 rounded-full mx-auto"/></a></div>
                    <div className="flex-1 text-center lg:w-[20%]"><a href="https://www.upwork.com/freelancers/~01a66060bee835d103" target="_blank"><img src="/img/fiver_logo.png" className="bg-white lg:w-28 md:w-20 w-16 rounded-full mx-auto"/></a></div>
                </div>
            </div>

        </div>
    )
}
export default ContactUS;