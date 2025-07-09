import React from 'react';

interface Props {
    title: string,
    items: string[],
}

function FooterList({title, items}: Props) {
    return (
        <ul className="flex flex-col space-y-5">
            <li className="font-semibold text-lg">{title}</li>
            {items.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    );
}

export default FooterList;