import { MenuItem } from "@mui/material";

const categoryTypeMap = (option: any) => {
    return (
        <MenuItem
            key={option.id}
            value={option.id}
            style={{
                textOverflow: "ellipsis",
                overflow: "hidden",
            }}
        >
            {option.type}
        </MenuItem>
    );
};

export default categoryTypeMap;
