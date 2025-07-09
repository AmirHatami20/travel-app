"use client"

import React, {useEffect, useState} from 'react';
import {TbAirBalloon} from "react-icons/tb";
import {navLinks} from "@/constant/constant";
import Link from "next/link";
import {HiBars3BottomRight} from "react-icons/hi2";

type props = {
    toggleNavbar: () => void;
}

function DesktopNavbar({toggleNavbar}: props) {
    const [navBg, setNavBg] = useState(false)

    useEffect(() => {
        const handler = () => {
            if (window.scrollY >= 90) setNavBg(true);
            if (window.scrollY < 90) setNavBg(false);
        }
        window.addEventListener("scroll", handler);
        return () => window.removeEventListener("scroll", handler);
    }, [])


    return (
        <div
            className={`fixed transition-all duration-200 h-[12vh] z-50 w-full ${
                navBg ? "shadow-md bg-blue-950" : ""
            }`}
        >
            <div className="container flex items-center h-full justify-between gap-3">
                {/* Logo */}
                <div className="flex items-center gap-x-2">
                    <div className="flex w-10 h-10 items-center justify-center bg-rose-500 rounded-full">
                        <TbAirBalloon className="text-white text-2xl"/>
                    </div>
                    <span className="text-white text-2xl font-bold">TRIPI</span>
                </div>
                {/* NavLinks */}
                <ul className="hidden lg:flex items-center gap-x-10">
                    {navLinks.map((link) => (
                        <li key={link.id}>
                            <Link
                                href={link.url}
                                className="nav-link"
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
                {/* Buttons */}
                <div className="flex items-center gap-x-5">
                    <button
                        className="px-8 py-2 md:px-12 md:py-2.5 text-black bg-white hover:bg-gray-200 transition-all duration-200 rounded-lg"
                    >
                        Book now
                    </button>
                    {/* Trigger btn */}
                    <button
                        className="w-8 h-8 cursor-pointer text-white text-3xl lg:hidden"
                        onClick={toggleNavbar}
                    >
                        <HiBars3BottomRight/>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default DesktopNavbar;