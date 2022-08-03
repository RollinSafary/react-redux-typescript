import { AppDispatch } from "../store";
import { exampleStateSlice } from "./slice";

const { setValue } = exampleStateSlice.actions;

const updateValue = (value: number) => (dispatch: AppDispatch) => {
  dispatch(setValue(value));
};

export default {
  updateValue,
};
