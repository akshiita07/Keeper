//1. Create a new React app.
import React from "react";
import ReactDOM from "react-dom/client";
//2. Create a App.jsx component.
import App from "./components/App";

// stylesheet
import './index.css';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <App/>
);
