import { useState, useEffect, createContext, useMemo } from "react";
import {fetchApiData} from "../../utils/Api"

const DataContext = createContext();

export const DataProvider = ({children}) => {
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadData = async () => {
            try {
                setLoading(true);
                const data = await fetchApiData();
                setProduct(data)
            } catch (error) {
                setError(error.message)
            } finally {
                setLoading(false)
            }
        }
        loadData();
    }, [])

    const values = useMemo(()=> ({
      product, loading, error
    }),[product, loading, error]);

    return (
        <DataContext.Provider value={values}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext;