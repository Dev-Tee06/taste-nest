import { useState } from "react";
import { motion } from "framer-motion";
import cook1 from "../assets/cook1.jpg";
import cook2 from "../assets/cook2.jpg";
import cook3 from "../assets/cook3.jpg";

const blogPosts = [
  {
    id: 1,
    title: "5 Secret Ingredients to Make Pizza Taste Amazing",
    snippet:
      "Discover the hidden ingredients top chefs use to elevate your pizza experience at home.",
    image: cook1,
    date: "Dec 20, 2025",
    author: "Chef Adeyinka",
    category: "Recipes",
    readTime: "5 min",
    link: "#",
    featured: true,
  },
  {
    id: 2,
    title: "The Art of Perfect Pasta",
    snippet:
      "Learn how to cook pasta al dente every time and create sauces that make every bite memorable.",
    image: cook2,
    date: "Dec 15, 2025",
    author: "Chef Tosin",
    category: "Tips",
    readTime: "7 min",
    link: "#",
    featured: true,
  },
  {
    id: 3,
    title: "Top 10 Street Foods You Must Try",
    snippet:
      "From suya to sharwama, explore the must-try street foods that excite every foodie’s palate.",
    image: cook3,
    date: "Dec 10, 2025",
    author: "Chef Adeyinka",
    category: "Street Food",
    readTime: "6 min",
    link: "#",
    featured: false,
  },
];

const categories = ["All", "Recipes", "Tips", "Street Food"];

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [carouselIndex, setCarouselIndex] = useState(0);

  const filteredPosts = blogPosts.filter(
    (post) =>
      (selectedCategory === "All" || post.category === selectedCategory) &&
      post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const featuredPosts = blogPosts.filter((post) => post.featured);

  // Auto-slide featured carousel
  setTimeout(() => {
    setCarouselIndex((prev) => (prev + 1) % featuredPosts.length);
  }, 5000);

  return (
    <section
      id="blog"
      className="py-16 bg-gradient-to-b from-gray-50 via-gray-100 to-gray-200 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-3">
            Our <span className="text-orange-600">Blog</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Stay updated with our latest recipes, tips, and culinary secrets.
          </p>
        </div>

        {/* Featured Carousel */}
        <div className="relative mb-12 overflow-hidden rounded-3xl shadow-xl">
          {featuredPosts.map((post, i) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, x: 50 }}
              animate={{
                opacity: i === carouselIndex ? 1 : 0,
                x: i === carouselIndex ? 0 : 50,
              }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0 w-full h-full"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-72 sm:h-96 object-cover rounded-3xl"
              />
              <div className="absolute inset-0 bg-black/30 rounded-3xl flex flex-col justify-end p-6 text-white">
                <h3 className="text-2xl sm:text-3xl font-bold mb-2">
                  {post.title}
                </h3>
                <p className="text-sm sm:text-base">{post.snippet}</p>
                <a
                  href={post.link}
                  className="inline-block mt-3 px-4 py-2 bg-orange-600 rounded-xl font-medium hover:bg-orange-500 transition"
                >
                  Read More
                </a>
              </div>
            </motion.div>
          ))}
          {/* Carousel indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {featuredPosts.map((_, i) => (
              <button
                key={i}
                onClick={() => setCarouselIndex(i)}
                className={`w-3 h-3 rounded-full ${
                  carouselIndex === i ? "bg-orange-600" : "bg-white/60"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex justify-center gap-4 mb-8 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full font-medium transition ${
                selectedCategory === cat
                  ? "bg-orange-600 text-white shadow-lg"
                  : "bg-white/30 backdrop-blur-lg text-gray-800 hover:bg-orange-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Bar */}
        <div className="flex justify-center mb-12">
          <input
            type="text"
            placeholder="Search blog posts..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-4 py-2 rounded-full w-full max-w-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, i) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative cursor-pointer transform transition-all rounded-3xl
                         bg-white/20 backdrop-blur-lg border border-white/20 shadow-lg
                         hover:scale-105 hover:-translate-y-3 hover:shadow-[0_0_25px_rgba(255,165,0,0.6)]
                         before:absolute before:inset-0 before:-z-10 before:rounded-3xl before:bg-gradient-to-tr
                         before:from-orange-400/20 before:via-pink-400/20 before:to-purple-500/20
                         before:blur-[60px] before:transition-all before:duration-500
                         hover:before:blur-[80px] hover:before:opacity-100"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover rounded-t-3xl"
              />
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-semibold text-gray-900 hover:text-orange-500 transition-colors duration-300">
                  {post.title}
                </h3>
                <p className="text-gray-700 text-sm">{post.snippet}</p>
                <div className="flex justify-between items-center text-gray-500 text-xs mt-2">
                  <span>{post.date}</span>
                  <span>by {post.author}</span>
                </div>
                <div className="flex justify-between items-center text-gray-500 text-xs mt-1">
                  <span>Category: {post.category}</span>
                  <span>{post.readTime} read</span>
                </div>
                <a
                  href={post.link}
                  className="inline-block mt-3 px-4 py-2 bg-orange-600 text-white rounded-xl font-medium hover:shadow-[0_0_15px_rgba(255,165,0,0.5)] hover:bg-orange-500 transition-all duration-300"
                >
                  Read More
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Share Your Culinary Secrets
          </h2>
          <p className="text-gray-700 mb-6 max-w-md mx-auto">
            Have a recipe or tip to share? Join our blog community and inspire
            others!
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-3 rounded-full transition-colors duration-300">
            Submit Your Post
          </button>
        </div>
      </div>
    </section>
  );
}
