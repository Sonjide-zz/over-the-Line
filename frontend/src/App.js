import React, { useState } from "react";

import { HomePage } from "./components/HomePage/HomePage";
import { CategoriesPage } from "./components/CategoriesPage/CategoriesPage";
import { ArtistsPage } from "./components/ArtistsPage/ArtistsPage";
import { ProductPage } from "./components/ProductPage/ProductPage";
import { ProductsPage } from "./components/ProductsPage/ProductsPage";

import "./App.css";

function App() {
  const [category, setCategory] = useState("");
  const [product, setProduct] = useState({});
  const [artist, setArtist] = useState({});
  const [showCategories, setShowCategories] = useState(false);
  const [showArtists, setShowArtists] = useState(false);

  let singleProductCheck;
  let singleProduct;

  if (artist.category) {
    singleProductCheck = artist.category.filter((cat) =>
      cat.hasOwnProperty(category)
    )[0][category].length;
    singleProduct = artist.category.filter((cat) =>
      cat.hasOwnProperty(category)
    )[0][category][0];
  }
  return (
    <>
      <HomePage setShowCategories={setShowCategories} />
      <CategoriesPage
        setCategory={setCategory}
        showCategories={showCategories}
        setShowArtists={setShowArtists}
      />
      <ArtistsPage
        category={category}
        setArtist={setArtist}
        singleProductCheck={singleProductCheck}
        showArtists={showArtists}
      />
      <>
        {singleProductCheck !== 1 && (
          <ProductsPage
            category={category}
            artist={artist}
            setProduct={setProduct}
          />
        )}
      </>
      <>
        {singleProductCheck !== 1 ? (
          <ProductPage
            product={product}
            artist={artist}
            category={category}
            singleProductCheck={singleProductCheck}
          />
        ) : (
          <ProductPage
            product={singleProduct}
            artist={artist}
            category={category}
            singleProductCheck={singleProductCheck}
          />
        )}
      </>
    </>
  );
}
export default App;
