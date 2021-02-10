import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import { TestWrapper } from "./test-utils/test.wrapper";

test("Renders App component", async () => {
  const component = render(
    <TestWrapper>
      <App />
    </TestWrapper>
  );
  expect(component.container).toBeInTheDocument();
});
