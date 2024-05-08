import teamMembers from "@/config/teamMembers";
import Member from "./Member";

const Team = ({ committee }: { committee: string }) => {
    return (
        <div className="flex flex-col">
            <h3 className="text-gray-800 text-xs my-4">{committee}</h3>
            <div className="w-full p-8 rounded-3xl grid grid-cols-2 lg:grid-cols-3 border gap-8">
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
