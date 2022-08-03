import { IAction } from "../ActionTypes";
import { IExampleState } from "../StoreTypes";

const exampleReducers = {
  setValue(state: IExampleState, action: IAction<number>) {
    state.value = action.payload;
  },
};

export default exampleReducers;
