import React from "react";
import FormControlLabel from "@mui/material/FormControlLabel/FormControlLabel";
import Checkbox from "@mui/material/Checkbox/Checkbox";
import FormHelperText from "@mui/material/FormHelperText/FormHelperText";
import { Controller, useFormContext } from "react-hook-form";
import { CheckBoxControllerProps } from "../../../models/props/controllers/fields.controller.props";

const CheckBoxController: React.FC<CheckBoxControllerProps> = ({
    attributeName,
    checkBoxProps,
    controlProps,
    label,
}) => {
    const {
        control,
        formState: { errors },
    } = useFormContext();

    return (
        <React.Fragment>
            <FormControlLabel
                control={
                    <Controller
                        name={attributeName}
                        control={control}
                        {...controlProps}
                        render={({ field }) => (
                            <Checkbox
                                {...field}
                                checked={field.value}
                                onChange={field.onChange}
                                {...checkBoxProps}
                            />
                        )}
                    />
                }
                label={label}
            />

            {errors[attributeName] && (
                <FormHelperText error={errors[attributeName] !== undefined}>
                    {errors[attributeName]?.message?.toString()}
                </FormHelperText>
            )}
        </React.Fragment>
    );
};

export default CheckBoxController;
