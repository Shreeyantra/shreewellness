import React from "react";
import Button from "../layouts/Button";
import BlogCard from "../layouts/BlogCard";
import img1 from "../assets/img/blog1.jpg";
import img2 from "../assets/img/blog2.jpg";
import img3 from "../assets/img/blog3.jpg";
import img4 from "../assets/img/blog4.jpg";
import img5 from "../assets/img/blog5.jpg";
import img6 from "../assets/img/blog6.jpg";

const Blogs = () => {
  return (
    <div id="blog" className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-24">
      <div className=" flex flex-col items-center lg:flex-row justify-between">
        <div>
          <h1 className=" text-4xl font-semibold text-center lg:text-start">
            Latest Post
          </h1>
          <p className=" mt-2 text-center lg:text-start">
          Here, you can view the latest blog posts that we update periodically.
          </p>
        </div>
        <div className=" mt-4 lg:mt-0">
          <Button title="Our Articles" />
        </div>
      </div>
      <div className=" my-8">
        <div className=" flex flex-wrap justify-center gap-5">
          <BlogCard img={img1} headlines="Unraveling the Mysteries of Sleep" text="
Embark on a journey to unravel the mysteries of sleep, exploring its profound impact on health, cognition, and overall well-being." />
          <BlogCard img={img2} headlines="The Heart-Healthy Diet" text="Delve into the benefits of a heart-healthy diet, rich in nourishing foods that support cardiovascular health and reduce the risk of heart disease."/>
          <BlogCard
            img={img3}
            headlines="Understanding Pediatric Vaccinations" text="Gain insight into pediatric vaccinations, essential for safeguarding children's health by preventing the spread of infectious diseases and ensuring their overall well-being."
          />
          <BlogCard img={img4} headlines="Navigating Mental Health" text="Embark on a journey of navigating mental health, exploring strategies and resources to foster emotional well-being and resilience in daily life."/>
          <BlogCard img={img5} headlines="The Importance of Regular Exercise" text="
Explore the significance of regular exercise in promoting physical health, enhancing mood, and improving overall quality of life."/>
          <BlogCard img={img6} headlines="Skin Health 101" text="Discover the fundamentals of skin health, including skincare routines, common concerns, and tips for maintaining a radiant complexion." />
        </div>
      </div>
    </div>
  );
};

export default Blogs;
