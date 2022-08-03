import { createSlice } from "@reduxjs/toolkit";
import { initialExampleState } from "./initialState";
import exampleReducers from "./reducers";

export const exampleStateSlice = createSlice({
  name: "exampleState",
  initialState: initialExampleState(),
  reducers: exampleReducers,
});
