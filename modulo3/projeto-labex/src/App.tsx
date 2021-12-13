import { BrowserRouter, Route, Routes } from "react-router-dom";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import DataProvider from "./context/Data";
import AdminPage from "./pages/AdminPage/AdminPage";
import Home from "./pages/Home/Home";
import ViagemPage from "./pages/ViagemPage/ViagemPage";

const App = function (): JSX.Element {
  return (
    <DataProvider>
      <div className="app">
        <BrowserRouter>
          <Header />

          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/viagem" element={<ViagemPage />} />

            <Route path="/admin" element={<AdminPage />} />
          </Routes>
        </BrowserRouter>
      </div>
      <Footer />
    </DataProvider>
  );
};

export default App;
