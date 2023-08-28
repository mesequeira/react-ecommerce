import React from "react";
import Stack from "@mui/material/Stack/Stack";
import { ChildrenProps } from "../../../models/props/common.props";

const Content: React.FC<ChildrenProps> = ({ children }) => {
    return (
        <Stack component="main" direction="column" sx={{ flexGrow: 1, p: 3 }}>
            {children}
        </Stack>
    );
};

export default Content;
