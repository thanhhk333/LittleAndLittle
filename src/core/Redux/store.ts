import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";

import { bookingSlice } from "./bookingSlice";
import { contactSlice } from "./contactSlice";
import { eventSlice } from "./eventSlice";

const store = configureStore({
    reducer: {
        booking: bookingSlice.reducer,
        contacts: contactSlice.reducer,
        events: eventSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
export default store;
