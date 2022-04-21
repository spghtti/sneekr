import Header from '../Header';

const CartPage = (props) => {
  return (
    <div className="CartPage">
      <Header />
      <div className="cart-area">
        {props.cart.map((item, index) => (
          <div className="cart-item" data-model={item.name} key={index}>
            <div className="cart-item-image" data-model={item.name}>
              <img src={require('./images/placeholder.jpeg')} alt="" />
            </div>
            <div className="cart-item-info">
              <div className="cart-item-brand" data-model={item.name}>
                <div>{item.brand}</div>
              </div>
              <div className="cart-item-brand">
                <div>{item.name}</div>
              </div>
              <div className="cart-item-count">
                <div>({item.count})</div>
              </div>
              <div className="cart-item-price">
                <div>${item.price}</div>
              </div>
            </div>
          </div>
        ))}
        <div className="cart-total">Total: {props.total}</div>
      </div>
    </div>
  );
};

export default CartPage;
