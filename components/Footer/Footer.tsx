import React from 'react';
import FooterList from "@/components/Footer/FooterList";
import Link from "next/link";
import {FaDribbble, FaFacebook, FaTwitter} from "react-icons/fa";

function Footer() {
    return (
        <div className="pt-16 pb-16">
            <div className="container">
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    <FooterList
                        title="Company"
                        items={["About Us", "Careers", "Blogs", "Gift Cards", "Magazine"]}
                    />
                    <FooterList
                        title="Support"
                        items={["About Us", "Careers", "Blogs", "Gift Cards", "Magazine"]}
                    />
                    <FooterList
                        title="Other Services"
                        items={["About Us", "Careers", "Blogs", "Gift Cards", "Magazine"]}
                    />
                    <FooterList
                        title="Contact Us"
                        items={["Our Mobile Number", "+012 345 6788", "Our Email", "example@gmail.com"]}
                    />
                </div>
                {/* Copyright */}
                <div
                    className="mt-8 border-t pt-8 flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm">
                    <p className="text-center md:text-left">Copyright © 2024 Webdev. All rights reserved</p>
                    <div className="flex items-center space-x-4 mt-4 md:mt-0">
                        <span>Socials : </span>
                        <Link
                            href=""
                            className="text-gray-500 hover:text-gray-800"
                        >
                            <FaFacebook/>
                        </Link>
                        <Link
                            href=""
                            className="text-gray-500 hover:text-gray-800"
                        >
                            <FaTwitter/>
                        </Link>
                        <Link
                            href=""
                            className="text-gray-500 hover:text-gray-800"
                        >
                            <FaDribbble/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;