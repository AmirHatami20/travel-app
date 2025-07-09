"use client";

import {IoClose} from "react-icons/io5";
import {navLinks} from "@/constant/constant";
import Link from "next/link";

type props = {
    isShowNavbar: boolean;
    toggleNavbar: () => void;
}

function MobileNavbar({isShowNavbar, toggleNavbar}: props) {

    const navOpen = isShowNavbar ? "translate-x-0 z-50" : "-translate-x-full";

    return (
        <div className="relative">
            {/* Overflow */}
            {isShowNavbar && (
                <div
                    className="fixed inset-0 z-30 transform transition-all duration-500 bg-black/30 w-full h-screen cursor-pointer"
                    onClick={toggleNavbar}
                />
            )}

            <div
                className={`w-72 h-screen bg-rose-900 dark:bg-primary-dark overflow-y-auto pb-5 z-[50] fixed top-0 left-0 transition-all duration-500 transform ${
                    navOpen
                }`}
            >
                {/* Links */}
                <ul className="flex flex-col gap-y-6 justify-center h-full">
                    {navLinks.map((link) => (
                        <li key={link.id}>
                            <Link
                                href={link.url}
                                className="text-white w-fit text-[20px] ml-12 border-b-[1.5px] pb-1 border-white sm:text-[30px]"
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
                {/* CloseBtn */}
                <button
                    className="absolute top-3 right-3 text-white text-2xl"
                    onClick={toggleNavbar}
                >
                    <IoClose/>
                </button>
            </div>
        </div>
    );
}

export default MobileNavbar;
