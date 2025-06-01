import { configureStore } from "@reduxjs/toolkit";
import languageReducer from "./languageSlice";
import { api } from "./api";

export const store = configureStore({
    reducer: {
        language: languageReducer,
        [api.reducerPath]: api.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
});
