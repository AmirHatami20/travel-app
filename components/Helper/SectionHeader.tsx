import React from 'react';

type props = {
    title: string,
    subtitle: string,
}

function SectionHeader({title, subtitle}: props) {
    return (
        <div className="mt-20 mb-14">
            <div className="container flex flex-col gap-y-2">
                <h3 className="text-xl sm:text-3xl text-blue-950 font-bold">{title}</h3>
                <p className="mt-2 text-gray-700 sm:text-base text-sm font-medium">{subtitle}</p>
            </div>
        </div>
    );
}

export default SectionHeader;