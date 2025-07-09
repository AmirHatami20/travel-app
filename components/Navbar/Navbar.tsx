"use client"

import {useState} from 'react';
import DesktopNavbar from "@/components/Navbar/DesktopNavbar";
import MobileNavbar from "@/components/Navbar/MobileNavbar";

function Navbar() {
    const [showNavbar, setShowNavbar] = useState(false);

    const toggleNavbar = () => {
        setShowNavbar(prev => !prev);
    }
    return (
        <>
            <DesktopNavbar toggleNavbar={toggleNavbar}/>
            <MobileNavbar isShowNavbar={showNavbar} toggleNavbar={toggleNavbar}/>
        </>
    );
}

export default Navbar;