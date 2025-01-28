import React from 'react';

const Forgot = ({ handleBackToLoginClick }) => {
  return (
    <div>
      <h2 className='text-2xl mb-6'>Reset your Password</h2>
      <form>
        <p className='mb-6 text-gray-600'>We will send you an email to reset your password</p>
        <div className='mb-6'>
          <input className='w-full border rounded-sm px-4 py-3' 
            placeholder='Email *'
            type='email'
            required
          />
        </div>
        <div className='flex flex-col mb-6'>
          <a href="#" onClick={handleBackToLoginClick} className='underline mb-6'>Cancel</a>
          <button className='px-4 py-3 bg-slate-950 text-zinc-50 border rounded-sm w-full'>Reset Password</button>
        </div>
      </form>
    </div>
  );
}

export default Forgot;
