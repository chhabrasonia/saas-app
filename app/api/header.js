import api from "../_lib/axios";

/**
 * Fetch navigation menu list.
 * @returns object | null
 */
export async function fetchPrimaryHeader( slug ) {
    try {
        const response = await api.get("/header");
        return response.data;
    } 
    catch (error) {
        console.log( error )
        return null;
    }
}