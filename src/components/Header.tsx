import { Icon } from '@iconify/react';

const Header = () => {
    return (
        <div className="py-5  border-b-2 border-gray-800">
            <div className="container mx-auto flex justify-between lg:px-14 md:px-8 px-2"> <img src="/img/logo.png" alt="logo" width={60} />
                <div className="header_menu flex items-center gap-5">
                    <div className="flex items-center">
                        <a href='#'>
                            <div className="px-1"><Icon icon="mdi:github" className="text-xl" /></div>
                        </a>
                        <a href='#'><div className="px-1"><Icon icon="ic:baseline-facebook" className="text-xl" /></div></a>
                        <a href='#'><div className="px-1"><Icon icon="ph:twitter-logo-light" className="text-xl" />
                        </div></a>
                    </div>
                    <button className='md:px-10 md:py-3 px-6 py-2 border border-white rounded-3xl h-12 font-bold'>Contact</button>
                </div></div>


        </div>
    )
}
export default Header;