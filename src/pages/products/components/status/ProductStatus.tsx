import React from "react";
import { ProductStatusProps } from "../../../../models/props/products/products.columns.props";
import Chip from "@mui/material/Chip/Chip";
import SuccessIcon from "@mui/icons-material/Done";
import ErrorIcon from "@mui/icons-material/Error";

const ProductStatus: React.FC<ProductStatusProps> = ({ status }) => {
    if (!status)
        return (
            <Chip
                label="Inactive"
                size="small"
                color="warning"
                icon={<ErrorIcon />}
                variant="outlined"
            />
        );

    return (
        <Chip
            label="Active"
            size="small"
            color="success"
            icon={<SuccessIcon />}
            variant="outlined"
        />
    );
};

export default ProductStatus;
