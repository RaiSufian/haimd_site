import { Icon } from '@iconify/react';

const Header = () => {
    return (
        <div className="py-5  border-b-2 border-gray-800 bg-black">
            <div className="container mx-auto flex justify-between lg:px-14 md:px-8 px-2"> <img src="/img/logo.jpg" alt="logo" width={100} />
                <div className="header_menu flex items-center gap-5">
                    <div className="flex items-center">
                        <a href='https://github.com/RaiSufian' target="_black">
                            <div className="px-1"><Icon icon="mdi:github" className="text-xl" /></div>
                        </a>
                        <a href='https://www.linkedin.com/in/abu-sufian-5104221a0/' target="_black"><div className="px-3"><Icon icon="akar-icons:linkedin-v2-fill" className="text-xl" /></div></a>
                        <a href='https://twitter.com/RaiSufian5' target="_black"><div ><Icon icon="ph:twitter-logo-light" className="text-xl" />
                        </div></a>
                    </div>
                    <div className=" relative before:absolute before:-inset-1 before:rounded-3xl before:bg-teal-500"><button className=' md:px-10 md:py-3 px-6 py-2 border border-white rounded-3xl h-12 font-bold relative '>Contact</button></div>

                </div>
            </div>
        </div>
    )
}
export default Header;