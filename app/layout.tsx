import type {Metadata} from "next";
import {Poppins} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import ScrollToTop from "@/components/Helper/ScrollToTop";

const poppinsFont = Poppins({
    weight: ["100", '200', "300", '400', "500", '600', '700', '800', '900'],
    subsets: ["latin"]
})

export const metadata: Metadata = {
    title: "Travel For You",
    description: "Travel landing page use nextjs 15",
    icons: {
        icon: "./logo.svg"
    }
};

export default function RootLayout({children}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
        <body
            className={`${poppinsFont.className}`}
        >
        <Navbar/>
        {children}
        <Footer/>
        <ScrollToTop/>
        </body>
        </html>
    );
}
