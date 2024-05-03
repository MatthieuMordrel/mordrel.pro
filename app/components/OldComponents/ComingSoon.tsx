// components/ComingSoon.tsx
import React from 'react'

const ComingSoon = () => {
  return (
    <div className="m-4 rounded-lg border bg-techGrey px-6 py-4 shadow-lg">
      <h1 className="text-2xl font-bold">We&apos;re Launching Soon</h1>
      <p className="mt-2 text-sm dark:text-techBlue">
        Our website is currently under construction. We will be here soon with
        our new awesome site. Please hang on while we get to work !
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
  )
}

export default ComingSoon
