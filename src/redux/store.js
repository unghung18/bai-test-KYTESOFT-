import { configureStore } from "@reduxjs/toolkit";
import menuToggleSlice from "./slices/menuToggleSlice";
export default configureStore({
    reducer: {
        menuToggle: menuToggleSlice.reducer
    }
})