import Button from "@mui/material/Button/Button";
import Grid from "@mui/material/Grid/Grid";
import React from "react";
import LoadingButton from "@mui/lab/LoadingButton";
import { FormActionsProps } from "../../../../models/props/form/actions/form.actions.props";

const FormActions: React.FC<FormActionsProps> = ({ onCancel, loading }) => {
    return (
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            <Grid container spacing={2} gap={0} justifyContent="end">
                <Grid
                    item
                    xl={2}
                    lg={2}
                    md={2}
                    sm={12}
                    xs={12}
                    display="flex"
                    justifyContent="end"
                >
                    <Button
                        type="button"
                        variant="outlined"
                        color="error"
                        onClick={onCancel}
                        fullWidth
                    >
                        Cancel
                    </Button>
                </Grid>
                <Grid
                    item
                    xl={2}
                    lg={2}
                    md={2}
                    sm={12}
                    xs={12}
                    display="flex"
                    justifyContent="end"
                >
                    <LoadingButton
                        loading={loading}
                        type="submit"
                        variant="outlined"
                        fullWidth
                    >
                        Accept
                    </LoadingButton>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default FormActions;
