import { FaShippingFast, FaCreditCard } from "react-icons/fa";
import { GiHotMeal } from "react-icons/gi";
import food1 from "../assets/food1.jpeg";

function About() {
  return (
    <section id="about" className="py-16 bg-gray-200 mt-10">
      <h2 className="text-4xl text-center font-bold text-gray-800 mb-10">
        About <span className="text-orange-600">US</span>
      </h2>
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-black-600 mb-6 text-lg">
            At <span className="font-semibold">Taste Nest</span> ,we don't just
            prepare meals- we craft experiences. Our chefs use only the freshest
            ingredients to create delicious dishes made with love. Whether
            you're dining in or ordering online,our mission is to bring
            flavor,freshness and joy straight to your table
          </p>

          <ul className="space-y-3">
            <li className="flex items-center gap-3">
              <FaShippingFast className="text-orange-600 w-6 h-6" />
              <span>Super Fast Delivery</span>
            </li>
            <li className="flex items-center gap-3">
              <GiHotMeal className="text-orange-600 w-6 h-6" />
              <span>Wide Variety of Meals</span>
            </li>
            <li className="flex items-center gap-3">
              <FaCreditCard className="text-orange-600 w-6 h-6" />
              <span>Secure & Easy Payment</span>
            </li>
          </ul>

          <button className="mt-6 bg-orange-600 text-white px-6 py-3 rounded-xl hover:bg-orange-700 transition">
            Order Now
          </button>
        </div>
        {/* Image */}
        <div>
          <img src={food1} className="rounded-2xl shadow-lg" />
        </div>
      </div>
    </section>
  );
}

export default About;
