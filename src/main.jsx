import React from "react";
import ReactDOM from "react-dom/client";
// Import de index.css dans lequel on a mis le fichier reset css
import "./index.css";
// Import du composant App
import App from "./App.jsx";

// J'injecte ce que return App dans la div dont l'id est "root"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* Appel de mon composant/fonction App, il return des éléments html */}

    <App />
  </React.StrictMode>
);
