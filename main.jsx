import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import FormComponent from "./FormComponent.jsx";
import CardComponent from "./CardComponent.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FormComponent></FormComponent>
    <CardComponent></CardComponent>
  </React.StrictMode>
);
