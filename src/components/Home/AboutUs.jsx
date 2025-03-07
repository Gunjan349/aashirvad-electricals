import React from "react";

const AboutUs = () => {
  return (
    <div data-aos="fade-right" className="relative mt-24 sm:mt-32">
      <div className="text-center">
        <span className=" text-[#004775] rounded-full h-6 text-4xl font-semibold px-2 py-1 uppercase">
          about us
        </span>
        <h2 className="text-xl sm:text-2xl lg:text-2xl mt-10  tracking-wide">
        Aashirvad Electricals is a trusted name in the electrical industry, providing high-quality solutions for 11KV and 33KV electrical systems. With years of experience, {" "}
          <span className="text-[#e9550b]">
          we specialize in power distribution, transmission, and substation equipment, ensuring reliability and efficiency for industrial, commercial, and utility applications.
          </span>
        </h2>
      </div>
      {/* <div className="flex flex-wrap mt-10 lg:mt-20">
        {features.map((feature, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3">
            <div className="flex">
              <div className="flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-orange-700 justify-center items-center rounded-full">
                {feature.icon}
              </div>
              <div>
                <h5 className="mt-1 mb-6 text-xl">{feature.text}</h5>
                <p className="text-md p-2 mb-20 text-neutral-500">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default AboutUs;