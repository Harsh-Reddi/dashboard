import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/api"
import {jwtDecode} from 'jwt-decode'


export const get_seller_request = createAsyncThunk(
    'seller/get_seller_request',
    async ({parPage, page, searchValue},{rejectWithValue,fulfillWithValue}) => {
        try{
            
            const { data } = await api.get(`/request-seller-get?page=${page}&&searchValue=${searchValue}&&parPage=${parPage}`, { withCredentials: true });
            // localStorage.setItem('accessToken',data.token)
            console.log(data)
            return fulfillWithValue(data)
        } catch (error) {
            // console.log(error.response.data)
            return rejectWithValue(error.response.data)
        }
    }
)
//end Method

export const get_seller_details = createAsyncThunk(
    'seller/get_seller_details',
    async (sellerId,{rejectWithValue,fulfillWithValue}) => {
        try{
            
            const { data } = await api.get(`/get-seller/${sellerId}`, { withCredentials: true });
            // localStorage.setItem('accessToken',data.token)
            console.log(data)
            return fulfillWithValue(data)
        } catch (error) {
            // console.log(error.response.data)
            return rejectWithValue(error.response.data)
        }
    }
)
//end Method

export const seller_status_update = createAsyncThunk(
    'seller/seller_status_update',
    async (info,{rejectWithValue,fulfillWithValue}) => {
        try{
            
            const { data } = await api.post('/seller-status-update', info, { withCredentials: true });
            // localStorage.setItem('accessToken',data.token)
            console.log(data)
            return fulfillWithValue(data)
        } catch (error) {
            // console.log(error.response.data)
            return rejectWithValue(error.response.data)
        }
    }
)
//end Method

export const  sellerReducer = createSlice({
    name: 'seller',
    initialState:{
        successMessage: '',
        errorMessage: '',
        loader: false,
        sellers: [],
        totalSeller: 0
    },
    reducers: {
        messageClear: (state,_) => {
            state.errorMessage = ''
        }
    },
    extraReducers: (builder) => {
        builder
         .addCase(get_seller_request.fulfilled, (state,{payload}) => {
            state.totalSeller = payload.totalSeller
            state.sellers = payload.sellers
         })
         .addCase(get_seller_details.fulfilled, (state,{payload}) => {
            state.seller = payload.seller
         })
         .addCase(seller_status_update.fulfilled, (state,{payload}) => {
            state.seller = payload.seller
            state.successMessage = payload.message
         })
    }
})

export const {messageClear} =  sellerReducer.actions

export default sellerReducer.reducer