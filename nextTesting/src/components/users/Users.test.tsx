import { render, screen } from "@testing-library/react";
import axios from "axios";
import Users, { User } from "./Users";
import userEvent from "@testing-library/user-event";
import mockRouter from "next-router-mock";
import UserPage from "@/app/users/[id]/page";

jest.mock("next/router", () => require("next-router-mock"));
jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("getData", () => {
  let response: { data: User[] };
  beforeAll(() => {
    response = {
      data: [
        {
          id: 1,
          name: "Leanne Graham",
        },
        {
          id: 2,
          name: "Ervin Howell",
        },
        {
          id: 3,
          name: "Clementine Bauch",
        },
      ],
    };
  });
  test("Корректное значение", async () => {
    mockedAxios.get.mockResolvedValue(response);
    render(<Users />);
    const data = await screen.findAllByTestId("user-el");
    expect(data.length).toBe(3);
    expect(mockedAxios.get).toHaveBeenCalledTimes(1);
    screen.debug();
  });

  test("renders userPage [id]", async () => {
    mockedAxios.get.mockResolvedValue(response);
    render(<Users />);
    const data = await screen.findAllByTestId("user-el");
    expect(data.length).toBe(3);

    mockRouter.push("/users/1");
    render(<UserPage />);
    expect(await screen.findByTestId("user-page")).toBeInTheDocument();
  });
});
