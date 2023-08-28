import { ChildrenProps } from "../common.props";

export interface DialogContainerProps extends ChildrenProps {
  title: string;
  onAcceptAction?: () => void;
}
