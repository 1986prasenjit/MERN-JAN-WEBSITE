import axios from "axios";

const api = axios.create({
    baseURL: "https://dummyjson.com",
    timeout: 3000
});

export async function fetchApiData(){
    try {
        const response = await api.get("/products", {
            params: {
                limit: 0
            }
        });
        return response.data.products;
    } catch (error) {
        console.log(`Error while fetching the data: ${error}`);
        throw error;
    }
}
