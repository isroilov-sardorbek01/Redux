import React from "react";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Redux1 from "./pages/Redux1";
import { ToastContainer } from "react-toastify";
import Crud from "./pages/Crud";

function App() {
    return (
        <div>
            <Header></Header>
            <Routes>
                <Route index element={<Redux1></Redux1>}></Route>
                <Route path="/ms2" element={<Crud></Crud>}></Route>
            </Routes>
            <ToastContainer />
        </div>
    );
}

export default App;
