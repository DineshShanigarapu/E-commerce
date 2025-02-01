import React, { useState } from 'react';

const AccountDetails = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validate = () => {
    let formErrors = {};
    if (!formData.firstName) formErrors.firstName = 'First name is required';
    if (!formData.lastName) formErrors.lastName = 'Last name is required';
    if (!formData.email) formErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) formErrors.email = 'Email is invalid';
    if (!formData.currentPassword) formErrors.currentPassword = 'Current password is required';
    if (!formData.newPassword) formErrors.newPassword = 'New password is required';
    if (formData.newPassword !== formData.confirmPassword) formErrors.confirmPassword = 'Passwords do not match';

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Handle form submission
      console.log('Form data:', formData);
    }
  };

  return (
    <div>
      <main className="w-full max-w-lg mx-auto p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="mb-4">
            <input 
              type="text" 
              placeholder="First name" 
              name="firstName" 
              value={formData.firstName} 
              onChange={handleChange} 
              className="w-full px-4 py-3 border rounded-sm focus:outline-none " 
            />
            {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
          </div>
          <div className="mb-4">
            <input 
              type="text" 
              placeholder="Last name" 
              name="lastName" 
              value={formData.lastName} 
              onChange={handleChange} 
              className="w-full px-4 py-3 border rounded-sm focus:outline-none" 
            />
            {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
          </div>
          <div className="mb-4">
            <input 
              type="email" 
              placeholder="Email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              className="w-full px-4 py-3 border rounded-sm focus:outline-none" 
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>
          <h2 className="text-xl font-semibold mb-4">Password Change</h2>
          <div className="mb-4">
            <input 
              type="password" 
              placeholder="Current password" 
              name="currentPassword" 
              value={formData.currentPassword} 
              onChange={handleChange} 
              className="w-full px-4 py-3 border rounded-sm focus:outline-none " 
            />
            {errors.currentPassword && <p className="text-red-500 text-sm">{errors.currentPassword}</p>}
          </div>
          <div className="mb-4">
            <input 
              type="password" 
              placeholder="New password" 
              name="newPassword" 
              value={formData.newPassword} 
              onChange={handleChange} 
              className="w-full px-4 py-3 border rounded-sm focus:outline-none " 
            />
            {errors.newPassword && <p className="text-red-500 text-sm">{errors.newPassword}</p>}
          </div>
          <div className="mb-4">
            <input 
              type="password" 
              placeholder="Confirm password" 
              name="confirmPassword" 
              value={formData.confirmPassword} 
              onChange={handleChange} 
              className="w-full px-4 py-3 border rounded-sm focus:outline-none " 
            />
            {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}
          </div>
          <button type="submit" className="w-full bg-black text-white py-3 rounded-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500">
            Save Changes
          </button>
        </form>
      </main>
    </div>
  );
};

export default AccountDetails;
