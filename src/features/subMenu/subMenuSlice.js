import { createSlice } from "@reduxjs/toolkit";
import { subLinks } from "../../data";

const initialState = {
  subLinks,
  page: {},
  isSubMenuOpen: false,
};

const subMenuSlice = createSlice({
  name: "subMenu",
  initialState,
  reducers: {},
});

export default subMenuSlice.reducer
