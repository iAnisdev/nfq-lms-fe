import { InitialStore } from "@/store/types";
import {  createSlice } from "@reduxjs/toolkit";

type User =  {

}

interface AuthInitialStore extends InitialStore {
    isLoggedIn: boolean
    isSocketConnected: boolean
    token: string,
    user: User
}

const initialState: AuthInitialStore = {
    isLoggedIn: false,
    isSocketConnected: false,
    token: '',
    user: {}
}

const AuthSlice = createSlice({
    name: 'auth',
    initialState,
    reducers:{
        logout: ()=>{
            return initialState
        },
        setUser: (state , {payload}) => {
            state.user = payload
        },
        toggleSocketStatus: (state , {payload}) => {
            state.isSocketConnected = payload
        }
     }
})

export default AuthSlice.reducer
export const AuthActions = AuthSlice.actions