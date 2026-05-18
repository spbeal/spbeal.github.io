import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center">
      <h1 className="text-5xl font-bold text-pink-600">404</h1>
      <p className="text-2xl text-gray-700 mt-4">That page does not exist or may have moved.</p>
      <Link to="/" className="mt-6 px-6 py-2 bg-gray-800 text-white rounded-lg">
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;