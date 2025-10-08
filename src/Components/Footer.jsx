import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-200 text-[#000000] py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand / About */}
        <div>
          <h2 className="text-2xl font-bold text-orange-600 mb-3">
            <span className="text-black font-bold text-2xl">TASTE</span>NEST
          </h2>
          <p className="text-[#000000]">
            Serving delicious meals made with passion. Your cravings, our
            specialty!
          </p>
          <div className="flex space-x-4 mt-4">
            <a
              href="#"
              className="hover:text-orange-500 transition-colors duration-300"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="hover:text-orange-500 transition-colors duration-300"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="hover:text-orange-500 transition-colors duration-300"
            >
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-orange-500 mb-3">
            Quick Links
          </h3>
          <ul className="space-y-2">
            <li>
              <a
                href="#menu"
                className="hover:text-orange-500 transition-colors duration-300"
              >
                Menu
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-orange-500 transition-colors duration-300"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover:text-orange-500 transition-colors duration-300"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#home"
                className="hover:text-orange-500 transition-colors duration-300"
              >
                Home
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold text-orange-500 mb-3">
            Contact Us
          </h3>
          <p className="text-[#000]">123 Flavor Street, Food City, Country</p>
          <p className="text-[#000] mt-2">+123 456 7890</p>
          <p className="text-[#000] mt-2">info@foodie.com</p>
        </div>

        {/* Newsletter / Subscribe */}
        <div>
          <h3 className="text-xl font-semibold text-orange-500 mb-3">
            Newsletter
          </h3>
          <p className="text-[#000] mb-4">
            Subscribe to get the latest updates and offers.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-4 py-2  bg-[#ffffff] rounded-l-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <button className="bg-orange-500 px-4 py-2 rounded-r-lg text-white font-bold hover:bg-orange-600 transition-colors duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Taste Nest. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
