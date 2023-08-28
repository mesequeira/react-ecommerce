import React from "react";
import DataGridContainer from "../../../../common/components/table";
import { columns } from "./utils/columns";
import { ProductsTableProps } from "../../../../models/props/products/products.table.props";
import { useQueryClient } from "@tanstack/react-query";
import { QUERY_KEY } from "../../../../consts/queries/queries.key";
import Box from "@mui/material/Box/Box";

const ProductsTable: React.FC<ProductsTableProps> = ({ loading, products }) => {
    const queryClient = useQueryClient();
    return (
        <Box component="div" className="card-container">
            <DataGridContainer
                isLoading={loading}
                props={{
                    columns: columns,
                    rows: products,
                    getRowId: (row) => row.productId,
                }}
                refetch={() =>
                    queryClient.fetchQuery({ queryKey: [QUERY_KEY.PRODUCTS] })
                }
            />
        </Box>
    );
};

export default ProductsTable;
