import { RootState, setupStore } from "@/store/store";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";

export const renderWithRedux = (component: React.ReactNode, initState?: Partial<RootState>) => {
  return render(<Provider store={setupStore(initState)}>{component}</Provider>);
};
