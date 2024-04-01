import { useEffect, useState } from "react";
import apiRequest from "./apiService";

const userApiService = () => {
    const [data, setData] = useState<any>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const fetchedData = await apiRequest('');

                setData(fetchedData);
            } catch (err) {
                console.error('Erro ao buscar dados:', err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    return { data, isLoading };
};

export default userApiService;