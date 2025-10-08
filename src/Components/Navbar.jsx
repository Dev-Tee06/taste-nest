import { useCart } from "../Components/CartContext";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  const { cartCount } = useCart();

  return (
    <nav className="fixed top-0 w-full z-40 bg-[#f0f0f0] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-10xl mx-auto px-7">
        <div className="flex justify-between items-center h-16">
          {/* Logo (Left) */}
          <a href="#home" className="font-mono text-3xl font-bold">
            <span className="text-black-600 italic">
              TASTE
              <span className="font-bold text-orange-600 italic">NEST</span>
            </span>
          </a>

          {/* Menu + Cart (Right) */}
          <div className="flex items-center space-x-8">
            {/* Menu links */}
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#home"
                className="text-orange-600 hover:text-gray font-semibold text-lg hover:text-[#CC5500] cursor-pointer py-2 hover:border-b-5 hover:border-[#CC5500] transition-all duration-300"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-orange-600 hover:text-gray font-semibold text-lg hover:text-[#CC5500] cursor-pointer py-2 hover:border-b-5 hover:border-[#CC5500] transition-all duration-300"
              >
                About
              </a>
              <a
                href="#menu"
                className="text-orange-600 hover:text-gray font-semibold text-lg hover:text-[#CC5500] cursor-pointer py-2 hover:border-b-5 hover:border-[#CC5500] transition-all duration-300"
              >
                Menu
              </a>
              <a
                href="#contact"
                className="text-white bg-orange-600 rounded-[50px] py-2 px-4 transition-all duration-300"
              >
                Contact
              </a>
            </div>

            {/* Cart Icon */}
            <div className="relative cursor-pointer text-3xl text-cyan-700">
              🛒
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-3 bg-red-600 text-white text-xs font-bold rounded-full px-2">
                  {cartCount}
                </span>
              )}
            </div>

            {/* Mobile Menu Toggle */}
            <div
              className="w-7 h-7 flex items-center justify-center cursor-pointer md:hidden"
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              {menuOpen ? (
                <span className="text-3xl text-black">&times;</span>
              ) : (
                <span className="text-3xl text-black">&#9776;</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
