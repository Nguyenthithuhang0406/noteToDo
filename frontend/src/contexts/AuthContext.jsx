/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
//quan ly login logout, xac thuc nguoi dung
import { createContext, useReducer } from "react";
import axios from "axios";
import { authReducer } from "../reducers/AuthReducer";
import { apiUrl, LOCAL_STORAGE_TOKEN_NAME } from "./contants";

export const AuthContext = createContext();

//dung de boc tat ca cac route => chuyen vao children
const AuthContextProvider = ({children}) => {
    const {authState,dispatch } = useReducer(authReducer, {
        authLoading: true,
        isAuthenticated: false,
        user: null
    })

    //login
    const loginUser = async userForm => {
        try {
            const response = await axios.post(`${apiUrl}/auth/login`);
            if(response.data.success){
                localStorage.setItem(LOCAL_STORAGE_TOKEN_NAME, response.data.accessToken);
                return response.data;
            }
        } catch (error) {
            if(error.response.data) return error.response.data;
            else return {success: false, message: error.message};
        }
    }
    //context data
    const authContextData = {loginUser};

    //return provider
    return (
        <AuthContext.Provider value={authContextData}> {children} </AuthContext.Provider>
    )
}
export default AuthContextProvider;