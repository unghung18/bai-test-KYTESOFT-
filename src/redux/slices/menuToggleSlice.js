import { createSlice } from "@reduxjs/toolkit";

const menuToggleSlice = createSlice({
    name: "cart",
    initialState: {
        menuToggleKey: false
    },

    reducers: {
        toggle(state, actions) {
            state.menuToggleKey = actions.payload;
        }
    },
});

export const menuToggleActions = menuToggleSlice.actions;
export default menuToggleSlice;
