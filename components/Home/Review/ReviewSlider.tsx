"use client"

import Image from "next/image";

import {Swiper, SwiperSlide} from "swiper/react";
import {EffectCards} from "swiper/modules";
import {reviewData} from "@/data/data";
import {FaStar} from "react-icons/fa";

function ReviewSlider() {
    return (
        <Swiper
            effect="cards"
            grabCursor={true}
            modules={[EffectCards]}
            className="w-[90%] h-[300px] md:w-[450px] md:h-[350px]"
        >
            {reviewData.map(data => (
                <SwiperSlide
                    key={data.id}
                    className="bg-white rounded-3xl block"
                >
                    <div className="px-12 pt-16 pb-8">
                        {/* Review Text */}
                        <p className="text-xs sm:text-sm md:text-base font-semibold">
                            {data.review}
                        </p>
                        {/* Review Rate */}
                        <div className="flex items-center text-yellow-600 text-2xl mt-5 gap-x-0.5">
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                        </div>
                        {/* Review User */}
                        <div className="flex gap-x-3 items-center mt-7">
                            <Image
                                src={data.image}
                                alt={data.name}
                                width={70}
                                height={70}
                                className="rounded-full"
                            />
                            <div className="flex flex-col space-y-2">
                                <h4 className="text-sm sm:text-lg font-semibold">
                                    {data.name}
                                </h4>
                                <span className="text-gray-600 text-xs sm:text-base">
                                    Web Developer
                                </span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

export default ReviewSlider;