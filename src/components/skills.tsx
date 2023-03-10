const Skills = () => {
    return (
        <div className="skill_section py-14 bg-black">
            <div className="container mx-auto lg:px-12 px-3">
                <h3 className="lg:text-5xl text-3xl font-extrabold">
                    My
                    <span className="text-themeColor"> Skills</span></h3>
                <div className="skill_details flex mt-5 flex-wrap gap-3">
                    <div className="skill_card p-5 mt-2 lg:w-[32%] md:w-[48%] relative before:absolute before:w-2 hover:before:w-full before:h-[100%] before:left-0 before:top-0 before:content-[''] before:bg-bg1 before:rounded-lg before:-translate-x-1/2 hover:before:translate-x-0 before:transition-all before:duration-500">
                        <h6 className="text-2xl font-bold relative">What can I do for you</h6>
                        <p className="mt-2 relative">I believe that great design should be intuitive and user-friendly for everyone, including those who don't consider themselves "designers." It's my job to ensure that your audience can interact with your brand in a way that makes sense for them, whether they're on a laptop or a phone.</p>
                    </div>
                    <div className="skill_card p-5 mt-2 lg:w-[32%] md:w-[48%] relative before:absolute before:w-2 hover:before:w-full before:h-[100%] before:left-0 before:top-0 before:content-[''] before:bg-bg2 before:rounded-lg before:-translate-x-1/2 hover:before:translate-x-0 before:transition-all before:duration-500">
                        <h6 className="text-2xl font-bold relative">Applications I am fluent in</h6>
                        <p className="mt-2 relative ">Creating visual elements for your brand, including logos, icons, typography, and more. Developing interactive elements like websites, mobile apps and games. Creating marketing campaigns that get results.</p>
                    </div>
                    <div className="skill_card p-5 mt-2 lg:w-[32%] md:w-[48%] relative before:absolute before:w-2 hover:before:w-full before:h-[100%] before:left-0 before:top-0 before:content-[''] before:bg-bg3 before:rounded-lg before:-translate-x-1/2 hover:before:translate-x-0 before:transition-all before:duration-500">
                        <h6 className="text-2xl font-bold relative">What can you expect</h6>
                        <p className="mt-2 relative">You can expect me to deliver high-quality work on time and within budget. You can also expect me to be honest with you about your project's needs, so that we can come up with an approach that works best for both of us.</p>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Skills;