import sneakers from './sneakers';
import React, { useState } from 'react';

// const importAll = (r) => {
//   let images = {};
//   r.keys().map((item, index) => {
//     images[item.replace('./', '')] = r(item);
//   });
//   return images;
// };

// const images = importAll(
//   require.context('../images', false, /\.(png|jpe?g|svg)$/)
// );

const updateCount = (e) => {
  const button = document.getElementById(`${e.target.dataset.sneaker}`);
  button.dataset.count = e.target.valueAsNumber;
};

const SKUcards = (props) => {
  return (
    <div className="sku-area">
      {sneakers.map((sneaker, index) => (
        <div data-model={sneaker.name} key={index} className="card">
          <div className="card-image" data-model={sneaker.name}>
            <img src={require('../images/placeholder.jpeg')} alt="" />
          </div>
          <div className="card-info">
            <div className="card-title" data-model={sneaker.name}>
              <div className="card-brand">{sneaker.brand}</div>
              <div className="card-name">{sneaker.name}</div>
              <div className="card-price">${sneaker.price}</div>
            </div>
            <div className="card-add-button">
              <input
                className="increment-field"
                type="number"
                min="1"
                max="100"
                data-sneaker={sneaker.name}
                onChange={updateCount}
                defaultValue="1"
              ></input>
              <button
                onClick={props.handleClick}
                id={sneaker.name}
                data-count="1"
                data-sneaker={sneaker.name}
                data-price={sneaker.price}
                data-brand={sneaker.brand}
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SKUcards;
