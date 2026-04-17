import api from "../_lib/axios";

/**
 * Fetch page data
 * @param { string } slug 
 * @returns object | null
 */
export async function getPage( slug ) {
    try {
        const response = await api.get("pages/" + slug);
        return response.data;
    } 
    catch (error) {
        console.log( {error} )
        return null;
    }
}