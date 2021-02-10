// @flow
import { motion } from "framer-motion";
import * as React from "react";
type Props = {};
export function BookingPaymentInfo(props: Props) {
  return (
    <motion.div
      key="booking-payment-info"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="booking-payment-info"
    >
      Booking Payment
    </motion.div>
  );
}
