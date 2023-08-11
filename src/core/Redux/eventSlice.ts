import {
    Action,
    ThunkAction,
    createSlice,
    PayloadAction,
} from "@reduxjs/toolkit";
import { RootState } from "./store";
import { firestore } from "../firebase";

interface EventState {
    data: Array<any>;
    selectedEvent: any; // Thêm trường selectedEvent
}

const initialState: EventState = {
    data: [],
    selectedEvent: null,
};

export const eventSlice = createSlice({
    name: "events",
    initialState,
    reducers: {
        setData: (state, action) => {
            state.data = action.payload;
        },
        setEvent: (state, action) => {
            state.selectedEvent = action.payload;
        },
    },
});

export const { setData, setEvent } = eventSlice.actions;

export const getEvents =
    (): ThunkAction<void, RootState, null, Action<string>> =>
    async (dispatch) => {
        try {
            const snapshot = await firestore
                .collection("events")
                .orderBy("order", "asc")
                .get();
            const data = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            dispatch(setData(data));
        } catch (error) {
            console.log(error);
        }
    };

export const getEventById =
    (eventId: string): ThunkAction<void, RootState, null, Action<string>> =>
    async (dispatch) => {
        try {
            const doc = await firestore.collection("events").doc(eventId).get();
            if (doc.exists) {
                const eventData = { id: doc.id, ...doc.data() };
                dispatch(setEvent(eventData));
            } else {
                console.log("Event not found.");
            }
        } catch (error) {
            console.log(error);
        }
    };

export const addEvent =
    (data: any): ThunkAction<void, RootState, null, Action<string>> =>
    async (dispatch) => {
        try {
            await firestore.collection("events").add(data);
            dispatch(getEvents());
        } catch (error) {
            console.log(error);
        }
    };

export default eventSlice.reducer;
