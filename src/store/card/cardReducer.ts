import {createSlice} from '@reduxjs/toolkit';
import {fetchCardData} from "./thunk.ts";

export interface CardData {
    id: number;
    name: string;
    ingredients: string;
    time: string;
    image: string;
}

interface CardState {
    data: CardData[];
    loading: boolean;
    error: string | null;
}

const initialState: CardState = {
    data: [],
    loading: false,
    error: null,
};


const cardSlice = createSlice({
    name: 'card',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCardData.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchCardData.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchCardData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch';
            });
    },
});

export const cardReducer = cardSlice.reducer;