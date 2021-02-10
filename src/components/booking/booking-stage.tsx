// @flow
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as React from "react";
import { IconDefinition } from "@fortawesome/free-regular-svg-icons";
import { motion } from "framer-motion";
import BookingAnimations from "../../animations/booking";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
type Props = {
  icon: IconDefinition;
  isActive: boolean;
  selectStage: () => void;
  text: string;
};
export function BookingStage(props: Props) {
  const { t } = useTranslation();
  return (
    <>
      <div className="booking-stage-individual-wrapper">
        <div className="booking-stage-icon-wrapper">
          {!props.isActive && (
            <motion.div
              variants={BookingAnimations.bookingicon}
              whileHover="hover"
              className="booking-stage"
              onClick={props.selectStage}
            >
              <FontAwesomeIcon
                icon={props.icon}
                size="2x"
                className="booking-stage-icon"
              />
            </motion.div>
          )}
          {props.isActive && (
            <motion.div
              variants={BookingAnimations.bookingicon}
              whileHover="hover"
              className="booking-stage-active"
              onClick={props.selectStage}
            >
              <FontAwesomeIcon
                icon={props.icon}
                size="2x"
                className="booking-stage-icon"
              />
            </motion.div>
          )}
        </div>

        <div className="booking-stage-text"> {t(props.text)}</div>
        {props.isActive && (
          <motion.div
            variants={BookingAnimations.bookingChevron}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <FontAwesomeIcon
              icon={faCaretUp}
              size="2x"
              className="booking-stag-carret"
            />
          </motion.div>
        )}
      </div>
    </>
  );
}
