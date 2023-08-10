import React from "react";
import { Route, Routes } from "react-router-dom";
import Events from "./Pages/Events/Events";
import EventDetail from "./Pages/Events/EventDetail";
import Contact from "./Pages/Contact/Contact";
import PaySuccess from "./Pages/Pay/PaySuccess";
import Home from "./Pages/Home/Home";
import Pay from "./Pages/Pay/Pay";

export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/events/event-detail/:id" element={<EventDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/pay" element={<Pay />} />
            <Route path="/pay_success" element={<PaySuccess />} />
        </Routes>
    );
};

export default Router;
