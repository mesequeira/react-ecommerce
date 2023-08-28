import { GridColDef } from "@mui/x-data-grid";
import ProductStatus from "../../status/ProductStatus";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import Box from "@mui/material/Box/Box";
import { useNavigate } from "react-router-dom";

export const columns: GridColDef[] = [
  {
    field: "productId",
    headerName: "Id",
    width: 100,
  },
  {
    field: "name",
    headerName: "Name",
    width: 200,
  },
  {
    field: "sku",
    headerName: "Sku",
    width: 200,
  },
  {
    field: "created",
    headerName: "Date Created",
    width: 200,
  },
  {
    field: "modified",
    headerName: "Date Modified",
    renderCell: (params) => params.value ?? "Not modified yet",
    width: 200,
  },
  {
    field: "quantity",
    headerName: "Quantity",
    valueGetter: (params) =>
      params.row.inventory?.quantity.toLocaleString() ?? 0,
    width: 100,
  },
  {
    field: "category",
    headerName: "Category",
    valueGetter: (params) => params.row.category?.type ?? "No category",
    width: 150,
  },
  {
    field: "status",
    headerName: "Status",
    width: 150,
    renderCell: (params) => <ProductStatus status={params.value} />,
  },
  {
    field: "actions",
    renderCell: (params) => {
      const navigate = useNavigate();
      return (
        <Box
          component="span"
          onClick={() => navigate(`/products/edit/${params.row.productId}`)}
        >
          <BorderColorOutlinedIcon />
        </Box>
      );
    },
  },
];
