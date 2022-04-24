import Header from '../../Header';
import SKUcards from './SKUcards';

const Shop = (props) => {
  return (
    <div className="Shop">
      <Header />
      <div className="sku-list">
        <SKUcards handleClick={props.handleClick} />
        <div className="sku-area-background"></div>
      </div>
    </div>
  );
};

export default Shop;
