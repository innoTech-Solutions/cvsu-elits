"use client"
import { useState } from 'react';
import Dots from '../decorations/dots';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';

const History: React.FC = () => {
  const [hoveredCircle, setHoveredCircle] = useState(-1);

  const handleCircleHover = (index: number) => {
    setHoveredCircle(index);
  };

  const handleCircleLeave = () => {
    setHoveredCircle(-1);
  };

  return (
    <div className='relative'>
      <h1 className="text-5xl font-bold text-center text-black mt-10">Our History</h1>
      <div className="flex justify-between items-center mt-20 mx-20">
        <HoverCard>
          <HoverCardTrigger>
            <div
              className="w-10 h-10 rounded-full bg-black hover:bg-orange-600 cursor-pointer transition-all duration-500 relative"
              onMouseEnter={() => handleCircleHover(0)}
              onMouseLeave={handleCircleLeave}
            >
              <span className="absolute top-full text-lg font-semibold text-center w-full overflow-hidden whitespace-nowrap">2005</span>
            </div>
          </HoverCardTrigger>
          <HoverCardContent className="mx-10">
            <h2 className="text-xl font-bold mb-2">Pioneering Education</h2>
            <p>Founded the Tech School Organization with a vision to provide cutting-edge education in technology fields.</p>
          </HoverCardContent>
        </HoverCard>
        <div
          className={`h-1 flex-grow transition-all duration-500 ${hoveredCircle >= 1 ? 'bg-orange-600' : 'bg-black'}`}
        ></div>
        <HoverCard>
          <HoverCardTrigger>
            <div
              className="w-10 h-10 rounded-full bg-black hover:bg-orange-600 cursor-pointer transition-all duration-500 relative"
              onMouseEnter={() => handleCircleHover(1)}
              onMouseLeave={handleCircleLeave}
            >
              <span className="absolute top-full text-lg font-semibold text-center w-full overflow-hidden whitespace-nowrap">2008</span>
            </div>
          </HoverCardTrigger>
          <HoverCardContent className="mx-10">
            <h2 className="text-xl font-bold mb-2">Innovative Curriculum</h2>
            <p>Launched a revolutionary curriculum integrating practical, hands-on learning with theoretical knowledge.</p>
          </HoverCardContent>
        </HoverCard>
        <div
          className={`h-1 flex-grow transition-all duration-500 ${hoveredCircle >= 2 ? 'bg-orange-600' : 'bg-black'}`}
        ></div>
        <HoverCard>
          <HoverCardTrigger>
            <div
              className="w-10 h-10 rounded-full bg-black hover:bg-orange-600 cursor-pointer transition-all duration-500 relative"
              onMouseEnter={() => handleCircleHover(2)}
              onMouseLeave={handleCircleLeave}
            >
              <span className="absolute top-full text-lg font-semibold text-center w-full overflow-hidden whitespace-nowrap">2012</span>
            </div>
          </HoverCardTrigger>
          <HoverCardContent className="mx-10">
            <h2 className="text-xl font-bold mb-2">Industry Partnerships</h2>
            <p>Established strategic partnerships with leading tech companies to offer students internships and job placements.</p>
          </HoverCardContent>
        </HoverCard>
        <div
          className={`h-1 flex-grow transition-all duration-500 ${hoveredCircle >= 3 ? 'bg-orange-600' : 'bg-black'}`}
        ></div>
        <HoverCard>
          <HoverCardTrigger>
            <div
              className="w-10 h-10 rounded-full bg-black hover:bg-orange-600 cursor-pointer transition-all duration-500 relative"
              onMouseEnter={() => handleCircleHover(3)}
              onMouseLeave={handleCircleLeave}
            >
              <span className="absolute top-full text-lg font-semibold text-center w-full overflow-hidden whitespace-nowrap">2018</span>
            </div>
          </HoverCardTrigger>
          <HoverCardContent className="mx-10">
            <h2 className="text-xl font-bold mb-2">Continued Growth</h2>
            <p>Expanded campus facilities and online learning resources to accommodate a growing student population.</p>
          </HoverCardContent>
        </HoverCard>
      </div>
      <div className="absolute right-0 top-[90px] z-[-1]">
        <Dots h="107" w="134" />
      </div>
      <div className="absolute -bottom-7 left-0 z-[-1]">
        <Dots h="70" w="134" />
      </div>
      <div className="absolute left-[350px] top-0 z-[-1]">
        <Dots h="70" w="134" />
      </div>
    </div>
  );
};

export default History;


