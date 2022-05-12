import React from 'react';
import Pawgwarts from '../assets/Pawgwarts.png';
import Stackbot from '../assets/Stackbot.png';
import NFTShopper from '../assets/NFTShopper.png';

const Projects = () => {
  return (
    <div
      name="projects"
      className="w-full h-screen bg-[#3C6E71] text-[#FFFFFF]"
    >
      <div className="p-[150px] flex flex-col justify-center w-full h-full">
        <div className="pb-5">
          <p className="text-4xl font-bold inline ml-12 border-b-4 border-[#353535]">
            Projects
          </p>
        </div>
        <div className="w-full grid sm:grid-cols-2 md:grid-cols-3 gap-[70px] text-center p-8 m-4 justify-center align-middle content-between">
          {/* card */}
          <div className="shadow-md bg-[#353535] shadow-[#353535] hover:scale-110 duration-300 h-[300px]">
            <img className="w-full mx-auto" src={Pawgwarts} alt="Pawgwarts" />
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
          <div className="shadow-md bg-[#353535] shadow-[#353535] hover:scale-110 duration-300 h-[300px]">
            <img className="w-full mx-auto" src={NFTShopper} alt="NFTShopper" />
            <div className="bg-[#D9D9D9] text-[#284B63] py-1">
              <p className="my-1 text-2xl">NFT Shopper</p>
              <p className="my-1 mx-3">
                Developed an e-commerce site for mock-NFTs. Users are able to
                add specific NFTs to their cart, checkout, and create an
                account.
              </p>
              <a href="https://github.com/Treecko-Trackers/NFTShopper">
                <button className="text-center rounded-lg px-4 py-1 m-1 bg-[#353535] text-[#FFFFFF]">
                  Code
                </button>
              </a>
            </div>
          </div>
          {/* card */}
          {/* card */}
          <div className="shadow-md bg-[#353535] shadow-[#353535] hover:scale-110 duration-300 h-[300px]">
            <img className="w-full mx-auto" src={Stackbot} alt="Stackbot" />
            <div className="bg-[#D9D9D9] text-[#284B63] py-1">
              <p className="my-1 text-2xl">StackBot</p>
              <p className="my-1 mx-3">
                A RESTful web application that allows you to manage your robots
                and projects. Each robot may be assigned to several projects at
                a time. This project was created using React, Redux, Express,
                Node.js, PostgreSQL, Sequelize, and Bootstrap.
              </p>
              <a href="https://github.com/ichrischun/stackbot">
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
    // <div
    //   name="projects"
    //   className="w-full h-screen bg-[#3C6E71] text-[#FFFFFF]"
    // >
    //   <div className="w-full h-screen grid sm:grid-cols-2 md:grid-cols-3 gap-[70px] text-center p-10 m-4 justify-center items-center justify-self-center align-middle content-center">
    //     {/* card */}
    //     <div className="shadow-md bg-[#353535] shadow-[#353535] hover:scale-110 duration-300 h-[300px]">
    //       <img
    //         className="w-full h-full mx-auto"
    //         src={Pawgwarts}
    //         alt="Pawgwarts"
    //       />
    //       <div className="bg-[#D9D9D9] text-[#284B63] py-1">
    //         <p className="my-1 text-2xl">Pawgwarts</p>
    //         <p className="my-1 mx-3">
    //           A harry-potter themed, dog-training mobile application with a
    //           social-media component. Users can select specific trainings for
    //           their dogs with step-by-step instructions and share their
    //           accomplishments via a social media feed, which consist of a weekly
    //           challenge to take on.
    //         </p>
    //         <a href="https://github.com/TheTimbs/Pawgwarts">
    //           <button className="text-center rounded-lg px-4 py-1 m-1 bg-[#353535] text-[#FFFFFF] ">
    //             Code
    //           </button>
    //         </a>
    //       </div>
    //     </div>
    //     {/* card */}
    //     {/* card */}
    //     <div className="shadow-md bg-[#353535] shadow-[#353535] hover:scale-110 duration-300 h-[300px]">
    //       <img
    //         className="w-full h-full mx-auto"
    //         src={NFTShopper}
    //         alt="NFTShopper"
    //       />
    //       <div className="bg-[#D9D9D9] text-[#284B63] py-1">
    //         <p className="my-1 text-2xl">NFT Shopper</p>
    //         <p className="my-1 mx-3">
    //           Developed an e-commerce site for mock-NFTs. Users are able to add
    //           specific NFTs to their cart, checkout, and create an account.
    //         </p>
    //         <a href="https://github.com/Treecko-Trackers/NFTShopper">
    //           <button className="text-center rounded-lg px-4 py-1 m-1 bg-[#353535] text-[#FFFFFF]">
    //             Code
    //           </button>
    //         </a>
    //       </div>
    //     </div>
    //     {/* card */}
    //     {/* card */}
    //     <div className="shadow-md bg-[#353535] shadow-[#353535] hover:scale-110 duration-300 h-[300px]">
    //       <img
    //         className="w-full h-full mx-auto"
    //         src={Stackbot}
    //         alt="Stackbot"
    //       />
    //       <div className="bg-[#D9D9D9] text-[#284B63] py-1">
    //         <p className="my-1 text-2xl">StackBot</p>
    //         <p className="my-1 mx-3">
    //           A RESTful web application that allows you to manage your robots
    //           and projects. Each robot may be assigned to several projects at a
    //           time. This project was created using React, Redux, Express,
    //           Node.js, PostgreSQL, Sequelize, and Bootstrap.
    //         </p>
    //         <a href="https://github.com/ichrischun/stackbot">
    //           <button className="text-center rounded-lg px-4 py-1 m-1 bg-[#353535] text-[#FFFFFF]">
    //             Code
    //           </button>
    //         </a>
    //       </div>
    //     </div>
    //     {/* card */}
    //   </div>
    // </div>
  );
};

export default Projects;
