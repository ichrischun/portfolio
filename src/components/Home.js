import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => {
  return (
    <div name="home" className="bg-white w-full h-screen">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-blue-600">Hello! My name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-black">
          Chris Chun
        </h1>
        <div>
          <button className="text-black group border-2 px-6 py-3 my-2 flex items-center hover:bg-blue-600 hover:border-blue-600">
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
