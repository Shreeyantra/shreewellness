import React from "react";
import { Link } from "react-router-dom";
import Button from "../layouts/Button";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 text-white bg-[url('assets/img/home.png')] bg-no-repeat bg-cover opacity-90">
      <div className="w-full lg:w-4/5 space-y-5 mt-10">
        <h1 className="text-5xl font-bold leading-tight">
          Empowering Health Choices for a Vibrant Life Your Trusted..
        </h1>
        <p>
          Welcome to our wellness sanctuary, where comprehensive care meets personalized attention.
          Discover a world of holistic health solutions tailored to nurture your mind, body, and spirit. Our
          dedicated team of doctors is here to support you on your journey to wellness. Book an 
          appointment today and embark on the path to optimal health.
        </p>

        <Link to="/" onClick={() => handleScroll('Services')}>
          <Button title="See Services" />
        </Link>
      </div>
    </div>
  );
};

export default Home;