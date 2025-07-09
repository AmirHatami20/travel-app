import Image from "next/image";

interface props {
    image: string,
    title: string
}

function WhyChooseCard({image, title}: props) {
    return (
        <div className="flex flex-col items-center space-y-4">
            <Image
                width={80}
                height={80}
                src={image}
                alt={title}
                className=""
            />
            <h3 className="text-gray-900 font-medium text-lg">
                {title}
            </h3>
            <p className="text-xs font-medium text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, sapiente.
            </p>
        </div>
    );
}

export default WhyChooseCard;