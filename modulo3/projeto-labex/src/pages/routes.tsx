import { BrowserRouter, Routes, Route } from "react-router-dom";

import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import DataProvider from "../context/Data";
import AdminPage from "./AdminPage/AdminPage";
import Home from "./Home/Home";
import LoginPage from "./LoginPage/LoginPage";
import ViagemPage from "./ViagemPage/ViagemPage";

const RoutesComponent = function (): JSX.Element {
  return (
    <DataProvider>
      <div className="app">
        <BrowserRouter>
          <Header />

          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/viagem" element={<ViagemPage />} />

            <Route path="/login-admin" element={<LoginPage />} />
          </Routes>
        </BrowserRouter>
      </div>
      <Footer />
    </DataProvider>
  );
};

export default RoutesComponent;
