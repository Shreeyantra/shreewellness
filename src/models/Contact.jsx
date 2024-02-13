import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../layouts/Button";

const Contact = ({ closeForm }) => {
  const [formData, setFormData] = useState({
    userFirstName: "",
    userLastName: "",
    userEmail: "",
    userNumber: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      userFirstName: "",
      userLastName: "",
      userEmail: "",
      userNumber: ""
    });
    closeForm();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-90">
<div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 text-white" style={{ backgroundImage: "url('assets/img/booknow.jpg')", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center", opacity: 0.9 }}>
          <form className="w-80 md:w-96 space-y-5 bg-white p-5 rounded-xl" onSubmit={handleSubmit}>
          <h1 className="text-4xl font-semibold text-center text-backgroundColor">
            Book Now
          </h1>
          <div className="flex flex-col">
            <input
              className="py-3 px-2 bg-[#000000] rounded-lg"
              type="text"
              name="userFirstName"
              id="userFirstName"
              placeholder="First Name"
              value={formData.userFirstName}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <input
              className="py-3 px-2 bg-[#000000] rounded-lg"
              type="text"
              name="userLastName"
              id="userLastName"
              placeholder="Last Name"
              value={formData.userLastName}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <input
              className="py-3 px-2 bg-[#000000] rounded-lg"
              type="email"
              name="userEmail"
              id="userEmail"
              placeholder="Your Email"
              value={formData.userEmail}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <input
              className="py-3 px-2 bg-[#000000] rounded-lg"
              type="number"
              name="userNumber"
              id="userNumber"
              placeholder="Phone No."
              value={formData.userNumber}
              onChange={handleChange}
            />
          </div>
          <div className="flex gap-5">
            <Button title="Book Appointment" />
            <Link to="/" className="flex-1"> {/* Adjust the class to control button size */}
              <button
                className="bg-backgroundColor text-black px-10 py-3 rounded-md active:bg-red-500"
                type="button"
                onClick={closeForm}
              >
                Close
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
