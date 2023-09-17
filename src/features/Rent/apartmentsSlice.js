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
  () => {
    const data = getDocs(apartmentsCollectionRef);
    console.log(data);
    return data;
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
      const filteredData = action.payload.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      console.log(filteredData);
      state.apartments = filteredData;
      state.loading = false;
      console.log(state.apartments);
    });
    builder.addCase(fetchApartments.rejected, (state, action) => {
      state.loading = false;
      state.apartments = [];
      state.error = action.error.message;
    });
  },
});

export default apartmentsSlice.reducer;
