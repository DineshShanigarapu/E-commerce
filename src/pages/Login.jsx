import React from 'react';

function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen">
    
      <div className=" p-8 rounded-lg w-[90vw] md:w-[50vw] lg:w-[40vw]">
      <div >
      <img src='	https://ecomusnext-themesflat.vercel.app/images/shop/file/page-title-blog.png' className='h-32 relative bottom-8'></img>
      <h1 className=' relative flex justify-center bottom-8 items-center'>Login</h1>
    </div>
        <h2 className="text-2xl  mb-6">Login</h2>
        <p className="mb-6 text-gray-600">
          Sign in to your account to access our latest updates, promotions, and tailored recommendations.
        </p>
        <form>
          <div className="mb-4">
            <input type="email" className="w-full px-4 py-3 border rounded-sm" placeholder="Email *" required />
          </div>
          <div className="mb-6">
            <input type="password" className="w-full px-4 py-3 border rounded-sm" placeholder="Password *" required />
          </div>
          <p><a href="#" className=" hover:underline ">Forgot your password↗</a></p>
          <button type="submit" className="w-52 bg-black text-white py-3 rounded-sm hover:bg-gray-800 ">Login</button>
        </form>
        <div className="text-center pt-5">
         
        </div>
      </div>
     
      <div className=' pl-10 '>
        <h1 className='text-2xl  mb-5 '>I'm new here</h1>
        <p className='mb-6 text-gray-600 '>
        Sign up for early Sale access plus tailored new arrivals, trends and promotions. To opt<br/>out, click unsubscribe in our emails.
        </p>
        <span><a href='#'>Register↗</a></span>
      </div>
    </div>
  );
}

export default Login;
