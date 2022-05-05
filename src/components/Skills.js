import React from 'react';
import LinkedIn from '../assets/LinkedIn.png';

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl text-gray-300 py-4 inline border-b-4 border-pink-600">
            Skills
          </p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-black hover:scale-110 duration-300">
            <img className="w-20 mx-auto" src={LinkedIn} alt="LinkedIn Pic" />
            <p className="my-4">Fill Me In</p>
          </div>
          <div className="shadow-md shadow-black hover:scale-110 duration-300">
            <img className="w-20 mx-auto" src={LinkedIn} alt="LinkedIn Pic" />
            <p className="my-4">Fill Me In</p>
          </div>
          <div className="shadow-md shadow-black hover:scale-110 duration-300">
            <img className="w-20 mx-auto" src={LinkedIn} alt="LinkedIn Pic" />
            <p className="my-4">Fill Me In</p>
          </div>
          <div className="shadow-md shadow-black hover:scale-110 duration-300">
            <img className="w-20 mx-auto" src={LinkedIn} alt="LinkedIn Pic" />
            <p className="my-4">Fill Me In</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
