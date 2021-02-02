import { render } from "@testing-library/react";
import React from "react";
import { TestWrapper } from "../../../test-utils/test.wrapper";
import { BookingReview } from "../booking-review";

describe("Booking components test", () => {
  test("<BookingReview /> matches snapshot", () => {
    const component = render(
      <TestWrapper>
        <BookingReview />
      </TestWrapper>
    );
    expect(component.container).toMatchSnapshot();
  });
});
