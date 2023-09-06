import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import QueryProvider from "./providers/react-query/QueryProvider.tsx";
import App from "./App.tsx";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { ThemeProvider } from "@mui/material";
import "./assets/styles/custom.scss";
import "./assets/styles/global.scss";
import { Toaster } from "react-hot-toast";
import theme from "./assets/styles/theme.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <ThemeProvider theme={theme}>
        <BrowserRouter>
            <QueryProvider>
                <App />
                <Toaster />
            </QueryProvider>
        </BrowserRouter>
    </ThemeProvider>
);
