import { fireEvent, render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import Hello from "./Hello";

describe("Hello component", () => {
  test("Render el", () => {
    render(<Hello />);
    expect(screen.getByText(/hello, next.js!/i)).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/input value/i)).toBeInTheDocument();
  });

  test("async render", async () => {
    render(<Hello />);
    screen.debug();
    const asyncDiv = await screen.findByText(/data/i);
    expect(asyncDiv).toBeInTheDocument();
    expect(asyncDiv).toHaveStyle("color: rgb(255, 0, 0)");
    expect(asyncDiv).toMatchSnapshot();
    screen.debug();
  });

  test("BUTTON EVENT", () => {
    render(<Hello />);
    const toggleBtn = screen.getByTestId("toggle-btn");
    expect(screen.queryByTestId("toggle-div")).toBeNull();
    fireEvent.click(toggleBtn);
    expect(screen.queryByTestId("toggle-div")).toBeInTheDocument();
    fireEvent.click(toggleBtn);
    expect(screen.queryByTestId("toggle-div")).toBeNull();
  });

  test("INPUT EVENT", async () => {
    render(<Hello />);
    const input = screen.getByPlaceholderText(/input value/i);
    expect(screen.getByTestId("value-el")).toContainHTML("");
    // искусственное событие
    // fireEvent.change(input, {
    //   target: { value: "12345" },
    // });

    // близко к пользователю
    await userEvent.type(input, "12345");
    expect(screen.getByTestId("value-el")).toContainHTML("12345");
  });
});
