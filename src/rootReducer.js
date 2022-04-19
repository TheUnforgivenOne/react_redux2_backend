import { combineReducers } from "redux";
import goodsReducer from "./productsReducer";
import cartReducer from "./cartReducer";

const rootReducer = combineReducers({
  cart: cartReducer,
  products: goodsReducer
});

export default rootReducer;
