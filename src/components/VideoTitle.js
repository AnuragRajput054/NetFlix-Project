import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className=" w-screen aspect-video pt-[12%] px-6 md:px-20 absolute text-white bg-gradient-to-r from-black">
      <h1 className=" text-xl md:text-5xl font-bold">{title} </h1>
      <p className=" hidden md:inline-block py-6 text-lg md:text-xl w-1/4">{overview}</p>

      <div className="my-4 md:my-0">
        <button className=" py-1 md:py-4  bg-white text-black hover:bg-opacity-70 p-4  px-3 md:px-12 text-xl  rounded-lg">
          <i className="fa-solid fa-play"></i>
          Play
        </button>
        <button
          className="hidden md:inline-block mx-2 bg-gray-500 text-white p-4 px-12 
         hover:bg-opacity-70 text-xl bg-opacity-50 rounded-lg"
        >
          <i className="fa-light fa-circle-info"></i>
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
