import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "../styles.css";

const Header = () => {
  const cartCount = useSelector((state) => state.cart.items.reduce((total, item) => total + item.quantity, 0));

  return (
    <header className="header">
      <h1 className="header-title">GreenLeaf Plants</h1>
      <nav className="nav-menu">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/products" className="nav-link">Products</Link>
        <Link to="/cart" className="nav-link cart-link">Cart ({cartCount})</Link>
      </nav>
    </header>
  );
};

export default Header;