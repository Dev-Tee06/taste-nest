import { useCart } from "../Components/CartContext";
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
    description: "This is our very tasty Pizza to cater for your cravings",
    price: 12,
  },
  {
    id: 2,
    image: burger,
    name: "Burger",
    description: "Specially made Burger to cater for your cravings",
    price: 8,
  },
  {
    id: 3,
    image: pasta,
    name: "Pasta",
    description: "Delicious Pasta Recipe to cater for your cravings",
    price: 10,
  },
  {
    id: 4,
    image: noodles,
    name: "Noodles",
    description: "Highly demanded Noodles just the way you like it",
    price: 5,
  },
  {
    id: 5,
    image: rice,
    name: "Rice",
    description: "Special rice Prepared using the best ingredients",
    price: 15,
  },
  {
    id: 6,
    image: suya,
    name: "Suya",
    description: "Custom made Suya with our special spice",
    price: 10,
  },
  {
    id: 7,
    image: sharwama,
    name: "Sharwama",
    description: "Award winning Sharwama prepared just for you",
    price: 11,
  },
  {
    id: 8,
    image: chips,
    name: "Chips",
    description: "Best chips in town tested and trusted by our customers",
    price: 13,
  },
  {
    id: 9,
    image: bread,
    name: "Bread",
    description: "Signature Bread to satisfy your cravings",
    price: 20,
  },
];

const Menu = () => {
  const { addToCart } = useCart();

  return (
    <section id="menu" className="p-8">
      <h2 className="text-4xl text-center font-bold mb-6">
        Our <span className="text-orange-600">Menu</span>
      </h2>
      <p className="text-center text-gray-600 text-lg mb-5">
        Our menu is a celebration of flavor and artistry, where every dish tells
        a story of passion, freshness, and exquisite culinary mastery.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {foods.map((food) => (
          <div
            key={food.id}
            className="cursor-pointer rounded-lg overflow-hidden"
          >
            {/* Card with hover effects */}
            <div
              className="p-4 border border-orange-600 rounded-lg shadow-lg transform
                transition-all duration-1000 ease-in-out
                bg-white text-gray-800
                hover:scale-105 hover:-translate-y-1 active:scale-105 active:-translate-y-1
                hover:shadow-2xl pl-5 "
            >
              <h2 className="text-lg font-bold mb-3">{food.name}</h2>
              <img
                src={food.image}
                alt={food.name}
                className="rounded-2xl mb-4"
              />
              <p className="font-semibold">{food.description}</p>
              <p className="mt-3 font-bold text-orange-600 transition-colors duration-1000 ease-in-out">
                ${food.price}
              </p>
              <button
                onClick={() => addToCart(food)}
                className="mt-3 px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-500 transition-colors duration-500"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menu;
