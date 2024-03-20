import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders header in the middle", () => {
  render(<App />);
  const headerElement = screen.getByText(/Tower of Hanoi/i); // Modify the text matcher
  expect(headerElement).toBeInTheDocument();
});
