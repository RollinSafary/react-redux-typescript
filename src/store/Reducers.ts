import { AnyAction, combineReducers, Reducer } from "redux";
import exampleStateSlice from "./example";
import { IExampleState } from "./StoreTypes";

export interface IStoreReducers {
  example: Reducer<IExampleState, AnyAction>;
}

const reducers: IStoreReducers = {
  example: exampleStateSlice.reducer,
};

export default combineReducers(reducers);
