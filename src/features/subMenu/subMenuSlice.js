import { createSlice } from "@reduxjs/toolkit";
import { subLinks } from "../../data";

const initialState = {
  headerLinks: subLinks,
  headerSubLinks: {
    page: "",
    links: []
  },
  isSubMenuOpen: false,
  location:{}
};

const subMenuSlice = createSlice({
  name: "subMenu",
  initialState,
  reducers: {
    openSubMenu: (state, action) => {
        console.log(action.payload)
        const {pageLink, left, bottom} = action.payload
      const pageData = state.headerLinks.find(
        (link) => link.page === pageLink
      );
      state.headerSubLinks = pageData;
      state.isSubMenuOpen = true;
      state.location = {left, bottom}
      console.log(state.location)
    },
    closeSubMenu: (state) => {
        state.isSubMenuOpen = false;
    }
  },
});

export default subMenuSlice.reducer;
export const { openSubMenu, closeSubMenu } = subMenuSlice.actions;
