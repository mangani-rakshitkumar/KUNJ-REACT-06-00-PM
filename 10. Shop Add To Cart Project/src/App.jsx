import React, { useState, useEffect } from 'react';
import Data from './Data';

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Load cart from localStorage on mount
  useEffect(() => {
    const storedCart = localStorage.getItem('cartItems');
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  // Save cart to localStorage whenever it updates
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const handleAddToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(item => item.name === product.name);
      if (existingItem) {
        return prevItems.map(item =>
          item.name === product.name
            ? { ...item, qty: item.qty + 1 }
            : item
        );
      }
      return [...prevItems, { ...product, qty: 1 }];
    });
    alert("🛒 Product added to cart!");
  };

  const handleBuy = () => {
    alert("✅ Purchase successful!");
    setCartItems([]);
    setIsCartOpen(false);
    localStorage.removeItem('cartItems');
  };

  const increaseQty = (name) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.name === name ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  const decreaseQty = (name) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.name === name && item.qty > 1
          ? { ...item, qty: item.qty - 1 }
          : item
      )
    );
  };

  const removeFromCart = (name) => {
    const updatedCart = cartItems.filter((item) => item.name !== name);
    setCartItems(updatedCart);
  };

  return (
    <div className="app">
      <header>
        <h2>🛍️ SHOP ADD TO CART</h2>
        <button className="cart-button" onClick={() => setIsCartOpen(true)}>
          🛒 Cart ({cartItems.reduce((acc, item) => acc + item.qty, 0)})
        </button>
      </header>

      <Data onAddToCart={handleAddToCart} />

      {isCartOpen && (
        <div className="cart-panel">
          <h3>Cart</h3>
          {cartItems.length === 0 ? (
            <p>No products in cart</p>
          ) : (
            cartItems.map((item, index) => (
              <div key={index} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div style={{ flexGrow: 1 }}>
                  <h4>{item.name}</h4>
                  <div className="qty-control">
                    <button
                      onClick={() => decreaseQty(item.name)}
                      disabled={item.qty === 1}
                    >
                      ➖
                    </button>
                    <span>Qty: {item.qty}</span>
                    <button onClick={() => increaseQty(item.name)}>➕</button>
                  </div>
                </div>
                <button
                  className="remove-btn"
                  onClick={() => removeFromCart(item.name)}
                >
                  Remove
                </button>
              </div>
            ))
          )}
          {cartItems.length > 0 && (
            <button className="buy-now" onClick={handleBuy}>
              ✅ Buy Now
            </button>
          )}
          <button className="back-button" onClick={() => setIsCartOpen(false)}>
            ⬅️ Back to Shopping
          </button>
        </div>
      )}
    </div>
  );
};

export default App;