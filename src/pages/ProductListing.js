import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import "../styles.css";

const products = [
    { id: 1, name: "Fern", price: 10, image: "/images/fern.jpg" },
    { id: 2, name: "Cactus", price: 15, image: "/images/cactus.jpg" },
    { id: 3, name: "Bonsai", price: 25, image: "/images/bonsai.jpg" },
    { id: 4, name: "Aloe Vera", price: 12, image: "/images/aloe-vera.jpg" },
    { id: 5, name: "Peace Lily", price: 18, image: "/images/peace-lily.jpg" },
    { id: 6, name: "Snake Plant", price: 20, image: "/images/snake-plant.jpg" },
    { id: 7, name: "Spider Plant", price: 14, image: "/images/spider-plant.jpg" },
    { id: 8, name: "Succulent", price: 8, image: "/images/succulent.jpg" },
    { id: 9, name: "Money Plant", price: 16, image: "/images/money-plant.jpeg" },
    { id: 10, name: "Orchid", price: 30, image: "/images/orchid.jpg" }
];

const ProductListing = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);

  return (
    <div className="container">
      <h1>Our Plants</h1>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>${product.price}</p>
            <button 
              disabled={cart.some(item => item.id === product.id)}
              onClick={() => dispatch(addToCart(product))}
            >
              {cart.some(item => item.id === product.id) ? "Added" : "Add to Cart"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListing;