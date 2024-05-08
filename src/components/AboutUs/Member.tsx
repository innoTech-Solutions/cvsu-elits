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
        <div className="flex justify-center flex-col items-center">
            <img
                className="w-32 h-32 rounded-full my-4"
                alt="person_image"
                src={img}
            />
            <div className="flex justify-center items-center flex-col">
                <h1 className="text-xl text-center">{name}</h1>
                <h2 className="text-base font-light">{position}</h2>
            </div>
        </div>
    );
};

export default Member;