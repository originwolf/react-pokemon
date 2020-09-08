import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import Header from "./Header";
import Footer from "./Footer";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Header />
    <App />
    <Footer />
  </React.StrictMode>,
  rootElement
);
