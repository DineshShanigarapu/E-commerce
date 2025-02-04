import React from 'react'

const PaymentFailure = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
    <div className="bg-gray-200 p-8 rounded-sm text-center max-w-md">
      <div className="flex justify-center mb-4">
        <span className="text-6xl">⚠️</span>
      </div>
      <h2 className="text-2xl font-bold mb-4">Payment Failure</h2>
      <p className="mb-6">Hey there. We tried to charge your card but, something went wrong. Please update your payment method below to continue.</p>
      <button className="bg-black text-white px-4 py-2 rounded-sm">Update Payment Method</button>
      <div className="mt-4">
        <p className="text-gray-600">Have a question? <a href="#" className="text-red-500 underline">Contact Support</a></p>
      </div>
    </div>
  </div>
  )
}

export default PaymentFailure