
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import axiosApi from "../axiosApi";
import axios from "axios";


export interface Show {
    id:number;
    name:string;
    text:string;
    img:string
}

interface ShowState {
    error:boolean;
    loading:boolean
    shows:Show[];
    show?:Show | [];
}

const initialState: ShowState =  {
    error:false,
    loading:false,
    shows:[],
    show:[],
}

export const FetchShows = createAsyncThunk<Show[],string>(
    "show/FetchShow",
    async (text:string) => {
        console.log(text)
        const response = await axiosApi.get<Show[]>(`/${text}`);
        const shows = Object.keys(response.data).map(id => ({
            ...response.data[id],
            id,
        }))
        console.log(shows)
        return shows ?? [];
    }
);

export const FetchOneShow = createAsyncThunk<Show,string>(
    "show/FetchOneShow",
    async (id:string) => {
        const response = await axios.get<Show | null>(`https://api.tvmaze.com/shows/${id}`);
        console.log(response.data);
        return response.data ?? [];
    }
    );

const ShowSlice = createSlice<ShowState>({
    name:'show',
    initialState,
    reducers:{},

    extraReducers: (builder) => {
        builder.addCase(FetchShows.pending, (state) => {
            state.loading = true;
            state.error = false
        });
        builder.addCase(FetchShows.fulfilled, (state,action:PayloadAction<Show[]>) => {
            state.loading = false;
            state.shows = action.payload;
        });
        builder.addCase(FetchShows.rejected, (state) => {
            state.loading = false;
            state.error = true
        });
        builder.addCase(FetchOneShow.pending,(state)=>{
            state.loading = true;
            state.error = false
        });
        builder.addCase(FetchOneShow.fulfilled,(state,action:PayloadAction<Show>)=>{
            state.loading = false;
            state.show = action.payload
        });
        builder.addCase(FetchOneShow.rejected,(state)=>{
            state.loading = false;
            state.error = true
        });
    },

})


export const ShowSliceReducer = ShowSlice.reducer;
export const {} = ShowSlice.actions