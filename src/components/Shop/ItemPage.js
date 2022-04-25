import Header from '../../Header';
import sneakers from './sneakers';
import React from 'react';
import { useParams } from 'react-router-dom';

const ItemPage = (props) => {
  const { id } = useParams();

  const getItemDetails = (id) => {
    for (let i = 0; i < sneakers.length; i++) {
      if (sneakers[i].name === id) {
        console.log(sneakers[i].name);
        return sneakers[i];
      }
    }
  };

  const updateCount = (e) => {
    const button = document.getElementById(`${e.target.dataset.sneaker}`);
    button.dataset.count = e.target.valueAsNumber;
  };

  const importAll = (r) => {
    let images = {};
    r.keys().map((item, index) => {
      images[item.replace('./', '')] = r(item);
    });
    return images;
  };

  const images = importAll(
    require.context('../images', false, /\.(png|jpe?g|svg)$/)
  );

  return (
    <div className="Shop">
      <Header />
      <div className="item-page">
        <div className="item-container">
          <div className="item-image">
            <img src={images[`${getItemDetails(id).name}.jpeg`]} alt="" />
          </div>
          <div className="item-info">
            <div className="item-title">
              <div className="item-brand">
                {getItemDetails(id).brand}
                <div className="item-name">{getItemDetails(id).name}</div>
              </div>
              <div className="item-price">${getItemDetails(id).price}</div>
            </div>
            <div className="item-description">
              {getItemDetails(id).description}
            </div>
            <div className="item-add-button">
              <div></div>
              <input
                className="increment-field"
                type="number"
                min="1"
                max="100"
                data-sneaker={getItemDetails(id).name}
                onChange={updateCount}
                defaultValue="1"
              ></input>
              <button
                onClick={props.handleClick}
                id={getItemDetails(id).name}
                data-count="1"
                data-sneaker={getItemDetails(id).name}
                data-price={getItemDetails(id).price}
                data-brand={getItemDetails(id).brand}
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemPage;
