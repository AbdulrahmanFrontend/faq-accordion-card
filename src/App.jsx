import { useState, useEffect } from "react";
import Questions from "./components/Questions";
import "./App.css";
import faqs from "./data/faqs.json";
function App() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);
  useEffect(() => {
    const handleResize = () => setIsDesktop(innerWidth >= 768);
    addEventListener("resize", handleResize);
    return () => removeEventListener("resize", handleResize);
  }, []);
  return (
    <main
      className={`${
        darkMode ? "text-white" : "text-black"
      } w-screen min-h-screen flex justify-center items-center max-md:py-40`}
      style={
        darkMode
          ? { background: "linear-gradient(to top, gray, brown)" }
          : {
              background:
                "linear-gradient(to top, hsl(273, 75%, 66%), hsl(240, 73%, 65%))",
            }
      }
    >
      <button
        onClick={() => setDarkMode(!darkMode)}
        className={`absolute top-5 right-5 ${
          darkMode ? "bg-white" : "bg-black"
        }`}
      >
        {darkMode ? "☀️" : "🌙"}
      </button>
      <div className="container relative px-4 lg:px-32 xl:px-64">
        <img
          src="/images/illustration-box-desktop.svg"
          loading="lazy"
          alt="illustration box"
          className="max-md:hidden absolute z-10 top-5/12 -left-11 lg:top-2/5 lg:left-5 xl:left-36"
        />
        <div
          className={`${
            darkMode ? "bg-black" : "bg-white"
          } flex justify-end max-md:items-center max-md:justify-center max-md:flex-col rounded-2xl py-10 max-md:pb-5 pr-5 max-md:px-3 lg:pr-10 shadow-lg relative md:overflow-hidden`}
        >
          <div className="images md:w-lg md:h-full absolute md:-left-24 md:-top-3 flex justify-center items-center max-md:w-3/4 max-md:h-64 max-md:-top-1/3">
            <img
              className="w-full"
              loading="lazy"
              src={`/images/illustration-woman-online-${
                isDesktop ? "desktop" : "mobile"
              }.svg`}
              alt="woman"
            />
          </div>
          <div className="md:min-w-1/3 md:max-w-5/12 max-md:mt-24 max-md:w-full">
            <h1 className="font-bold mb-10 max-md:text-center">FAQ</h1>
            {faqs.map((q, index) => (
              <Questions
                key={index}
                question={q.question}
                answer={q.answer}
                isActive={activeIndex === index}
                onClick={() =>
                  setActiveIndex(activeIndex === index ? null : index)
                }
                darkMode={darkMode}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
export default App;
