import React from "react";
import { motion } from "framer-motion";
import RoutesAnimations from "../animations/routes";
import { CarouselWrapper } from "./carousel/carousel-wrapper";
import { SearchFormWrapper } from "./home/search-form/search-form-wrapper";
import { PropertyService } from "./home/property-service/property-service";
function Home(props: any) {
  return (
    <motion.div
      variants={RoutesAnimations.routeVariant}
      initial="hidden"
      animate="visible"
      exit="exit"
      id="home"
    >
      <CarouselWrapper />
      <SearchFormWrapper />
      <PropertyService />
    </motion.div>
  );
}

export default Home;
