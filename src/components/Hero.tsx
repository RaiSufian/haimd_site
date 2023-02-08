import { Icon } from '@iconify/react';
const Hero = () => {
    return (
        <div className="hero_section py-8">
            <div className="px-14 container mx-auto flex items-center">
                <div className="flex-1" style={{ background: "radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0.11) 0%, rgba(29, 30, 34, 0) 100%)" }}>
                    <div className="hero_content_side font-inter">
                        <p className="font-bold text-gray-500 flex items-center gap-1 text-lg"><Icon icon="ic:round-front-hand" style={{ color: "#FFCF4B" }} /> Hello, My name is</p>
                        <h3 className="font-extrabold text-5xl">Abu Sufian.</h3>
                        <h3 className="text-5xl font-extrabold py-3 text-themeColor">Frontend web <br /> developer and<br /> Designer</h3>
                        <p className="text-sm font-bold w-96">I CREATE WEBSITES THAT ARE A PLEASURE TO USE. I DESIGN THEM WITH BEAUTIFUL TYPOGRAPHY, MEANINGFUL TRANSITIONS AND THOUGHTFUL INTERACTIONS THAT DELIGHT PEOPLE.</p>
                        <button className="mt-3 py-4 px-14 bg-themeColor text-black font-bold rounded-full">Get in touch</button>
                    </div>

                </div>
                <div className="flex-1">
                    <img src="/img/hero.png" className="mx-auto" width={510} />
                </div>
            </div>
            <div className="my_skills_list bg-white -rotate-1 mt-2">
                <div className="skill_item text-black flex items-center py-3 justify-center gap-6">
                    <h6 className="font-extrabold">HTML5</h6>
                    <Icon icon="fa:asterisk" className="text-themeColor"/>
                    <h6 className="font-extrabold">CSS</h6>
                    <Icon icon="fa:asterisk" className="text-themeColor" />
                    <h6 className="font-extrabold">Javascript</h6>
                    <Icon icon="fa:asterisk" className="text-themeColor"/>
                    <h6 className="font-extrabold">REACT JS</h6>
                    <Icon icon="fa:asterisk" className="text-themeColor"/>
                    <h6 className="font-extrabold">NEXT JS</h6>
                    <Icon icon="fa:asterisk" className="text-themeColor"/>
                    <h6 className="font-extrabold">REdux</h6>
                    <Icon icon="fa:asterisk" className="text-themeColor" />
                    <h6 className="font-extrabold">RestAPI</h6>
                    <Icon icon="fa:asterisk" className="text-themeColor" />
                    <h6 className="font-extrabold">Graph QL</h6>
                    <Icon icon="fa:asterisk" className="text-themeColor" />
                    <h6 className="font-extrabold">Gatsby</h6>
                    <Icon icon="fa:asterisk" className="text-themeColor"/>
                    <h6 className="font-extrabold">Bootstrap</h6>
                </div>
            </div>
        </div>
    )
}
export default Hero;