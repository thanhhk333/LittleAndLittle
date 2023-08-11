import { Action, ThunkAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { firestore } from "../firebase";

export const bookingSlice = createSlice({
    name: "booking",
    initialState: { data: [] },
    reducers: {
        setData: (state, action) => {
            state.data = action.payload;
        },
    },
});
export const { setData } = bookingSlice.actions;
export const getBooking =
    (): ThunkAction<void, RootState, null, Action<string>> =>
    async (dispatch) => {
        try {
            const snapshot = await firestore.collection("booking").get();
            const data = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            dispatch(setData(data));
        } catch (error) {
            console.log(error);
        }
    };
export const addBooking =
    (data: any): ThunkAction<void, RootState, null, Action<string>> =>
    async (dispatch) => {
        try {
            await firestore.collection("booking").add(data);
            dispatch(getBooking());
        } catch (error) {
            console.log(error);
        }
    };
