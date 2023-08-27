import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { ProductsTableProps } from "../../../../models/props/products/products.table.props";
import { columns } from "./utils/columns";
import { type Product } from "../../../../models/services/products/products";

const ProductsTable: React.FC<ProductsTableProps> = ({ loading, products }) => (
    <DataGrid
        loading={loading}
        columns={columns}
        rows={products}
        getRowId={(row: Product) => row.productId}
    />
);

export default ProductsTable;
