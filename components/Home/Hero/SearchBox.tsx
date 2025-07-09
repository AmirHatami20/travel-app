import React from 'react';
import {FaCalendarWeek, FaMap, FaUserFriends} from 'react-icons/fa';
import {IconType} from "react-icons";

// Define the BoxContentProps type
interface BoxContentProps {
    Icon: IconType;
    title: string;
    inputType?: string;
    linkPlaceholder?: string;
}

const BoxContent: React.FC<BoxContentProps> = ({Icon, title, inputType = 'text', linkPlaceholder = ''}) => {
    return (
        <div className="flex gap-x-5 items-center">
            <Icon className="text-blue-600 text-xl"/>
            <div>
                <p className="text-lg font-medium mb-[0.2rem]">{title}</p>
                <input
                    type={inputType}
                    placeholder={linkPlaceholder}
                    className="border-0 outline-none placeholder-gray-600/70"
                />
            </div>
        </div>
    );
}

const SearchBoxWithContent = () => {
    return (
        <div
            className="relative w-full bg-white rounded-lg p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center justify-between gap-y-8 mt-4 sm:mt-12"
        >
            <BoxContent
                Icon={FaMap}
                title="Location"
                linkPlaceholder="Where are you going?"
            />
            <BoxContent
                Icon={FaCalendarWeek}
                title="Start Date"
                inputType="date"
            />
            <BoxContent
                Icon={FaCalendarWeek}
                title="End Date"
                inputType="date"
            />
            <BoxContent
                Icon={FaUserFriends}
                title="Guest"
                linkPlaceholder="how many Guest?"
            />

            <button className="absolute -bottom-7 right-0 left-0 mx-auto w-fit rounded px-14 md:px-28 -mt-4 py-2.5 overflow-hidden group bg-rose-600 hover:bg-gradient-to-r hover:from-red-500 hover:to-red-400 text-white font-semibold hover:ring-2 hover:ring-offset-2 hover:ring-red-400 transition-all ease-out duration-300">
                Search
            </button>
        </div>
    );
}

export default SearchBoxWithContent;
