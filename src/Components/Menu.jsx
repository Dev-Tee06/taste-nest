import { useState } from "react";
import { useCart } from "../Components/CartContext";
import { motion } from "framer-motion";

import bread from "../assets/bread.jpeg";
import burger from "../assets/burger.jpeg";
import chips from "../assets/chips.jpeg";
import noodles from "../assets/noodles.jpeg";
import pasta from "../assets/pasta.jpeg";
import pizza1 from "../assets/pizza1.jpeg";
import rice from "../assets/rice.jpeg";
import suya from "../assets/suya.jpeg";
import sharwama from "../assets/sharwama.jpeg";

const foods = [
  {
    id: 1,
    image: pizza1,
    name: "Pizza",
    category: "Main",
    description: "Tasty pizza to satisfy your cravings.",
    price: 12,
    rating: 5,
    ingredients: ["Cheese", "Tomato Sauce", "Pepperoni", "Basil"],
  },
  {
    id: 2,
    image: burger,
    name: "Burger",
    category: "Fast Food",
    description: "Specially crafted burger for flavor lovers.",
    price: 8,
    rating: 4,
    ingredients: ["Beef Patty", "Lettuce", "Cheese", "Tomato"],
  },
  {
    id: 3,
    image: pasta,
    name: "Pasta",
    category: "Main",
    description: "Delicious pasta recipe with fresh ingredients.",
    price: 10,
    rating: 5,
    ingredients: ["Spaghetti", "Olive Oil", "Parmesan", "Basil"],
  },
  {
    id: 4,
    image: noodles,
    name: "Noodles",
    category: "Fast Food",
    description: "Highly demanded noodles made your way.",
    price: 5,
    rating: 4,
    ingredients: ["Egg Noodles", "Soy Sauce", "Vegetables"],
  },
  {
    id: 5,
    image: rice,
    name: "Rice",
    category: "Main",
    description: "Premium rice dish with top-quality ingredients.",
    price: 15,
    rating: 5,
    ingredients: ["Rice", "Spices", "Chicken"],
  },
  {
    id: 6,
    image: suya,
    name: "Suya",
    category: "Snacks",
    description: "Custom spiced suya made for you.",
    price: 10,
    rating: 5,
    ingredients: ["Beef", "Spices", "Peanuts"],
  },
  {
    id: 7,
    image: sharwama,
    name: "Sharwama",
    category: "Fast Food",
    description: "Award-winning sharwama served fresh.",
    price: 11,
    rating: 5,
    ingredients: ["Chicken", "Wrap", "Sauce", "Veggies"],
  },
  {
    id: 8,
    image: chips,
    name: "Chips",
    category: "Snacks",
    description: "Crispy, golden chips loved by all.",
    price: 13,
    rating: 4,
    ingredients: ["Potatoes", "Salt", "Oil"],
  },
  {
    id: 9,
    image: bread,
    name: "Bread",
    category: "Bakery",
    description: "Signature bread baked to perfection.",
    price: 20,
    rating: 5,
    ingredients: ["Flour", "Yeast", "Butter", "Sugar"],
  },
];

const categories = ["All", "Fast Food", "Main", "Snacks", "Bakery"];

const Menu = () => {
  const { addToCart } = useCart();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [quickViewFood, setQuickViewFood] = useState(null);

  const filteredFoods = foods.filter(
    (food) =>
      (selectedCategory === "All" || food.category === selectedCategory) &&
      food.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section
      id="menu"
      className="py-16 bg-gradient-to-b from-white via-gray-100 to-gray-200 relative overflow-hidden"
    >
      {/* Animated background blobs */}
      <div className="absolute -top-48 -left-48 w-[400px] h-[400px] bg-orange-200 opacity-20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-48 -right-48 w-[500px] h-[500px] bg-pink-200 opacity-20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl text-center font-extrabold mb-4">
          Our <span className="text-orange-600">Menu</span>
        </h2>
        <p className="text-center text-gray-600 text-lg mb-8">
          Explore our delicious offerings. Filter by category or search your
          favorite dish!
        </p>

        {/* Category Filters */}
        <div className="flex justify-center gap-4 mb-8 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full font-medium transition ${
                selectedCategory === cat
                  ? "bg-orange-600 text-white shadow-lg"
                  : "bg-white/30 backdrop-blur-lg text-gray-800 hover:bg-orange-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="flex justify-center mb-12">
          <input
            type="text"
            placeholder="Search for a dish..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-4 py-2 rounded-full w-full max-w-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>

        {/* Food Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filteredFoods.map((food, i) => (
            <motion.div
              key={food.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative cursor-pointer transform transition-all rounded-3xl
                         bg-white/20 backdrop-blur-lg border border-white/20 shadow-lg
                         hover:scale-105 hover:-translate-y-3 hover:shadow-[0_0_30px_rgba(255,165,0,0.6)]
                         before:absolute before:inset-0 before:-z-10 before:rounded-3xl before:bg-gradient-to-tr
                         before:from-orange-400/20 before:via-pink-400/20 before:to-purple-500/20
                         before:blur-[60px] before:transition-all before:duration-500
                         hover:before:blur-[80px] hover:before:opacity-100"
            >
              <div className="relative group">
                <img
                  src={food.image}
                  alt={food.name}
                  className="w-full h-48 object-cover rounded-t-3xl group-hover:scale-105 transition-transform duration-500"
                />
                <div
                  onClick={() => setQuickViewFood(food)}
                  className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition flex items-center justify-center rounded-t-3xl opacity-0 group-hover:opacity-100 cursor-pointer"
                >
                  <p className="text-white font-semibold px-4 text-center text-sm">
                    Quick View
                  </p>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  {food.name}
                </h3>
                {/* Rating */}
                <div className="flex text-yellow-400 gap-1">
                  {Array.from({ length: 5 }, (_, i) =>
                    i < food.rating ? (
                      <span key={i}>★</span>
                    ) : (
                      <span key={i}>☆</span>
                    )
                  )}
                </div>
                <p className="text-orange-600 font-bold text-lg">
                  ${food.price}
                </p>
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 20px rgba(255,165,0,0.7)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => addToCart(food)}
                  className="w-full mt-2 px-4 py-2 bg-orange-600 text-white font-medium rounded-xl shadow-md hover:bg-orange-500 transition"
                >
                  Add to Cart
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Quick View Modal */}
      {quickViewFood && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-white rounded-3xl max-w-lg w-full p-6 relative shadow-2xl"
          >
            <button
              onClick={() => setQuickViewFood(null)}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 font-bold text-xl"
            >
              ✕
            </button>
            <img
              src={quickViewFood.image}
              alt={quickViewFood.name}
              className="w-full h-64 object-cover rounded-2xl mb-4"
            />
            <h2 className="text-2xl font-bold mb-2">{quickViewFood.name}</h2>
            <div className="flex text-yellow-400 gap-1 mb-2">
              {Array.from({ length: 5 }, (_, i) =>
                i < quickViewFood.rating ? (
                  <span key={i}>★</span>
                ) : (
                  <span key={i}>☆</span>
                )
              )}
            </div>
            <p className="text-gray-700 mb-4">{quickViewFood.description}</p>
            <h3 className="font-semibold mb-2">Ingredients:</h3>
            <ul className="list-disc list-inside mb-4">
              {quickViewFood.ingredients.map((ing, i) => (
                <li key={i}>{ing}</li>
              ))}
            </ul>
            <p className="text-orange-600 font-bold text-xl mb-4">
              ${quickViewFood.price}
            </p>
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(255,165,0,0.7)",
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                addToCart(quickViewFood);
                setQuickViewFood(null);
              }}
              className="w-full px-4 py-2 bg-orange-600 text-white font-medium rounded-xl shadow-md hover:bg-orange-500 transition"
            >
              Add to Cart
            </motion.button>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default Menu;
