import { auth } from "@/firebase/firebaseConfig";
import { LoggedUserProps } from "@/types";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { onAuthStateChanged } from "firebase/auth";
import store from "../store";

const initialState: { loading: boolean; user: LoggedUserProps | null } = {
  loading: false,
  user: null,
};

export const setLoggedUser = createAsyncThunk(
  "user/logged",
  async (user: LoggedUserProps) => {
    console.log("user", user);
    return await user;
  }
);

const loggedUserSlice = createSlice({
  name: "loggedUser",
  initialState,
  reducers: {
    loggedOutUser: (state) => {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    //Random Recipe
    builder.addCase(setLoggedUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(setLoggedUser.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
    });
    builder.addCase(setLoggedUser.rejected, (state, action) => {
      state.loading = false;
      console.log("rejected", action.error);
    });
  },
});

export const { loggedOutUser } = loggedUserSlice.actions;

export default loggedUserSlice.reducer;
