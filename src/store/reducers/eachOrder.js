import { TYPES } from "../actions/types";
import initialState from "./initialState";

const OrderReducer = (state = initialState.order, action) => {
  switch (action.type) {
    case TYPES.EACH_ORDER:
      return {
        ...state,
        order: action.payload,
      };
    default:
      return state;
  }
};
export default OrderReducer;
