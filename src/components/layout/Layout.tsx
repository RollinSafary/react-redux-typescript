import { Flex } from "../shared/Flex/Flex";
import { IParentComponent } from "../types/types";

export const Layout = (props: IParentComponent) => {
  return <Flex>{props.children}</Flex>;
};
