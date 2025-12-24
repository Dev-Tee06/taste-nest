import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqs = [
  {
    question: "How do I place an order?",
    answer:
      "Simply go to our Menu page, select your desired items, and add them to your cart. Once you’re done, go to the Cart page to review and place your order.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards, debit cards, and mobile payments like Apple Pay and Google Pay.",
  },
  {
    question: "Can I customize my order?",
    answer:
      "Yes! Each menu item allows you to customize ingredients or add special instructions before adding it to your cart.",
  },
  {
    question: "Do you deliver to my location?",
    answer:
      "We currently deliver within our designated delivery zones. Check our delivery map or contact support for details.",
  },
  {
    question: "How long does delivery take?",
    answer:
      "Delivery usually takes 30-45 minutes depending on your location and order size. You’ll receive updates via email or SMS.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-6 bg-gradient-to-b from-gray-50 via-gray-100 to-gray-200 min-h-screen">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-8">
          Frequently Asked <span className="text-orange-600">Questions</span>
        </h2>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Need help? Here are some common questions our customers ask. Still
          unsure? Contact us directly!
        </p>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-white/20 backdrop-blur-md border border-white/20 rounded-2xl p-5 cursor-pointer shadow-lg hover:shadow-2xl transition duration-300"
              onClick={() => toggleFAQ(index)}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg md:text-xl font-semibold text-gray-800">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <FaMinus className="text-orange-600 w-5 h-5" />
                ) : (
                  <FaPlus className="text-orange-600 w-5 h-5" />
                )}
              </div>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.p
                    key="content"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-3 text-gray-700 text-sm md:text-base"
                  >
                    {faq.answer}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
