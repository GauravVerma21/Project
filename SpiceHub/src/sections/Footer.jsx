import React from 'react';
import { FaInstagram, FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';

const MasalaFooter = () => {
  return (
    <footer className="bg-yellow-50 text-brown-800 py-12" id="contact">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <h2 className="text-2xl font-bold text-red-700 mb-4">SpiceBazaar</h2>
          <p className="text-sm text-gray-700">
            Bringing the finest hand-picked spices from farms to your kitchen with love and purity.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-orange-800 mb-2">Products</h3>
          <ul className="space-y-6 text-sm">
            {["chilliPowder", "turmeric", "garamMasala", "wholeSpices"].map((item) => (
              <li key={item}>
                <ScrollLink
                  to={item}
                  smooth={true}
                  duration={500}
                  className="hover:text-red-600 transition cursor-pointer capitalize"
                >
                  {item.replace(/([A-Z])/g, " $1")}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-orange-800 mb-2">Contact</h3>
          <p className="text-sm">📍 Ranchi, Jharkhand, India</p>
          <p className="text-sm">📧 support@spicehub.com</p>
          <p className="text-sm">☎️ +9 8871174803</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-orange-800 mb-2">Subscribe</h3>
          <p className="text-sm mb-3">Get offers, recipes & tips delivered to your inbox!</p>
          <form className="flex flex-col space-y-3">
            <input type="email" placeholder="Your Email" className="px-4 py-2 rounded bg-white text-black text-sm" />
            <button type="submit" className="bg-red-600 hover:bg-red-700 text-white py-2 rounded text-sm font-semibold">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <hr className="border-t border-orange-200 mt-12 mb-6 w-3/4 mx-auto" />

      <div className="text-center space-y-3">
        <div className="flex justify-center space-x-6 text-xl text-red-700">
          {[FaInstagram, FaFacebook, FaTwitter, FaYoutube].map((Icon, idx) => (
            <a key={idx} href="#" className="hover:text-orange-600" aria-label={Icon.name}>
              <Icon />
            </a>
          ))}
        </div>
        <p className="text-sm text-gray-600">&copy; {new Date().getFullYear()} SpiceHub. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default MasalaFooter;
