import { Action, ThunkAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { firestore } from "../firebase";

export const contactSlice = createSlice({
    name: "contacts",
    initialState: { data: [] },
    reducers: {
        setData: (state, action) => {
            state.data = action.payload;
        },
    },
});

export const { setData } = contactSlice.actions;

export const getContact =
    (): ThunkAction<void, RootState, null, Action<string>> =>
    async (dispatch) => {
        try {
            const snapshot = await firestore.collection("contacts").get();
            const data = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            dispatch(setData(data));
        } catch (error) {
            console.log(error);
        }
    };

export const addContact =
    (data: any): ThunkAction<void, RootState, null, Action<string>> =>
    async (dispatch) => {
        try {
            await firestore.collection("contacts").add(data);
            dispatch(getContact());
        } catch (error) {
            console.log(error);
        }
    };
