import shopReducer, { initialState } from "./shopReducer";
import { createContext, useContext, useReducer } from "react";

const ShopContext = createContext(initialState);

export const ShopProvider = ({ children }) => {
  const [state, dispatch] = useReducer(shopReducer, initialState);

  const addToCart = (product) => {
    const updatedProduct = state.products.concat(product);
    calculateTotal(updatedProduct);
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        products: updatedProduct,
      },
    });
  };

  const deleteFromCart = (product) => {
    const updatedProduct = state.products.filter(
      (pro) => pro.id !== product.id
    );
    calculateTotal(updatedProduct);
    dispatch({
      type: "DELETE_FROM_CART",
      payload: {
        products: updatedProduct,
      },
    });
  };

  const calculateTotal = (products) => {
    let total = 0;
    products.forEach((pro) => {
      total += pro.price;
    });

    dispatch({
      type: "CALCULATE",
      payload: total,
    });
  };

  const values = {
    products: state.products,
    addToCart,
    deleteFromCart,
    total: state.total,
  };

  return <ShopContext.Provider value={values}>{children}</ShopContext.Provider>;
};

const useShop = () => {
  const context = useContext(ShopContext);
  if (context === undefined) {
    throw new Error("undefined context");
  }
  return context;
};

export default useShop;
