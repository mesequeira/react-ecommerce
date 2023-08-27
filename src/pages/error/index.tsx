import React from "react";
import { useErrorsStore } from "../../store/errors/errors.store";

const ServerError: React.FC = () => {
    const error = useErrorsStore((state) => state.error);
    return <div>{error?.message}</div>;
};

export default ServerError;
