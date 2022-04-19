import React from 'react';
import sneakers from './sneakers';

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

const SKUcards = (props) => {
  return (
    <div className="sku-area">
      {sneakers.map((sneaker, index) => (
        <div data-index={sneaker.name} key={index} className="card">
          <div className="" data-index={sneaker.name}></div>
          <div className="card-title" data-index={sneaker.name}>
            {sneaker.name}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SKUcards;
