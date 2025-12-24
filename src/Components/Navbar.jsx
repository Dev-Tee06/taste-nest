import { useCart } from "../Components/CartContext";
import { Link } from "react-router-dom";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  const { cartCount } = useCart();

  const navItemClass =
    "relative text-gray-700 font-medium text-sm tracking-wide transition hover:text-orange-600 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-orange-500 after:transition-all after:duration-300 hover:after:w-full";

  return (
    <nav className="fixed top-0 w-full z-40 bg-white/80 backdrop-blur-lg border-b border-black/5 shadow-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="text-2xl font-extrabold tracking-tight">
            <span className="text-gray-900">
              TASTE
              <span className="text-orange-600">NEST</span>
            </span>
          </Link>

          {/* Right Section */}
          <div className="flex items-center gap-8">
            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-8">
              <Link to="/" className={navItemClass}>
                Home
              </Link>
              <Link to="/menu" className={navItemClass}>
                Menu
              </Link>
              <Link to="/blog" className={navItemClass}>
                Blog
              </Link>
              <Link to="/order" className={navItemClass}>
                Order
              </Link>

              {/* CTA */}
              <Link
                to="/contact"
                className="ml-2 px-5 py-2 rounded-full text-sm font-semibold text-white bg-orange-600 hover:bg-orange-700 transition"
              >
                Contact
              </Link>
            </div>

            {/* Cart */}
            <div className="relative cursor-pointer text-2xl text-gray-800">
              🛒
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-3 flex items-center justify-center min-w-[18px] h-[18px] bg-orange-600 text-white text-[11px] font-bold rounded-full px-1">
                  {cartCount}
                </span>
              )}
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden text-3xl text-gray-900"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label="Toggle Menu"
            >
              {menuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
