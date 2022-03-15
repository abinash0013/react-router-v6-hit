import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
    Link,
    Outlet,
    useParams,
    NavLink,
} from "react-router-dom";

ReactDOM.render(
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/my-apps" element={<Navigate replace to="/learn" />} />
            <Route path="/learn" element={<Learn />}>
                <Route path="courses" element={<Courses />}>
                    <Route path=":courseid" element={<CourseId />} />
                </Route>
                <Route path="bundles" element={<Bundles />} />
            </Route>
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
            <Link to="/learn/courses" className="text-white btn btn-info m-2">
                Courses
            </Link>
            <Link
                to="/learn/bundles"
                className="text-white btn btn-success m-2"
            >
                Bundle
            </Link>
            <Outlet />
        </div>
    );
}

function Courses() {
    const courseList = ["React", "Angular", "Vue Js", "Node Js"];
    const randomCourseName =
        courseList[Math.floor(Math.random() * courseList.length)];
    return (
        <div>
            <h1>Course List</h1>
            <h1>Course Card</h1>
            <p>More Test</p>
            <NavLink
                style={({ isActive }) => {
                    return {
                        backgroundColor: isActive ? "Pink" : "Yellow",
                    };
                }}
                to={`/learn/courses/${randomCourseName}`}
            >
                {randomCourseName}
            </NavLink>
            <NavLink to={`/learn/courses/test`}>test</NavLink>
            <Outlet />
        </div>
    );
}

function Bundles() {
    return (
        <div>
            <h1>Bundle List</h1>
            <h1>Bundle Card</h1>
        </div>
    );
}

function CourseId() {
    const { courseid } = useParams();
    return (
        <div>
            <h1>URL Params is: {courseid}</h1>
        </div>
    );
}

reportWebVitals();
