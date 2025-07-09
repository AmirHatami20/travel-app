'use client'
import {useEffect} from "react";
import Hero from "@/components/Home/Hero/Hero";
import Destination from "@/components/Home/Destination/Destination";
import Hotel from "@/components/Home/Hotel/Hotel";
import WhyChoose from "@/components/Home/WhyChoose/WhyChoose";
import Review from "@/components/Home/Review/Review";
import News from "@/components/Home/News/News";
import NewsLetter from "@/components/Home/NewsLetter/NewsLetter";

import AOS from "aos"

function Home() {
    useEffect(() => {
        const initAOS = async () => {
            await import("aos");
            AOS.init({
                duration: 1000,
                easing: "ease",
                once: true,
                anchorPlacement: "top-bottom",
            })
        }
        initAOS();
    }, [])

    return (
        <div className="overflow-hidden">
            <Hero/>
            <Destination/>
            <Hotel/>
            <WhyChoose/>
            <Review/>
            <News/>
            <NewsLetter/>
        </div>
    );
}

export default Home;