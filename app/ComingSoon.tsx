// components/ComingSoon.tsx
import React from 'react';

const ComingSoon = () => {
  return (
    <div className="mt-10 px-6 py-4 border border-gray-200 shadow-lg rounded-lg bg-white dark:bg-gray-800">
      <h1 className="text-2xl font-bold text-gray-800 dark:text-white">We're Launching Soon</h1>
      <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
        Our website is currently under construction. We will be here soon with our new awesome site. Please hang on while we get to work !
      </p>
      {/* <form className="mt-4 flex justify-center">
        <input
          type="email"
          placeholder="Enter your email"
          className="px-4 py-2 w-64 border border-gray-300 rounded-l-lg focus:outline-none"
          required
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600 focus:outline-none"
        >
          Notify Me!
        </button>
      </form> */}
    </div>
  );
};

export default ComingSoon;
