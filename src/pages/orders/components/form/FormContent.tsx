import React from "react";
import Box from "@mui/material/Box/Box";
import Typography from "@mui/material/Typography/Typography";
import TextFieldController from "../../../../common/components/controller/TextFieldController";
import Grid from "@mui/material/Grid/Grid";
import FormActions from "../../../../common/components/form/actions/FormActions";
import FormDiscount from "./discount/FormDiscount";
import FormBottom from "./bottom/FormBottom";
import CheckBoxController from "../../../../common/components/controller/CheckBoxController";
import FormErrors from "../../../../common/components/form/errors/FormErrors";
import { FormProductProps } from "../../../../models/props/products/products.form.props";
import { useNavigate } from "react-router-dom";

const FormContent: React.FC<FormProductProps> = ({ loading, product }) => {
    const navigate = useNavigate();
    return (
        <Box component="div" className="card-container" padding={4}>
            <FormErrors />
            <Grid container gap={0} spacing={4}>
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                    <Typography variant="h5" color="primary">
                        Create new Product
                    </Typography>
                </Grid>

                <Grid item xl={3} lg={3} md={4} sm={12} xs={12}>
                    <TextFieldController
                        controlProps={{
                            defaultValue: product?.name ?? "",
                        }}
                        attributeName="name"
                        textfieldProps={{
                            placeholder: "Audi A4 2021 2.0",
                            label: "Name",
                        }}
                    />
                </Grid>

                <Grid item xl={3} lg={3} md={4} sm={12} xs={12}>
                    <TextFieldController
                        controlProps={{
                            defaultValue: product?.description ?? "",
                        }}
                        attributeName="description"
                        textfieldProps={{
                            placeholder: "An amazing car with a lot of features",
                            label: "Description",
                        }}
                    />
                </Grid>

                <Grid item xl={3} lg={3} md={4} sm={12} xs={12}>
                    <TextFieldController
                        controlProps={{
                            defaultValue: product?.price ?? 0,
                        }}
                        attributeName="price"
                        textfieldProps={{
                            placeholder: "1,999.99",
                            label: "Price",
                            type: "number",
                        }}
                    />
                </Grid>

                <Grid item xl={3} lg={3} md={4} sm={12} xs={12}>
                    <TextFieldController
                        controlProps={{
                            defaultValue: product?.sku ?? "",
                        }}
                        attributeName="sku"
                        textfieldProps={{
                            label: "Sku",
                            placeholder: "4225-776-3234",
                        }}
                    />
                </Grid>

                <Grid item xl={3} lg={3} md={4} sm={12} xs={12}>
                    <CheckBoxController
                        controlProps={{
                            defaultValue: product?.status ?? false,
                        }}
                        attributeName="active"
                        label="Status"
                        checkBoxProps={{
                            color: "primary",
                        }}
                    />
                </Grid>

                <FormDiscount />
                <FormBottom />

                <FormActions loading={loading} onCancel={() => navigate(-1)} />
            </Grid>
        </Box>
    );
};

export default FormContent;
