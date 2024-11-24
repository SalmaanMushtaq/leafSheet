import { useState } from "react";
import { FaHandshake } from "react-icons/fa6";
import { toast, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function GetInTouch() {
  const [userData, setUserData] = useState({
    userName: "",
    userEmail: "",
    userPhone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
    // Clear previous errors when input changes
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const handleSubmit = () => {
    // Validation logic
    const validationErrors = {};
    if (!userData.userName.trim()) {
      validationErrors.userName = "Please enter your name";
    }
    if (!userData.userEmail.trim()) {
      validationErrors.userEmail = "Please enter your email";
    } else if (!/\S+@\S+\.\S+/.test(userData.userEmail)) {
      validationErrors.userEmail = "Please enter a valid email address";
    }
    if (!userData.userPhone.trim()) {
      validationErrors.userPhone = "Please enter your phone number";
    } else if (!/^\d{10}$/.test(userData.userPhone)) {
      validationErrors.userPhone = "Please enter a valid 10-digit phone number";
    }
    if (!userData.message.trim()) {
      validationErrors.message = "Please enter a message";
    }
    if (Object.keys(validationErrors).length > 0) {
      // If there are validation errors, set them and prevent form submission
      setErrors(validationErrors);
    } else {
      // If there are no errors, proceed with form submission
      console.log(userData);
      setUserData({
        userName: "",
        userEmail: "",
        userPhone: "",
        message: "",
      });
      // Add code to submit the form data here
      // Toast message code
      toast.success("Message Sent Succefully!", {
        theme: "dark",
        transition: Zoom,
        toastStyle: { backgroundColor: "green" },
      });
    }
  };

  return (
    <div className="mt-10">
      <h1 className="text-4xl font-bold leading-relaxed flex gap-4 items-center">
        <span className="bg-basic p-3 rounded-full">
          <FaHandshake className="bg-basic" />
        </span>
        Get In Touch
      </h1>
      <div className="mt-10 m-auto p-5 flex flex-col gap-6 sm:w-3/4">
        <div>
          <input
            type="text"
            name="userName"
            id="userName"
            placeholder="Your Name*"
            onChange={handleChange}
            value={userData.userName}
            className={`placeholder:text-formTextColor bg-background p-3 w-full rounded-full
              focus:outline-none focus:ring-4 focus:ring-stone-700 focus:ring-offset-2 focus:ring-offset-btnBackground ${
                errors.userName && "border-red-500 border"
              }`}
          />
          {errors.userName && (
            <p className="text-red-500 ms-5">{errors.userName}</p>
          )}
        </div>
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="w-full lg:w-1/2">
            <input
              type="email"
              name="userEmail"
              id="userEmail"
              onChange={handleChange}
              value={userData.userEmail}
              placeholder="Your Email*"
              className={`placeholder:text-formTextColor bg-background p-3 w-full rounded-full
              focus:outline-none focus:ring-4 focus:ring-stone-700 focus:ring-offset-2 focus:ring-offset-btnBackground ${
                errors.userEmail && "border border-red-500"
              }`}
            />
            {errors.userEmail && (
              <p className="text-red-500 ms-5">{errors.userEmail}</p>
            )}
          </div>
          <div className="w-full lg:w-1/2">
            <input
              type="text"
              name="userPhone"
              id="userPhone"
              onChange={handleChange}
              value={userData.userPhone}
              placeholder="Your Number*"
              className={`placeholder:text-formTextColor bg-background p-3 w-full rounded-full
              focus:outline-none focus:ring-4 focus:ring-stone-700 focus:ring-offset-2 focus:ring-offset-btnBackground ${
                errors.userPhone && "border border-red-500"
              }`}
            />
            {errors.userPhone && (
              <p className="text-red-500 ms-5">{errors.userPhone}</p>
            )}
          </div>
        </div>
        <div>
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            onChange={handleChange}
            value={userData.message}
            placeholder="Your Message Here..."
            className={`placeholder:text-formTextColor bg-background p-3 w-full rounded-3xl
            focus:outline-none focus:ring-4 focus:ring-stone-700 focus:ring-offset-2 focus:ring-offset-btnBackground
            ${errors.message && "border border-red-500"}`}
          ></textarea>
          {errors.message && (
            <p className="text-red-500 ms-5">{errors.message}</p>
          )}
        </div>
        <div>
          <button className="float-end btnHover" onClick={handleSubmit}>
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
}

export default GetInTouch;
