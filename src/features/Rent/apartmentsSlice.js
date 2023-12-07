import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { db } from "../../config/firebase";
import { collection, getDocs, doc, getDoc } from "firebase/firestore";

const initialState = {
  apartments: [],
  singleApartment: {},
  loading: false,
  error: "",
};

export const fetchApartments = createAsyncThunk(
  "apartments/fetchApartments",
  async () => {
    const apartmentsCollectionRef = collection(db, "homes");

    try {
      const data = await getDocs(apartmentsCollectionRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      return filteredData;
    } catch (error) {
      console.log("SOMETHING WENT WRONG!!!!", error);
      throw error;
    }
  }
);

export const fetchSingleApartment = createAsyncThunk(
  "apartments/fetchSingleApartment",
  async (apartmentId) => {
    try {
      const apartmentDocRef = doc(db, "homes", apartmentId);
      const docSnap = await getDoc(apartmentDocRef);

      if (docSnap.exists()) {
        const apartmentData = { ...docSnap.data(), id: docSnap.id };
        return apartmentData;
      } else {
        console.log("Document does not exist!");
        return null; // or handle as per your requirement
      }
    } catch (error) {
      console.log("Error fetching single apartment:", error);
      throw error;
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
      const filteredData = action.payload;
      console.log("FULfilled", filteredData);
      state.apartments = filteredData;
      state.loading = false;
    });
    builder.addCase(fetchApartments.rejected, (state, action) => {
      state.loading = false;
      state.apartments = [];
      state.error = action.error.message;
    });
    builder.addCase(fetchSingleApartment.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchSingleApartment.fulfilled, (state, action) => {
      state.singleApartment = action.payload;
    });
    builder.addCase(fetchSingleApartment.rejected, (state, action) => {
      state.error = action.error.message
    });
  },
});

export default apartmentsSlice.reducer;
