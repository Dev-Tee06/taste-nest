import { useCart } from "../Components/CartContext";

export const Mobilemenu = ({ menuOpen, setMenuOpen }) => {
  const { cartCount } = useCart();

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
      {[
        { label: "Home", href: "#home" },
        { label: "About", href: "#about" },
        { label: "Menu", href: "#menu" },
        { label: "Contact", href: "#contact" },
        { label: `Cart(${cartCount})`, href: "#order" },
      ].map((item, i) => (
        <a
          key={item.href}
          href={item.href}
          onClick={() => setMenuOpen(false)}
          className="text-2xl font-semibold text-white my-4"
          style={{ transitionDelay: `${i * 100}ms` }}
        >
          {item.label}
        </a>
      ))}
    </div>
  );
};
