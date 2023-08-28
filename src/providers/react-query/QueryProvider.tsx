import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ChildrenProps } from "../../models/props/common.props";

const QueryProvider: React.FC<ChildrenProps> = ({ children }) => {
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                cacheTime: 300_000, // 5 minutos en milisegundos
                refetchOnWindowFocus: false, // Deshabilitamos la opción de refetch si cambiamos de ventana
                staleTime: 300_000,
                retry: 0,
            },
        },
    });

    return (
        <QueryClientProvider client={queryClient}>
            {children}
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    );
};

export default QueryProvider;
