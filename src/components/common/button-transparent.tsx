// @flow
import * as React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import CommonAnimation from "../../animations/common";
type Props = { callBack: () => void };
export function ButtonTransparent(props: Props) {
  const { t } = useTranslation();
  return (
    <motion.button
      variants={CommonAnimation.buttonTranslateVariant}
      whileHover="hover"
      whileTap="visible"
      className="button-transparent"
      onClick={() => props.callBack()}
    >
      {t("home:banner.learnMore")}
    </motion.button>
  );
}
