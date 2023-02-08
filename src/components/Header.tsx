import { Icon } from '@iconify/react';

const Header = () => {
    return (
        <div className="py-5  border-b-2 border-gray-800">
            <div className="container mx-auto flex justify-between px-14"> <img src="/img/logo.png" alt="logo" width={60} />
                <div className="header_menu flex items-center gap-5">
                    <div className="flex items-center">
                        <a href='#'>
                            <div className="px-1"><Icon icon="mdi:github" className="text-xl" /></div>
                        </a>
                        <a href='#'><div className="px-1"><Icon icon="ic:baseline-facebook" className="text-xl" /></div></a>
                        <a href='#'><div className="px-1"><Icon icon="ph:twitter-logo-light" className="text-xl" />
                        </div></a>
                    </div>
                    <button className='px-10 py-3 border border-white rounded-3xl h-12 font-bold'>Contact</button>
                </div></div>


        </div>
    )
}
export default Header;