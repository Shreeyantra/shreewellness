import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom"; // Import Link from React Router

const Doctors = () => {
  const data = [
    {
      img: "/src/assets/img/doc1.jpg",
      name: "Dr. Serena Mitchell",
      specialties: "Orthopedic Surgeon",
      category: "Orthopedic",
    },
    {
      img: "/src/assets/img/doc2.jpg",
      name: "Dr. Julian Bennett",
      specialties: "Cardiologist",
      category: "Cardiology",
    },
    {
      img: "/src/assets/img/doc3.jpg",
      name: "Dr. Camila Rodriguez",
      specialties: "Pediatrician",
      category: "Pediatrics",
    },
    {
      img: "/src/assets/img/doc4.jpg",
      name: "Dr. Victor Nguyen",
      specialties: "Neurologist",
      category: "Neurology",
    },
    {
      img: "/src/assets/img/doc5.jpg",
      name: "Dr. Ethan Carter",
      specialties: "Dermatologist",
      category: "Dermatology",
    },
    {
      img: "/src/assets/img/doc6.jpg",
      name: "Dr. Olivia Martinez",
      specialties: "Ophthalmologist",
      category: "Ophthalmology",
    },
  ];

  const slider = useRef(null);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const settings = {
    accessibility: true,
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const bookAppointment = (doctorName) => {
    // Your logic for booking appointment with the selected doctor
    console.log(`Booking appointment with ${doctorName}`);
  };

  const filteredData = selectedCategory === "All" ? data : data.filter(doc => doc.category === selectedCategory);

  return (
    <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-16">
      <div className="flex flex-col items-center lg:flex-row justify-between mb-10 lg:mb-0">
        <div>
          <h1 className="text-4xl font-semibold text-center lg:text-start">
            Our Doctors
          </h1>
          <p className="mt-2 text-center lg:text-start">
          We offer a variety of specialists tailored to meet your specific needs.
         </p>
        </div>
        <div>
          <label htmlFor="category" className="mr-2">Select Category:</label>
          <select
            id="category"
            value={selectedCategory}
            onChange={handleCategoryChange}
          >
            <option value="All">All</option>
            <option value="Orthopedic">Orthopedic</option>
            <option value="Cardiology">Cardiology</option>
            <option value="Pediatrics">Pediatrics</option>
            <option value="Neurology">Neurology</option>
            <option value="Dermatology">Dermatology</option>
            <option value="Ophthalmology">Ophthalmology</option>
          </select>
        </div>
      </div>
      <div className="mt-5">
        <Slider ref={slider} {...settings}>
          {filteredData.map((e, index) => (
            <div
              className="h-[350px] text-black rounded-xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] mb-2 cursor-pointer"
              key={index}
            >
              <div>
                <img
                  src={e.img}
                  alt="img"
                  className="h-56 rounded-t-xl w-full"
                />
              </div>

              <div className="flex flex-col justify-center items-center">
                <h1 className="font-semibold text-xl pt-4">{e.name}</h1>
                <h3 className="pt-2">{e.specialties}</h3>
                <Link to="/book"> {/* Link to the Book page */}
                  <button className="bg-blue-500 text-white px-4 py-2 mt-2 rounded-lg" onClick={() => bookAppointment(e.name)}>Book Now</button>
                </Link>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Doctors;
