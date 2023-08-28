import React, { useEffect } from "react";
import { useErrorsStore } from "../../../../store/errors/errors.store";
import Alert from "@mui/material/Alert/Alert";
import AlertTitle from "@mui/material/AlertTitle/AlertTitle";

const FormErrors: React.FC = () => {
    const errors = useErrorsStore((state) => state.errors);

    useEffect(() => { }, [errors]);

    if (!errors || errors?.length === 0) return null;

    return (
        <Alert severity="error">
            <AlertTitle>Error</AlertTitle>
            <ul>
                {errors?.map((error, _) => (
                    <li>
                        <span key={error.code}>
                            <strong>{error.code}: </strong>
                            {error.message}
                        </span>
                    </li>
                ))}
            </ul>
        </Alert>
    );
};

export default FormErrors;
