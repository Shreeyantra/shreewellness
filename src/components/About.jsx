import React from "react";
import img from "../assets/img/about.jpg";

const About = () => {
  return (
    <div className=" min-h-screen flex flex-col lg:flex-row justify-between items-center lg:px-32 px-5 pt-24 lg:pt-16 gap-5">
      <div className=" w-full lg:w-3/4 space-y-4">
        <h1 className=" text-4xl font-semibold text-center lg:text-start">About Us</h1>
        <p className=" text-justify lg:text-start">
        At our wellness center, we're committed to empowering individuals to achieve holistic health and
        well-being. With a focus on personalized care and evidence-based practices, our team of 
        experienced doctors and practitioners strive to provide comprehensive solutions tailored to each 
        individual's needs.
        </p>
        <p className="text-justify lg:text-start">
        We believe in the power of preventive care, lifestyle modifications, and integrative therapies to 
        optimize health outcomes and enhance quality of life. Through compassion, expertise, and 
        dedication, we aim to be your trusted partner on your journey to wellness.
        </p>
        <p className="text-justify lg:text-start">
        Join us in creating a healthier, happier community, one individual at a time.
        </p>
      </div>
      <div className=" w-full lg:w-3/4">
        <img className=" rounded-lg" src={img} alt="img" />
      </div>
    </div>
  );
};

export default About;
