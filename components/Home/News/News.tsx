import React from 'react';
import SectionHeader from "@/components/Helper/SectionHeader";
import NewsCard from "@/components/Home/News/NewsCard";

function News() {
    return (
        <div className="pb-8">
            <SectionHeader
                title="Exciting Travel News for You"
                subtitle="Lorem ipsum dolor sit amet consectetur."
            />
            <div
                data-aos="fade-right"
                className="container grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            >
                <NewsCard
                    image="/images/n1.jpg"
                    title="Top 10 place to visit in iran"
                    date="25 November 2024"
                />
                <NewsCard
                    image="/images/n2.jpg"
                    title="Top 10 place to visit in iran"
                    date="25 November 2024"
                />
                <NewsCard
                    image="/images/n3.jpg"
                    title="Top 10 place to visit in iran"
                    date="25 November 2024"
                />
                <NewsCard
                    image="/images/n4.jpg"
                    title="Top 10 place to visit in iran"
                    date="25 November 2024"
                />
            </div>
        </div>
    );
}

export default News;