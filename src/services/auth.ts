import axios, {AxiosResponse} from "axios";
const backendUrl = "/api/v1/auth";

export interface RegisterData {
    firstName: string;
    lastName: string;
    password: string;
    email: string;
}

export type LoginData = Omit<RegisterData, "firstName" | "lastName">

export const login = async (credentials: LoginData): Promise<AxiosResponse> => {
    const data = await axios.post(`${backendUrl}/login`, credentials);
    return data.data;
}

export const register = async (credentials: RegisterData): Promise<AxiosResponse> => {
    const data = await axios.post(`${backendUrl}/register`, credentials);
    return data.data;
}


