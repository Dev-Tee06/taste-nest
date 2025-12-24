import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-orange-50 to-orange-100 text-gray-800 py-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand / About */}
        <div>
          <h2 className="text-3xl font-extrabold mb-4">
            <span className="text-orange-600">TASTE</span>NEST
          </h2>
          <p className="text-gray-700">
            Serving delicious meals made with passion. Your cravings, our
            specialty!
          </p>
          <div className="flex space-x-4 mt-5">
            <a
              href="#"
              className="p-3 rounded-full bg-white shadow hover:bg-orange-500 hover:text-white transition-all duration-300"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="p-3 rounded-full bg-white shadow hover:bg-pink-500 hover:text-white transition-all duration-300"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="p-3 rounded-full bg-white shadow hover:bg-blue-500 hover:text-white transition-all duration-300"
            >
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-orange-600 mb-4">
            Quick Links
          </h3>
          <ul className="space-y-3">
            {["Home", "Menu", "About Us", "Contact"].map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase().replace(" ", "")}`}
                  className="hover:text-orange-500 transition-colors duration-300 font-medium"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold text-orange-600 mb-4">
            Contact Us
          </h3>
          <p className="text-gray-700">123 Flavor Street, Food City, Country</p>
          <p className="text-gray-700 mt-2">+123 456 7890</p>
          <p className="text-gray-700 mt-2">info@foodie.com</p>
        </div>

        {/* Newsletter / Subscribe */}
        <div>
          <h3 className="text-xl font-semibold text-orange-600 mb-4">
            Newsletter
          </h3>
          <p className="text-gray-700 mb-4">
            Subscribe to get the latest updates and offers.
          </p>
          <div className="flex shadow rounded-lg overflow-hidden">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <button className="bg-orange-500 px-6 py-3 text-white font-bold hover:bg-orange-600 transition-colors duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="mt-12 border-t border-gray-300 pt-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Taste Nest. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
