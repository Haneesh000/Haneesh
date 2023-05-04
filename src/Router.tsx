import React from "react";
import {Route, Routes, BrowserRouter} from "react-router-dom";

const Home = React.lazy(() => import("./pages/Home"));
const Contact = React.lazy(() => import("./pages/Contact"));

function AppRouter(): JSX.Element {
    return (
        <React.Suspense>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </BrowserRouter>
        </React.Suspense>
    );
}

export default AppRouter;
