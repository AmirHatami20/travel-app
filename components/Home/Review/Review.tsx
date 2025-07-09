import React from 'react';
import {FaStar} from "react-icons/fa";
import ReviewSlider from "@/components/Home/Review/ReviewSlider";

function Review() {
    return (
        <section className="mt-20 mb-20 pt-20 pb-20 flex items-center justify-center flex-col bg-[#13357b]">
            <div className="container grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
                {/* Text Content */}
                <div className="flex flex-col space-y-4 text-white">
                    <h3 className="text-2xl font-semibold ">What our customers are saying us?</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam nesciunt fugiat praesentium
                        dolores facilis delectus modi culpa aliquid deserunt ad!
                    </p>
                    <div className="flex flex-col space-y-1">
                        <span className="font-bold text-2xl">4.88</span>
                        <span>Overall Rating</span>
                        <div className="flex gap-x-1 ">
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                        </div>
                    </div>
                </div>
                {/* Slider */}
                <ReviewSlider/>
            </div>
        </section>
    );
}

export default Review;