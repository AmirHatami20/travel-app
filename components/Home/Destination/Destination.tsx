import React from 'react';
import SectionHeader from "@/components/Helper/SectionHeader";
import DestinationSlider from "@/components/Home/Destination/DestinationSlider";

function Destination() {
    return (
        <section className="pb-8">
            <SectionHeader
                title="Exploring Popular Destination"
                subtitle="Lorem ipsum dolor sit amet consectetur."
            />
            <DestinationSlider
            />

        </section>
    );
}

export default Destination;