import React from 'react';
import SectionHeader from "@/components/Helper/SectionHeader";
import WhyChooseCard from "@/components/Home/WhyChoose/WhyChooseCard";

function WhyChoose() {
    return (
        <section className="pb-8">
            <SectionHeader
                title="Why Choose Us"
                subtitle="Lorem ipsum dolor sit amet consectetur."
            />
            <div data-aos="fade-up" className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-16">
                <WhyChooseCard image="/images/c1.svg" title="Best Price Guarantee"/>
                <WhyChooseCard image="/images/c2.svg" title="Easy & Quick Booking"/>
                <WhyChooseCard image="/images/c3.svg" title="Customer Care 24/7"/>
            </div>
        </section>
    );
}

export default WhyChoose;