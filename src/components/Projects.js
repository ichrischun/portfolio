import React from 'react';
import Pawgwarts from '../assets/Pawgwarts.png';

const Projects = () => {
  return (
    <div
      name="projects"
      className="w-full md:h-screen bg-[#3C6E71] text-[#FFFFFF]"
    >
      <div className="p-[150px] flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline ml-12 border-b-4 border-[#353535]">
            Projects
          </p>
        </div>
        <div className="w-full grid sm:grid-cols-2 md:grid-cols-3 gap-4 text-center p-8 m-4">
          {/* card */}
          <div className="shadow-md bg-[#353535] shadow-[#353535] hover:scale-110 duration-300 w-[450px] h-[300px] ">
            <img
              className="w-full h-full mx-auto"
              src={Pawgwarts}
              alt="JSLogo"
            />
            <div className="bg-[#D9D9D9] text-[#284B63] py-1">
              <p className="my-1 text-2xl">Pawgwarts</p>
              <p className="my-1 mx-3">
                A harry-potter themed, dog-training mobile application with a
                social-media component. Users can select specific trainings for
                their dogs with step-by-step instructions and share their
                accomplishments via a social media feed, which consist of a
                weekly challenge to take on.
              </p>
              <a href="https://github.com/TheTimbs/Pawgwarts">
                <button className="text-center rounded-lg px-4 py-1 m-1 bg-[#353535] text-[#FFFFFF]">
                  Code
                </button>
              </a>
            </div>
          </div>
          {/* card */}
          {/* card */}
          <div className="shadow-md bg-[#353535] shadow-[#353535] hover:scale-110 duration-300 w-[450px] h-[300px]">
            <img
              className="w-full h-full mx-auto"
              src={Pawgwarts}
              alt="JSLogo"
            />
            <div className="bg-[#D9D9D9] text-[#284B63] py-1">
              <p className="my-1 text-2xl">Title</p>
              <p className="my-1">Description</p>
              <a href="https://www.linkedin.com/in/ichrischun/">
                <button className="text-center rounded-lg px-4 py-1 m-1 bg-[#353535] text-[#FFFFFF]">
                  Code
                </button>
              </a>
            </div>
          </div>
          {/* card */}
          {/* card */}
          <div className="shadow-md bg-[#353535] shadow-[#353535] hover:scale-110 duration-300 w-[450px] h-[300px]">
            <img
              className="w-full h-full mx-auto"
              src={Pawgwarts}
              alt="JSLogo"
            />
            <div className="bg-[#D9D9D9] text-[#284B63] py-1">
              <p className="my-1 text-2xl">Title</p>
              <p className="my-1">Description</p>
              <a href="https://www.linkedin.com/in/ichrischun/">
                <button className="text-center rounded-lg px-4 py-1 m-1 bg-[#353535] text-[#FFFFFF]">
                  Code
                </button>
              </a>
            </div>
          </div>
          {/* card */}
        </div>
      </div>
    </div>
  );
};

export default Projects;
