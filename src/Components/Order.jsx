import { useCart } from "../Components/CartContext";
import { motion } from "framer-motion";

const Order = () => {
  const { cartItems = [], removeFromCart, clearCart } = useCart();

  // Safely calculate total
  const total = (cartItems || []).reduce(
    (sum, item) => sum + (item.price || 0) * (item.qty || 1),
    0
  );

  if (!cartItems || cartItems.length === 0) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-100 via-white to-gray-100">
        <div className="text-center p-10 rounded-3xl bg-white/20 backdrop-blur-md shadow-lg">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Your Cart is Empty
          </h2>
          <p className="text-gray-600">
            Add some delicious meals to get started!
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen py-16 px-6 bg-gradient-to-r from-gray-100 via-white to-gray-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center mb-10">
          Your <span className="text-orange-600">Order</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cartItems.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white/20 backdrop-blur-md border border-white/30 rounded-3xl overflow-hidden shadow-lg cursor-pointer transform transition hover:scale-105 hover:shadow-2xl hover:shadow-orange-400/40"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover rounded-t-3xl"
              />
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  {item.name}
                </h3>
                <p className="text-gray-700 text-sm">{item.description}</p>
                <p className="text-orange-600 font-bold text-lg">
                  ${item.price} x {item.qty || 1} = $
                  {(item.price * (item.qty || 1)).toFixed(2)}
                </p>
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 15px rgba(255,165,0,0.6)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => removeFromCart(item.id)}
                  className="w-full mt-2 px-4 py-2 bg-red-500 text-white font-medium rounded-xl shadow-md hover:bg-red-600 transition"
                >
                  Remove
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Total & Checkout */}
        <div className="mt-12 flex flex-col md:flex-row items-center justify-between bg-white/20 backdrop-blur-md p-6 rounded-3xl shadow-lg border border-white/30">
          <h3 className="text-2xl font-bold text-gray-900">
            Total: <span className="text-orange-600">${total.toFixed(2)}</span>
          </h3>
          <div className="flex gap-4 mt-4 md:mt-0">
            <button
              onClick={clearCart}
              className="px-6 py-3 bg-red-500 text-white rounded-xl font-semibold hover:bg-red-600 transition shadow-md"
            >
              Clear Cart
            </button>
            <button className="px-6 py-3 bg-orange-600 text-white rounded-xl font-semibold hover:bg-orange-700 transition shadow-md">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Order;
