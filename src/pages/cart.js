import CartPage from "../components/CartPage";
import Payment from "../components/Payment";

const Cart = () => {
  return (
    <div className="cart__section">
      <h2>Checkout</h2>
      <div className="cart__items">
        <CartPage />
        <Payment />
      </div>
    </div>
  );
};
export default Cart;
