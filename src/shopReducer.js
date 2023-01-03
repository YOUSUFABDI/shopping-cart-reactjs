export const initialState = {
  products: [],
  total: 0,
};

const shopReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_TO_CART":
      return {
        ...state,
        products: payload.products,
      };
    case "DELETE_FROM_CART":
      return {
        ...state,
        products: payload.products,
      };
    case "CALCULATE":
      return {
        ...state,
        total: payload,
      };
    default:
      throw new Error("something is wrong");
  }
};

export default shopReducer;
