import { GridColDef } from "@mui/x-data-grid";

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
];
