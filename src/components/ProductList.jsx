import { useEffect, useState } from "react";
import useShop from "../ShopContext";

const ProductList = ({ product }) => {
  const { deleteFromCart, addToCart, products } = useShop();
  const [isInCart, setIsInCart] = useState(false);

  useEffect(() => {
    const isCart = products.filter((pro) => pro.id === product.id);
    if (isCart.length > 0) {
      setIsInCart(true);
    } else {
      setIsInCart(false);
    }
  }, [products]);

  const handleAddToCart = () => {
    if (isInCart) {
      deleteFromCart(product);
    } else {
      addToCart(product);
    }
  };

  const cumtomStyle = {
    minHeight: 100,
    background: `url(${product.urlImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div className="product__item" style={cumtomStyle}>
      <div className="product__info">
        <span>{product.name}</span>
        <span>{product.price}</span>
      </div>
      <button
        className={`${isInCart ? "cancel" : "order-btn"}`}
        onClick={handleAddToCart}
      >
        {isInCart ? "Cancle" : "Order Now"}
      </button>
    </div>
  );
};
export default ProductList;
