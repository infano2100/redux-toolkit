import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface initialStateInterface {
  title: string;
  content: string;
}

export const storesSlice = createSlice({
  name: "stores",
  initialState: {
    title: "",
    content: "",
  } as initialStateInterface,
  reducers: {
    addTitle: (state: initialStateInterface, action: PayloadAction<string>) => {
      return { ...state, title: action.payload };
    },
    addContent: (
      state: initialStateInterface,
      action: PayloadAction<string>
    ) => {
      return { ...state, content: action.payload };
    },
  },
});

export default storesSlice.reducer;

export const { addTitle, addContent } = storesSlice.actions;

export const getData = (state: any) => state.stores;
