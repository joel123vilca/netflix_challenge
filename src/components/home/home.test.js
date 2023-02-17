import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import configureStore from "redux-mock-store";
import Home from "./index";

test("great render correctly", () => {
  const initialState = {};
  const mockStore = configureStore();
  let store;
  store = mockStore(initialState);
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
  const text = screen.getByTestId("title");
  expect(text).toHaveTextContent("Sign In");
});
