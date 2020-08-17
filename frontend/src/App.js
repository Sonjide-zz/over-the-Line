
import React, { useState } from "react";

import React from "react";
import logo from "./logo.svg";

import "./App.css";
import { HomePage } from "./components/HomePage/HomePage";
import { ArtistsPage } from "./components/ArtistsPage/ArtistsPage";
import { ArtistPage } from "./components/ArtistPage/ArtistPage";
import { ProductPage } from "./components/ProductPage/ProductPage";
import { ProductsPage } from "./components/ProductsPage/ProductsPage";

function App() {
  const [categories, setCategories] = useState([]);
  return (
    <>
      <HomePage />
      <ArtistsPage setCategories={setCategories} />
      <ArtistPage categories={categories} />
      <ProductsPage />
      <ProductPage />
    </>
  );
}
export default App;
