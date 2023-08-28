import { GridValidRowModel, DataGridProps } from "@mui/x-data-grid";

export interface DataTableContainerProps {
  isLoading: boolean;
  refetch: () => void;
  props: DataGridProps;
}
