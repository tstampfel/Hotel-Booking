// @flow
import { motion } from "framer-motion";
import * as React from "react";
import { BookingAvailableRooms } from "./booking-room-selection/booking-available-rooms";
type Props = {};
export function BookingRoomSelection(props: Props) {
  return (
    <motion.div
      key="booking-room-selection"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="booking-room-selection"
    >
      <BookingAvailableRooms />
    </motion.div>
  );
}
