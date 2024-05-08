import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';

const History: React.FC = () => {
  return (
    <div className="space-y-14 mb-48">
      <h1 className="text-5xl font-bold text-center text-black">Our History</h1>
      <div className="flex items-center justify-between mx-36">
        <HoverCard>
            <HoverCardTrigger>
                <div className="rounded-full px-4 antialiased bg-black cursor-pointer transition-colors hover:bg-orange-500 flex items-center justify-center p-2">
                    <span className="text-white text-lg">Introduction</span>
                </div>
            </HoverCardTrigger>
            <HoverCardContent>
                Our organization&apos;s journey began with a vision to revolutionize the industry. <br/>
                We aimed to redefine standards and pave the way for innovation and excellence.
            </HoverCardContent>
        </HoverCard>
        <div className="flex-1 h-0.5 bg-orange-500"></div>
        <HoverCard>
          <HoverCardTrigger>
            <div className="rounded-full px-4 antialiased bg-black cursor-pointer transition-colors hover:bg-orange-500 flex items-center justify-center p-2">
              <span className="text-white text-lg">Founding</span>
            </div>
          </HoverCardTrigger>
          <HoverCardContent>
            Founded on the principles of integrity and passion, our organization started as a small team with a big dream. <br/>
            We overcame challenges and worked tirelessly to turn our vision into reality.
          </HoverCardContent>
        </HoverCard>
        <div className="flex-1 h-0.5 bg-orange-500"></div>
        <HoverCard>
          <HoverCardTrigger>
            <div className="rounded-full px-4 antialiased bg-black cursor-pointer transition-colors hover:bg-orange-500 flex items-center justify-center p-2">
              <span className="text-white text-lg">Milestones and Achievements</span>
            </div>
          </HoverCardTrigger>
          <HoverCardContent>
            Over the years, we have achieved numerous milestones that have shaped our identity. <br/>
            From groundbreaking projects to industry recognition, each achievement has been a testament to our dedication and hard work.
          </HoverCardContent>
        </HoverCard>
        <div className="flex-1 h-0.5 bg-orange-500"></div>
        <HoverCard>
          <HoverCardTrigger>
            <div className="rounded-full px-4 antialiased bg-black cursor-pointer transition-colors hover:bg-orange-500 flex items-center justify-center p-2">
              <span className="text-white text-lg">Impact</span>
            </div>
          </HoverCardTrigger>
          <HoverCardContent>
            Our impact extends beyond our organization. <br/>
            We have contributed to the community, empowered individuals, and inspired change. <br/>
            Our journey is a testament to the positive influence we strive to have on the world.
          </HoverCardContent>
        </HoverCard>
      </div>
    </div>
  );
};

export default History;
