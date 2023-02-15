const Project = () => {
    return (
        <div className="project_section py-12">
            <div className="container mx-auto px-14">
                <h3 className="text-center lg:text-5xl md:text-3xl text-2xl font-extrabold font-inter">I create jobs <br /><span className="text-themeColor">that enchant people</span></h3>
                <div className="project_details mt-8 flex flex-wrap justify-center gap-3 group">
                    <div className="project_card lg:w-[32%] md:w-[49%] w-[100%] cursor-pointer group-hover:blur-sm hover:!blur-none duration-300 ">
                        <img src="/img/web_1.jpg" alt="project_img" className="w-[100%] rounded-lg h-[700px] object-cover object-top"/>
                    </div>
                    <div className="project_card lg:w-[32%] md:w-[49%] w-[100%]  cursor-pointer group-hover:blur-sm hover:!blur-none duration-300 ">
                        <img src="/img/web2.jpg" alt="project_img" className="w-[100%] rounded-lg h-[700px] object-cover object-top"/>
                    </div>
                    <div className="project_card lg:w-[32%] md:w-[49%] w-[100%]  cursor-pointer group-hover:blur-sm hover:!blur-none duration-300 ">
                        <img src="/img/web3.jpg" alt="project_img" className="w-[100%] rounded-lg h-[700px] object-cover object-top"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Project;