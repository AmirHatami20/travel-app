"use client";

import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation} from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import {destinationData} from "@/data/data";

const CustomSlider = () => {
    return (
        <div className="container relative">
            {/* Swiper component */}
            <Swiper
                loop={true}
                spaceBetween={24}
                slidesPerView={1}
                modules={[Autoplay, Navigation]}
                navigation={{}}
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
        </div>
    );
};

export default CustomSlider;
