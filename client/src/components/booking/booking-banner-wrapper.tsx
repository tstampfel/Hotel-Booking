// @flow
import * as React from "react";
import { BookingBanner } from "./booking-banner";
import { Image } from "react-bootstrap";
import BookingBannerImage from "./../../assets/hotel-room.jpg";
type Props = {};
export function BookingBannerWrapper(props: Props) {
  return (
    <div className="booking-banner-wrapper">
      <BookingBanner />
      <Image id="booking-banner-image" src={BookingBannerImage} fluid />
    </div>
  );
}
