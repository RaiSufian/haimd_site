const Project = () => {
    return (
        <div className="project_section py-12">
            <div className="container mx-auto px-14">
                <h3 className="text-center text-5xl font-extrabold font-inter">I create jobs <br /><span className="text-themeColor">that enchant people</span></h3>
                <div className="project_details mt-8 flex justify-center gap-3">
                    <div className="project_card w-[33%] ">
                        <img src="/img/project1.png" alt="project_img" className="w-[100%] rounded-lg h-[600px] object-cover object-top"/>
                    </div>
                    <div className="project_card w-[33%]">
                        <img src="/img/project2.png" alt="project_img" className="w-[100%] rounded-lg h-[600px] object-cover object-top"/>
                    </div>
                    <div className="project_card w-[33%]">
                        <img src="/img/project3.png" alt="project_img" className="w-[100%] rounded-lg h-[600px] object-cover object-top"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Project;