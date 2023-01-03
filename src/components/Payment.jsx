import { useState } from "react";
import { toast } from "react-hot-toast";

const Payment = () => {
  const initialPayment = {
    mastercard: false,
    evcplus: false,
    paypal: false,
  };

  const [payment, setPayment] = useState(initialPayment);
  const [accountInfo, setAccountInfo] = useState();

  const handleBuy = (event) => {
    event.preventDefault();
    if (!accountInfo) return toast.error("enter your account number!");
  };

  return (
    <div className="cart__form">
      <span
        className={`cart__card ${payment.mastercard && "selected"}`}
        onClick={() => setPayment({ ...initialPayment, mastercard: true })}
      >
        MasterCard
      </span>
      <span
        className={`cart__card ${payment.evcplus && "selected"}`}
        onClick={() => setPayment({ ...initialPayment, evcplus: true })}
      >
        EvcPlus
      </span>
      <span
        className={`cart__card ${payment.paypal && "selected"}`}
        onClick={() => setPayment({ ...initialPayment, paypal: true })}
      >
        Paypal
      </span>
      <form className="cart__form-control">
        <div className="cart__input__button">
          <input
            className="cart__input"
            type="text"
            placeholder="acc no..."
            onChange={(event) => setAccountInfo(event.target.value)}
          />
          <button className="cart__pay" onClick={handleBuy}>
            Pay Now
          </button>
        </div>
      </form>
    </div>
  );
};

export default Payment;
