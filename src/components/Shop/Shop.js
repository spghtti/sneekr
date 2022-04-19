import Header from '../../Header';
import SKUs from './SKUs';

function Shop() {
  return (
    <div className="Shop">
      <Header />
      <div className="sku-list">
        <SKUs />
      </div>
    </div>
  );
}

export default Shop;
