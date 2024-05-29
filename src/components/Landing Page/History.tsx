"use client"
import { useEffect } from 'react';
import { Timeline } from 'antd';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Dots from '../decorations/dots';

const timelineData = [
  {
    year: '2005',
    title: 'Pioneering Education',
    description: 'Founded the Tech School Organization with a vision to provide cutting-edge education in technology fields.',
  },
  {
    year: '2008',
    title: 'Innovative Curriculum',
    description: 'Launched a revolutionary curriculum integrating practical, hands-on learning with theoretical knowledge.',
  },
  {
    year: '2012',
    title: 'Industry Partnerships',
    description: 'Established strategic partnerships with leading tech companies to offer students internships and job placements.',
  },
  {
    year: '2018',
    title: 'Continued Growth',
    description: 'Expanded campus facilities and online learning resources to accommodate a growing student population.',
  },
];

const History = () => {
  const { ref, inView } = useInView({ triggerOnce: false });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 },
      });
    } else {
      controls.start({
        opacity: 0,
        y: 40,
        transition: { duration: 0.5 },
      });
    }
  }, [controls, inView]);

  return (
    <div className="relative">
      <div className="absolute right-20 top-[90px] z-[-1]">
          <Dots h="200" w="200" />
      </div>
      <div className="absolute left-20 bottom-[90px] z-[-1]">
          <Dots h="200" w="200" />
      </div>
      <motion.div
        className="mx-auto max-w-4xl px-4"
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={controls}
      >
        <h1 className="text-4xl text-[#2F3233] text-center font-bold mb-8 py-8">History</h1>
        <Timeline mode="alternate">
          {timelineData.map((item, index) => (
            <Timeline.Item
              key={index}
              label={<span className="font-bold text-lg">{item.year}</span>}
              color="orange"
            >
              <div className="flex justify-between items-start">
                <div className="flex-1 mr-4">
                  <h3 className="text-lg font-black text-orange-500">{item.title}</h3>
                  <p className="text-lg font-semibold">{item.description}</p>
                </div>
              </div>
            </Timeline.Item>
          ))}
        </Timeline>
      </motion.div>
    </div>
  );
};

export default History;








