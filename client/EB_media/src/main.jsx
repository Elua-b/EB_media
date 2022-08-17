import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import "./index.css";
import store from "./store/ReduxStore"
import {BrowserRouter,Route,Routes} from 'react-router-dom'

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
  <React.StrictMode>
<Routes>
  <Route path="*" element={<App/>} />
   
  </Routes>
  </React.StrictMode>
  </BrowserRouter>
  </Provider>
);
