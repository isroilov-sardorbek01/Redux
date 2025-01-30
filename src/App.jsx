import React from "react";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Redux1 from "./pages/Redux1";
import { ToastContainer } from "react-toastify";

function App() {
    return (
        <div>
            <Header></Header>
            <Routes>
                <Route index element={<Redux1></Redux1>}></Route>
            </Routes>
            <ToastContainer />
        </div>
    );
}

export default App;
