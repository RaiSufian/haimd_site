import { Icon } from '@iconify/react';
const Hero = () => {
    return (
        <div className="hero_section py-8">
            <div className="md:px-14 px-4 container mx-auto md:flex items-center justify-center">
                <div className="flex-1" >
                    <div className="hero_content_side font-inter">
                        <p className="font-bold text-gray-500 flex items-center gap-1 text-lg"><Icon icon="ic:round-front-hand" style={{ color: "#FFCF4B" }} /> Hello, My name is</p>
                        <h3 className="font-extrabold lg:text-5xl text-3xl">Abu Sufian.</h3>
                        <h1 className="lg:text-5xl text-3xl font-extrabold py-3 text-themeColor">Websites <br /> Developer &<br /> Designer</h1>
                        <p className="text-sm font-bold lg:w-96">I CREATE WEBSITES THAT ARE A PLEASURE TO USE. I DESIGN THEM WITH BEAUTIFUL TYPOGRAPHY, MEANINGFUL TRANSITIONS AND THOUGHTFUL INTERACTIONS THAT DELIGHT PEOPLE.</p>
                        <button className=" z-10 lg:py-4 py-2 lg:px-14 px-7 bg-themeColor text-black font-bold rounded-full mt-4 relative before:absolute before:content-['Get_in_touch'] before:top-0  before:left-0 before:w-0 before:h-full before:bg-white before:rounded-full before:text-black before:py-4 before:overflow-hidden hover:before:w-full before:transition-all before:duration-150">Get in touch</button>
                    </div>

                </div>
                <div className="flex-1 flex justify-center items-center py-2 translate-y-20 md:translate-y-10" style={{ background: "radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0.11) 0%, rgba(29, 30, 34, 0) 100%)" }}>
                    <div className=" animate-waving-hand  float-left origin-wave_keys relative before:content-[''] before:absolute before:hidden lg:before:block before:w-[150px]  before:h-[150px] before:border  before:left-[50%] before:translate-x-[-50%] before:border-b-0 before:border-r-0 before:rotate-45 after:content-[''] after:absolute after:w-1 after:h-1 after:bg-white after:top-[-30px] after:left-[50%] after:translate-x-[-50%] after:rounded after:hidden after:lg:block">
                        <img src="/img/mockup.webp" className="mx-auto w-[800px] md-translate-y-4  relative" alt="hero_img" />
                    </div>
                </div>
            </div>

            <div className="my_skills_list bg-white -rotate-1 mt-3">
                <div className="skill_item text-black md:flex hidden items-center py-3 justify-center xl:gap-6 lg:gap-3 lg:text-md text-sm gap-1">


                    <h6 className="font-extrabold">JavaScript</h6>
                    <Icon icon="fa:asterisk" className="text-themeColor" />
                    <h6 className="font-extrabold">REACT JS</h6>
                    <Icon icon="fa:asterisk" className="text-themeColor" />
                    <h6 className="font-extrabold">NEXT JS</h6>
                    <Icon icon="fa:asterisk" className="text-themeColor" />
                    <h6 className="font-extrabold">REdux</h6>
                    <Icon icon="fa:asterisk" className="text-themeColor" />
                    <h6 className="font-extrabold">RestAPI</h6>
                    <Icon icon="fa:asterisk" className="text-themeColor" />
                    <h6 className="font-extrabold">Graph QL</h6>
                    <Icon icon="fa:asterisk" className="text-themeColor" />
                    <h6 className="font-extrabold">Gatsby</h6>
                    <Icon icon="fa:asterisk" className="text-themeColor" />
                    <h6 className="font-extrabold">Tailwind</h6>
                    <Icon icon="fa:asterisk" className="text-themeColor" />
                    <h6 className="font-extrabold">Bootstrap</h6>
                    <Icon icon="fa:asterisk" className="text-themeColor" />
                    <h6 className="font-extrabold">TypeScript</h6>

                </div>
            </div>
        </div>
    )
}
export default Hero;