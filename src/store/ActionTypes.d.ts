import { Action } from "redux";

// since we're using @redux/toolkit, we no longer need to define action types separately
// and we can use simplified structure

export interface IAction<P> extends Action<string> {
  payload: P;
}
