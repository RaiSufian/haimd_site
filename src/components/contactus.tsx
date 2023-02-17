const ContactUS = () => {
    return (
        <div className="contactUS_section py-8 bg-contact bg-fixed bg-no-repeat bg-cover bg-center relative before:absolute before:w-full before:h-full before:top-0 before:left-0 before:content-[''] before:bg-black before:bg-opacity-40" >
            <div className="container md:px-14 px-2 mx-auto font-inter relative">
                <h2 className="lg:text-5xl text-3xl font-extrabold">You Can <span className="text-themeColor"> See Me</span></h2>
                <div className="flex md:mt-8 mt-6 flex-wrap">
                    <div className="flex-1 text-center lg:w-[20%] hover:scale-90 duration-100 transition-all" ><a href="tel:+923094116604" aria-label="get my phone number"><img src="/img/phone_call.png" alt="phone_icon" className="bg-white lg:w-28 md:w-20 w-16 rounded-full mx-auto"/></a></div>
                    <div className="flex-1 text-center lg:w-[20%] hover:scale-90 duration-75"><a href="mailto:mashancs571@gmail.com" aria-label="get my email address"><img src="/img/email.png" alt="email_icon" className="bg-white lg:w-28 md:w-20 w-16 rounded-full mx-auto"/></a></div>
                    <div className="flex-1 text-center lg:w-[20%] hover:scale-90 duration-75"><a href="https://api.whatsapp.com/send?phone=+923094116604&amp;text=Hi there! I have a question :)" target="_blank" aria-label="get my whats app number"><img src="/img/whats_img.png" alt="whatsapp_icon" className="bg-white lg:w-28 md:w-20 w-16 rounded-full mx-auto"/></a></div>
                    <div className="flex-1 text-center lg:w-[20%] hover:scale-90 duration-75"><a href="https://www.fiverr.com/sufian_wordpres" target="_blank" aria-label="get my fiver account"><img src="/img/upwork logo.png" alt="upwork_icon" className="bg-white lg:w-28 md:w-20 w-16 rounded-full mx-auto"/></a></div>
                    <div className="flex-1 text-center lg:w-[20%] hover:scale-90 duration-75"><a href="https://www.upwork.com/freelancers/~01a66060bee835d103" target="_blank" aria-label="get my upwork account"><img src="/img/fiver_logo.png" alt="fiver_icon" className="bg-white lg:w-28 md:w-20 w-16 rounded-full mx-auto"/></a></div>
                </div>
            </div>

        </div>
    )
}
export default ContactUS;