import createTheme from "@mui/material/styles/createTheme";

export const theme = createTheme({
    components: {
        MuiList: {
            styleOverrides: {
                root: {
                    position: "initial",
                    margin: "0 auto",
                },
            },
        },
    },
});
