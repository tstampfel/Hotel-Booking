// @flow
import { motion } from "framer-motion";
import * as React from "react";
type Props = {};
export function BookingPersonalInfo(props: Props) {
  return (
    <motion.div
      key="booking-personal-info"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="booking-personal-info"
    >
      Booking Personal Info
    </motion.div>
  );
}
