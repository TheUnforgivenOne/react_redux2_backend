import { combineReducers } from "redux";
import goodsReducer from "./productsReducer";

const rootReducer = combineReducers({
  products: goodsReducer,
});

export default rootReducer;
