import React from "react";
import {
  cleanup,
  fireEvent,
  render,
  waitFor,
  act,
} from "@testing-library/react";
import store from "../../../../store";
import MockDate from "mockdate";
import RegularRoutes from "../../../routes/routes";
import { TestWrapper } from "../../../../test-utils/test.wrapper";
import { Route } from "react-router-dom";

describe("Testing search form", () => {
  beforeAll(() => {
    MockDate.set(
      new Date(
        "Fri Jan 29 2021 00:00:00 GMT+0100 (Central European Standard Time)"
      )
    );
  });

  afterAll(() => {
    MockDate.reset();
  });
  afterEach(() => {
    cleanup();
  });
  test("After searching for dates, available rooms are provided", async () => {
    let testLocation: any;
    const { getByTestId, getByText } = render(
      <TestWrapper>
        <RegularRoutes />
        <Route
          path="*"
          render={({ history, location }) => {
            testLocation = location;
            return null;
          }}
        />
      </TestWrapper>
    );

    act(() => {
      fireEvent.click(getByTestId("search-dates-form-submit-button"));
    });

    await waitFor(() => {
      expect(testLocation.pathname).toBe("/booking");
      expect(store.getState().rooms.rooms[0].id).toMatch(
        "138fca24-ebbb-444a-9261-9e7f6301c7cb"
      );
      expect(getByText("Select Room")).toBeInTheDocument();
      expect(getByText("Luxury")).toBeInTheDocument();
    });
  });
});
