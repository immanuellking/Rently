import { configureStore } from "@reduxjs/toolkit";
import subMenuReducer from "../features/subMenu/subMenuSlice";

const store = configureStore({
  reducer: {
    subMenu: subMenuReducer,
  },
});
