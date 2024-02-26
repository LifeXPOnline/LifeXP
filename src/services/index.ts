//This file can be changed into a more modular structure when endpoints are known
import axios from "axios";
const backendUrl = "http://localhost:5000";

export interface RegisterData {
    fname: string;
    lname: string;
    pw: string;
    email: string;
    username: string
}

export type LoginData = Omit<RegisterData, "fname" | "lname" | "email">

const login = async (credentials: LoginData) => {
    const data = await axios.post(backendUrl, credentials);
    return data.data;
}

const register = async (credentials: RegisterData) => {
    const data = await axios.post(backendUrl, credentials);
}

export default {
    login, register
}

