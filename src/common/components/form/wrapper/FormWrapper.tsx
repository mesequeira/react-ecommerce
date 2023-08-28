import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { type FormWrapperProps } from "../../../../models/props/form/wrapper/form.wrapper.props";

const FormWrapper: React.FC<FormWrapperProps> = ({
    children,
    schema,
    onSubmit,
}) => {
    const methods = useForm({ resolver: zodResolver(schema) });

    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
        </FormProvider>
    );
};

export default FormWrapper;