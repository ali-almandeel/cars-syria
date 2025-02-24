import axios from "axios";
import { BASE_URL } from "../../config/env";
import { getAuthToken, removeAuthToken } from "../../utils/token.utils";

const axiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: 150000000,
    headers: {
        "Content-Type": "application/json",
    },
});

axiosInstance.interceptors.request.use(
    (config) => {
        const token = getAuthToken();
        //@ts-ignore
        config.headers = {
            ...config.headers,
            Authorization: `Bearer ${token ? token : ""}`,
        };
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// handle error here.
axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        if (
            (error.response && error.response.status === 401) ||
            (error.response && error.response.status === 403)
        ) {
            removeAuthToken();
            window.location.reload();
        }
        return Promise.reject(error);
    }
);
export default axiosInstance;
