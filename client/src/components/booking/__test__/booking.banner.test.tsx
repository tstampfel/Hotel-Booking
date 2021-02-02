import { BookingBanner } from "../booking-banner";
import React from "react";
import { render, screen } from "@testing-library/react";
import { TestWrapper } from "../../../test-utils/test.wrapper";

describe("Booking banner unit tests", () => {
  test("Snapshot", () => {
    const component = render(<BookingBanner />);
    expect(component.container).toMatchSnapshot();
  });
  screen.debug();
  test("Renders with out crashing", () => {
    render(
      <TestWrapper>
        <BookingBanner />
      </TestWrapper>
    );
  });
});
