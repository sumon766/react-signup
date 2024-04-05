import { createSlice } from "@reduxjs/toolkit";
import { signUp } from "../actions/userActions";

const initialState = {
    loading: false,
    error: null
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(signUp.pending, (state) => {
            state.loading = true;
            state.error = null;
        });

        builder.addCase(signUp.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
        });

        builder.addCase(signUp.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
    }
});

export default userSlice.reducer;
