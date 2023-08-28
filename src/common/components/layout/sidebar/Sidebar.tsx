import React, { useState } from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Drawer, DrawerHeader } from "./Drawer";
import { routes } from "../../../../consts/routes/routes.navigation";
import { Route } from "../../../../models/common/routes/routes";
import { Link } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";

const Sidebar: React.FC = () => {
    const [open, setOpen] = useState<boolean>(true);
    const handleDrawer = () => setOpen((prev) => !prev);

    return (
        <Box component="nav">
            <Drawer
                variant="permanent"
                open={open}
                PaperProps={{ sx: { background: "#3b49e7", border: "none" } }}
            >
                <DrawerHeader>
                    <IconButton onClick={handleDrawer}>
                        {open ? <CloseIcon sx={{ color: "white" }} /> : <MenuIcon sx={{ color: "white" }} />}
                    </IconButton>
                </DrawerHeader>
                <List sx={{ margin: open ? "0" : "0 auto" }}>
                    {routes.map(({ icon, label, path }: Route) => (
                        <ListItem key={label} disablePadding sx={{ display: "block" }}>
                            <ListItemButton
                                sx={{
                                    minHeight: 48,
                                    justifyContent: open ? "initial" : "center",
                                    px: 2.5,
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: open ? 3 : "auto",
                                        justifyContent: "center",
                                        color: "white",
                                    }}
                                >
                                    {icon}
                                </ListItemIcon>
                                <Link
                                    to={path}
                                    style={{ textDecoration: "none", color: "white" }}
                                    replace
                                >
                                    <ListItemText
                                        primary={label}
                                        sx={{ opacity: open ? 1 : 0 }}
                                    />
                                </Link>
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </Box>
    );
};

export default Sidebar;
