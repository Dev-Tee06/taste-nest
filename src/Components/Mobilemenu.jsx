import { useCart } from "../Components/CartContext";
import { Link } from "react-router-dom";

export const Mobilemenu = ({ menuOpen, setMenuOpen }) => {
  const { cartCount } = useCart();

  const navItems = [
    { label: "Home", to: "/" },
    { label: "Menu", to: "/menu" },
    { label: "Blog", to: "/blog" },
    { label: "Order", to: "/order" },
    { label: "Contact", to: "/#contact" },
  ];

  return (
    <div
      className={`fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.95)] z-40 flex flex-col items-center justify-center transition-all duration-300 ${
        menuOpen ? "h-screen opacity-100" : "h-0 opacity-0"
      }`}
    >
      {menuOpen && (
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-6 right-6 text-white text-4xl"
        >
          ×
        </button>
      )}

      {/* Links */}
      {navItems.map((item, i) => (
        <Link
          key={item.to}
          to={item.to}
          onClick={() => setMenuOpen(false)}
          className="text-2xl font-semibold text-white my-4 hover:text-orange-500 transition-colors duration-300"
          style={{ transitionDelay: `${i * 100}ms` }}
        >
          {item.label}
          {item.label === "Order" && cartCount > 0 && (
            <span className="ml-2 text-orange-400">({cartCount})</span>
          )}
        </Link>
      ))}
    </div>
  );
};
