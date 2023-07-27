import React from "react";
import { Router } from "./router";
import { BrowserRouter as Routes } from "react-router-dom";

function App() {
    return (
        <>
            <Routes>
                <Router />
            </Routes>
        </>
    );
}

export default App;
