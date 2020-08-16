import React, {useState} from "react";
import "./App.css";
import HomePage from './components/HomePage/HomePage'
import ArtistsPage from "./components/ArtistsPage/ArtistsPage";
import ArtistPage from "./components/ArtistPage/ArtistPage";
import ProductPage from "./components/ProductPage/ProductPage";
import ProductsPage from "./components/ProductsPage/ProductsPage";

function App() {

  const [categories, setCategories] = useState([])
  return (
    <>
      <HomePage/>
      <ArtistsPage setCategories={setCategories}/>
      <ArtistPage categories={categories}/>
      <ProductsPage/>
      <ProductPage/>







      {/* <div className="App">
        <a href="#about" className="h1-over-the-line">

          <h1>Over the line</h1>
        </a>
      </div>
      <div id="about">
        <div className="navbar">
          <nav className="menu">
            <li>Contact</li>
          </nav>
        </div>
        <div className="boubles">
          <div className="bouble">
            <h1>Music</h1>
          </div>
          <div className="bouble2">
            {" "}
            <h1>Acting</h1>
          </div>
          <div className="bouble3">
            {" "}
            <h1>Writing</h1>
          </div>
        </div>
      </div> */}
    </>
  );
}
export default App;
