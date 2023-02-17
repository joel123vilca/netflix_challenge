import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "../components/login";
import Dashboard from "../components/dashboard";
import Home from "../components/home";
import { Provider } from "react-redux";
import { store } from "../redux";

const AppRouter = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default AppRouter;
