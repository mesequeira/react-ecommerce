import React from "react";
import { DataTableContainerProps } from "../../../models/props/table/data.table";
import Button from "@mui/material/Button/Button";
import RefreshIcon from "@mui/icons-material/Refresh";
import Box from "@mui/material/Box/Box";
import Grid from "@mui/material/Grid/Grid";
import { DataGrid } from "@mui/x-data-grid/DataGrid/DataGrid";
import { GridToolbarColumnsButton } from "@mui/x-data-grid/components/toolbar/GridToolbarColumnsButton";
import { GridToolbarFilterButton } from "@mui/x-data-grid/components/toolbar/GridToolbarFilterButton";

const DataGridContainer: React.FC<DataTableContainerProps> = ({
    isLoading,
    refetch,
    props,
}) => {
    return (
        <DataGrid
            sx={{ height: "80vh", width: "100%", border: "none", padding: 2 }}
            density="compact"
            loading={isLoading}
            {...props}
            slots={{
                toolbar: () => (
                    <Box
                        component="div"
                        style={{
                            display: "flex",
                            alignItems: "center",
                            marginBottom: 5,
                            marginTop: 5,
                        }}
                    >
                        <Grid container gap={2}>
                            <GridToolbarColumnsButton />
                            <GridToolbarFilterButton />

                            <Button size="small" color="primary" onClick={async () => refetch()}>
                                <RefreshIcon sx={{ mr: 1, fontSize: 20 }} />
                                Refresh
                            </Button>
                        </Grid>
                    </Box>
                ),
            }}
        />
    );
};

export default DataGridContainer;
