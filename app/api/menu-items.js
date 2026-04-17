import api from "../_lib/axios";

/**
 * Fetch navigation menu list.
 * @returns object | null
 */
export async function fetchMenu( slug ) {
    try {
        const response = await api.get("/menu");
        return response?.data?.data ?? [];
    } 
    catch (error) {
        console.log( error )
        return null;
    }
}