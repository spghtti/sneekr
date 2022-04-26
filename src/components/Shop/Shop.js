import Header from '../../Header';
import SKUcards from './SKUcards';
import Modal from '../Modal';

const Shop = (props) => {
  return (
    <div className="Shop">
      <Header />
      <div className="sku-list">
        <SKUcards handleClick={props.handleClick} />
      </div>
      {props.isModalActive ? <Modal /> : null}
    </div>
  );
};

export default Shop;
