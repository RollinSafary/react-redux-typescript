import { createSelector } from "reselect";
import { IExampleState } from "../StoreTypes";

const exampleSelector = (state: any) => {
  return state.default.exampleState;
};

const value = createSelector(
  [exampleSelector],
  (exampleState: IExampleState) => {
    return exampleState.value;
  }
);

export default {
  value,
};
