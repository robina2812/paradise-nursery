import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, decrementQuantity, removeFromCart } from "../Store/CartSlice.jsx";
import { selectCartItems, selectCartTotal } from "../Store/CartSlice.jsx";
import "../Style/cart.css";

function Cart() {
  const cartItems = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);
  const dispatch = useDispatch();

  return (
    <div className="cart-page">
      <h1>Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul className="cart-list">
          {cartItems.map((item) => (
            <li key={item.id} className="cart-item">
              <span>{item.name} - ${item.price.toFixed(2)}</span>
              <div className="quantity-controls">
                <button onClick={() => dispatch(decrementQuantity(item.id))}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => dispatch(addToCart(item))}>+</button>
              </div>
              <button className="remove-btn" onClick={() => dispatch(removeFromCart(item.id))}>
                Remove from Cart
              </button>
            </li>
          ))}
        </ul>
      )}
      <div className="total-price">Total: ${total.toFixed(2)}</div>
    </div>
  );
}

export default Cart;
