export default function ContactUs() {
    return (
      <div className="w-full">
        {/* Map Section */}
        <div className="w-full h-96">
          <iframe
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19810.673438143134!2d-0.09307485000000001!3d51.5081124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876034a4a39cce9%3A0x6f13b57393c1b5d!2sTower%20of%20London!5e0!3m2!1sen!2suk!4v1707051234567"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
  
        {/* Contact Section */}
        <div className="container mx-auto p-6 grid md:grid-cols-2 gap-8">
          {/* Visit Our Store */}
          <div>
            <h2 className="text-2xl  mb-4">Visit Our Store</h2>
            <p className="text-gray-600"><strong>Address:</strong> 66 Mott St, New York, New York, Zip Code: 10006, AS</p>
            <p className="text-gray-600 mt-2"><strong>Phone:</strong> (623) 934-2400</p>
            <p className="text-gray-600 mt-2"><strong>Email:</strong> EComposer@example.com</p>
            <p className="text-gray-600 mt-2"><strong>Open Time:</strong> Every day 11am to 7pm</p>
            <div className="mt-4 flex space-x-3">
             <img src="	https://cdn-icons-png.flaticon.com/128/2175/2175193.png" className=" size-8"/>
             <img src="https://cdn-icons-png.flaticon.com/128/5969/5969020.png" className=" size-8"/>
             <img src="	https://cdn-icons-png.flaticon.com/128/3670/3670274.png" className=" size-8"/>
             <img src="https://cdn-icons-png.flaticon.com/128/3669/3669950.png" className=" size-8"/>
             

            </div>
          </div>
  
          {/* Get in Touch Form */}
          <div>
            <h2 className="text-2xl  mb-4">Get in Touch</h2>
            <p className="text-gray-600 mb-4">If you’ve got great products you're making or looking to work with us then drop us a line.</p>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" placeholder="Name *" className="p-3 border rounded-sm w-full" required />
                <input type="email" placeholder="Email *" className="p-3 border rounded-sm w-full" required />
              </div>
              <textarea placeholder="Message" className="p-3 border rounded-sm w-full h-32" required></textarea>
              <button className="bg-black text-white px-6 py-3 rounded-sm w-full">Send</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
  