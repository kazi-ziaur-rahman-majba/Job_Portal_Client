const apiUrl = import.meta.env.VITE_API_BASE_URL;

async function apiRequest(url, options) {
    try {
        const response = await fetch(`${apiUrl}${url}`, options);

        if (!response.ok) {
            console.error(`Error: ${response.status} - ${response.statusText}`);
            return { error: true, message: `Failed: ${response.statusText}` };
        }

        return await response.json();
    } catch (error) {
        console.error("Fetch error: ", error);
        return { error: true, message: "An error occurred while making the request." };
    }
}

export async function getData({ url, token }) {
    const headers = { "Content-Type": "application/json" };
    if (token) headers["Authorization"] = `Bearer ${token}`;

    return apiRequest(url, { headers, method: "GET", cache: "no-cache" });
}

export async function postData({ url, token, body }) {
    const headers = { "Content-Type": "application/json" };
    if (token) headers["Authorization"] = `Bearer ${token}`;

    return apiRequest(url, { headers, method: "POST", body: JSON.stringify(body) });
}

export async function patchData({ url, token, body }) {
    const headers = { "Content-Type": "application/json" };
    if (token) headers["Authorization"] = `Bearer ${token}`;

    return apiRequest(url, { headers, method: "PATCH", body: JSON.stringify(body) });
}

export async function deleteData({ url, token }) {
    const headers = { "Content-Type": "application/json" };
    if (token) headers["Authorization"] = `Bearer ${token}`;

    return apiRequest(url, { headers, method: "DELETE" });
}

export async function postFormData({ url, token, body }) {
    const headers = {};
    if (token) headers["Authorization"] = `Bearer ${token}`;

    return apiRequest(url, { headers, method: "POST", body });
}

export async function patchFormData({ url, token, body }) {
    const headers = {};
    if (token) headers["Authorization"] = `Bearer ${token}`;

    return apiRequest(url, { headers, method: "PATCH", body });
}
