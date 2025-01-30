import React from 'react'

const Note = () => {
  return (
   
     <div className="mt-4">
     <h2 className="text-lg font-semibold mb-2">Add Order Note</h2>
     <textarea
       className="w-full h-32 p-2 border rounded-sm"
       placeholder="How can we help you?"
     ></textarea>
   </div>
  )
}

export default Note