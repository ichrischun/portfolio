import React from 'react';

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#3C6E71] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1200px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#284B63]">
              About Me
            </p>
          </div>
        </div>
        <div className="max-w-[1200px] w-full grid sm:grid-cols-2 gap-[40px] px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi. Nice to meet you. Here is a bit about myself .</p>
          </div>
          <div>
            <p>
              I am a Villanova University alum with a Bachelor's Degree in
              Mathematics and Economics. After graduation, I started my career
              as an Investment Management consultant at a SaaS company, working
              on various projects with top investment institutions. During my
              time there, I developed and honed my problem-solving skills and my
              ability to build creative strategies to tackle a project or task
              for my client's investment goals. My interest in technology grew
              while working with the software engineers on my team, who built
              numerous tools and features for my clients from the ground-up.
              After learning the basics of JavaScript, HTML, and CSS on my own,
              I have decided to enroll in Fullstack Academy's Immersive Software
              Engineering program to continue learning about software
              development and I can honestly say it has been one of the best
              decisions of my life. I’m constantly learning new technology every
              day and I believe my current skillset such as being logic-focused,
              detail-oriented, and my ability to work well within a team
              translate and supplement well into being a successful software
              engineer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
