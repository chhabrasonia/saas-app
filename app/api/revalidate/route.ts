import { revalidateTag } from "next/cache";

export async function POST(request: Request) {
    try {
        const secret = request.headers.get("x-api-secret");

        if (secret !== process.env.NEXT_PUBLIC_BACKEND_API_SECRET) {
            return new Response("Unauthorized", { status: 401 });
        }

        const { tag } = await request.json();

        if (!tag || typeof tag !== "string") {
            return new Response("Missing or invalid tag", { status: 400 });
        }

        revalidateTag(tag, "default");

        return new Response(`Revalidated tag: ${tag}`, { status: 200 });
    } 
    catch (error) {
        return new Response("Invalid request body", { status: 400 });
    }
}
