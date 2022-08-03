import { IParentComponent } from "../../types/types";
import "./Flex.css";

export const Flex = (props: IParentComponent) => {
  return <div className="flex-container">{props?.children}</div>;
};
