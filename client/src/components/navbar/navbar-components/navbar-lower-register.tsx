import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import NavBarAnimations from "../../../animations/navbar";

function NavbarLowerRegisterComponent(props: any) {
  const { t } = useTranslation();
  return (
    <>
      <div className="navbar-register">
        <motion.button
          variants={NavBarAnimations.registerButtonRegister}
          whileHover="hover"
          whileTap="visible"
        >
          {t("navigation:register")}
        </motion.button>
      </div>
    </>
  );
}

export default NavbarLowerRegisterComponent;
