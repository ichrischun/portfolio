import React from 'react';
import JavaScript from '../assets/JavaScript.png';
import React_Logo from '../assets/React_Logo.png';
import Postgres from '../assets/Postgres.png';
import Nodejs from '../assets/Nodejs.png';
import Firebase from '../assets/Firebase.png';
import Redux from '../assets/Redux.png';
import HTML from '../assets/HTML.png';
import CSS from '../assets/CSS.png';

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-[#D9D9D9] text-[#284B63]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl py-4 inline border-b-4 border-[#3C6E71]">
            Skills
          </p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 my-4">
          <div className="shadow-md bg-[#353535] shadow-[#353535] hover:scale-110 duration-300 pt-5">
            <img className="w-20 mx-auto" src={JavaScript} alt="JSLogo" />
            <p className="my-4 text-[#FFFFFF]">JavaScript</p>
          </div>
          <div className="shadow-md bg-[#353535] shadow-[#353535] hover:scale-110 duration-300 pt-5">
            <img className="w-20 mx-auto" src={React_Logo} alt="ReactLogo" />
            <p className="my-4 text-[#FFFFFF]">React</p>
          </div>
          <div className="shadow-md bg-[#353535] shadow-[#353535] hover:scale-110 duration-300 pt-5">
            <img className="w-20 mx-auto" src={Postgres} alt="PostgresLogo" />
            <p className="my-4 text-[#FFFFFF]">PostgresSQL</p>
          </div>
          <div className="shadow-md bg-[#353535] shadow-[#353535] hover:scale-110 duration-300 pt-5">
            <img className="w-20 mx-auto" src={Nodejs} alt="NodeLogo" />
            <p className="my-4 text-[#FFFFFF]">Node.js</p>
          </div>
          <div className="shadow-md bg-[#353535] shadow-[#353535] hover:scale-110 duration-300 pt-5">
            <img className="w-20 mx-auto" src={Firebase} alt="FirebaseLogo" />
            <p className="my-4 text-[#FFFFFF]">Google Firebase</p>
          </div>
          <div className="shadow-md bg-[#353535] shadow-[#353535] hover:scale-110 duration-300 pt-5">
            <img className="w-20 mx-auto" src={Redux} alt="ReduxLogo" />
            <p className="my-4 text-[#FFFFFF]">Redux</p>
          </div>
          <div className="shadow-md bg-[#353535] shadow-[#353535] hover:scale-110 duration-300 pt-5">
            <img className="w-20 mx-auto" src={HTML} alt="HTMLLogo" />
            <p className="my-4 text-[#FFFFFF]">HTML5</p>
          </div>
          <div className="shadow-md bg-[#353535] shadow-[#353535] hover:scale-110 duration-300 pt-5">
            <img className="w-20 mx-auto" src={CSS} alt="CSSLogo" />
            <p className="my-4 text-[#FFFFFF]">CSS3</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
