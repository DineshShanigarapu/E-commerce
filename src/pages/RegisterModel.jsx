import React from "react";

const RegisterModel = ({ onClose }) => {
  return (
    <div>
      <h2 className="text-2xl  mb-8">Register</h2>
      <form>
        <div className="mb-4">
          <input
            type="text"
            placeholder="First name"
            className="w-full border border-gray-300 rounded-sm p-3 focus:outline-none focus:ring focus:ring-gray-200"
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Last name"
            className="w-full border border-gray-300 rounded-sm p-3 focus:outline-none focus:ring focus:ring-gray-200"
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            placeholder="Email *"
            className="w-full border border-gray-300 rounded-sm p-3 focus:outline-none focus:ring  focus:ring-gray-200"
            required
          />
        </div>
        <div className="mb-6">
          <input
            type="password"
            placeholder="Password *"
            className="w-full border border-gray-300 rounded-sm p-3 focus:outline-none focus:ring focus:ring-gray-200"
            required
          />
        </div>
        <div className="flex flex-row gap-2 align-middle ">
          <button
            type="submit"
            className="w-52 bg-black rounded-sm text-white py-3 hover:bg-gray-800 sm:w-[20vw] md:w-[55vw] lg:w-[43vw]"
          >
            Register
          </button>

          <div className="mt-6 text-center text-sm relative bottom-3">
            <a href="#" onClick={onClose} className="font-medium text-black hover:underline underline text-nowrap hover:bg-red-500">
              Already have an account? Login here ↗
            </a>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegisterModel;
