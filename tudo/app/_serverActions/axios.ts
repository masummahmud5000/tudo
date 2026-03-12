import axios from "axios";

export const api = axios.create({
    baseURL: proccess.env.NEXT_PUBLIC_API_URL;
    //baseURL: 'https://render-6-pg2u.onrender.com/',
    // baseURL:'http://127.0.0.1:8000/'
});
