import useShop from "../ShopContext";

const CartPage = () => {
  const { products, deleteFromCart, total } = useShop();

  return (
    <div className="cart__div">
      {products.map((product, index) => (
        <div key={index} className="cart__products">
          <img className="cart__img" src={product.urlImage} alt="pic" />
          <div className="cart__footer">
            <div className="cart__name__price">
              <span>{product.name}</span>
              <span>${product.price}</span>
            </div>
            <button
              className="cart__btn"
              onClick={() => deleteFromCart(product)}
            >
              X
            </button>
          </div>
        </div>
      ))}
      <h1>Total $ {total}</h1>
    </div>
  );
};

export default CartPage;
