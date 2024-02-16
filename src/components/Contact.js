import React from "react";
import MarbleBackground from "../assets/marble1.jpg";

const Contact = () => {
  return (
    <section
      className="min-h-screen flex items-center justify-center py-16 lg:py-32"
      style={{
        background: `url(${MarbleBackground})`,
        backgroundSize: "110%", // Adjust the backgroundSize to zoom in slightly
        backgroundPosition: "center", // Optional: Center the background image
      }}
    >
      <div className="bg-black bg-opacity-80 p-6 rounded-md shadow-lg flex-1 flex items-center justify-between">
      <div className="container mx-auto px-5 lg:px-0 relative z-10 text-white">
        <div className="md:w-[60%] mx-auto text-center">
          <h2 className="text-4xl lg:text-6xl font-bold mb-5 border-b-4 border-yellow-600 pb-2 inline-block">
            Contact Me
          </h2>
          <p className="text-lg lg:text-xl mb-8">
            I am currently open for a full-time Data Analyst role. Feel free
            to email me or call me.
          </p>

          <div className="flex flex-col md:flex-row justify-center items-center">
            <div className="md:w-1/2 py-4 md:py-0">
              <p className="py-2">
                <span className="font-bold">Email:</span>{" "}
                harishsreshta70799@hotmail.com
              </p>
              <p className="py-2">
                <span className="font-bold">Phone:</span> +1 902 670 6517 / +968
                99434132
              </p>
            </div>
            <div className="md:w-1/2 py-4 md:py-0">
              <a
                href="mailto:harishsreshta70799@hotmail.com"
                className="btn bg-accent text-white px-8 py-3 rounded-lg mr-4 hover:bg-transparent transition-colors duration-300"
              >
                Email Me
              </a>
              <a
                href="tel:+19026706517"
                className="btn bg-accent text-white px-8 py-3 rounded-lg hover:bg-transparent transition-colors duration-300 mt-4 md:mt-0"
              >
                Call Me
              </a>
            </div>
            
          </div>
        </div></div>
      </div>
    </section>
  );
};

export default Contact;
