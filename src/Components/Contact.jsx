const Contact = () => {
  return (
    <section id="contact" className="py-16 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-3">
            Get in <span className="text-orange-600">Touch</span>
          </h2>
          <p className="text-gray-600">
            Have a question or want to place a custom order? Send us a message
            and we’ll get back to you soon!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <form className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">
                Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                placeholder="you@example.com"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">
                Message
              </label>
              <textarea
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                placeholder="Your message..."
                rows={5}
              />
            </div>
            <button
              type="submit"
              className="mt-4 w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-lg transition-colors duration-300"
            >
              Send Message
            </button>
          </form>

          {/* Contact Info */}
          <div className="flex flex-col justify-center space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2 text-orange-600">
                Phone
              </h3>
              <p className="text-gray-700">+234 706 115 8745</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-orange-600">
                Email
              </h3>
              <p className="text-gray-700">info@Tastenest.com</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-orange-600">
                Address
              </h3>
              <p className="text-gray-700">123 Taste Nest Street Nigeria.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
