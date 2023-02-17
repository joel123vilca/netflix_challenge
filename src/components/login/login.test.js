import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import configureStore from "redux-mock-store";
import Login from "./index";

test("login render correctly", () => {
  const initialState = { user: {} };
  const mockStore = configureStore();
  let store;
  store = mockStore(initialState);
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
  const titleElment = screen.getByRole("heading", {
    Name: "Sign In",
  });
  expect(titleElment).toBeInTheDocument();
  const emailElment = screen.getByRole("textbox", {
    Name: "email",
  });
  expect(emailElment).toBeInTheDocument();

  const emailPlaceholder = screen.getByPlaceholderText("Email");
  expect(emailPlaceholder).toBeInTheDocument();

  const passwordElment = screen.getByRole("textbox", {
    Name: "password",
  });
  expect(passwordElment).toBeInTheDocument();
  const passwordPlaceholder = screen.getByPlaceholderText("Password");
  expect(passwordPlaceholder).toBeInTheDocument();
  const btnElment = screen.getByRole("button");
  expect(btnElment).toBeInTheDocument();
});
