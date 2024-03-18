// Import de App.css qui contiendra tout notre style
import "./App.css";

// Import des composants

import Title from "./components/Title";
import DynamicTitle from "./components/DynamicTitle";
import Presentation from "./components/Presentation";

// Import des images
// Import d'une image présente quelque part dans le dossier src
import reactLogo from "./assets/react.svg";
// Import d'un fichier image depuis le dossier public (je pars de la racine de mon projet)
import viteLogo from "/vite.svg";

// const express = require("express")
// import express from "express";

const App = () => {
  // Après le return je suis dans du JSX, un mélange entre du html et du JS. Dès que j'aurai besoin d'écrire du JS, ça devra être entre accolades {}

  const name = "Tom";
  // Un composanrt React ne peut return qu'un élément (qui peut en contenir plusieurs).

  return (
    <>
      {/* Ici j'ai mis des fragments et pas une div car je ne veux pas que ce contenant apparaisse dans le DOM */}
      <h1>Bonjour</h1>
      {/* On utilise className au lieu de class */}
      <p className="paragraph">Bonjour la compagnie !!!!</p>
      {/* Le style inline est sous forme d'objet, dans des accolades car c'est du JS */}
      <div
        style={{
          color: "green",
          fontSize: "20px",
        }}
      >
        Salut
      </div>
      <p>{name}</p>
      {/* L'appel de mon composant/fonction Title */}
      <Title />
      <Title />
      {/* Le principe d'un composant et de pouvoir être appelé plusieurs fois avec des props différentes */}
      <DynamicTitle text="Je suis un titre" />
      {/* <DynamicTitle text="salut je suis enchanté" /> */}
      {/* Ici, je met des accolades autour de 56 pour préciser que je parle en JS car les nombres n'existent pas en html */}
      <Presentation name={name} age={56} color="rouge" />
      {/* Appel de mon composant Presentation auquel je donne 3 props : name, color et age */}
      <Presentation name="Bastien" age="30" color="green" />
      {/* Image venant du net */}
      <img
        src="https://www.cieletespace.fr/media/default/0001/25/A64_Artist_1100x700-6568.jpeg"
        alt="rocket"
      />
      {/* Image venant du dossier source */}
      <img src={reactLogo} alt="" />
      {/* Image venant du dossir public */}
      <img src={viteLogo} alt="" />
    </>
  );
};

export default App;

// module.exports = App
