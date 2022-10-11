import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";

import { BrowserRouter } from "react-router-dom";
import Providers from "./providers";

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <Providers>
        <App />
      </Providers>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);
