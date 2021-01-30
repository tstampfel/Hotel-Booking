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
import { MockedProvider } from "@apollo/client/testing";
import { GET_AVAILABLE_ROOMS } from "../../../../graphql/queries";

const selectedDates = [
  new Date(
    "Fri Jan 29 2021 00:00:00 GMT+0100 (Central European Standard Time)"
  ),
  new Date(
    "Sat Jan 30 2021 00:00:00 GMT+0100 (Central European Standard Time)"
  ),
];

const roomMock = {
  request: {
    query: GET_AVAILABLE_ROOMS,
    variables: {
      checkIn: selectedDates[0],
      checkOut: selectedDates[1],
    },
  },

  data: {
    getAvailbleRooms: [
      {
        id: "138fca24-ebbb-444a-9261-9e7f6301c7cb",
        size: 75,
        bathTub: true,
        bedType: { type: 4 },
        roomType: { type: 2 },
      },
    ],
  },
};

describe("Testing search form", () => {
  afterEach(() => {
    cleanup();
  });
  test("After searching for dates, availabel rooms are provided", async () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <MockedProvider
          mocks={[roomMock]}
          addTypename={false}
          defaultOptions={{
            watchQuery: { fetchPolicy: "no-cache" },
            query: { fetchPolicy: "no-cache" },
          }}
        >
          <I18nextProvider i18n={i18n}>
            <App />
          </I18nextProvider>
        </MockedProvider>
      </Provider>
    );

    await waitFor(() =>
      fireEvent.submit(getByTestId("search-dates-form-submit"), {
        target: { text1: { value: "Text" } },
      })
    );

    await new Promise((resolve) => setTimeout(resolve, 0));

    expect(await screen.findByText(/Couple/i)).toBeInTheDocument();
    expect(await screen.findByText(/Select Room/i)).toBeInTheDocument();
  });
});
