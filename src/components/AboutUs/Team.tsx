import teamMembers from "@/config/teamMembers";
import Member from "./Member";

const Team = ({ committee }: { committee: string }) => {
    return (
        <div className="flex flex-col my-8 w-full">
            <h3 className="text-gray-800 text-2xl font-bold mb-6 uppercase tracking-wide">{committee}</h3>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {teamMembers.map(
                    (member, index) =>
                        member.position.trim().toLowerCase() ===
                            committee.trim().toLowerCase() && (
                            <Member
                                key={index}
                                position={member.position}
                                name={member.name}
                                img={member.img}
                            />
                        )
                )}
            </div>
        </div>
    );
};

export default Team;
