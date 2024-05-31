import teamMembers from "@/config/teamMembers";
import Member from "./Member";

const Team = ({ committee }: { committee: string }) => {
    return (
        <div className="flex flex-col my-8 mx-4 sm:mx-10">
            <h3 className="text-gray-800 text-xl sm:text-2xl font-bold mb-4 sm:mb-6 uppercase tracking-wide">{committee}</h3>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {teamMembers.map(
                    (member, index) =>
                        member.position.trim().toLowerCase() ===
                            committee.trim().toLowerCase() && (
                            <Member
                                key={index}
                                position={member.position}
                                name={member.name}
                                bio={member.bio}
                                img={member.img}
                                backgroundImage="logo.svg"
                            />
                        )
                )}
            </div>
        </div>
    );
};

export default Team;
