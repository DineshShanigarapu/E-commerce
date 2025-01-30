import React, { useState } from 'react';
import Forgot from './Forgot';

function Login() {
  const [showForgot, setShowForgot] = useState(false);

  const handleForgotClick = () => {
    setShowForgot(true);
  };

  const handleBackToLoginClick = () => {
    setShowForgot(false);
  };

  return (
    <>
      <div>
        <img src='https://ecomusnext-themesflat.vercel.app/images/shop/file/page-title-blog.png' className='h-56' />
        <h1 className='text-4xl relative bottom-36 text-center'>Log in</h1>
      </div>
      <div className="flex items-center justify-center min-h-screen">
        <div className="p-8 rounded-lg w-[90vw] md:w-[50vw] lg:w-[40vw]">
          {showForgot ? (
            <Forgot handleBackToLoginClick={handleBackToLoginClick} />
          ) : (
            <>
              <h2 className="text-2xl mb-6">Login</h2>
              <p className="mb-6 text-gray-600">
                Sign in to your account to access our latest updates, promotions, and tailored recommendations.
              </p>
              <form>
                <div className="mb-4">
                  <input type="email" className="w-full px-4 py-3 border rounded-sm focus:outline-none " placeholder="Email *" required />
                </div>
                <div className="mb-6">
                  <input type="password" className="w-full px-4 py-3 border rounded-sm focus:outline-none " placeholder="Password *" required />
                </div>
                <button type="submit" className="w-52 bg-black text-white py-3 rounded-sm hover:bg-gray-800">Login</button>
                <div className='top-5 relative'>
                  <p>
                    <a href="#" onClick={handleForgotClick} className="hover:underline top-5 underline hover:text-red-600">Forgot your password↗</a>
                  </p>
                </div>
              </form>
            </>
          )}
        </div>
        <div className='pl-9 flex items-start flex-col justify-start'>
          <h1 className='text-2xl mb-5'>I'm new here</h1>
          <p className='mb-6 text-gray-600'>
            Sign up for early Sale access plus tailored new arrivals, trends and promotions. To <br />opt out, click unsubscribe in our emails.
          </p>
          <span className='underline'>
            <a href='/reg'  className='hover:text-red-600'>Register↗</a>
          </span>
        </div>
      </div>
    </>
  );
}

export default Login;
