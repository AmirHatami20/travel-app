import Image from "next/image"

import {IoIosHeart} from "react-icons/io";

interface props {
    hotel: {
        id: number
        image: string
        name: string
        location: string
        rating: number
        reviews: string
        price: string
    }
}

function HotelCard({hotel}: props) {
    return (
        <div className="flex flex-col space-y-3">
            {/* Image */}
            <div className="relative h-[300px] w-full rounded-lg cursor-pointer group overflow-hidden">
                {/* Overlay */}
                <div className="absolute w-full h-full inset-0 bg-black/25 z-20"/>
                <Image
                    src={hotel.image}
                    alt={hotel.name}
                    width={500}
                    height={500}
                    className="w-full h-full object-cover group-hover:scale-110 transition-all duration-300"
                />
                {/* LikeBtn */}
                <div
                    className="absolute flex justify-center items-center w-8 text-sm h-8 top-3 z-30 right-3 bg-white text-black rounded-full shadow-sm"
                >
                    <IoIosHeart/>
                </div>
            </div>
            {/* Content */}
            <h3 className="mt-4 text-lg font-semibold text-blue-950 hover:text-black cursor-pointer transition-all duration-200">
                {hotel.name}
            </h3>
            <p className="text-sm text-gray-600 mt-3 font-medium mb-6">
                {hotel.location}
            </p>
            <div className="flex items-center gap-x-2">
                <div className="p-2 bg-blue-800 rounded-md font-bold text-white text-xs">
                    {hotel.rating}
                </div>
                <span className="text-sm text-gray-800">Exceptional</span>
                <span className="text-sm font-bold text-gray-800">{hotel.reviews} Reviews</span>
            </div>
            <p className="mt-3 text-gray-700 font-medium">
                starting from
                <span className="text-blue-600 font-bold"> Us${hotel.price}</span>
            </p>
        </div>
    );
}

export default HotelCard;