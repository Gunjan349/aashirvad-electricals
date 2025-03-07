import React from "react";
import video1 from "../../assets/video1.mp4";
import video2 from "../../assets/video2.mp4";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-24 lg:mt-24">
      <h1 data-aos="fade-up" className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        Reliable Solutions for{" "}
        <span className=" text-[#e9550b] ">
          11KV & 33KV Electrical systems
        </span>
      </h1>
      <p className="mt-16 text-lg text-center text-[#314c90] max-w-4xl">
        Empower your creativity and bring your VR app ideas to life with our
        intuitive development tools. Get started today and turn your imagination
        into immersive reality!
      </p>
      {/* <div className="flex justify-center my-10">
        <a
          href="#"
          className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md"
        >
          Start for free
        </a>
        <a href="#" className="py-3 px-4 mx-3 rounded-md border">
          Documentation
        </a>
      </div> */}
      <div className="block sm:flex mt-16 justify-center">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-full sm:w-1/2 mx-auto sm:mx-4 my-4"
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-full sm:w-1/2 mx-auto sm:mx-4 my-4"
        >
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default HeroSection;