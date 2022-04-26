import sneakers from './sneakers';
import { Link } from 'react-router-dom';
import Popup from 'reactjs-popup';

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

function isInt(value) {
  if (isNaN(value)) {
    return false;
  }
  const x = parseFloat(value);
  return (x | 0) === x;
}

const updateCount = (e) => {
  const button = document.getElementById(`${e.target.dataset.sneaker}`);
  if (isInt(e.target.valueAsNumber)) {
    button.dataset.count = e.target.valueAsNumber;
  } else {
    button.dataset.count = 1;
  }
};

const SKUcards = (props) => {
  return (
    <div className="sku-area">
      {sneakers.map((sneaker, index) => (
        <div className="card-background" key={index}>
          <div data-model={sneaker.name} className="card">
            <div className="card-image" data-model={sneaker.name}>
              <Link to={`/shop/${sneaker.name.toLowerCase()}`}>
                <img src={images[`${sneakers[index].name}.jpeg`]} alt="" />
              </Link>
            </div>
            <div className="card-info">
              <div className="card-title" data-model={sneaker.name}>
                <Link
                  to={`/shop/${sneaker.name.toLowerCase()}`}
                  style={{ textDecoration: 'none', color: 'black' }}
                >
                  <div className="card-brand">
                    {sneaker.brand.toLowerCase()}
                  </div>
                  <div className="card-name">{sneaker.name.toLowerCase()}</div>
                </Link>
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
        </div>
      ))}
    </div>
  );
};

export default SKUcards;
