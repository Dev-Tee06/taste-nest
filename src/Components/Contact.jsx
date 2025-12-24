const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 px-6 bg-gradient-to-b from-white via-gray-100 to-gray-200"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-3">
            Get in <span className="text-orange-600">Touch</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Have a question or want to place a custom order? Send us a message
            and we’ll get back to you soon!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Glassmorphism Form */}
          <form className="p-8 rounded-3xl bg-white/20 backdrop-blur-lg border border-white/20 shadow-lg flex flex-col space-y-5">
            <div>
              <label className="block text-gray-800 font-semibold mb-2">
                Name
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-xl bg-white/30 border border-white/30 placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
              />
            </div>
            <div>
              <label className="block text-gray-800 font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-xl bg-white/30 border border-white/30 placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
              />
            </div>
            <div>
              <label className="block text-gray-800 font-semibold mb-2">
                Message
              </label>
              <textarea
                placeholder="Your message..."
                rows={5}
                className="w-full px-4 py-3 rounded-xl bg-white/30 border border-white/30 placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
              />
            </div>
            <button
              type="submit"
              className="mt-2 py-3 px-6 w-full bg-orange-600 text-white font-bold rounded-xl shadow-md hover:bg-orange-500 hover:shadow-[0_0_20px_rgba(255,165,0,0.6)] transition-all duration-300"
            >
              Send Message
            </button>
          </form>

          {/* Contact Info */}
          <div className="flex flex-col justify-center space-y-8 p-8 rounded-3xl bg-white/20 backdrop-blur-lg border border-white/20 shadow-lg">
            <div>
              <h3 className="text-xl font-semibold mb-2 text-orange-600">
                Phone
              </h3>
              <p className="text-gray-800 text-lg">+234 706 115 8745</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-orange-600">
                Email
              </h3>
              <p className="text-gray-800 text-lg">info@tastenest.com</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-orange-600">
                Address
              </h3>
              <p className="text-gray-800 text-lg">
                123 Taste Nest Street, Nigeria
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
