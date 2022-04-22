import Header from '../../Header';
import sneakers from './sneakers';
import React from 'react';
import { useParams } from 'react-router-dom';

const ItemPage = () => {
  const { id } = useParams();

  const getItemDetails = (id) => {
    for (let i = 0; i < sneakers.length; i++) {
      if (sneakers[i].name === id) {
        return sneakers[i];
      }
    }
  };

  return (
    <div className="Shop">
      <Header />
      <div className="item-page">
        <div className="item-container">
          <div className="item-image">
            <img src={require('../images/placeholder.jpeg')} alt="" />
          </div>
          <div className="item-info">
            <div className="item-title">
              <div className="item-brand">{getItemDetails(id).brand}</div>
              <div className="item-name">{getItemDetails(id).name}</div>
              <div className="item-price">${getItemDetails(id).price}</div>
            </div>
            <div className="item-description">
              {getItemDetails(id).description}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemPage;
