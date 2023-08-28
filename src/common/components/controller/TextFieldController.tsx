import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import FormControl from "@mui/material/FormControl/FormControl";
import FormHelperText from "@mui/material/FormHelperText/FormHelperText";
import { TextFieldControllerProps } from "../../../models/props/controllers/fields.controller.props";
import { TextField } from "@mui/material";

const TextFieldController: React.FC<TextFieldControllerProps> = ({
    controlProps,
    textfieldProps: inputProps,
    attributeName,
}) => {
    const {
        control,
        formState: { errors },
    } = useFormContext();

    return (
        <Controller
            control={control}
            name={attributeName}
            {...controlProps}
            render={({ field }) => (
                <FormControl fullWidth>
                    <TextField
                        {...field}
                        {...inputProps}
                        id={attributeName}
                        value={field.value ?? ""}
                        onChange={field.onChange}
                        error={!!errors[attributeName]}
                        select={inputProps?.select ?? false}
                    />
                    <FormHelperText error={errors[attributeName] !== undefined}>
                        {errors[attributeName]?.message?.toString()}
                    </FormHelperText>
                </FormControl>
            )}
        />
    );
};

export default TextFieldController;
