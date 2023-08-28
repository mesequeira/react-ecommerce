import { LoadingProps } from "../../common.props";

export interface FormActionsProps extends LoadingProps {
  onCancel?: () => void;
}
