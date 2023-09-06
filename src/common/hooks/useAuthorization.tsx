import { useEffect, useState } from "react";
import { STORAGE_KEY } from "../../consts/storage/storage.keys";

const useAuthorization = () => {
    const [isAuthorized, setisAuthorized] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const checkToken = async (): Promise<void> => {
        const token = localStorage.getItem(STORAGE_KEY.TOKEN);

        if (token) {
            setisAuthorized(true);
        }
    };

    useEffect(() => {
        checkToken().then(() => setIsLoading(false));
    }, []);

    return { isAuthorized, isLoading };
};

export default useAuthorization;
