import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth";
import { journalReducer } from "./journal";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    journal: journalReducer,
  },
});