import React from "react";
import TextFieldController from "../../../../common/components/controller/TextFieldController";
import FormErrors from "../../../../common/components/form/errors/FormErrors";
import { LoadingProps } from "../../../../models/props/common.props";
import Grid from "@mui/material/Grid/Grid";
import { useFormContext } from "react-hook-form";
import LoadingButton from "@mui/lab/LoadingButton/LoadingButton";

const FormContent: React.FC<LoadingProps> = ({ loading }) => {
    const {
        formState: { isValid },
    } = useFormContext();
    return (
        <>
            <Grid container gap={4}>
                <FormErrors />
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                    <TextFieldController
                        attributeName="email"
                        textfieldProps={{
                            placeholder: "user@email.com",
                            label: "Email",
                        }}
                    />
                </Grid>

                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                    <TextFieldController
                        attributeName="password"
                        textfieldProps={{
                            placeholder: "*********",
                            label: "Password",
                            type: "password",
                        }}
                    />
                </Grid>

                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                    <LoadingButton
                        loading={loading}
                        disabled={!isValid}
                        type="submit"
                        variant="outlined"
                        fullWidth
                    >
                        Log In
                    </LoadingButton>
                </Grid>
            </Grid>
        </>
    );
};

export default FormContent;
