import { configureStore } from "@reduxjs/toolkit";
import BloodTestSlice from "../../laboratory/data/BloodTestSlice";

export const store = configureStore({
  reducer: { bloodTest: BloodTestSlice }
});

export type AppDispatch = typeof store.dispatch;
export type AppRootState = ReturnType<typeof store.getState>;
