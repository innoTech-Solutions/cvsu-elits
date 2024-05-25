import Image from "next/image";

const Member = ({
    position,
    name,
    img,
}: {
    position: string;
    name: string;
    img: string;
}) => {
    return (
        <div className="flex flex-col items-center bg-gradient-to-r from-orange-500 to-yellow-500 p-6 rounded-lg shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105">
            <Image
                className="w-32 h-32 rounded-full mb-4 border-4 border-white shadow-md"
                alt="person_image"
                src={img}
            />
            <div className="flex flex-col items-center text-white">
                <h1 className="text-xl font-bold text-center">{name}</h1>
                <h2 className="text-base font-light text-center">{position}</h2>
            </div>
        </div>
    );
};

export default Member;
