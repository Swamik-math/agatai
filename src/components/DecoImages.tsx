import { motion, AnimatePresence } from "framer-motion";
import decoPineapple from "../assets/deco-pineapple.png";
import decoTomatoes from "../assets/deco-tomatoes.png";
import decoCheese from "../assets/deco-cheese.png";
import decoVeggies from "../assets/deco-veggies.png";

interface DecoImagesProps {
  currentIndex: number;
}

const decoConfigs = [
  { left: decoPineapple, right: decoPineapple },
  { left: decoTomatoes, right: decoVeggies },
  { left: decoCheese, right: decoCheese },
  { left: decoTomatoes, right: decoCheese },
  { left: decoTomatoes, right: decoVeggies },
  { left: decoVeggies, right: decoVeggies },
  { left: decoTomatoes, right: decoVeggies },
];

const DecoImages = ({ currentIndex }: DecoImagesProps) => {
  const deco = decoConfigs[currentIndex % decoConfigs.length];

  return (
    <>
      {/* TOP LEFT */}
      <AnimatePresence mode="wait">
        <motion.img
          key={`left-${currentIndex}`}
          src={deco.left}
          className="deco-image top-6 left-6 w-32 md:w-44"
          initial={{ opacity: 0, x: -40, y: -20 }}
          animate={{ opacity: 0.85, x: 0, y: 0 }}
          exit={{ opacity: 0, x: -40, y: -20 }}
          transition={{ duration: 0.6 }}
        />
      </AnimatePresence>

      {/* TOP RIGHT */}
      <AnimatePresence mode="wait">
        <motion.img
          key={`right-${currentIndex}`}
          src={deco.right}
          className="deco-image top-6 right-6 w-32 md:w-44"
          initial={{ opacity: 0, x: 40, y: -20 }}
          animate={{ opacity: 0.85, x: 0, y: 0 }}
          exit={{ opacity: 0, x: 40, y: -20 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        />
      </AnimatePresence>
    </>
  );
};

export default DecoImages;
