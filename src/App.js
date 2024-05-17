import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Gallery from "./Gallery";
import Cart from "./pages/Cart";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route exact path="/" element={<Gallery />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
