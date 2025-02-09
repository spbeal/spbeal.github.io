import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center bg-gray-100">
      <h1 className="text-6xl font-bold text-red-600">404</h1>
      <p className="text-2xl text-gray-700 mt-4">Oops! Page Not Found.</p>
      <Link to="/" className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-lg">
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;

// import React from 'react'

// const PageNotFound = () => {
//   return (
//     <main className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
//         <div className="text-center">
//             <p className="text-base font-semibold text-indigo-600">404</p>
//             <h1 className="mt-4 text-3xl font-bold tracking-tight text-indigo-600 sm:text-5xl">Page not found</h1>
//             <p className="mt-6 text-base leading-7 text-text-color">Sorry, we couldn’t find the page you’re looking for.</p>
//         <div className="mt-10 flex items-center justify-center gap-x-6">
//             <a href="about" className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Go back home</a>
//         </div>
//      </div>
//    </main>
//   )
// }

// export default PageNotFound