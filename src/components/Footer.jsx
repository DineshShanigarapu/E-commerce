import React, { useState } from "react";
const Footer = () => {
  const [visibleSections, setVisibleSections] = useState({
    help: false,
    links: false,
    signup: false,
  });

  const toggleSection = (section) => {
    setVisibleSections((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  return (
    <>
      <footer className="bg-white text-gray-600"
        style={{ fontFamily: "'Albert Sans', sans-serif" }}>
          <div className="max-w-screen-xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-4 gap-10">
          <div >
          <img className="mb-8" src="	https://ecomus.magentech.com/media/logomobile/default/logo.svg" />

            <p className="text-sm ">
              Address: 1234 Fashion Street, Suite 567,
              <br />
              New York, NY
            </p>
            <p className="text-sm">
              Email:{" "}
              <a href="mailto:info@fashionshop.com" className="text-gray-700 font-bold ">
                info@fashionshop.com
              </a>
            </p>
            <p className="text-sm">
              Phone:{" "}
              <a href="tel:+12125551234" className="text-gray-700 font-bold">
                (+91)9000000000
              </a>
            </p>
            <a href="#" className="text-black underline flex items-center mt-4 text-sm">
              Get direction ↗
            </a>
            <div className="flex space-x-4 mt-4 ">
              <img className="size-9" src="https://cdn-icons-png.flaticon.com/128/254/254390.png" />
              <img className="size-9" src="https://cdn-icons-png.flaticon.com/128/5968/5968830.png" />
              <img className="size-9" src="https://cdn-icons-png.flaticon.com/128/1400/1400829.png" />
              <img className="size-9" src="https://cdn-icons-png.flaticon.com/128/3536/3536608.png" />
            </div>
          </div>

   
          <div>
            <h3
              className="text-lg font-medium mb-5 text-gray-900 flex justify-between items-center cursor-pointer md:cursor-default "
              onClick={() => toggleSection("help")}
            >
              Help
              <span className="md:hidden">{visibleSections.help ? "−" : "+"}</span>
            </h3>
            <ul
              className={`space-y-2 ${visibleSections.help ? "block" : "hidden"} md:block`}
            >
              <li><a href="#" className="hover:text-red-600 text-sm pt-2">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-red-600 text-sm">Returns + Exchanges</a></li>
              <li><a href="#" className="hover:text-red-600 text-sm">Shipping</a></li>
              <li><a href="#" className="hover:text-red-600 text-sm">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-red-600 text-sm">FAQ's</a></li>
              <li><a href="#" className="hover:text-red-600 text-sm">Compare</a></li>
              <li><a href="#" className="hover:text-red-600 text-sm">My Wishlist</a></li>
            </ul>
          </div>

       
          <div>
            <h3 className="text-lg font-medium  mb-5 text-gray-900 flex justify-between items-center cursor-pointer md:cursor-default" onClick={() => toggleSection("links")}>
              Useful Links
              <span className="md:hidden">{visibleSections.links ? "−" : "+"}</span>
            </h3>
            <ul className={`space-y-2 ${visibleSections.links ? "block" : "hidden"} md:block`}>
              <li><a href="#" className="hover:text-red-600 text-sm">Our Story</a></li>
              <li><a href="#" className="hover:text-red-600 text-sm">Visit Our Store</a></li>
              <li><a href="#" className="hover:text-red-600 text-sm">Contact Us</a></li>
              <li><a href="#" className="hover:text-red-600 text-sm">About Us</a></li>
              <li><a href="#" className="hover:text-red-600 text-sm">Account</a></li>
            </ul>
          </div>

 
          <div>
            <h3 className=" text-lg font-medium  mb-5 text-gray-900 flex justify-between items-center cursor-pointer md:cursor-default" onClick={() => toggleSection("signup")}>
              Sign Up for Email
              <span className="md:hidden">{visibleSections.signup ? "−" : "+"}</span>
            </h3>
            <div className={`${visibleSections.signup ? "block" : "hidden"} md:block`}>
              <p className="mb-4 whitespace-nowrap max-w-sm text-sm">
                Sign up to get first dibs on new arrivals,
                <br />
                sales, exclusive content, events and more!
              </p>
              <form className="flex items-center pt-2">
                <input type="email" placeholder="Your email address" className="border border-gray-300 rounded-1 px-4 py-2 w-40 text-sm"/>
                <button type="submit" className="bg-black text-white px-4 py-2 rounded-r hover:bg-gray-800 h-10 text-sm">
                  Subscribe↗
                </button>
              </form>
            </div>
          </div>
        </div>

        <hr />
        <div className="max-w-screen-xl mx-auto px-5 flex flex-wrap justify-between items-center mt-3 ">
          <p className="text-sm text-gray-500 ">© 2024 Ecomus. All rights reserved.</p>
          <div className="flex items-center space-x-4">
            <img className="size-9" src="https://ecomus.magentech.com/media/wysiwyg/payments/visa.svg" />
            <img className="size-9" src="https://ecomus.magentech.com/media/wysiwyg/payments/paypal.svg" />
            <img className="size-9" src="https://ecomus.magentech.com/media/wysiwyg/payments/master.svg" />
            <img className="size-9" src="https://ecomus.magentech.com/media/wysiwyg/payments/master.svg" />
            <img className="size-9" src="https://ecomus.magentech.com/media/wysiwyg/payments/diners_club.svg" />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
