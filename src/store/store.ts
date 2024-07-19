import {configureStore} from "@reduxjs/toolkit";
import {ShowSliceReducer} from "./slice";



export const store = configureStore({

    reducer: {
        show:ShowSliceReducer,
    }

});



export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

