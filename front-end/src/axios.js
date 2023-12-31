import axios from "axios";
import store from "./store";

axios.defaults.withCredentials = true;

const axiosClient = axios.create({
    baseURL: `${import.meta.env.VITE_BASE_API_URL}`
});

axiosClient.interceptors.request.use(config => {
    config.headers.Authorization = `Bearer ${store.state.user.token}`;
    config.headers.Accept='application/json';
    return config
});

export default axiosClient;