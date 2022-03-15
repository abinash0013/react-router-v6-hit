import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

ReactDOM.render(
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/my-apps" element={<Learn />} />
            <Route path="/learn" element={<Learn />} />
        </Routes>
    </Router>,
    document.getElementById("root")
);

function Home() {
    return (
        <div>
            <h1>Home Route</h1>
        </div>
    );
}

function Learn() {
    return (
        <div>
            <h1>Learn Route</h1>
        </div>
    );
}
reportWebVitals();
