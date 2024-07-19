
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import axiosApi from "../axiosApi";

export interface Show {
    id:string;
    name:string;
    text:string;
}

interface ShowState {
    error:boolean;
    loading:boolean
    shows:Show[];
}

const initialState: ShowState =  {
    error:false,
    loading:false,
    shows:[],
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
    },

})


export const ShowSliceReducer = ShowSlice.reducer;
export const {} = ShowSlice.actions