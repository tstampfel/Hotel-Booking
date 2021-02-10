import React from "react";
import { motion } from "framer-motion";
import RoutesAnimations from "../animations/routes";

function About(props: any) {
  return (
    <motion.div
      variants={RoutesAnimations.routeVariant}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      About
    </motion.div>
  );
}

export default About;
