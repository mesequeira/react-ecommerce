import Container from "@mui/material/Container/Container";
import Stack from "@mui/material/Stack/Stack";
import React from "react";
import Logo from "../../common/components/layout/navigation/Logo";
import logoPath from "../../assets/images/logo.png";
import FormLogin from "./components/form/FormLogin";
import Box from "@mui/material/Box/Box";

const Login: React.FC = () => {
    return (
        <Container maxWidth="xs">
            <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                height="100vh"
            >
                <Box
                    className="card-container"
                    padding="20px"
                    minHeight="auto"
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                >
                    <Logo
                        alt="Logo of the company"
                        path={logoPath}
                        settings={{
                            height: '50px',
                            padding: "20px 0 45px 0"
                        }}
                    />

                    <FormLogin />
                </Box>
            </Stack>
        </Container>
    );
};

export default Login;
