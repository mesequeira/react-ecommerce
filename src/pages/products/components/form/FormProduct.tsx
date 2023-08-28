import React from "react";
import FormContent from "./FormContent";
import FormWrapper from "../../../../common/components/form/wrapper/FormWrapper";
import {
    type Product,
    productSchema,
} from "../../../../models/services/products";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { productsService } from "../../../../api/services/products/ProductsService";
import { type Response } from "../../../../models/common/response/response";
import { useErrorsStore } from "../../../../store/errors/errors.store";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import { QUERY_KEY } from "../../../../consts/queries/queries.key";
import Loading from "../../../../common/components/loading/Loading";

const FormProduct: React.FC = () => {
    const handleErrors = useErrorsStore((state) => state.handleErrors);
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const { id } = useParams();
    const isEdit = !!id;

    const { data, isFetching } = useQuery<Product>({
        queryKey: [`${QUERY_KEY.PRODUCT}_${id}`],
        queryFn: () => productsService.getProduct(id),
        enabled: isEdit,
    });

    const mutation = useMutation({
        onMutate: () => handleErrors([]),
        mutationFn: async (data: Product) => {
            if (isEdit) {
                return await productsService.updateProduct(id, data);
            }

            return await productsService.createProduct(data);
        },
        onSuccess: async (response: Response<boolean>) => {
            debugger
            const { errors, statusCode } = response;

            if (errors) {
                handleErrors(errors);
                return;
            }

            if (statusCode === 200) {
                await queryClient.refetchQueries<Product[]>({
                    queryKey: [QUERY_KEY.PRODUCTS],
                });
                toast.success("Your Product was successfully created or updated.");
                navigate("/products");
            }
        },
    });

    if (isFetching) return <Loading />;

    return (
        <FormWrapper onSubmit={mutation.mutateAsync} schema={productSchema}>
            <FormContent loading={mutation.isLoading} product={data} />
        </FormWrapper>
    );
};

export default FormProduct;
