import React from "react";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useWindowSize } from "../../../utils/window-utils";
import NavBarAnimations from "../../../animations/navbar";
import { motion } from "framer-motion";

function NavbarNeedSupport(props: any) {
  const { t } = useTranslation();
  const size = useWindowSize();
  return (
    <>
      <span className="navbar-need-support-phone">
        <motion.a
          href="tel:1-8X0-777-8X88"
          variants={NavBarAnimations.marineBlueOverPain}
          whileHover="hover"
        >
          <FontAwesomeIcon icon={faPhoneAlt} />
          {size.width > 990 && (
            <>
              <span id="navbar-need-support-holder">
                {t("navigation:NeedSupport")}
              </span>
              <span id="navbar-phone-holder">1-8X0-777-8X88</span>
            </>
          )}
        </motion.a>
      </span>
      <span className="navbar-need-support-mail">
        <motion.a
          href="mailto:info@alphahotelhr.com"
          variants={NavBarAnimations.marineBlueOverPain}
          whileHover="hover"
        >
          <FontAwesomeIcon icon={faEnvelope} />
          {size.width > 990 && (
            <>
              <span id="navbar-email-holder">info@alphahotelhr.com</span>
            </>
          )}
        </motion.a>
      </span>
    </>
  );
}

export default NavbarNeedSupport;
