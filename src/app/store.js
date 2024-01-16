import { configureStore } from "@reduxjs/toolkit";
import apartmentsReducer from "../features/Rent/apartmentsSlice";
import userInfoReducer from "../features/user/userInfoSlice";

const store = configureStore({
  reducer: {
    apartments: apartmentsReducer,
    userInfo: userInfoReducer,
  },
});

export default store;
