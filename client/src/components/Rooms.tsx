import React from "react";
import { motion } from "framer-motion";
import RoutesAnimations from "../animations/routes";
import { useTranslation } from "react-i18next";

function Rooms(props: any) {
  const { t } = useTranslation();
  return (
    <motion.div
      variants={RoutesAnimations.routeVariant}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {t("common:Rooms")}
    </motion.div>
  );
}

export default Rooms;
