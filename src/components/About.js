import React from "react";
import MarbleBackground from "../assets/marble3.jpg";

const About = () => {
  return (
    <section className="relative py-16 lg:py-32"
    style={{
      background: `url(${MarbleBackground})`,
      backgroundSize: "110%", // Adjust the backgroundSize to zoom in slightly
      backgroundPosition: "center", // Optional: Center the background image
    }}
    >
      
      <div
        className="absolute inset-0 bg-cover bg-center bg-opacity-50"
        style={{ backgroundImage: `url(${MarbleBackground})` }}
      ></div>
      <div className="container mx-auto px-5 lg:px-0 relative z-10">
        <div className="bg-black bg-opacity-80 p-8 md:p-16 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-white">
            <div className="about-info">
              <h2 className="text-4xl lg:text-6xl font-bold mb-5 border-b-4 border-yellow-600 pb-2">
                About Me
              </h2>

              <p className="pb-4 text-lg">
                Hello, I'm Sreshta. I am a recent graduate with a Bachelor of Computer Science degree. I specialize in both Data Analysis and Fullstack Development. My passion lies in crafting visually stunning dashboards that vividly narrate stories through data. Leveraging React and Tailwind CSS, I design user-friendly websites that seamlessly blend functionality and aesthetics.
              </p>
              <p className="pb-4 text-lg">
                I am proficient in a variety of data analytics tools and languages, including Power BI, Tableau, Microsoft Excel, Python (including libraries like SciKit Learn, Pandas, and Matplotlib), as well as R.
              </p>

              <p className="pb-4 text-lg">
                I excel in Frontend development, boasting expertise in React.js, Tailwind CSS, Sass, CSS3, Bootstrap, and various other related technologies. On the backend, I'm adept with Node.js, Express.js, and MongoDB.
              </p>

              <p className="pb-4 text-lg">
                In my free time, I love diving into photography and videography, embracing the thrill of capturing moments and weaving captivating visual tales. Continuously seeking out new editing techniques and experimenting with various styles, I take pleasure in refining my abilities to produce visually stunning content.
              </p>
            </div>

            <div className="about-img">
              <img
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FNReDSVTG_Ok%2Fmaxresdefault.jpg&f=1&nofb=1&ipt=07751eee7dc7435cd72ca1732759ff84dacaa04532866b40093c0ba3252fbcd6&ipo=images"
                alt="coding illustration"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
