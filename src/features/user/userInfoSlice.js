import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../config/firebase";
import { auth } from "../../config/firebase";

const initialState = {
  firstName: "",
  lastName: "",
  loading: false,
};

export const fetchUserInfo = createAsyncThunk(
  "user/fetchUserInfo",
  async (email) => {
    const userCollectionRef = collection(db, "users");
    const q = query(userCollectionRef, where("email", "==", email));
    console.log("STTTTTTTAAAAAAARRRRRRTTTT")

    try {
      const querySnapshot = await getDocs(q);
      console.log("query Snapshot!!", querySnapshot);

      if (querySnapshot.docs.length === 0) {
        console.log("No user found with this email.");
        return null;
      }

  
      const userDoc = querySnapshot.docs[0];
      const userData = userDoc.data();
      console.log("User data:", userData);

      return userData;
    } catch (error) {
      console.log(error);
      return error
    }
  }
);

const userInfoSlice = createSlice({
  name: "user",
  initialState,

  extraReducers: (builder) => {
    builder.addCase(fetchUserInfo.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUserInfo.fulfilled, (state, payload) => {
        state.loading = false
        console.log("Paylooooaaaadd", payload);
    })
    builder.addCase(fetchUserInfo.rejected, (state) => {
        state.loading = false;
        state.firstName = "";
        state.lastName= "";
    })
  },
});


export default userInfoSlice.reducer