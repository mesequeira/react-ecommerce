import Grid from "@mui/material/Grid/Grid";
import Typography from "@mui/material/Typography/Typography";
import React from "react";
import TextFieldController from "../../../../../common/components/controller/TextFieldController";
import { useQueryClient } from "@tanstack/react-query";
import { Product } from "../../../../../models/services/products";
import { QUERY_KEY } from "../../../../../consts/queries/queries.key";
import { useParams } from "react-router-dom";

const FormDiscount: React.FC = () => {
    const queryClient = useQueryClient();
    const { id } = useParams();
    const product = queryClient.getQueryData<Product>([
        `${QUERY_KEY.PRODUCT}_${id}`,
    ]);

    return (
        <React.Fragment>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                <Typography variant="h6" color="primary">
                    Discount
                </Typography>
            </Grid>

            <Grid item xl={3} lg={3} md={4} sm={12} xs={12}>
                <TextFieldController
                    controlProps={{
                        defaultValue: product?.discount?.name ?? "",
                    }}
                    attributeName="discount.name"
                    textfieldProps={{
                        label: "Name",
                        placeholder: "3x2 50% off",
                    }}
                />
            </Grid>

            <Grid item xl={3} lg={3} md={4} sm={12} xs={12}>
                <TextFieldController
                    controlProps={{
                        defaultValue: product?.discount?.description ?? "",
                    }}
                    attributeName="discount.description"
                    textfieldProps={{
                        label: "Description",
                        placeholder: "Buy 3 and pay 2, 50% off in the third one",
                    }}
                />
            </Grid>

            <Grid item xl={3} lg={3} md={4} sm={12} xs={12}>
                <TextFieldController
                    controlProps={{
                        defaultValue: product?.discount?.discountPercent ?? 0,
                    }}
                    attributeName="discount.discountPercent"
                    textfieldProps={{
                        label: "Percent Discount",
                        placeholder: "50",
                    }}
                />
            </Grid>
        </React.Fragment>
    );
};

export default FormDiscount;
