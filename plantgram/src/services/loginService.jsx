import axios from "axios";
export const loginService = (username,password) =>{
    return axios.post("api/auth/login",{
        username: username,
        password: password,
    })
}