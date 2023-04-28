/** @jest-environment jsdom */
import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { App } from "./App";

/**
 * Verify something should render
 */
test("App should render", () => {
  render(<App />);
  expect(screen.getByText("Welcome, party people!")).toBeInTheDocument();
});

test("Button should render", () => {
  // TODO: change the expect to actually test something 😉

  render(<App />);
  const themeButton = screen.getByRole("button", {
    name: "Current theme: light",
  });
  const hiddenContentButton = screen.getByRole("button", {
    name: "Show hidden content",
  });

  expect(themeButton).toBeInTheDocument();
  expect(hiddenContentButton).toBeInTheDocument();
});

/**
 * Verify clicking button should change theme
 * hint: use fireEvent.click(element) to trigger a click event on an element
 */
test("theme button should update button text", () => {
  // TODO: change the expect to actually test something 😉
  render(<App />);
  const themeButton = screen.getByRole("button", {
    name: "Current theme: light",
  });

  fireEvent.click(themeButton);
  expect(themeButton).toHaveTextContent("Current theme: dark");

  fireEvent.click(themeButton);
  expect(themeButton).toHaveTextContent("Current theme: light");
});

// BONUS
// hint: there is a `.toHaveStyle` method.
// e.g.: expect(element).toHaveStyle('color: #FFF');
test("theme button should toggle styles", () => {
  // TODO: change the expect to actually test something 😉
  render(<App />);

  // const themeButton = screen.getByRole("button", { name: "Current theme: light" });
  // const body = document.body;

  // expect(themeButton).toHaveStyle("color: #333");
  // expect(body).toHaveStyle("background-color: #FFF");

  // themeButton.click();

  // expect(themeButton).toHaveStyle("color: #FFF");
  // expect(body).toHaveStyle("background-color: #333");
});

/**
 * Verify clicking button should toggle hidden content
 *
 * hint: you can check if something does not exist by using .not
 * e.g. expect(element).not.toBeInTheDocument()
 *
 * hint: use `queryByText` instead of `getByText` to check if something is _not_ rendered
 * (getByText will throw an error if it is not rendered)
 */
test("hidden button should toggle hidden content", () => {
  // TODO: change the expect to actually test something 😉
  render(<App />);
  const hiddenContentButton = screen.getByRole("button", {
    name: "Show hidden content",
  });
  const hiddenContent = screen.queryByText("this content is hidden by default");

  fireEvent.click(hiddenContentButton);
  expect(hiddenContent).not.toBeInTheDocument();
  // fireEvent.click(hiddenContentButton);
  //  expect(hiddenContent).not.toBeInTheDocument();
});

/**
 * Want more? Try these:
 *   - check for the presence of a specific element, like the paragraph containing the text "Click the button to toggle the theme"
 *   - check the for the class name .container on the surrounding div
 *   - after clicking the toggle hidden content button, check for the button text to update to "hide" instead of "show"
 */
