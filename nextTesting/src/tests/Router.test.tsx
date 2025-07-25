import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import HomeScreen from "@/components/HomeScreen";
import mockRouter from "next-router-mock";
import NotFound from "@/app/not-found";

describe("Router navigation", () => {
  beforeEach(() => {
    mockRouter.setCurrentUrl("/");
  });

  test("should navigate to about page", async () => {
    render(<HomeScreen />);
    const aboutLink = screen.getByTestId("about-link");
    await userEvent.click(aboutLink);
    mockRouter.push("/about");

    expect(mockRouter).toMatchObject({ asPath: "/about" });
  });

  test("should navigate to support page", async () => {
    render(<HomeScreen />);
    const supportLink = screen.getByTestId("support-link");
    await userEvent.click(supportLink);
    mockRouter.push("/support");

    expect(mockRouter).toMatchObject({ asPath: "/support" });
  });

  test("should navigate to main page", async () => {
    render(<HomeScreen />);
    const mainLink = screen.getByTestId("main-link");
    await userEvent.click(mainLink);
    mockRouter.push("/");

    expect(mockRouter).toMatchObject({ asPath: "/" });
  });

  test("renders 404 page", () => {
    render(<NotFound />);
    expect(screen.getByText(/страница не найдена/i)).toBeInTheDocument();
  });
});
