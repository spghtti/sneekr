import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Shop from './components/Shop/Shop';
import About from './components/About';
import CartPage from './components/CartPage';
import React, { useState, useEffect } from 'react';

const RouteSwitch = () => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState();

  useEffect(() => {
    let newTotal = 0;
    for (let i = 0; i < cart.length; i++) {
      newTotal += Number(cart[i].price);
    }
    setTotal(newTotal);
  }, [cart]);

  const isExistingItem = (name, cart) => {
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].name === name) {
        return true;
      }
    }
    return false;
  };

  const getItemIndex = (name, cart) => {
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].name === name) {
        return i;
      }
    }
    return -1;
  };

  const addToCart = (e) => {
    const arr = [...cart];

    if (isExistingItem(e.target.dataset.sneaker, arr)) {
      const index = getItemIndex(e.target.dataset.sneaker, arr);
      arr[index].count =
        Number(e.target.dataset.count) + Number(arr[index].count);
      arr[index].price =
        Number(e.target.dataset.price) * Number(arr[index].count);
    } else {
      arr.push({
        name: e.target.dataset.sneaker,
        price: e.target.dataset.price,
        brand: e.target.dataset.brand,
        count: e.target.dataset.count,
      });
      setCart(arr);
      console.log(total);
    }
  };

  const handleClick = (e) => {
    addToCart(e);
    console.log(cart);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/shop" element={<Shop handleClick={handleClick} />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/cart"
          element={
            <CartPage
              cart={cart}
              setCart={setCart}
              total={total}
              setTotal={setTotal}
            />
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
