import Image from "next/image";

interface props {
    image: string;
    title: string;
    date: string;
}

function NewsCard({image, date, title}: props) {
    return (
        <div className="flex flex-col space-y-3">
            {/* Image */}
            <div className="h-[300px]">
                <Image
                    src={image}
                    alt={title}
                    width={300}
                    height={300}
                    className="w-full h-full object-cover rounded-lg"
                />
            </div>

            <h2 className="text-lg text-gray-950 font-semibold hover:text-blue-800 transform-colors duration-300 cursor-pointer">
                {title}
            </h2>

            <p className="text-sm text-gray-600 ">
                {date}
            </p>
        </div>
    );
}

export default NewsCard;