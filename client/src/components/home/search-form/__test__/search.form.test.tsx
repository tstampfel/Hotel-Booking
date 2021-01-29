import React from "react";
import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n.mock";
import { Provider } from "react-redux";
import store from "../../../../store";
import App from "../../../../App";
import { ApolloMockedProvider } from "../../../../test-utils/providers";

const selectedDates = [
  new Date(
    "Fri Jan 29 2021 00:00:00 GMT+0100 (Central European Standard Time)"
  ),
  new Date(
    "Sat Jan 30 2021 00:00:00 GMT+0100 (Central European Standard Time)"
  ),
];

describe("Testing search form", () => {
  afterEach(() => {
    cleanup();
  });
  test("State is changed by picking date from dropdown", async () => {
    const { getAllByPlaceholderText, getByTestId } = render(
      <Provider store={store}>
        <ApolloMockedProvider
          customResolvers={{
            Query: () => ({
              getAvailbleRooms: ($checkIn: Date, $checkOut: Date) => ({
                bathTub: true,
                bedType: { __typename: "BedType", type: 3 },
                id: "29092757-c126-4e51-97d5-33452678cbad",
                roomType: { __typename: "RoomType", type: 4 },
                size: 65,
                __typename: "Room",
                __proto__: Object,
              }),
            }),
          }}
        >
          <I18nextProvider i18n={i18n}>
            <App />
          </I18nextProvider>
        </ApolloMockedProvider>
      </Provider>
    );

    fireEvent.change(getAllByPlaceholderText("Pick dates")[0], {
      value: selectedDates,
    });

    // await waitFor(() =>
    //   fireEvent.submit(getByTestId("search-dates-form-submit"), {
    //     target: { text1: { value: "Text" } },
    //   })
    // );
    fireEvent.submit(getByTestId("search-dates-form-submit"), {
      target: { text1: { value: "Text" } },
    });
    screen.debug();
    await screen.findByText(/Couple/i);
    await screen.findByText(/Family/i);
  });
});
