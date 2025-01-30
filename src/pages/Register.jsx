import React, { useState } from 'react';

function Register() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    let errors = {};
    if (!formData.firstName) errors.firstName = 'First name is required';
    if (!formData.lastName) errors.lastName = 'Last name is required';
    if (!formData.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
    if (!formData.password) errors.password = 'Password is required';
    if (formData.password.length < 6)
      errors.password = 'Password must be at least 6 characters';
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      // Submit form data
      console.log('Form data submitted', formData);
      setErrors({});
    }
  };

  return (
    <>
    <div>
    <img src='https://ecomusnext-themesflat.vercel.app/images/shop/file/page-title-blog.png' className='h-56' />
    <h1 className='text-4xl relative bottom-36 text-center'>Register</h1>
  </div>
    <div className="flex items-center justify-center min-h-screen w-screen">
      <div className="p-8 w-full sm:w-[70vw] md:w-[60vw] lg:w-[50vw]">
        <h2 className="text-2xl  mb-6">Register</h2>
        <p className="mb-6 text-gray-600">
          Sign up for early Sale access plus tailored new arrivals, trends, and promotions. To opt out, click unsubscribe in our emails.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full sm:w-[60vw] md:w-[55vw] lg:w-[43vw] px-4 py-3  border focus:outline-none  rounded-sm"
              placeholder="First name"
              required
            />
            {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full sm:w-[60vw] md:w-[55vw] lg:w-[43vw] px-4 py-3 border focus:outline-none  rounded-sm "
              placeholder="Last name"
              required
            />
            {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
          </div>
          <div className="mb-4">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full sm:w-[60vw] md:w-[55vw] lg:w-[43vw] px-4 py-3 border focus:outline-none   rounded-sm"
              placeholder="Email *"
              required
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>
          <div className="mb-6">
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full sm:w-[60vw] md:w-[55vw] lg:w-[43vw] px-4 py-3 border focus:outline-none  rounded-sm"
              placeholder="Password *"
              required
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
          </div>
          <button
            type="submit"
            className="w-full sm:w-[60vw] md:w-[55vw] lg:w-[43vw] bg-black text-white py-3 hover:bg-gray-800  rounded-sm"
          >
            Register
          </button>
        </form>
        <div className="text-center ">
          <p className="pt-5 underline">
          <a href="/login" className='hover:text-red-600'>  Already have an account? Login here↗</a>
          </p>
        </div>
      </div>
    </div>
    </>
  );
}

export default Register;
