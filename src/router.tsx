import React from "react";
import { Route, Routes } from "react-router-dom";
import Events from "./Pages/Events/Events";
import EventDetail from "./Pages/Events/EventDetail";

export const Router = () => {
    return (
        <Routes>
            <Route path="/events/event-detail" element={<EventDetail />} />
            <Route path="/events" element={<Events />} />
        </Routes>
    );
};

export default Router;
