import React from "react";
import cssProjects from "../assets/cssprojects.png";
import devlog from "../assets/devlog.png";
import getInspirred from "../assets/getInspirred.png";
import uilogs from "../assets/uilogs.png";
import getpic from "../assets/getpic.png";
import MarbleBackground from "../assets/marble3.jpg";

const Projects = () => {
  const projects = [
    {
      img: devlog,
      title: "devlog",
      desc: " Monthly Personal Expenses data visualization application using Excel and Python with visualization libraries.",
      demo: "https://drive.google.com/file/d/1AB6D_vZz74cbtEKYgWrfG5lQwOMOxNUb/view?usp=sharing",
    },
    {
      img: uilogs,
      title: "uilogs",
      desc: "Streamlit App showcasing Calories Burnt during workout duration project using machine learning.",
      demo: "https://drive.google.com/file/d/1csWhzOeLYq6fbNToQJ2FanqOMpKayyYf/view?usp=sharing",
    },
    {
      img: getInspirred,
      title: "get Inspired",
      desc: "Power BI dashboard using data transformation with DAX querying connected to mySQL server.",
      demo: "https://drive.google.com/file/d/1-acir0Px5s8_khbmdvkd1emJe3iEw6zk/view?usp=sharing",
    },
    {
      img: cssProjects,
      title: "css projects",
      desc: "Fullstack housing marketplace website using ReactJS, HTML, CSS and Firebase.",
      demo: "https://drive.google.com/file/d/18kMHMroFTHkGBJHPd6RgbZhaRRzgYYHd/view?usp=sharing",
    },
    {
      img: getpic,
      title: "get pic",
      desc: "Hotel DBMS application using Python TKinter connected to SQL server for data.",
      demo: "https://drive.google.com/file/d/1QrmI2s7AGO2DPfGzd1IgE-8AQSYrFEr9/view?usp=sharing",
    },

  ];

  return (
    <section
      className="bg-primary text-white px-5 py-32"
      style={{
        background: `url(${MarbleBackground})`,
        backgroundSize: "110%", // Adjust the backgroundSize to zoom in slightly
        backgroundPosition: "center", // Optional: Center the background image
      }}
    >
      <div className="container mx-auto bg-black bg-opacity-80 rounded-lg px-8 py-12">
        <h2 className="text-4xl font-bold mb-8 border-b-4 border-yellow-600 pb-2">Projects</h2>
        <p className="pb-5">
            These are some of my projects. Check them out.
          </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {projects.map((project, i) => (
            <div className="relative" key={i}>
              <img src={project.img} alt={project.title} className="w-full h-52 object-cover rounded-lg" />
              <div className="overlay absolute inset-0 bg-black opacity-0 transition-opacity duration-300 rounded-lg flex flex-col justify-center items-center hover:opacity-80">
                <p className="text-white text-center px-5">{project.desc}</p>
                <div className="mt-5">
                  <a
                    href={project.demo}
                    className="px-5 py-2 bg-blue-500 hover:bg-blue-600 mr-5 font-bold"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
