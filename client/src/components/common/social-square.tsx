// @flow
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as React from "react";
import { motion } from "framer-motion";
import CommonAnimation from "../../animations/common";
type Props = {
  icon: IconProp;
  backgroundColor: string;
  socialLink: string;
};
export function SocialSquare(props: Props) {
  return (
    <a href={props.socialLink} className="social-square-a">
      <motion.div
        variants={CommonAnimation.socialSquare(props.backgroundColor)}
        whileHover="hover"
        className="social-square"
      >
        <FontAwesomeIcon icon={props.icon} className="social-square-icon" />
      </motion.div>
    </a>
  );
}
