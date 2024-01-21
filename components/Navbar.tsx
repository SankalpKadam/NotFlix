import { useCallback, useEffect, useState } from "react";
import MobileMenu from "./MobileMenu";
import NavbarItem from "./NavbarItem";
import AccountMenu from "./AccountMenu";
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { useRouter } from "next/navigation";
const TOP_OFFSET = 66;

const Navbar = () => {

    const router = useRouter();
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [showAccountMenu, setShowAccountMenu] = useState(false);
    const [showBackground, setShowBackground] = useState(false);
    const showMenu = useCallback(() => {
        setShowMobileMenu((showMobileMenu) => !showMobileMenu)
    }, []);
    const showAccount = useCallback(() => {
        setShowAccountMenu((showAccountMenu) => !showAccountMenu)
    }, []);
    useEffect(()=>{
        const handleScroll = () => {
            if (window.scrollY >= TOP_OFFSET) {
                setShowBackground(true);
            } else {
                setShowBackground(false);
            }
        }
            window.addEventListener('scroll', handleScroll);
            return ()=>{
                window.removeEventListener('scroll', handleScroll);
            }
    }
    ,[]);
    return (
        <nav className="w-full fixed z-40">
            <div className={`px-4 md:px-16 py-6 flex flex-row items-center transition duration-500  ${showBackground ? "bg-zinc-900 bg-opacity-90": ''}`}>
                <img src="/images/logo1.png" alt="Logo" className="h-4 lg:h-7" />
                <div className="flex-row ml-8 gap-7 hidden lg:flex">
                    <NavbarItem label="Home" />
                    <NavbarItem label="Movies" />
                    <NavbarItem label="Series" />
                    <NavbarItem label="New & Popular" />
                    <NavbarItem label="My List" />
                </div>
                <div onClick={showMenu}
                    className="lg:hidden flex-row flex items-center gap-2 ml-8 cursor-pointer relative">
                    <p className="text-white text-sm">
                        Browse
                    </p>
                    {/* insert chevron down and icon classname="text-white transition"*/}
                    <MobileMenu visible={showMobileMenu} />
                </div>
                <div className="flex flex-row ml-auto gap-7 items-center">
                    <div className="text-gray-200 hover:text-gray-300 cursor-pointer">
                        <SearchIcon/>
                    </div>
                    <div className="text-gray-200 hover:text-gray-300 cursor-pointer">
                        <NotificationsIcon/>
                    </div>
                    <div className="flex flex-row items-center gap-2 cursor-pointer relative" onClick={showAccount}>
                        <div className="w-6 h-6 lg:w-10 lg:h-10 rounded-md overflow-hidden" >
                            <img src="/images/default-blue.png" alt="" />
                        </div>
                        {/* insert chevron down and icon*/}
                        <ExpandMoreIcon className="text-white"/>
                        <AccountMenu visible={showAccountMenu}/>
                    </div>
                </div>
            </div>

        </nav>
    )
}

export default Navbar;