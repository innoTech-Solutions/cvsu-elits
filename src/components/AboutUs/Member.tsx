const Member = ({
    position,
    name,
    img,
    backgroundImage,
}: {
    position: string;
    name: string;
    img: string;
    backgroundImage: string;
}) => {
    return (
        <div
            className="relative flex flex-col items-center p-8 rounded-lg shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105"
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                padding: '50px' 
            }}
        >
            <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
            <div className="relative z-10 flex flex-col items-center">
                <div className="relative w-32 h-32 mb-4 rounded-full overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full p-1">
                        <div className="w-full h-full bg-white rounded-full">
                            <img
                                className="w-full h-full object-cover rounded-full"
                                alt="person_image"
                                src={img}
                            />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center text-white">
                    <h1 className="text-2xl text-white font-bold text-center">{name}</h1>
                    <h2 className="text-lg text-orange-500 font-semibold text-center">{position}</h2>
                </div>
            </div>
        </div>
    );
};

export default Member;
