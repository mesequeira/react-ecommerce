import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    shape: {
        borderRadius: 0,
    },

    components: {
        MuiListItem: {
            styleOverrides: {
                root: {
                    padding: 0,
                },
            },
        },
        MuiButtonBase: {
            styleOverrides: {
                root: {
                    padding: "3px 3px 3px 0 !important",
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                endIcon: {
                    margin: "0 !important",
                },
                contained: {
                    "&:hover": {
                        boxShadow: "none",
                        transition: "background-color 0.1s ease-in-out",
                        backgroundColor: "#3b57de",
                    },
                    boxShadow: "none",
                    fontSize: "17px",
                    textTransform: "none",
                },
                outlined: {
                    "&:hover": {
                        border: "#808080 solid 1px",
                    },
                    border: "#808080 solid 1px",
                    color: "#808080",
                    textTransform: "none",
                },
                root: {
                    borderRadius: 0,
                    padding: "10px 18px !important",
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    boxShadow: "none",
                    borderBottom: "1px solid rgba(0, 0, 0, 0.10)",
                },
            },
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    backgroundColor: "#fff",
                    border: "1px solid #808080",
                    padding: "0 !important",
                    "& .MuiOutlinedInput-root": {
                        "&:hover fieldset": {
                            borderColor: "#808080",
                        },
                        "&.Mui-focused fieldset": {
                            borderColor: "#808080",
                            padding: "0 !important",
                            margin: "0 -3px -6px -3px !important",
                        },
                    },
                },
            },
        },
        MuiOutlinedInput: {
            styleOverrides: {
                notchedOutline: {
                    outline: "none",
                    border: "none",
                },
            },
        },
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    margin: "0 5px 0 0",
                },
            },
        },
        MuiInputBase: {
            styleOverrides: {
                root: {
                    padding: "0 !important",
                },
            },
        },
        MuiSelect: {
            styleOverrides: {
                outlined: {
                    border: "1px solid #2C2C2C !important",
                    "&:focus": {
                        border: "1px solid #2C2C2C !important",
                    },
                },
            },
        },
        MuiMenuItem: {
            styleOverrides: {
                root: {
                    padding: "5px 15px !important",
                    fontSize: "16px",
                },
            },
        },
    },
    typography: {
        fontFamily: "Roboto", // Agrega Roboto como la fuente predeterminada
    },
});

export default theme;
