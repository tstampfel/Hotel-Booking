import { render } from "@testing-library/react";
import React from "react";
import { BookingReview } from "../booking-review";

describe("Booking components test", () => {
  test("<BookingReview /> matches snapshot", () => {
    const component = render(<BookingReview />);
    expect(component.container).toMatchSnapshot();
  });
});
