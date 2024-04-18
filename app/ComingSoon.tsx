// components/BelieveInUs.tsx
import React from 'react';
import {HeartIcon} from "@heroicons/react/24/solid";


const BelieveInUs = () => {
  return (
    <div className="mt-10 px-6 py-4 border border-pink-200 shadow-lg rounded-lg bg-white dark:bg-gray-800">
      <div className="flex justify-center items-center">
        <HeartIcon className="w-6 h-6 text-pink-500" />
        <h1 className="ml-2 text-2xl font-bold text-gray-800 dark:text-white">I Believe in Us</h1>
      </div>
      <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
        Just like this future website, our journey is currently under construction. 
        I believe that with love and patience, we&apos;ll continue bulding something truly special, brick by brick. 
        I love you :)
      </p>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <img src="/IMG_4079.jpg" alt="My Image" style={{ maxWidth: '200px', maxHeight: '200px', display: 'block', margin: '20px auto 0' }} />
      </div> 
      </div>
  );
};

export default BelieveInUs;
