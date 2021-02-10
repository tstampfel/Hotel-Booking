// @flow
import { AnimatePresence, motion } from "framer-motion";
import * as React from "react";
import { useSelector } from "react-redux";
import RoutesAnimations from "../../animations/routes";
import { getBookingStage } from "../../store/booking/bookingSelectors";
import { BookingBannerWrapper } from "./booking-banner-wrapper";
import { BookingMenu } from "./booking-menu";
import { BookingPaymentInfo } from "./booking-payment-info";
import { BookingPersonalInfo } from "./booking-personal-info";
import { BookingReview } from "./booking-review";
import { BookingRoomSelection } from "./booking-room-selection";
type Props = {};
export function Booking(props: Props) {
  const reduxStage = useSelector(getBookingStage);
  return (
    <motion.div
      variants={RoutesAnimations.routeVariant}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <BookingBannerWrapper />
      <BookingMenu />
      <AnimatePresence>
        {reduxStage === "select_room" && <BookingRoomSelection />}
        {reduxStage === "personal_info" && <BookingPersonalInfo />}
        {reduxStage === "payment_info" && <BookingPaymentInfo />}
        {reduxStage === "booking_review" && <BookingReview />}
      </AnimatePresence>
    </motion.div>
  );
}
