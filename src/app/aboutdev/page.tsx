import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

interface Developer {
  name: string;
  role: string;
  image: string;
}

const AboutDev = () => {
  const mockData: Developer[] = [
    {
      name: 'Jameson Gelarman',
      role: 'Front-end Developer',
      image: 'images/jameson.png',
    },
    {
      name: 'Julian Charles Macato',
      role: 'Front-end Developer',
      image: 'images/julian.jpg',
    },
  ];

  return (
    <>
      <div className='min-h-screen flex flex-col justify-center items-center mb-10'>
        <h2 className="text-5xl font-bold text-orange-500 mt-16">Meet the Developers</h2>
        <div className="grid grid-cols-1 gap-y-12 justify-items-center sm:grid-cols-2 gap-x-12">
          {mockData.map((person, index) => (
            <div key={index} className="relative flex flex-col my-5 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
              <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl h-80">
                <img src={person.image} alt="profile-picture" />
              </div>
              <div className="p-6 text-center">
                <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                  {person.name}
                </h4>
                <p
                  className="block font-sans antialiased font-semibold leading-relaxed text-orange-500 bg-clip-text ">
                  {person.role}
                </p>
              </div>
              <div className="flex justify-center p-6 pt-2 gap-7">
                <a href="#facebook">
                  <FaFacebook />
                </a>
                <a href="#twitter">
                  <FaTwitter />
                </a>
                <a href="#instagram">
                  <FaInstagram />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AboutDev;
