import React from "react";
import LinearProgress from "@mui/material/LinearProgress/LinearProgress";
import Typography from "@mui/material/Typography/Typography";
import Box from "@mui/material/Box/Box";
import { Stack } from "@mui/material";

const Loading: React.FC = () => {
    return (
        <Stack
            direction="column"
            alignItems="center"
            justifyContent="center"
            height="100vh"
        >
            <Box component="div" width="10%" textAlign="center">
                <Typography variant="subtitle1">Loading...</Typography>
                <LinearProgress />
            </Box>
        </Stack>
    );
};

export default Loading;
