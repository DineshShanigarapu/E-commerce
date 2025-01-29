import React from 'react';

const Forgot = ({ handleBackToLoginClick }) => {
  return (
    <div>
      <div className="p-8 rounded-lg w-[90vw] md:w-[50vw] lg:w-[40vw]">
      <h2 className='text-2xl mb-6'>Reset your Password</h2>
      <form>
        <p className='mb-6 text-gray-600'>We will send you an email to reset your password</p>
        <div className='mb-6'>
        <input type="email" className="w-full px-4 py-3 border rounded-sm" placeholder="Email *" required />
        </div>
        <div className='flex flex-col mb-6'>
          <a href="#" onClick={handleBackToLoginClick} className='underline mb-6  hover:text-red-600'>Cancel</a>
          <button className='w-52 bg-black text-white py-3 rounded-sm hover:bg-gray-800 '>Reset Password</button>
        </div>
      </form>
      </div>
    </div>
  );
}

export default Forgot;
