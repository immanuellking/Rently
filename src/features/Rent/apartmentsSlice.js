import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { db } from "../../config/firebase";
import { collection, getDocs } from "firebase/firestore";

const initialState = {
  apartments: [],
  loading: false,
  error: "",
};

const apartmentsCollectionRef = collection(db, "homes");

export const fetchApartments = createAsyncThunk(
  "apartments/fetchApartments",
  async () => {
    try {
      const data = await getDocs(apartmentsCollectionRef);
    const filteredData = data.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    return filteredData;
    } catch (error) {
      console.log("SOMETHING WENT WRONG!!!!", error)
    }
  }
);

const apartmentsSlice = createSlice({
  name: "apartments",
  initialState,
  
  extraReducers: (builder) => {
    builder.addCase(fetchApartments.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchApartments.fulfilled, (state, action) => {
      const filteredData = action.payload
      console.log("FULfilled", filteredData);
      state.apartments = filteredData;
      state.loading = false;
    });
    builder.addCase(fetchApartments.rejected, (state, action) => {
      state.loading = false;
      state.apartments = [];
      state.error = action.error.message;
    });
  },
});

export default apartmentsSlice.reducer;
