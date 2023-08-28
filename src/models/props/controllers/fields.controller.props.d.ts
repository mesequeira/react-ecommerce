import { ControllerRenderProps, FieldValues } from "react-hook-form";
import { CheckboxProps, SelectProps, TextFieldProps } from "@mui/material";

export interface FieldControllerProps {
  controlProps?: ControllerRenderProps<FieldValues>["control"];
  attributeName: string;
}

export interface TextFieldControllerProps extends FieldControllerProps {
  textfieldProps?: TextFieldProps;
}

export interface CheckBoxControllerProps extends FieldControllerProps {
  checkBoxProps?: CheckboxProps;
  label: string;
}

export interface SelectControllerProps extends FieldControllerProps {
  selectProps?: SelectProps;
  data: any[];
  optionMap: any;
}
