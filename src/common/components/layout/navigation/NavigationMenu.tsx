import React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "@mui/material/Link/Link";
import { Link as LinkRouter } from "react-router-dom";
import Drawer from "@mui/material/Drawer/Drawer";
import Divider from "@mui/material/Divider/Divider";
import { useDrawerStore } from "../../../../store/drawer/drawer.store";
import { routes } from "../../../../consts/routes/routes.navigation";

const NavigationMenu: React.FC = () => {
    const { anchorElNav, handleOpenNavMenu, handleCloseNavMenu } = useDrawerStore(
        (state) => state
    );
    return (
        <React.Fragment>
            <Box
                sx={{
                    display: { xs: "flex", md: "none" },
                    padding: { xs: "0 40px" },
                    justifyContent: "flex-end",
                }}
            >
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                >
                    <MenuIcon />
                </IconButton>
            </Box>
            <Drawer
                keepMounted={false}
                sx={{
                    display: {
                        xl: "none",
                        lg: "none",
                        md: "none",
                        sm: "block",
                        xs: "block",
                    },
                    width: "100%",
                }}
                anchor="right"
                open={Boolean(anchorElNav)}
            >
                <Box
                    width={{
                        xl: "50vh",
                        lg: "50vh",
                        md: "50vh",
                        sm: "50vh",
                        xs: "30vh",
                    }}
                    role="presentation"
                >
                    <Box
                        padding="10px 25px"
                        textAlign="right"
                        component="div"
                        onClick={handleCloseNavMenu}
                        fontSize={25}
                    >
                        <Link
                            key={1}
                            underline="none"
                            className="navigation-link exit-button"
                        >
                            X
                        </Link>
                    </Box>
                    <Divider sx={{ width: "100%" }} />
                    {routes.map(({ label, path }) => (
                        <LinkRouter to={path} className="navigation-link">
                            <Box
                                key={label}
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    textAlign: "start",
                                    paddingY: 2,
                                    margin: "0 !important",
                                }}
                            >
                                <Link
                                    key={label}
                                    onClick={handleCloseNavMenu}
                                    underline="none"
                                    className="navigation-link"
                                >
                                    {label}
                                </Link>
                            </Box>
                        </LinkRouter>
                    ))}
                </Box>
            </Drawer>
            <Box
                sx={{
                    flexGrow: 1,
                    display: { xs: "none", md: "flex" },
                    justifyContent: "center",
                }}
            >
                {routes.map(({ path, label }) => (
                    <LinkRouter
                        to={path}
                        className="navigation-link"
                    >
                        <Box
                            key={label}
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                            }}
                        >
                            <Link key={label} underline="none" className="navigation-link">
                                {label}
                            </Link>
                        </Box>
                    </LinkRouter>
                ))}
            </Box>
        </React.Fragment>
    );
};

export default NavigationMenu;
