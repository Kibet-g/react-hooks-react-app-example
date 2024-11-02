import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { format } from "date-fns";
import App from "../components/App";
import ExampleComponent from "../components/ExampleComponent"; // Adjust the import if needed
import TestComponent from "../components/TestComponent"; // Ensure this component is available

beforeEach(() => {
  render(<App />);
});

test('should include "Now" in the header instead of a time', () => {
  // Check that the current formatted date/time is not present
  expect(
    screen.queryByText(format(new Date(), "MMMM do yyyy, h:mm:ss a"))
  ).not.toBeInTheDocument();
  // Check that "Now" is present in the document
  expect(screen.getByText(/Now/g)).toBeInTheDocument();
});

test("should include the <ExampleComponent />", () => {
  // Check if ExampleComponent is rendered properly
  expect(screen.getByText("Whoa!")).toBeInTheDocument(); // Adjust "Whoa!" to whatever text is rendered by ExampleComponent
});

test("should include the <TestComponent />", () => {
  // Check if TestComponent is rendered properly using its title attribute
  expect(screen.getByTitle("time video")).toBeInTheDocument(); // Adjust the title to what you have set in TestComponent
});
