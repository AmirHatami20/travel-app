import React from 'react';
import SearchBox from "@/components/Home/Hero/SearchBox";

function Hero() {
    return (
        <section className="relative w-full h-[120vh] sm:h-[100vh]">
            {/* Overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-gray-800 opacity-70"/>
            {/* Video */}
            <video
                src="/images/hero1.mp4"
                autoPlay
                muted
                loop={true}
                preload="metadata"
                className="w-full h-full object-cover"
            />
            {/* Text Content */}
            <div
                className="container z-20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">
                <div className="flex items-center justify-center flex-col w-full h-full">
                    <div data-aos="fade-up">
                        <h1 className="text-2xl mb-4 md:mb-0 text-center md:text-4xl lg:text-5xl tracking-[0.7rem] text-white font-bold uppercase">
                            Lets Enjoy the Nature
                        </h1>
                        <p className="md:text-base text-center text-lg text-white font-normal [word-spacing:4px]">
                            Get the best prices on 2,000,000+ properties , worldwide
                        </p>
                    </div>
                    <SearchBox/>
                </div>
            </div>
        </section>
    );
}

export default Hero;