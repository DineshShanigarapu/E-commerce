import React from 'react';

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen  p-4">
      <div className="text-center">
        <div className="relative inline-block">
          <div className="absolute inset-0 flex items-center justify-center">
           
          </div>
          <div >
            <img src="	https://ecomusnext-themesflat.vercel.app/images/item/404.svg" alt="404 Error" className="max-w-full h-auto" />
          </div>
        </div>
        <h2 className="mt-6 text-4xl font-semibold text-gray-800">Oops... That link is broken.</h2>
        <p className="mt-2 text-gray-600">Sorry for the inconvenience. Go to our homepage to check out our latest collections.</p>
        <button className="mt-6 px-4 py-3 bg-black text-white rounded-sm hover:bg-gray-800">
          Go to Home
        </button>
      </div>
    </div>
  );
};

export default NotFoundPage;
