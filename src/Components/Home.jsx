import pizza from "../assets/pizza.jpeg";
import { motion } from "framer-motion";

function Home() {
  return (
    <main
      id="home"
      className="pt-20 relative bg-gradient-to-br from-white via-[#fefefe] to-[#f0f9ff] overflow-hidden"
    >
      {/* Background subtle shapes */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-orange-200 rounded-full opacity-20 blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-32 -right-32 w-[600px] h-[600px] bg-cyan-200 rounded-full opacity-20 blur-3xl pointer-events-none"></div>

      <div className="container min-h-[650px] flex items-center mt-28 sm:mt-20 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 place-items-center">
          {/* Text Section */}
          <motion.div
            className="space-y-6 order-1 sm:order-1 sm:ml-8 px-4 sm:px-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900">
              Fresh, Fast & Delicious{" "}
              <span className="text-orange-600">
                — Just the way You Love it.
              </span>
            </h1>

            <motion.p
              className="text-gray-700 text-lg sm:text-xl max-w-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Taste Nest delivers gourmet meals crafted with the freshest
              ingredients, designed to satisfy your cravings and elevate your
              dining experience.
            </motion.p>

            <div className="flex flex-wrap gap-4 mt-6">
              <button className="px-6 py-3 bg-orange-600 text-white font-semibold rounded-full shadow-lg hover:bg-orange-700 transition transform hover:scale-105 hover:-translate-y-1">
                Read More
              </button>
              <button className="px-6 py-3 bg-white text-orange-600 font-semibold rounded-full shadow-lg hover:bg-gray-100 transition transform hover:scale-105 hover:-translate-y-1">
                Order Now
              </button>
            </div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            className="order-2 sm:order-2 relative flex justify-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.img
              src={pizza}
              alt="Delicious Pizza"
              className="max-w-[300px] sm:max-w-full h-auto rounded-[80px] shadow-xl"
              whileHover={{ scale: 1.08, rotate: 2 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            />
          </motion.div>
        </div>
      </div>
    </main>
  );
}

export default Home;
