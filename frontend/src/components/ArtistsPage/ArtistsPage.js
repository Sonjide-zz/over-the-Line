import React from 'react'
import {Navbar} from 'react-bootstrap'
import logo from '../../assets/logo.png'
import products from '../../assets/products.json'

export default function ArtistsPage({setCategories}) {
    const colorsArray = ["blue", "yellow", "orange"]

    return (
        <div className="artists-page">
            <Navbar className="navbar-bg-color main-white">
                <Navbar.Brand className="col-2" id="logo"  >
                    <img
                        alt="Logo"
                        src={logo}
                        width="60"
                        height="40"
                        className="d-inline-block align-top logo"
                    />
                </Navbar.Brand>
                <div className="text-center col-8 text">
                    <h1>Over the line</h1>
                </div>
                <div className="col-2">contact</div>   
            </Navbar>
            <div className="artists-main d-flex justify-content-center align-items-center">
                {
                    products.map((product, index) => (
                        <div key={index} className={colorsArray[Math.floor(Math.random() * (2 + 1))]} onClick={e=>setCategories(product.category)}>{product.name}</div>
                    ))
                }
            </div>
        </div>
    )
}
