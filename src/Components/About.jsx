import { FaShippingFast, FaCreditCard } from "react-icons/fa";
import { GiHotMeal } from "react-icons/gi";
import { motion } from "framer-motion";
import food1 from "../assets/food1.jpeg";

function About() {
  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-br from-white via-gray-100 to-gray-200 relative overflow-hidden"
    >
      {/* Floating Background Shapes */}
      <div className="absolute -top-40 -left-40 w-[400px] h-[400px] bg-orange-200 opacity-20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-cyan-200 opacity-20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/3 w-[300px] h-[300px] bg-pink-200 opacity-10 rounded-full blur-3xl pointer-events-none"></div>

      {/* Heading */}
      <h2 className="text-4xl md:text-5xl text-center font-extrabold text-gray-900 mb-12">
        About <span className="text-orange-600">US</span>
      </h2>

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Text Section */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-gray-700 text-lg leading-relaxed">
            At <span className="font-semibold text-gray-900">Taste Nest</span>,
            we don’t just prepare meals—we craft experiences. Our chefs use only
            the freshest ingredients to create dishes made with love. Whether
            dining in or ordering online, our mission is to bring flavor,
            freshness, and joy straight to your table.
          </p>

          {/* Features with Glassmorphism */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
            <motion.div
              className="p-5 rounded-2xl bg-white/30 backdrop-blur-md shadow-lg flex flex-col items-center text-center cursor-pointer hover:scale-105 transition-transform duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <FaShippingFast className="text-orange-600 w-10 h-10 mb-3" />
              <h4 className="font-semibold text-gray-900 mb-1">
                Fast Delivery
              </h4>
              <p className="text-gray-700 text-sm">
                Super quick delivery, always on time.
              </p>
            </motion.div>

            <motion.div
              className="p-5 rounded-2xl bg-white/30 backdrop-blur-md shadow-lg flex flex-col items-center text-center cursor-pointer hover:scale-105 transition-transform duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <GiHotMeal className="text-orange-600 w-10 h-10 mb-3" />
              <h4 className="font-semibold text-gray-900 mb-1">
                Variety of Meals
              </h4>
              <p className="text-gray-700 text-sm">
                Wide range of dishes crafted to perfection.
              </p>
            </motion.div>

            <motion.div
              className="p-5 rounded-2xl bg-white/30 backdrop-blur-md shadow-lg flex flex-col items-center text-center cursor-pointer hover:scale-105 transition-transform duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <FaCreditCard className="text-orange-600 w-10 h-10 mb-3" />
              <h4 className="font-semibold text-gray-900 mb-1">
                Secure Payment
              </h4>
              <p className="text-gray-700 text-sm">
                Hassle-free and safe transactions every time.
              </p>
            </motion.div>
          </div>

          {/* Stats */}
          <div className="flex gap-6 mt-10 justify-center sm:justify-start">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-3xl font-extrabold text-orange-600">10k+</h3>
              <p className="text-gray-700 text-sm">Happy Customers</p>
            </motion.div>
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-3xl font-extrabold text-orange-600">15k+</h3>
              <p className="text-gray-700 text-sm">Orders Served</p>
            </motion.div>
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-3xl font-extrabold text-orange-600">50+</h3>
              <p className="text-gray-700 text-sm">Menu Items</p>
            </motion.div>
          </div>

          <motion.button
            className="mt-8 bg-orange-600 text-white px-8 py-3 rounded-2xl font-semibold shadow-lg hover:bg-orange-700 transition transform hover:-translate-y-1 hover:scale-105"
            whileHover={{ scale: 1.05 }}
          >
            Explore Menu
          </motion.button>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="relative flex justify-center md:justify-end"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.img
            src={food1}
            alt="Delicious food"
            className="rounded-3xl shadow-2xl max-w-full"
            whileHover={{ scale: 1.05, rotate: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          />
        </motion.div>
      </div>
    </section>
  );
}

export default About;
