import React from "react";
import Navbar from "../components/Navbar";

const Resume = () => {
  return (
    <div>
        <Navbar />
      <div className="flex justify-center items-center">
        <img src="/resume.png" alt="resume" className="p-10" />
      </div>
    </div>
  );
};

export default Resume;
