import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import "./App.css";
import Footer from "./components/FooterComponent";
import Gallery from "./components/GalleryComponent";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar>
          <div className="container">
            <NavbarBrand href="/">Grafit Wear</NavbarBrand>
          </div>
        </Navbar>
        <Gallery />
        <Footer />
      </div>
    );
  }
}

export default App;
