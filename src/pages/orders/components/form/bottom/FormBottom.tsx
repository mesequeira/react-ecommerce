import Grid from "@mui/material/Grid/Grid";
import Typography from "@mui/material/Typography/Typography";
import React from "react";
import TextFieldController from "../../../../../common/components/controller/TextFieldController";
import SelectController from "../../../../../common/components/controller/SelectController";
import categoryTypeMap from "../../map/categoryTypeMap";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { categoriesService } from "../../../../../api/services/categories/CategoriesService";
import { QUERY_KEY } from "../../../../../consts/queries/queries.key";
import {
    type Product,
    type Category,
} from "../../../../../models/services/products";
import { useParams } from "react-router-dom";

const FormBottom: React.FC = () => {
    const { id } = useParams();
    const { data, isLoading } = useQuery<Category[]>({
        queryKey: [QUERY_KEY.CATEGORIES],
        queryFn: categoriesService.getCategories,
    });
    const queryClient = useQueryClient();
    const product = queryClient.getQueryData<Product>([`${QUERY_KEY.PRODUCT}_${id}`]);
    return (
        <React.Fragment>
            <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>
                <Typography variant="h6" color="primary">
                    Inventory
                </Typography>
            </Grid>

            <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>
                <Typography variant="h6" color="primary">
                    Category
                </Typography>
            </Grid>

            <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                <TextFieldController
                    controlProps={{
                        defaultValue: product?.inventory?.quantity ?? 0,
                    }}
                    attributeName="inventory.quantity"
                    textfieldProps={{
                        label: "Quantity",
                        placeholder: "100",
                        type: "number",
                    }}
                />
            </Grid>

            <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                <SelectController
                    controlProps={{
                        defaultValue: product?.categoryId ?? "",
                    }}
                    attributeName="categoryId"
                    selectProps={{
                        label: "Type",
                        color: "primary",
                        placeholder: "Car, Bike, Truck, etc...",
                        disabled: isLoading,
                    }}
                    optionMap={categoryTypeMap}
                    data={data ?? []}
                />
            </Grid>
        </React.Fragment>
    );
};

export default FormBottom;
