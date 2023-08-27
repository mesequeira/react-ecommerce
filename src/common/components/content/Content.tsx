import React from "react";
import Stack from "@mui/material/Stack/Stack";
import { DrawerHeader } from "../layout/sidebar/Drawer";
import { ChildrenProps } from "../../../models/props/children.props";

const Content: React.FC<ChildrenProps> = ({ children }) => {
    return (
        <Stack component="main" sx={{ flexGrow: 1, p: 3 }}>
            <DrawerHeader />
            {children}
        </Stack>
    );
};

export default Content;
