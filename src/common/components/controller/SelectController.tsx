import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import FormControl from "@mui/material/FormControl/FormControl";

import FormHelperText from "@mui/material/FormHelperText/FormHelperText";
import { SelectControllerProps } from "../../../models/props/controllers/fields.controller.props";
import Select from "@mui/material/Select/Select";
import { MenuItem } from "@mui/material";

const SelectController: React.FC<SelectControllerProps> = ({
    attributeName,
    controlProps,
    selectProps,
    data,
    optionMap
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
                    <Select
                        {...field}
                        {...selectProps}
                        id={attributeName}
                        value={field.value ?? ""}
                        onChange={field.onChange}
                        error={!!errors[attributeName]}
                    >
                        {data?.map(optionMap)}
                    </Select>
                    <FormHelperText error={errors[attributeName] !== undefined}>
                        {errors[attributeName]?.message?.toString()}
                    </FormHelperText>
                </FormControl>
            )}
        />
    );
};

export default SelectController;
