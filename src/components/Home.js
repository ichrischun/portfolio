import React from 'react';
// import { HiArrowNarrowRight } from 'react-icons/hi';
import LinkedInCircle from '../assets/LinkedInCircle.png';
// import LinkedIn from '../assets/LinkedIn.png';

const Home = () => {
  return (
    <div name="home" className="bg-[#284B63] w-full h-screen">
      <div className="max-w-[1000px] mx-auto px-8 py-[300px] flex flex-row justify-center h-full">
        <div className="home-pic">
          <img src={LinkedInCircle} alt="LinkedIn" className="mx-5" />
        </div>
        <div className="mx-5">
          <p className="text-[#D9D9D9] py-10 text-2xl">Hi! My name is</p>
          <h1 className="text-4xl sm:text-7xl font-bold text-[#3C6E71]">
            CHRIS CHUN
          </h1>
          <p className="text-[#FFFFFF] py-10">
            - Full Stack Software Engineer -
          </p>
          <div>
            {/* <button className="text-[#FFFFFF] group border-2 px-6 py-3 my-8 flex items-center hover:bg-[#D9D9D9] hover:border-[#353535] hover:text-[#353535]">
              View Work
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight />
              </span>
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
