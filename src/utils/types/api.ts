import axios, { AxiosPromise } from "axios";
import { loginRespose } from "./utils";

const instance = axios.create({
    baseURL: "https://soal.staging.id"
})

// const username = "support@technopartner.id"
// const password = 1234567

export const Api = {
    userLogin: (username: string | null, password: string | null, grant_type: string | null, client_id: string | null, client_secret: string | null): AxiosPromise<loginRespose> => instance({
        method: "POST",
        url: "/oauth/token",
        data: {
            grant_type,
            client_id,
            client_secret,
            username,
            password,
        },
    }),
    getUser: (token?: string, token_type?: string) => instance({
        method: "GET",
        url: "/api/home",
        data: {
            Authorization: `Bearer ${token}`,
            token_type
        }
    })
}