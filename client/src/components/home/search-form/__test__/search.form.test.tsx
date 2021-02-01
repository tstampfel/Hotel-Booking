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
import { SearchForm } from "../search-form";
import { MemoryRouter, Route } from "react-router-dom";
import MockDate from "mockdate";
import { mocks } from "../search-mocks/search.form.mock";

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
    const { getByTestId } = render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/"]}>
          <I18nextProvider i18n={i18n}>
            <MockedProvider mocks={mocks} addTypename={false}>
              <>
                <SearchForm />
                <Route
                  path="*"
                  render={({ history, location }) => {
                    testLocation = location;
                    return null;
                  }}
                />
              </>
            </MockedProvider>
          </I18nextProvider>
        </MemoryRouter>
      </Provider>
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
    });
  });
});
