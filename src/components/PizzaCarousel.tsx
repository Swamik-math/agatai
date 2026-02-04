import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { pizzas } from "../data/pizzas";
// import CircularText from "./CircularText";
import DecoImages from "./DecoImages";

const PizzaCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const rotationPerItem = 360 / pizzas.length;
  const rotationAngle = -currentIndex * rotationPerItem;

  const goToNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % pizzas.length);
  }, []);

  const goToPrev = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + pizzas.length) % pizzas.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(goToNext, 5000);
    return () => clearInterval(interval);
  }, [goToNext]);

  const currentPizza = pizzas[currentIndex];

  const imageVariants = {
    enter: (direction: number) => ({
      opacity: 0,
      x: direction > 0 ? 60 : -60,
      scale: 0.9,
    }),
    center: {
      opacity: 1,
      x: 0,
      scale: 1,
    },
    exit: (direction: number) => ({
      opacity: 0,
      x: direction < 0 ? 60 : -60,
      scale: 0.9,
    }),
  };

  const textVariants = {
    enter: { opacity: 0, y: 20 },
    center: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <section className="pizza-carousel">
      {/* Decorative Images */}
      <DecoImages currentIndex={currentIndex} />

      {/* Title & Description */}
      <div className="pizza-text">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPizza.id}
            variants={textVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4 }}
          >
            <h2 className="pizza-title">{currentPizza.title}</h2>
            <p className="pizza-description">{currentPizza.description}</p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Circular Text
      <div className="pizza-circular-text">
        <CircularText
          currentIndex={currentIndex}
          rotationAngle={rotationAngle}
        />
      </div> */}

      {/* Pizza Image */}
      <div className="pizza-image-wrapper">
        <AnimatePresence custom={direction} mode="wait">
          <motion.img
            key={currentPizza.id}
            src={currentPizza.image}
            alt={currentPizza.title}
            custom={direction}
            variants={imageVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.6 }}
            className="pizza-image"
          />
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <button className="nav-button left" onClick={goToPrev}>
        <ChevronLeft size={18} />
      </button>
      <button className="nav-button right" onClick={goToNext}>
        <ChevronRight size={18} />
      </button>
    </section>
  );
};

export default PizzaCarousel;
