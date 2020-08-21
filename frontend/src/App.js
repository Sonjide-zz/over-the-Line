import React, { useState } from "react";

import "./App.css";
import { HomePage } from "./components/HomePage/HomePage";
import { CategoriesPage } from "./components/CategoriesPage/CategoriesPage";
import { ArtistsPage } from "./components/ArtistsPage/ArtistsPage";
import { ProductPage } from "./components/ProductPage/ProductPage";
import { ProductsPage } from "./components/ProductsPage/ProductsPage";

function App() {
  const [category, setCategory] = useState("");
  const [product, setProduct] = useState({});
  const [artist, setArtist] = useState({});

  return (
    <>
      <HomePage />
      <CategoriesPage setCategory={setCategory} />
      <ArtistsPage category={category} setArtist={setArtist} />
      <ProductsPage
        category={category}
        artist={artist}
        setProduct={setProduct}
      />
      <ProductPage product={product} />
    </>
  );
}
export default App;
