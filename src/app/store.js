import { configureStore } from "@reduxjs/toolkit";
import subMenuReducer from "../features/subMenu/subMenuSlice";
import apartmentsReducer from "../features/Rent/apartmentsSlice";
import userInfoReducer from "../features/user/userInfoSlice";

const store = configureStore({
  reducer: {
    subMenu: subMenuReducer,
    apartments: apartmentsReducer,
    userInfo: userInfoReducer,
  },
});

export default store;
