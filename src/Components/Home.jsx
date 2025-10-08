import pizza from "../assets/pizza.jpeg";
import Typewriter from "../Components/Typewriter";

function Home() {
  return (
    <main
      id="home"
      className="pt-5 bg-gradient-to-r from-white via-[#f8fafc] to-[#f0f9ff]"
    >
      <div className="container min-h-[620px] flex mt-28 sm:mt-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 place-items-center">
          {/* Text Section */}
          <div className="space-y-5 order-1 sm:order-1 sm:ml-12">
            <h1 className="text-4xl sm:text-5xl font-semibold px-4 animate-fadeInLeft">
              Fresh, Fast & Delicious
              <span className="text-orange-600">
                - Just the way You Love it.
              </span>
            </h1>
            <Typewriter
              lines={[
                "At Taste Nest, we believe food is more than just a meal — it’s an experience.",
                "Every dish is prepared with the freshest ingredients, crafted with care by our chefs.",
                "And delivered with speed, so you can enjoy restaurant-quality flavors from the comfort of your home.",
              ]}
              speed={50} // typing speed (ms per character)
              delay={1000} // delay before moving to next line
            />

            <button className=" ml-5 px-6 py-2 bg-orange-600 text-white rounded-lg shadow-md hover:bg-cyan-600 transition transform hover:scale-105 hover:translate-y-[-3px]">
              Read More
            </button>
          </div>

          {/* Image Section */}
          <div className="order-2 sm:order-2 relative flex justify-center">
            <img
              src={pizza}
              className="max-w-[300px] sm:max-w-full h-auto rounded-[90px] mt-4 transition-transform duration-500 hover:scale-105 float-animation"
              alt="Chef cooking"
            />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
