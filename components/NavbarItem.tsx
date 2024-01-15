import { useRouter } from "next/navigation";
import React from "react";
interface NavbarItemProps{
    label: string
}
const NavbarItem:React.FC<NavbarItemProps> = ({label}) => {
    const router = useRouter();
    return (
        <div className="text-white cursor-pointer hover:text-gray-300 transition">
            {label}
        </div>
    )
}

export default NavbarItem;