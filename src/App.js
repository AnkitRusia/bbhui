import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Customer from "./components/Customer";
import Owner from "./components/Owner";
import OrderSucess from "./components/OrderSuccess";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: ["Raleway"].join(","),
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/owner" element={<Owner />} />
          <Route exact path="/Customer/:id" element={<Customer />} />
          <Route exact path="/orderSuccess" element={<OrderSucess />} />
          <Route path="*" element={<LandingPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
