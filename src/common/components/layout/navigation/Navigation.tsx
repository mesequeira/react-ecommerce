import React from "react";
import Box from "@mui/material/Box";
import Appbar from "@mui/material/AppBar";
import Grid from "@mui/material/Grid/Grid";
import Logo from "./Logo";
import logo from "../../../../assets/images/logo.png";
import NavigationMenu from "./NavigationMenu";
import "./navigation.scss";

const Navigation: React.FC = () => {
    return (
        <Appbar
            position="static"
            sx={{
                backgroundColor: "#fff",
                height: { lg: "80px", md: "60px", sm: "60px", xs: "60px" },
                boxShadow: "none",
                borderBottom: "1px solid #DEDEDE",
            }}
        >
            <Box component="div" className="vs-container header-container">
                <Grid
                    container
                    sx={{ alignItems: "center" }}
                    className="logo-container"
                >
                    <Grid item xs={1} sx={{ display: "flex", justifyContent: "start" }}>
                        <Logo
                            path={logo}
                            alt="Ecommerce Logo"
                            settings={{
                                height: { lg: "40px", md: "20px", sm: "20px", xs: "20px" },
                                padding: "0 35px",
                            }}
                        />
                    </Grid>
                    <Grid
                        item
                        xs={11}
                        sx={{ display: "flex", justifyContent: "flex-end" }}
                    >
                        <NavigationMenu />
                    </Grid>
                </Grid>
            </Box>
        </Appbar>
    );
};

export default Navigation;
