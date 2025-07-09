"use client";

import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper/modules";
import {useRef, useCallback} from "react";
import {TfiAngleLeft, TfiAngleRight} from "react-icons/tfi";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import {destinationData} from "@/data/data";

const CustomSlider = () => {
    const sliderRef = useRef(null);

    // Handle previous slide
    const handlePrev = useCallback(() => {
        if (sliderRef.current) {
            sliderRef.current.swiper.slidePrev();
        }
    }, []);

    // Handle next slide
    const handleNext = useCallback(() => {
        if (sliderRef.current) {
            sliderRef.current.swiper.slideNext();
        }
    }, []);

    return (
        <div className="container relative">
            {/* Swiper component */}
            <Swiper
                ref={sliderRef}
                loop={true}
                spaceBetween={24}
                slidesPerView={1}
                modules={[Autoplay]}
                autoplay={{delay: 3000, disableOnInteraction: false}}
                breakpoints={{
                    500: {slidesPerView: 2},
                    1024: {slidesPerView: 3},
                    1200: {slidesPerView: 4},
                    1400: {slidesPerView: 5},
                }}
            >
                {destinationData.map((item) => (
                    <SwiperSlide key={item.id}>
                        <div className="relative h-[400px]">
                            <div className="absolute inset-0 bg-black/25 rounded-lg"/>
                            <Image
                                src={item.image}
                                alt={item.country}
                                width={500}
                                height={500}
                                className="h-full w-full object-cover rounded-lg"
                            />
                        </div>
                        <h3 className="text-lg font-semibold mt-4">{item.country}</h3>
                        <p className="text-sm text-gray-600">{item.travelers} Travelers</p>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Custom navigation buttons */}
            <div>
                <button
                    onClick={handlePrev}
                    className="swiper-button left-12"
                    aria-label="Previous slide"
                >
                    <TfiAngleLeft size={24}/>
                </button>
                <button
                    onClick={handleNext}
                    className="swiper-button right-12"
                    aria-label="Next slide"
                >
                    <TfiAngleRight size={24}/>
                </button>
            </div>
        </div>
    );
};

export default CustomSlider;
