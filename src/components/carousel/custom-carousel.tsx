import * as React from "react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import RoutesAnimations from "../../animations/routes";

type Props = {
  carouselItems: any[];
  durationMiliseconds: number;
};

export const CustomCarousel = (props: Props) => {
  const [selectedItem, setSelectedItem] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedItem((selectedItem) =>
        selectedItem < props.carouselItems.length - 1 ? selectedItem + 1 : 0
      );
    }, props.durationMiliseconds);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <AnimatePresence initial={false}>
        <motion.div
          key={selectedItem}
          variants={RoutesAnimations.carouselVariant}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {props.carouselItems[selectedItem]}
        </motion.div>
      </AnimatePresence>
    </>
  );
};
