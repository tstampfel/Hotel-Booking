// @flow
import { motion } from "framer-motion";
import * as React from "react";
type Props = {};
export function BookingReview(props: Props) {
  return (
    <motion.div
      key="booking-review"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="booking-review"
    >
      Review
    </motion.div>
  );
}
