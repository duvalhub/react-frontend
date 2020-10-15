import axios from 'axios'


interface Request {
    method: "get" | "put" | "post" | "delete",
    url: string
    payload?: any,
}

interface GetRequest {
    url: string
}
const request = async (request: {
    method: "GET" | "PUT" | "POST" | "DELETE",
    url: string
    payload?: any,
}) => {
    const {
        method, url, payload
    } = request
    const headers = request.method === 'GET'
        ? {}
        : {
            'Content-Type': 'application/json',
        };

    const config = { method, url, headers, data: payload };

    return axios
        .request(config)
        .then(response => response.data);
}

export default {
    get: async ({
        url
    }: GetRequest) => {
        return await request({ method: "GET", url: url })
    },
}