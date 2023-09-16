import { configureStore } from "@reduxjs/toolkit";
import subMenuReducer from "../features/subMenu/subMenuSlice";
import apartmentsReducer from "../features/Rent/apartmentsSlice";

const store = configureStore({
  reducer: {
    subMenu: subMenuReducer,
    apartments: apartmentsReducer,
  },
});

export default store;
