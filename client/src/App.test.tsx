import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("Renders App component", async () => {
  const component = render(<App />);
  expect(component.container).toBeInTheDocument();
});
