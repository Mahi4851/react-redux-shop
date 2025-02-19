import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increaseQuantity, decreaseQuantity, removeFromCart } from "../redux/cartSlice";
import { Link } from "react-router-dom";
import "../styles.css";

const ShoppingCart = () => {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const totalCost = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="container">
      <h1>Shopping Cart</h1>
      <div className="cart-list">
        {cart.length === 0 ? <p>Your cart is empty</p> : cart.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} className="cart-image" />
            <h2>{item.name}</h2>
            <p>${item.price} x {item.quantity}</p>
            <div className="cart-buttons">
              <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
              <button onClick={() => dispatch(decreaseQuantity(item.id))} disabled={item.quantity === 1}>-</button>
              <button onClick={() => dispatch(removeFromCart(item.id))}>Delete</button>
            </div>
          </div>
        ))}
      </div>
      <h3>Total: ${totalCost}</h3>
      <button className="checkout-button">Coming Soon</button>
      <Link to="/products"><button className="continue-shopping">Continue Shopping</button></Link>
    </div>
  );
};

export default ShoppingCart;