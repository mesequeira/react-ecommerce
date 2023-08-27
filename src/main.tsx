import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import QueryProvider from "./providers/react-query/QueryProvider.tsx";
import App from "./App.tsx";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <BrowserRouter>
        <QueryProvider>
            <App />
        </QueryProvider>
    </BrowserRouter>
);
