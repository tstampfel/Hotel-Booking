import React from "react";
import {
  cleanup,
  fireEvent,
  render,
  waitFor,
  act,
  screen,
} from "@testing-library/react";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n.mock";
import { Provider } from "react-redux";
import store from "../../../../store";
import { MockedProvider } from "@apollo/client/testing";
import { MemoryRouter, Route } from "react-router-dom";
import MockDate from "mockdate";

import Routes from "../../../routes/routes";
import { mocks } from "../../../../test-utils/test-mocks/search.form.mock";
import { TestWrapper } from "../../../../test-utils/test.wrapper";

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
  test("After searching for dates, availabel rooms are provided", async () => {
    let testLocation: any;
    const { getByTestId, getByText } = render(
      <TestWrapper>
        <Routes />
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
      screen.debug();
      expect(testLocation.pathname).toBe("/booking");
      expect(store.getState().rooms.rooms[0].id).toMatch(
        "138fca24-ebbb-444a-9261-9e7f6301c7cb"
      );
      expect(getByText("Select Room")).toBeInTheDocument();
      expect(getByText("Luxury")).toBeInTheDocument();
    });
  });
});
