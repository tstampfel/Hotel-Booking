// @flow
import * as React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import CommonAnimation from "../../animations/common";
type Props = {
  callBack: () => void;
  type: "button" | "submit" | "reset";
  title: string;
  id: string;
};
export function ButtonCommon(props: Props) {
  const { t } = useTranslation();
  return (
    <motion.button
      id={props.id}
      variants={CommonAnimation.buttonCommonVariant}
      whileHover="hover"
      whileTap="visible"
      className="button-common"
      onClick={() => props.callBack()}
      type={props.type}
    >
      {t(props.title)}
    </motion.button>
  );
}
