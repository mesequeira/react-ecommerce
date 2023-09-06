import React from "react";
import Box from "@mui/material/Box/Box";
import { type LogoProps } from "../../../../models/props/layout/appBar/app.bar.props";

const Logo: React.FC<LogoProps> = ({ path, alt, settings }) => {
    return (
        <Box component="img" loading="lazy" src={path} alt={alt} sx={settings} />
    );
};

export default Logo;
