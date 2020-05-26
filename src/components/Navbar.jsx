import React, { Component } from "react";
import { Link } from "react-router-dom";
import { CartButton, MySpan } from "./utils/MyStyled";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark px-sm-5">
        <Link to="/">
          <div className="navbar-brand">E-Kart</div>
        </Link>
        <Link to="/cart" className="ml-auto">
          <CartButton>
            <i className="fas fa-shopping-bag"></i>
            <MySpan>My Cart</MySpan>
          </CartButton>
        </Link>
      </nav>
    );
  }
}

export default Navbar;
