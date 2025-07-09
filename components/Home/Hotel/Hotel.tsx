import React from 'react';
import SectionHeader from "@/components/Helper/SectionHeader";
import {hotelsData} from "@/data/data";
import HotelCard from "@/components/Home/Hotel/HotelCard";

function Hotel() {
    return (
        <div className="pb-8">
            <SectionHeader
                title="Recommended Hotels"
                subtitle="Lorem ipsum dolor sit amet consectetur."
            />

            <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center gap-8">
                {hotelsData.map((data,index) => (
                    <div
                        key={data.id}
                        data-aos="fade-right"
                        data-aos-anchor-placement="top-center"
                        data-aos-delay={`${index * 100}`}
                    >
                        <HotelCard hotel={data}/>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Hotel;