import api from "../_lib/axios";

/**
 * Fetch site settings
 * @returns object | null
 */
export async function fetchSiteSettings() {
    try {
        const response = await api.get("/options");
        return response.data;
    } 
    catch (error) {
        console.log( error )
        return null;
    }
}