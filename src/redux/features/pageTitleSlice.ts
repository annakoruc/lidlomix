import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: { title: string } = { title: "recipes" };

const pageTitleSlice = createSlice({
  name: "pageTitle",
  initialState,
  reducers: {
    setCurrentPageTitle: (state, action: PayloadAction<string>) => {
      state.title = action.payload;
    },
  },
});

export const { setCurrentPageTitle } = pageTitleSlice.actions;

export default pageTitleSlice.reducer;
