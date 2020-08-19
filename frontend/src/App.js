import React, { useState } from "react";

import products from "./assets/products.json";
import "./App.css";
import { HomePage } from "./components/HomePage/HomePage";
import { ArtistsPage } from "./components/ArtistsPage/ArtistsPage";
import { SingleArtistPage } from "./components/SingleArtistPage/SingleArtistPage";
import { ProductPage } from "./components/ProductPage/ProductPage";
import { ProductsPage } from "./components/ProductsPage/ProductsPage";

function App() {
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState({});
  const [product, setProduct] = useState({});

  return (
    <>
      <HomePage />
      <ArtistsPage setCategories={setCategories} products={products} />
      <SingleArtistPage categories={categories} setCategory={setCategory} />
      <ProductsPage category={category} setProduct={setProduct} />
      <ProductPage product={product} />
    </>
  );
}
export default App;
