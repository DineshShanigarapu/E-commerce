import React, { useState } from "react";
import RegisterModel from "./RegisterModel";

const LoginPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const handleRegisterClick = () => {
    setShowRegister(true);
  };

  const handleBackToLoginClick = () => {
    setShowRegister(false);
  };

  return (
    <div>
  
      <button
        onClick={() => setIsOpen(true)}
        className="bg-black text-white px-4 py-2 rounded-md"
      >
        Login
      </button>

     
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white w-full max-w-lg p-6 relative shadow-lg rounded-sm">

            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-black text-4xl"
            >
              &times;
            </button>

         
  
            {showRegister ? (
              <RegisterModel onClose={handleBackToLoginClick} />
            ) : (
              <>
                <h2 className="text-2xl mb-6">Log in</h2>

             
                <form>
 
                  <div className="mb-4">
                    <label htmlFor="email" className="sr-only">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Email *"
                      className="w-full border border-gray-300 rounded-sm p-3 focus:outline-none focus:ring-2 focus:ring-black"
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="password" className="sr-only">
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      placeholder="Password *"
                      className="w-full border border-gray-300 rounded-sm p-3 focus:outline-none focus:ring-2 focus:ring-black"
                    />
                  </div>

              
                  <div className="mb-6 text-left">
                    <a href="#" className="text-sm text-gray-500 hover:underline">
                      Forgot your password?
                    </a>
                  </div>
                  <div className="flex flex-row gap-5 align-middle">
                    <button
                      type="submit"
                      className="w-52 bg-black rounded-sm text-white py-3 hover:bg-gray-800"
                    >
                      Log in
                    </button>

                    <div className="mt-6 text-center text-sm relative bottom-3">
                      <a href="#" onClick={handleRegisterClick} className="font-medium text-black hover:underline underline">
                        New customer? Create your account
                      </a>
                    </div>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginPopup;
