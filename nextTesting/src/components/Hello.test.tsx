import { render, screen } from "@testing-library/react";
import Hello from "./Hello";

describe("Hello component", () => {
  it("renders greeting with name", () => {
    render(<Hello name='Next.js' />);
    expect(screen.getByText("Hello, Next.js!")).toBeInTheDocument();
  });
});
