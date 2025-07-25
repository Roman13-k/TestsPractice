import Counter from "./Counter";
import userEvent from "@testing-library/user-event";
import { renderWithRedux } from "@/tests/helpers/renderWithRedux";

describe("Counter", () => {
  test("Test btns", async () => {
    const { getByTestId } = renderWithRedux(<Counter />, {
      counter: {
        value: 10,
      },
    });
    const decrement = getByTestId("decrement-btn");
    const increment = getByTestId("increment-btn");
    expect(getByTestId("value-id")).toHaveTextContent("10");
    await userEvent.click(increment);
    expect(getByTestId("value-id")).toHaveTextContent("11");
    await userEvent.click(decrement);
    expect(getByTestId("value-id")).toHaveTextContent("10");
  });
});
