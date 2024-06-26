import {createSlice} from '@reduxjs/toolkit'
import { loginUsers, registerUsers } from './authAction'

type initialStateProps = {
    isLoading: boolean;
    isLoggedIn: boolean
    content: {
      message: string;
      user: {
        firstName:string;
        lastName:string;
        email: string;
        name: string;
        role: string;
        id: number;
      };
      
    } 
    error: Object | null;
  };

  const initialState: initialStateProps = {
    isLoading: false,
    error: null,
    isLoggedIn: false,
    content: {
      message: '',
      user: {
        email: '',
        name: '',
        role: '',
        id: 0,
        firstName:'',
        lastName:''
      },
    
    },
  };

export const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(loginUsers.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(loginUsers.fulfilled, (state, action) => {
            state.isLoading = false
            state.content = action.payload
            console.log("action.payload",action.payload)

        })
        builder.addCase(loginUsers.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error
        })
        builder.addCase(registerUsers.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(registerUsers.fulfilled, (state, action) => {
            state.isLoading = false
        })
        builder.addCase(registerUsers.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error
        })
    }
})

export default authSlice.reducer