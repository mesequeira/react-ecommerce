import * as z from "zod";
import { Response } from "../../../../models/common/response/response";
import { useMutation } from "@tanstack/react-query";
import { authenticationService } from "../../../../api/services/authentication/AuthenticationService";
import FormContent from "./FormContent";
import FormWrapper from "../../../../common/components/form/wrapper/FormWrapper";
import { type Login } from "../../../../models/services/authentication/login/login.auth";
import { useErrorsStore } from "../../../../store/errors/errors.store";
import { useNavigate } from "react-router-dom";
import { setTokenInLocaltorage } from "../../../../common/helpers/token/token.helper";

const loginSchema = z.object({
    email: z.string().email(),
    password: z
        .string()
        .nonempty("Password cannot be empty.")
        .min(8, "Password need be longer than 8 characters."),
});

const FormLogin: React.FC = () => {
    const navigate = useNavigate();
    const handleErrors = useErrorsStore((state) => state.handleErrors);
    const mutation = useMutation({
        onMutate: () => handleErrors([]),
        mutationFn: async (data: Login) => authenticationService.login(data),
        onSuccess: async (response: Response<string>) => {
            const { content, errors, statusCode } = response;
            if (statusCode === 500 || errors) {
                handleErrors(errors);
                return;
            }
            setTokenInLocaltorage(content);
            navigate("/")
        },
    });

    return (
        <FormWrapper schema={loginSchema} onSubmit={mutation.mutateAsync}>
            <FormContent loading={mutation.isLoading} />
        </FormWrapper>
    );
};

export default FormLogin;
