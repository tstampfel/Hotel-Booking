// @flow
import { MockedProvider } from "@apollo/client/testing";
import * as React from "react";
import { I18nextProvider } from "react-i18next";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import i18n from "../components/home/search-form/__test__/i18n.mock";
import store from "../store";
import { mocks } from "./test-mocks/search.form.mock";
type Props = {
  children: any;
};
export function TestWrapper(props: Props) {
  return (
    <Provider store={store}>
      <MemoryRouter initialEntries={["/"]}>
        <I18nextProvider i18n={i18n}>
          <MockedProvider mocks={mocks} addTypename={false}>
            <>{props.children}</>
          </MockedProvider>
        </I18nextProvider>
      </MemoryRouter>
    </Provider>
  );
}
