import "../App.css";
import { motion } from "framer-motion";
const Questions = ({ question, answer, isActive, onClick, darkMode }) => {
  return (
    <div
      className={`faq-section pb-3 mb-4 max-md:pb-1 max-md:mb-2 ${
        darkMode ? "border-white" : "border-black"
      } max-md:w-full transition duration-300 ease-in-out`}
    >
      <div
        onClick={onClick}
        aria-expanded={isActive}
        role="button"
        className={`flex items-center justify-between pb-3 max-md:pb-1 cursor-pointer`}
      >
        <h2 className={`font-${isActive ? `bold` : `normal`}`}>{question}</h2>
        <img
          src="/images/icon-arrow-down.svg"
          alt="arrow"
          className={`rotate-${isActive ? "180" : "0"}`}
        />
      </div>
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isActive ? 1 : 0,
          height: isActive ? "auto" : 0,
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="overflow-hidden"
      >
        <p>{answer}</p>
      </motion.div>
    </div>
  );
};
export default Questions;
