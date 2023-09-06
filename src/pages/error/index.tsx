import React from "react";
import "./style.scss";
import Box from "@mui/material/Box/Box";
import Stack from "@mui/material/Stack/Stack";
import Typography from "@mui/material/Typography/Typography";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ServerError: React.FC = () => {
    const navigate = useNavigate();
    return (
        <section className="error">
            <Stack
                direction="column"
                alignItems="center"
                justifyContent="center"
                height="100vh"
            >
                <Typography variant="h1">404</Typography>
                <Typography variant="subtitle1">
                    Look like you're lost the page you are looking for not avaible!
                </Typography>
                <Box component="div" paddingY={2}>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => navigate(-1)}
                    >
                        Go to home
                    </Button>
                </Box>
            </Stack>
        </section>
    );
};

export default ServerError;
