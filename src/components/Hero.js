import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import HeroImg from "../assets/hero-img.jpeg";
import MarbleBackground from "../assets/marble3.jpg";

const Hero = () => {
  return (
    <section
      className="bg-primary px-5 text-white py-32"
      style={{
        background: `url(${MarbleBackground})`,
        backgroundSize: "110%", // Adjust the backgroundSize to zoom in slightly
        backgroundPosition: "center", // Optional: Center the background image
      }}
    >
      <div className="container mx-auto flex items-center justify-center">
        <div className="bg-black bg-opacity-80 p-6 rounded-md shadow-lg flex-1 flex items-center justify-between">
          <div className="text-left">
            <h1 className="text-4xl lg:text-6xl">
              Hi, <br />I am Sreshta <br />
              Data Analyst and Web Developer
            </h1>

            <p className="py-5">
              I am proficient in leveraging advanced data analytics techniques
              and tools to derive meaningful insights from complex datasets.
              Additionally, I excel in modern web development technologies to
              create visually appealing and user-friendly interfaces for
              dynamic web applications.
            </p>

            {/* Use Link component to route to the projects page */}
            <Link to="/projects" className="btn bg-accent border-2 border-[#7477FF] text-white px-6 py-3 hover:bg-transparent">
              See Projects
            </Link>
            
            <div className="flex py-5">
              <a href="https://www.linkedin.com/in/sreshta-gorantla/">
                <button className="group hover:bg-sky-600 relative bg-sky-700 rounded text-neutral-50 duration-500 font-bold flex justify-start gap-2 items-center p-2 pr-4"> {/* Adjusted padding */}
                  <svg
                    className="w-6 h-8 fill-neutral-50" 
                    height="100"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 100 100"
                    width="100"
                    x="0"
                    xmlns="http://www.w3.org/2000/svg"
                    y="0"
                  >
                    <path
                      d="M92.86,0H7.12A7.17,7.17,0,0,0,0,7.21V92.79A7.17,7.17,0,0,0,7.12,100H92.86A7.19,7.19,0,0,0,100,92.79V7.21A7.19,7.19,0,0,0,92.86,0ZM30.22,85.71H15.4V38H30.25V85.71ZM22.81,31.47a8.59,8.59,0,1,1,8.6-8.59A8.6,8.6,0,0,1,22.81,31.47Zm63,54.24H71V62.5c0-5.54-.11-12.66-7.7-12.66s-8.91,6-8.91,12.26V85.71H39.53V38H53.75v6.52H54c2-3.75,6.83-7.7,14-7.7,15,0,17.79,9.89,17.79,22.74Z"
                    ></path>
                  </svg>
                  <span className="border-l-2 px-1">Sreshta Gorantla</span>
                  <div className="group-hover:opacity-100 opacity-0 top-16 absolute z-10 inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-500 bg-sky-600 rounded-lg shadow-sm before:w-3 before:h-3 before:rotate-45 before:-top-1 before:left-20 before:bg-sky-600 before:absolute">
                    See my profile!
                  </div>
                </button>
              </a>
            </div>
          </div>
          <div className="rounded-full overflow-hidden ml-6 h-26 w-25">
            <img
              src={HeroImg}
              alt="coding illustration"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
