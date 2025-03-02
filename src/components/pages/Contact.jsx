import React from "react";
import { Helmet } from "react-helmet";

const Contact = () => {
  return (
    <div className="min-h-screen py-32 flex justify-center items-center">
      <Helmet>
        <title>Contact - Samuel</title>
      </Helmet>
      <div className="w-full max-w-sm sm:max-w-xl lg:max-w-4xl p-6 bg-gray-200 shadow-lg rounded-lg">
      <div className="pb-8 text-center pt-6">
      <p className="text-5xl font-extrabold inline-block leading-tight border-b-4 border-pink-600 pb-2 
               drop-shadow-lg">            Contact Me
          </p>
        </div>
        <p className="text-lg text-gray-600 text-center mb-8">
          Submit the form below or send me an email at{" "}
          <a href="mailto:sampbeal@gmail.com" className="text-pink-600 hover:underline">
            sampbeal@gmail.com
          </a>
        </p>
        <form
          method="POST"
          action="https://getform.io/f/1575d85d-5d25-4d12-925b-8d0d2a4b407d"
          className="space-y-6"
        >
          <div>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full p-3 border border-gray-300 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-pink-600"
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full p-3 border border-gray-300 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-pink-600"
            />
          </div>
          <div>
            <textarea
              name="message"
              rows="6"
              placeholder="Your Message"
              className="w-full p-3 border border-gray-300 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-pink-600"
            ></textarea>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full py-3 px-6 bg-gray-700 text-white text-lg font-semibold rounded-md shadow-md hover:bg-gray-800 transition duration-200"
            >
              Let's Connect
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
