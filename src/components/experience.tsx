import { Icon } from '@iconify/react';
const Experience = () => {
    return (
        <div className="py-5">
            <div className="container md:px-12 px-2 mx-auto">
                <h3 className="lg:text-5xl text-3xl font-extrabold font-inter">
                    💼<br />
                    <span className="text-themeColor">Professional</span> Experience</h3>
                <div className="font-inter work_experience relative before:content-[''] before:bg-gray-800 before:text-4xl before:absolute before:w-1 before:h-[100%] before:right-[50%] before:rounded-xl pt-4 before:translate-x-2/4">
                    <div className="exper_items py-7 w-[50%] md:pr-7 pr-3 relative before:absolute before:content-[''] before:h-4 before:w-4 before:bg-themeColor before:right-0 before:rotate-45 before:translate-x-1/2 before:translate-y-3/4">
                        <h5 className="md:text-2xl text-md font-extrabold">React JS Developer</h5>
                        <p className="flex items-center justify-between text-sm md:text-md"><a href="https://storakdigital.com/">Storak Digital</a><span>Apr 2022 - Sep 2023</span></p>
                    </div>
                    <div className="flex justify-end">

                        <div className="exper_items py-7 w-[50%] md:pl-7 pl-3 relative before:absolute before:content-[''] before:h-4 before:w-4 before:bg-themeColor before:left-0 before:rotate-45 before:-translate-x-1/2 before:translate-y-3/4">
                            <h5 className="md:text-2xl text-md font-extrabold">React JS Developer</h5>
                            <p className="flex items-center justify-between text-sm md:text-md"><a href="https://www.linkedin.com/company/kings-digital-solution-pvt-ltd/?originalSubdomain=pk">King Digital Solutions</a><span>May 2021 - Mar 2022</span></p>
                        </div>
                    </div>
                    <div className="exper_items py-7 w-[50%] md:pr-7 pr-3 relative before:absolute before:content-[''] before:h-4 before:w-4 before:bg-themeColor before:right-0 before:rotate-45 before:translate-x-1/2 before:translate-y-3/4">
                        <h5 className="md:text-2xl text-md font-extrabold">Front end Developer</h5>
                        <p className="flex items-center justify-between text-sm md:text-md"><a href="https://www.softileo.com/">Next Pedia</a><span>Aug 2019 - Apr 2021</span></p>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Experience;