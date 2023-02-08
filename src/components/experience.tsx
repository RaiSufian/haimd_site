import { Icon } from '@iconify/react';
const Experience = () => {
    return (
        <div className="py-5">
            <div className="container px-12 mx-auto">
                <h3 className="text-5xl font-extrabold font-inter">
                    💼<br />
                    <span className="text-themeColor">Professional</span> Experience</h3>
                <div className="font-inter work_experience relative before:content-[''] before:bg-gray-800 before:text-4xl before:absolute before:w-1 before:h-[100%] before:right-[50%] before:rounded-xl pt-4 before:translate-x-2/4">
                    <div className="exper_items py-7 md:w-[50%] pr-7 relative before:absolute before:content-[''] before:h-4 before:w-4 before:bg-themeColor before:right-0 before:rotate-45 before:translate-x-1/2 before:translate-y-3/4">
                        <h5 className="text-2xl font-extrabold">React JS Developer</h5>
                        <p className="flex items-center justify-between"><span>Invozone pvt lte</span><span>2019 - 2021</span></p>
                    </div>
                    <div className="flex justify-end">

                        <div className="exper_items py-7 md:w-[50%] pl-7 relative before:absolute before:content-[''] before:h-4 before:w-4 before:bg-themeColor before:left-0 before:rotate-45 before:-translate-x-1/2 before:translate-y-3/4">
                            <h5 className="text-2xl font-extrabold">React JS Developer</h5>
                            <p className="flex items-center justify-between"><span>Invozone pvt lte</span><span>2019 - 2021</span></p>
                        </div>
                    </div>
                    <div className="exper_items py-7 md:w-[50%] pr-7 relative before:absolute before:content-[''] before:h-4 before:w-4 before:bg-themeColor before:right-0 before:rotate-45 before:translate-x-1/2 before:translate-y-3/4">
                        <h5 className="text-2xl font-extrabold">React JS Developer</h5>
                        <p className="flex items-center justify-between"><span>Invozone pvt lte</span><span>2019 - 2021</span></p>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Experience;