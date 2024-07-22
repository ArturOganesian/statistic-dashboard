import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { makeStore, RootState } from "../store";
import axios from "axios";

export const todoThunk = createAsyncThunk("todo", async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/todos",
  );

  try {
    return response.data;
  } catch (err: any) {
    console.log(err.message);
  }
});

type initialStateType = {
  todos: object[] | [];
  isLoading: boolean;
  isError: null | object;
};

const initialState: initialStateType = {
  todos: [],
  isLoading: false,
  isError: null,
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(todoThunk.pending.type, (state) => {
        state.isLoading = true;
      })
      .addCase(todoThunk.fulfilled.type, (state, action: any) => {
        state.isLoading = false;
        state.todos = action.payload;
      })
      .addCase(todoThunk.rejected.type, (state, action: any) => {
        state.isLoading = false;
        state.isError = action.payload;
      });
  },
});

export const getTodos = (state: RootState) => state.todoData;
export default todoSlice.reducer;
