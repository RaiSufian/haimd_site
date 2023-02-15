import { Icon } from '@iconify/react';
const About = () => {
    return (
        <div className="about_section py-12 ">
            <div className="container px-14 md:flex mx-auto items-center">
                <div className="flex-1">
                    <div className="text-white font-inter">
                        <h2 className="lg:text-5xl text-3xl font-extrabold"><span className="text-themeColor">About </span>Abu Sufian</h2>
                        <p className="py-4 pr-12 text-sm">A creative professional with a strong portfolio in digital design, including experience with front-end development. Experienced working from concept to production, and with stakeholders from multiple disciplines.</p>
                        <div className="about_social flex items-center gap-4">
                            <a href='https://github.com/RaiSufian' target="_black" aria-label='get my git account'><Icon icon="mdi:github" className="text-xl " /></a>
                            <a href='https://www.linkedin.com/in/abu-sufian-5104221a0/' target="_black"  aria-label='get my link din account ' ><Icon icon="ic:baseline-facebook" className="text-xl" /></a>
                            <a href='https://twitter.com/RaiSufian5' target="_black" aria-label='get my twitter account '><Icon icon="ph:twitter-logo-light" className="text-xl" /></a>
                        </div>
                        <h6 className="font-bold mt-7 text-sm">Here are a few technologies I’ve been working with recently:</h6>
                        <div className="skills_names flex mt-2">
                            <div className="skill_name py-2 flex-1 flex gap-2 items-center">
                                <img src="/img/skills.svg" alt="skill_icons"/>
                                <p className="text-sm font-normal">Javascript</p>
                            </div>
                            <div className="skill_name py-2 flex-1 flex gap-2 items-center">
                                <img src="/img/skills.svg" alt="skill_icons" />
                                <p className="text-sm font-normal">React JS</p>
                            </div>
                            <div className="skill_name py-2 flex-1 flex gap-2 items-center">
                                <img src="/img/skills.svg" alt="skill_icons" />
                                <p className="text-sm font-normal">Next JS</p>
                            </div>
                        </div>
                        <div className="skills_names flex">
                            <div className="skill_name py-2 flex-1 flex gap-2 items-center">
                                <img src="/img/skills.svg" alt="skill_icons" />
                                <p className="text-sm font-normal">Bootstrap</p>
                            </div>
                            <div className="skill_name py-2 flex-1 flex gap-2 items-center">
                                <img src="/img/skills.svg" alt="skill_icons" />
                                <p className="text-sm font-normal">Tailwind</p>
                            </div>
                            <div className="skill_name py-2 flex-1 flex gap-2 items-center">
                                <img src="/img/skills.svg" alt="skill_icons" />
                                <p className="text-sm font-normal">Rest API</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-1 flex justify-center align-middle ">
                    <div className="relative before:absolute before:bg-gray-300 before:-inset-1 before:content-[''] before:rounded-3xl before:translate-y-4 before:translate-x-4 hover:before:translate-x-0 hover:before:translate-y-0 before:transition-all before:duration-300"><img src="/img/about.png" width={500} className="mx-auto relative"alt="about img" /></div>
                </div>
            </div>
        </div>
    )
}
export default About;