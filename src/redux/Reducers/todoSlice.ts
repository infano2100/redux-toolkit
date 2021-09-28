import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ItemInterface {
  title?: string | undefined;
  completed?: boolean;
}
export interface initialStateInterface {
  items: ItemInterface[];
}

export const todoSlice = createSlice({
  name: "todos",
  initialState: {
    items: [],
  } as initialStateInterface,
  reducers: {
    addItem: (
      state: initialStateInterface,
      action: PayloadAction<ItemInterface>
    ) => {
      // state?.items.push(action.payload);
      return { ...state, items: [...state.items, action.payload] };
    },
    setComplete: (
      state: initialStateInterface,
      action: PayloadAction<ItemInterface>
    ) => {
      const todo = state.items.find(
        (todo: ItemInterface) => todo.title === action.payload.title
      );
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
  },
});

export default todoSlice.reducer;

export const { addItem, setComplete } = todoSlice.actions;

export const getTodos = (state: any) => state.todos.items;
