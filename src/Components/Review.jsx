import { useState, useEffect } from "react";
import { FaStar, FaRegStar } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const reviews = [
  {
    name: "John Doe",
    rating: 5,
    comment: "Absolutely loved the food! Delicious and fresh every time.",
    avatar: "https://i.pravatar.cc/100?img=1",
  },
  {
    name: "Jane Smith",
    rating: 4,
    comment: "Great experience overall. Friendly staff and tasty meals.",
    avatar: "https://i.pravatar.cc/100?img=2",
  },
  {
    name: "Michael Johnson",
    rating: 5,
    comment:
      "Highly recommend Taste Nest! Always consistent and fast delivery.",
    avatar: "https://i.pravatar.cc/100?img=3",
  },
];

const Review = () => {
  const [current, setCurrent] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToReview = (index) => setCurrent(index);

  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      {/* Header */}
      <header className="bg-orange-500 text-white py-16 text-center relative z-10">
        <h1 className="text-4xl font-bold mb-4">Customer Reviews</h1>
        <p className="text-lg max-w-xl mx-auto">
          See what our happy customers are saying about Taste Nest.
        </p>
      </header>

      {/* Carousel */}
      <section className="max-w-3xl mx-auto py-16 px-4 relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="bg-white/30 backdrop-blur-md p-8 rounded-3xl shadow-2xl text-center flex flex-col items-center space-y-4 cursor-pointer"
          >
            <img
              src={reviews[current].avatar}
              alt={reviews[current].name}
              className="w-20 h-20 rounded-full mb-4 border-2 border-orange-500"
            />
            <h3 className="text-xl font-bold text-gray-900">
              {reviews[current].name}
            </h3>
            <div className="flex text-yellow-400 justify-center mt-1 mb-2">
              {Array.from({ length: 5 }, (_, i) =>
                i < reviews[current].rating ? (
                  <FaStar key={i} />
                ) : (
                  <FaRegStar key={i} />
                )
              )}
            </div>
            <p className="text-gray-700 text-sm">{reviews[current].comment}</p>
          </motion.div>
        </AnimatePresence>

        {/* Dots */}
        <div className="flex justify-center mt-6 space-x-3">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => goToReview(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                current === index ? "bg-orange-500 scale-125" : "bg-gray-300"
              }`}
            ></button>
          ))}
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="bg-orange-100 py-16 text-center mt-12 relative z-10">
        <h2 className="text-3xl font-bold mb-4">Share Your Experience</h2>
        <p className="text-gray-700 mb-6 max-w-md mx-auto">
          Loved our food or service? Leave a review and let others know!
        </p>
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-3 rounded-full transition-colors duration-300 shadow-lg hover:scale-105">
          Write a Review
        </button>
      </section>
    </div>
  );
};

export default Review;
